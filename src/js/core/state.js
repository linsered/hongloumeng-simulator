var HLM = window.HLM || {};

HLM.State = (function() {
    var _state = {};
    var _listeners = {};
    var _history = [];

    var _defaultState = {
        screen: 'loading',
        character: null,
        chapter: 0,
        currentNode: null,
        timeOfDay: '卯时',
        season: '春',
        day: 1,
        month: 1,
        year: 1,
        attributes: {
            wisdom: 5,
            charm: 5,
            talent: 5,
            emotion: 5,
            fortune: 5,
            health: 5
        },
        relationships: {},
        inventory: [],
        flags: {},
        visitedNodes: [],
        completedEvents: [],
        unlockedAchievements: [],
        storyProgress: {},
        eventHistory: [],
        dialogLog: [],
        settings: {
            bgmVolume: 70,
            sfxVolume: 80,
            textSpeed: 3,
            autoSpeed: 3,
            fontSize: 'medium',
            fullscreen: false
        },
        statistics: {
            totalPlayTime: 0,
            choicesMade: 0,
            eventsTriggered: 0,
            scenesVisited: 0,
            achievementsUnlocked: 0,
            savesCount: 0
        }
    };

    function init() {
        _state = JSON.parse(JSON.stringify(_defaultState));
        _listeners = {};
        _history = [];
    }

    function get(path) {
        if (!path) return JSON.parse(JSON.stringify(_state));
        var parts = path.split('.');
        var current = _state;
        for (var i = 0; i < parts.length; i++) {
            if (current[parts[i]] === undefined) return undefined;
            current = current[parts[i]];
        }
        return JSON.parse(JSON.stringify(current));
    }

    function set(path, value) {
        var parts = path.split('.');
        var current = _state;
        for (var i = 0; i < parts.length - 1; i++) {
            if (current[parts[i]] === undefined) {
                current[parts[i]] = {};
            }
            current = current[parts[i]];
        }
        var oldValue = current[parts[parts.length - 1]];
        current[parts[parts.length - 1]] = value;

        _history.push({
            path: path,
            oldValue: oldValue,
            newValue: value,
            timestamp: Date.now()
        });

        if (_history.length > 1000) {
            _history = _history.slice(-500);
        }

        _notify(path, value, oldValue);
    }

    function update(path, updater) {
        var current = get(path);
        if (typeof updater === 'function') {
            var newValue = updater(current);
            set(path, newValue);
        }
    }

    function increment(path, amount) {
        amount = amount || 1;
        update(path, function(val) {
            return (val || 0) + amount;
        });
    }

    function toggle(path) {
        update(path, function(val) {
            return !val;
        });
    }

    function on(path, callback) {
        if (!_listeners[path]) {
            _listeners[path] = [];
        }
        _listeners[path].push(callback);
        return function() {
            var idx = _listeners[path].indexOf(callback);
            if (idx > -1) {
                _listeners[path].splice(idx, 1);
            }
        };
    }

    function _notify(path, newValue, oldValue) {
        var parts = path.split('.');
        for (var i = parts.length; i > 0; i--) {
            var listenPath = parts.slice(0, i).join('.');
            if (_listeners[listenPath]) {
                _listeners[listenPath].forEach(function(cb) {
                    try {
                        cb(newValue, oldValue, path);
                    } catch(e) {
                        console.error('State listener error:', e);
                    }
                });
            }
        }
        if (_listeners['*']) {
            _listeners['*'].forEach(function(cb) {
                try {
                    cb(newValue, oldValue, path);
                } catch(e) {
                    console.error('State listener error:', e);
                }
            });
        }
    }

    function exportState() {
        return JSON.parse(JSON.stringify(_state));
    }

    function importState(stateObj) {
        _state = JSON.parse(JSON.stringify(stateObj));
        _notify('*', null, null);
    }

    function reset() {
        init();
        _notify('*', null, null);
    }

    function checkCondition(condition) {
        if (!condition) return true;
        if (typeof condition === 'function') {
            try { return condition(_state); } catch(e) { return false; }
        }
        for (var key in condition) {
            if (!condition.hasOwnProperty(key)) continue;
            var condVal = condition[key];
            var stateVal = get(key);

            if (typeof condVal === 'object' && condVal !== null) {
            if (condVal.min !== undefined && (stateVal === undefined || stateVal < condVal.min)) return false;
            if (condVal.max !== undefined && (stateVal === undefined || stateVal > condVal.max)) return false;
            if (condVal.eq !== undefined && stateVal !== condVal.eq) return false;
            if (condVal.neq !== undefined && stateVal === condVal.neq) return false;
            if (condVal.in !== undefined && condVal.in.indexOf(stateVal) === -1) return false;
        } else {
            if (stateVal !== condVal) return false;
        }
        }
        return true;
    }

    function applyEffects(effects) {
        if (!effects) return;
        var changes = [];
        for (var key in effects) {
            if (!effects.hasOwnProperty(key)) continue;
            var effect = effects[key];
            var currentVal = get(key);

            if (typeof effect === 'object' && effect !== null) {
                if (effect.add !== undefined) {
                    var newVal = (currentVal || 0) + effect.add;
                    set(key, newVal);
                    changes.push({ key: key, change: effect.add, oldVal: currentVal || 0, newVal: newVal });
                } else if (effect.set !== undefined) {
                    set(key, effect.set);
                    changes.push({ key: key, change: effect.set - (currentVal || 0), oldVal: currentVal || 0, newVal: effect.set });
                } else if (effect.toggle !== undefined) {
                    set(key, !currentVal);
                }
            } else {
                set(key, effect);
            }
        }
        _notifyEffects(changes);
    }

    var _effectListeners = [];

    function onEffectChange(callback) {
        _effectListeners.push(callback);
        return function() {
            var idx = _effectListeners.indexOf(callback);
            if (idx > -1) _effectListeners.splice(idx, 1);
        };
    }

    function _notifyEffects(changes) {
        if (!changes || changes.length === 0) return;
        for (var i = 0; i < _effectListeners.length; i++) {
            try { _effectListeners[i](changes); } catch(e) {}
        }
    }

    return {
        init: init,
        get: get,
        set: set,
        update: update,
        increment: increment,
        toggle: toggle,
        on: on,
        exportState: exportState,
        importState: importState,
        reset: reset,
        checkCondition: checkCondition,
        applyEffects: applyEffects,
        onEffectChange: onEffectChange
    };
})();
