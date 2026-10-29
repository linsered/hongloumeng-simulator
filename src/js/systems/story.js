var HLM = window.HLM || {};

HLM.StorySystem = (function() {
    var _currentNode = null;
    var _storyHistory = [];
    var _isAutoPlaying = false;
    var _autoPlayTimer = null;
    var _nodesSinceLastEvent = 0;
    var _EVENT_INTERVAL_MIN = 2;
    var _EVENT_INTERVAL_MAX = 4;
    var _nextEventAt = 3;

    function init() {
        _storyHistory = [];
        _currentNode = null;
        _isAutoPlaying = false;
        _autoPlayTimer = null;
        _nodesSinceLastEvent = 0;
        _nextEventAt = _EVENT_INTERVAL_MIN + Math.floor(Math.random() * (_EVENT_INTERVAL_MAX - _EVENT_INTERVAL_MIN + 1));

        HLM.State.onEffectChange(function(changes) {
            if (!changes || changes.length === 0) return;
            for (var i = 0; i < changes.length; i++) {
                var c = changes[i];
                var attrKey = c.key.replace('attributes.', '').replace('relationships.', '');
                HLM.Engine.showAttributeNotification(attrKey, c.change);
            }
            setTimeout(function() { HLM.Engine.updateAttributeDisplay(); }, 100);
        });
    }

    function startStory(characterId) {
        var ch = HLM.CharacterData[characterId];
        if (!ch) return;
        var startNode = ch.startNode;
        if (!startNode || !HLM.StoryData[startNode]) return;
        _storyHistory = [];
        _nodesSinceLastEvent = 0;
        _nextEventAt = _EVENT_INTERVAL_MIN + Math.floor(Math.random() * (_EVENT_INTERVAL_MAX - _EVENT_INTERVAL_MIN + 1));
        playNode(startNode);
    }

    function playNode(nodeId) {
        var node = HLM.StoryData[nodeId];
        if (!node) {
            console.warn('Story node not found:', nodeId);
            return;
        }

        _currentNode = node;
        _storyHistory.push(nodeId);
        HLM.State.set('currentNode', nodeId);

        if (node.chapter) {
            HLM.State.set('chapter', node.chapter);
        }

        if (node.scene) {
            HLM.Engine.updateScene(node.scene);
        }

        HLM.Engine.updateStatus();

        var speakerEl = document.getElementById('speaker-name');
        var textEl = document.getElementById('dialogue-text');
        var indicator = document.getElementById('dialogue-indicator');

        speakerEl.textContent = node.speaker || '';
        indicator.style.display = 'block';

        var displayText = _resolveTextVariation(node);

        var choicesContainer = document.getElementById('choices-container');
        choicesContainer.style.display = 'none';
        choicesContainer.innerHTML = '';

        HLM.Engine.typewriterEffect(textEl, displayText, function() {
            if (_currentNode && _currentNode.choices && _currentNode.choices.length > 0) {
                showChoices(_currentNode.choices);
            }
        });

        HLM.Engine.addToDialogLog(node.speaker || '旁白', displayText);

        if (node.isEnding) {
            indicator.style.display = 'none';
            setTimeout(function() {
                showEnding();
            }, Math.min(displayText.length * 30 + 500, 8000));
        }
    }

    function _resolveTextVariation(node) {
        if (!node.textVariations || !Array.isArray(node.textVariations)) return node.text || '';
        for (var i = 0; i < node.textVariations.length; i++) {
            var variation = node.textVariations[i];
            if (variation.conditions && HLM.State.checkCondition(variation.conditions)) {
                return variation.text || node.text || '';
            }
        }
        return node.text || '';
    }

    function advance() {
        if (!_currentNode) return;

        if (document.getElementById('choices-container').style.display !== 'none') {
            return;
        }

        if (_currentNode.choices && _currentNode.choices.length > 0) {
            showChoices(_currentNode.choices);
        }
    }

    function showChoices(choices) {
        var container = document.getElementById('choices-container');
        container.innerHTML = '';

        var filteredChoices = choices.filter(function(choice) {
            if (choice.conditions) {
                return HLM.State.checkCondition(choice.conditions);
            }
            return true;
        });

        if (filteredChoices.length === 0) {
            filteredChoices = choices;
        }

        filteredChoices.forEach(function(choice, idx) {
            var btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.style.animationDelay = (idx * 0.1) + 's';

            var effectHint = '';
            if (choice.effects) {
                var hints = [];
                for (var key in choice.effects) {
                    if (!choice.effects.hasOwnProperty(key)) continue;
                    var eff = choice.effects[key];
                    if (eff.add) {
                        var label = key.split('.').pop();
                        var nameMap = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
                        var charMap = { jbaoyu: '宝玉', ldaiyu: '黛玉', xbaochai: '宝钗', shi_xiangyun: '湘云', jiamu: '贾母', tanchun: '探春', wangxifeng: '凤姐', liwan: '李纨', miaoyu: '妙玉', qingwen: '晴雯', xiren: '袭人' };
                        if (key.indexOf('relationships.') === 0) {
                            var cKey = key.replace('relationships.', '');
                            hints.push((charMap[cKey] || cKey) + (eff.add > 0 ? '+' : '') + eff.add);
                        } else if (nameMap[label]) {
                            hints.push(nameMap[label] + (eff.add > 0 ? '+' : '') + eff.add);
                        }
                    }
                }
                if (hints.length > 0) {
                    effectHint = ' <span style="font-size:0.8em;color:var(--color-text-dim);">(' + hints.join(', ') + ')</span>';
                }
            }

            btn.innerHTML = choice.text + effectHint;
            btn.addEventListener('click', function() {
                if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
                makeChoice(choice);
            });
            container.appendChild(btn);
        });

        container.style.display = 'flex';
        document.getElementById('dialogue-indicator').style.display = 'none';
    }

    function makeChoice(choice) {
        HLM.State.increment('statistics.choicesMade');

        if (choice.effects) {
            HLM.State.applyEffects(choice.effects);
        }

        if (choice.flags) {
            for (var fKey in choice.flags) {
                if (choice.flags.hasOwnProperty(fKey)) {
                    HLM.State.set('flags.' + fKey, choice.flags[fKey]);
                }
            }
        }

        var choicesContainer = document.getElementById('choices-container');
        choicesContainer.style.display = 'none';

        _nodesSinceLastEvent++;
        HLM.AchievementSystem.checkAchievements();

        if (choice.next && HLM.StoryData[choice.next]) {
            if (_nodesSinceLastEvent >= _nextEventAt && !_currentNode.isEnding) {
                _nodesSinceLastEvent = 0;
                _nextEventAt = _EVENT_INTERVAL_MIN + Math.floor(Math.random() * (_EVENT_INTERVAL_MAX - _EVENT_INTERVAL_MIN + 1));
                _pendingNextNode = choice.next;
                HLM.EventSystem.checkAndTrigger();
            } else {
                playNode(choice.next);
            }
        } else if (!_currentNode.isEnding) {
            showEnding();
        }
    }

    var _pendingNextNode = null;

    function resumeAfterEvent() {
        if (_pendingNextNode && HLM.StoryData[_pendingNextNode]) {
            var next = _pendingNextNode;
            _pendingNextNode = null;
            playNode(next);
        }
    }

    function resumeFromNode(nodeId) {
        if (nodeId && HLM.StoryData[nodeId]) {
            playNode(nodeId);
        }
    }

    function showEnding() {
        var node = _currentNode;
        if (!node) return;

        var charId = HLM.State.get('character');
        var ch = HLM.CharacterData[charId] || {};

        var endingTitle = node.title || '结局';
        var endingText = (node.text || '').replace(/\\n/g, '\n');
        var poem = node.poem || '';

        HLM.EndingCollection.recordEnding(node.id, {
            title: endingTitle,
            character: charId,
            characterName: ch.name || '',
            poem: poem,
            text: endingText
        });

        var titleEl = document.getElementById('ending-screen-title');
        var textEl = document.getElementById('ending-screen-text');
        var poemEl = document.getElementById('ending-screen-poem');
        var statsEl = document.getElementById('ending-screen-stats');
        var collectionEl = document.getElementById('ending-screen-collection');

        titleEl.textContent = endingTitle;
        textEl.textContent = endingText;
        poemEl.textContent = poem;

        var attrs = HLM.State.get('attributes') || {};
        var nameMap = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
        statsEl.innerHTML = '';
        for (var aKey in attrs) {
            if (!attrs.hasOwnProperty(aKey)) continue;
            var card = document.createElement('div');
            card.className = 'stat-card';
            card.innerHTML = '<div class="stat-value">' + attrs[aKey] + '</div><div class="stat-label">' + (nameMap[aKey] || aKey) + '</div>';
            statsEl.appendChild(card);
        }

        var collected = HLM.EndingCollection.getCollectedCount();
        var total = HLM.EndingCollection.getTotalCount();
        collectionEl.innerHTML = '<div class="ending-collection-hint">结局图鉴：' + collected + ' / ' + total + '</div>';

        HLM.Engine.switchScreen('ending-screen');

        if (HLM.Audio && HLM.Audio.stopBGM) HLM.Audio.stopBGM();
        HLM.AchievementSystem.checkAchievements();
    }

    function toggleAutoPlay() {
        _isAutoPlaying = !_isAutoPlaying;
        if (_isAutoPlaying) {
            _scheduleAutoAdvance();
        } else {
            if (_autoPlayTimer) {
                clearTimeout(_autoPlayTimer);
                _autoPlayTimer = null;
            }
        }
        return _isAutoPlaying;
    }

    function _scheduleAutoAdvance() {
        if (!_isAutoPlaying) return;
        _autoPlayTimer = setTimeout(function() {
            advance();
            if (_isAutoPlaying) {
                setTimeout(function() {
                    _scheduleAutoAdvance();
                }, 3000);
            }
        }, 2000);
    }

    function getCurrentNode() {
        return _currentNode;
    }

    function getHistory() {
        return _storyHistory.slice();
    }

    return {
        init: init,
        startStory: startStory,
        playNode: playNode,
        advance: advance,
        makeChoice: makeChoice,
        showEnding: showEnding,
        toggleAutoPlay: toggleAutoPlay,
        resumeFromNode: resumeFromNode,
        resumeAfterEvent: resumeAfterEvent,
        getCurrentNode: getCurrentNode,
        getHistory: getHistory
    };
})();
