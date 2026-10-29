var HLM = window.HLM || {};

HLM.EventSystem = (function() {
    var _triggeredEventIds = [];

    function init() {
        _triggeredEventIds = [];
    }

    function checkAndTrigger() {
        var availableEvents = _getAvailableEvents();
        if (availableEvents.length === 0) return;

        var totalWeight = 0;
        availableEvents.forEach(function(evt) {
            totalWeight += evt.probability;
        });

        var roll = Math.random() * totalWeight;
        var cumulative = 0;
        for (var i = 0; i < availableEvents.length; i++) {
            cumulative += availableEvents[i].probability;
            if (roll <= cumulative) {
                _triggerEvent(availableEvents[i]);
                return;
            }
        }
        if (availableEvents.length > 0) {
            _triggerEvent(availableEvents[0]);
        }
    }

    function _getAvailableEvents() {
        var currentChar = HLM.State.get('character');
        var completedEvents = HLM.State.get('completedEvents') || [];

        return HLM.EventData.filter(function(evt) {
            if (completedEvents.indexOf(evt.id) !== -1) {
                return false;
            }

            if (evt.character !== undefined && evt.character !== '' && evt.character !== null) {
                if (typeof evt.character === 'string') {
                    if (evt.character !== currentChar) return false;
                } else if (Array.isArray(evt.character)) {
                    if (evt.character.indexOf(currentChar) === -1) return false;
                }
            }

            if (!_checkConditions(evt.conditions)) {
                return false;
            }

            return true;
        });
    }

    function _checkConditions(conditions) {
        if (!conditions) return true;

        for (var key in conditions) {
            if (!conditions.hasOwnProperty(key)) continue;

            var condVal = conditions[key];
            var stateVal = HLM.State.get(key);

            if (typeof condVal === 'object' && condVal !== null) {
                if (condVal.min !== undefined && (stateVal === undefined || stateVal < condVal.min)) return false;
                if (condVal.max !== undefined && (stateVal === undefined || stateVal > condVal.max)) return false;
                if (condVal.eq !== undefined && stateVal !== condVal.eq) return false;
            } else {
                if (stateVal !== condVal) return false;
            }
        }
        return true;
    }

    function _triggerEvent(evt) {
        _triggeredEventIds.push(evt.id);

        var completedEvents = HLM.State.get('completedEvents') || [];
        completedEvents.push(evt.id);
        HLM.State.set('completedEvents', completedEvents);

        HLM.Engine.showEventPopup(evt);
    }

    function forceTrigger(eventId) {
        var evt = null;
        for (var i = 0; i < HLM.EventData.length; i++) {
            if (HLM.EventData[i].id === eventId) {
                evt = HLM.EventData[i];
                break;
            }
        }
        if (evt) {
            _triggerEvent(evt);
        }
    }

    function getEventsByCharacter(charId) {
        return HLM.EventData.filter(function(evt) {
            return !evt.character || evt.character === charId || evt.character.indexOf(charId) !== -1;
        });
    }

    function getTriggeredCount() {
        return _triggeredEventIds.length;
    }

    function getAvailableCount() {
        return _getAvailableEvents().length;
    }

    return {
        init: init,
        checkAndTrigger: checkAndTrigger,
        forceTrigger: forceTrigger,
        getEventsByCharacter: getEventsByCharacter,
        getTriggeredCount: getTriggeredCount,
        getAvailableCount: getAvailableCount
    };
})();
