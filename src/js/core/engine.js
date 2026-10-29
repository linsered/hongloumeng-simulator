var HLM = window.HLM || {};

HLM.Engine = (function() {
    var _initialized = false;
    var _currentScreen = 'loading';
    var _screenHistory = [];
    var _autoPlayTimer = null;
    var _isAutoPlaying = false;
    var _typewriterTimer = null;
    var _gameLoopTimer = null;
    var _lastTick = 0;
    var _eventCheckInterval = 30000;

    function init() {
        if (_initialized) return;

        HLM.State.init();
        _loadSettings();
        _bindEvents();
        _startLoading();

        _initialized = true;
    }

    function _loadSettings() {
        var settings = HLM.State.get('settings');
        settings.bgmVolume = HLM.Storage.loadSetting('bgmVolume', 70);
        settings.sfxVolume = HLM.Storage.loadSetting('sfxVolume', 80);
        settings.textSpeed = HLM.Storage.loadSetting('textSpeed', 3);
        settings.autoSpeed = HLM.Storage.loadSetting('autoSpeed', 3);
        settings.fontSize = HLM.Storage.loadSetting('fontSize', 'medium');
        HLM.State.set('settings', settings);
    }

    function _startLoading() {
        var loadingBar = document.getElementById('loading-bar');
        var loadingText = document.getElementById('loading-text');
        var steps = [
            { text: '正在初始化游戏引擎...', progress: 10 },
            { text: '正在加载场景数据...', progress: 25 },
            { text: '正在加载角色数据...', progress: 40 },
            { text: '正在加载剧情数据...', progress: 55 },
            { text: '正在加载事件数据...', progress: 70 },
            { text: '正在加载成就数据...', progress: 80 },
            { text: '正在准备音效系统...', progress: 90 },
            { text: '即将进入大观园...', progress: 100 }
        ];

        var currentStep = 0;
        function nextStep() {
            if (currentStep >= steps.length) {
                setTimeout(function() {
                    _onLoadingComplete();
                }, 500);
                return;
            }
            var step = steps[currentStep];
            loadingText.textContent = step.text;
            loadingBar.style.width = step.progress + '%';
            currentStep++;
            setTimeout(nextStep, 300 + Math.random() * 200);
        }
        nextStep();
    }

    function _onLoadingComplete() {
        HLM.Audio.init();
        HLM.AchievementSystem.init();

        if (HLM.Storage.hasSave('auto')) {
            document.getElementById('btn-continue').disabled = false;
        }

        switchScreen('main-menu');
        _initMenuEffects();
    }

    function showOverlay(id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.style.display = 'flex';
        el.classList.add('active');
    }

    function hideOverlay(id) {
        var el = document.getElementById(id);
        if (!el) return;
        el.style.display = 'none';
        el.classList.remove('active');
    }

    function switchScreen(screenId) {
        _screenHistory.push(_currentScreen);
        _currentScreen = screenId;

        document.querySelectorAll('.overlay-screen').forEach(function(s) {
            s.style.display = 'none';
            s.classList.remove('active');
        });

        document.querySelectorAll('.screen:not(.overlay-screen):not(#ending-collection-screen)').forEach(function(screen) {
            if (screen.id === screenId) {
                screen.style.display = 'flex';
                screen.style.opacity = '1';
                screen.classList.add('active');
            } else {
                screen.style.display = 'none';
                screen.style.opacity = '0';
                screen.classList.remove('active');
            }
        });
    }

    function goBack() {
        if (_screenHistory.length > 0) {
            var prevScreen = _screenHistory.pop();
            _currentScreen = prevScreen;

            document.querySelectorAll('.overlay-screen.active').forEach(function(s) {
                s.style.display = 'none';
                s.classList.remove('active');
            });

            var targetScreen = document.getElementById(prevScreen);
            if (targetScreen) {
                targetScreen.style.display = 'flex';
                targetScreen.style.opacity = '1';
                targetScreen.classList.add('active');
            }
        }
    }

    function _bindEvents() {
        document.getElementById('btn-new-game').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.CharacterSystem.showCharacterSelect();
        });

        document.getElementById('btn-continue').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _loadAutoSave();
        });

        document.getElementById('btn-achievements').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.AchievementSystem.showScreen();
        });

        document.getElementById('btn-settings').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showSettings();
        });

        document.getElementById('btn-about').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showAbout();
        });

        document.getElementById('btn-ending-collection-menu').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.EndingCollection.showScreen('main-menu');
        });

        document.getElementById('btn-back-from-select').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            switchScreen('main-menu');
        });

        document.getElementById('btn-back-from-settings').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            hideOverlay('settings-screen');
        });

        document.getElementById('btn-back-from-save').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            hideOverlay('save-screen');
        });

        document.getElementById('btn-back-from-log').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            hideOverlay('dialog-log');
        });

        document.getElementById('btn-back-from-achievements').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            hideOverlay('achievement-screen');
        });

        document.getElementById('btn-menu').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showGameMenu();
        });

        document.getElementById('btn-save').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showSaveScreen();
        });

        document.getElementById('btn-auto').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            toggleAutoPlay();
        });

        document.getElementById('btn-log').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showDialogLog();
        });

        document.getElementById('btn-character-info').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.CharacterSystem.showInfo();
        });

        document.getElementById('btn-relationship').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.CharacterSystem.showRelationships();
        });

        document.getElementById('btn-inventory').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _showInventory();
        });

        document.getElementById('btn-achievement-panel').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.AchievementSystem.showScreen();
        });

        document.getElementById('btn-close-panel').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            document.getElementById('side-panel').style.display = 'none';
        });

        document.getElementById('btn-confirm-character').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.CharacterSystem.confirmSelection();
        });

        document.getElementById('btn-ending-restart').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _stopGameLoop();
            var charId = HLM.State.get('character');
            if (charId) {
                HLM.State.init();
                startGame(charId);
            } else {
                switchScreen('character-select');
            }
        });

        document.getElementById('btn-ending-menu').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            _stopGameLoop();
            if (HLM.Audio && HLM.Audio.stopBGM) HLM.Audio.stopBGM();
            switchScreen('main-menu');
        });

        document.getElementById('btn-ending-collection').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.EndingCollection.showScreen('ending-screen');
        });

        document.getElementById('btn-back-from-ending-collection').addEventListener('click', function() {
            if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('click');
            HLM.EndingCollection.hideScreen();
        });

        document.getElementById('dialogue-container').addEventListener('click', function() {
            _advanceDialogue();
        });

        document.getElementById('setting-bgm-volume').addEventListener('input', function(e) {
            var val = parseInt(e.target.value);
            document.getElementById('bgm-volume-value').textContent = val;
            HLM.State.set('settings.bgmVolume', val);
            HLM.Storage.saveSetting('bgmVolume', val);
            if (HLM.Audio && HLM.Audio.setBGMVolume) HLM.Audio.setBGMVolume(val / 100);
        });

        document.getElementById('setting-sfx-volume').addEventListener('input', function(e) {
            var val = parseInt(e.target.value);
            document.getElementById('sfx-volume-value').textContent = val;
            HLM.State.set('settings.sfxVolume', val);
            HLM.Storage.saveSetting('sfxVolume', val);
        });

        document.getElementById('setting-text-speed').addEventListener('input', function(e) {
            var val = parseInt(e.target.value);
            document.getElementById('text-speed-value').textContent = val;
            HLM.State.set('settings.textSpeed', val);
            HLM.Storage.saveSetting('textSpeed', val);
        });

        document.getElementById('setting-auto-speed').addEventListener('input', function(e) {
            var val = parseInt(e.target.value);
            document.getElementById('auto-speed-value').textContent = val;
            HLM.State.set('settings.autoSpeed', val);
            HLM.Storage.saveSetting('autoSpeed', val);
        });

        document.getElementById('setting-font-size').addEventListener('change', function(e) {
            HLM.State.set('settings.fontSize', e.target.value);
            HLM.Storage.saveSetting('fontSize', e.target.value);
            document.body.className = document.body.className.replace(/font-size-\w+/g, '');
            document.body.classList.add('font-size-' + e.target.value);
        });

        document.getElementById('btn-fullscreen').addEventListener('click', function() {
            var isFull = !HLM.State.get('settings.fullscreen');
            HLM.State.set('settings.fullscreen', isFull);
            this.textContent = isFull ? '开启' : '关闭';
            if (isFull) {
                document.documentElement.requestFullscreen && document.documentElement.requestFullscreen();
            } else {
                document.exitFullscreen && document.exitFullscreen();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (_currentScreen !== 'game-screen') return;
            switch(e.key) {
                case 'Enter':
                case ' ':
                    e.preventDefault();
                    _advanceDialogue();
                    break;
                case 'Escape':
                    _showGameMenu();
                    break;
                case 's':
                    if (e.ctrlKey) {
                        e.preventDefault();
                        HLM.Storage.autoSave();
                    }
                    break;
            }
        });
    }

    function _advanceDialogue() {
        if (_typewriterTimer) {
            _finishTypewriter();
            return;
        }

        var choicesContainer = document.getElementById('choices-container');
        if (choicesContainer.style.display !== 'none') {
            return;
        }

        HLM.StorySystem.advance();
    }

    function _finishTypewriter() {
        if (_typewriterTimer) {
            clearInterval(_typewriterTimer);
            _typewriterTimer = null;
        }
        var dialogueText = document.getElementById('dialogue-text');
        if (dialogueText._fullText) {
            dialogueText.textContent = dialogueText._fullText;
            dialogueText._fullText = null;
        }
        document.getElementById('dialogue-indicator').style.display = 'block';

        var node = HLM.StorySystem.getCurrentNode();
        if (node && node.choices && node.choices.length > 0) {
            HLM.StorySystem.advance();
        }
    }

    function typewriterEffect(element, text, callback) {
        if (_typewriterTimer) {
            clearInterval(_typewriterTimer);
        }

        var speed = HLM.State.get('settings.textSpeed');
        var delay = [80, 50, 30, 20, 10][speed - 1] || 30;

        element.textContent = '';
        element._fullText = text;
        document.getElementById('dialogue-indicator').style.display = 'none';

        var index = 0;
        _typewriterTimer = setInterval(function() {
            if (index < text.length) {
                element.textContent += text[index];
                index++;
            } else {
                clearInterval(_typewriterTimer);
                _typewriterTimer = null;
                element._fullText = null;
                document.getElementById('dialogue-indicator').style.display = 'block';
                if (callback) callback();
            }
        }, delay);
    }

    function toggleAutoPlay() {
        _isAutoPlaying = !_isAutoPlaying;
        var btn = document.getElementById('btn-auto');
        btn.textContent = _isAutoPlaying ? '⏸' : '▶';
        btn.classList.toggle('active', _isAutoPlaying);

        if (_isAutoPlaying) {
            _scheduleAutoAdvance();
        } else if (_autoPlayTimer) {
            clearTimeout(_autoPlayTimer);
            _autoPlayTimer = null;
        }
    }

    function _scheduleAutoAdvance() {
        if (!_isAutoPlaying) return;
        var speed = HLM.State.get('settings.autoSpeed');
        var delay = [5000, 4000, 3000, 2000, 1000][speed - 1] || 3000;

        _autoPlayTimer = setTimeout(function() {
            if (_isAutoPlaying && _currentScreen === 'game-screen') {
                _advanceDialogue();
                _scheduleAutoAdvance();
            }
        }, delay);
    }

    function startGame(characterId) {
        HLM.State.init();
        HLM.State.set('character', characterId);
        HLM.State.set('screen', 'game');

        var character = HLM.CharacterData[characterId];
        if (character) {
            var attrs = HLM.State.get('attributes');
            for (var key in character.attributes) {
                if (character.attributes.hasOwnProperty(key) && attrs.hasOwnProperty(key)) {
                    attrs[key] = character.attributes[key];
                }
            }
            HLM.State.set('attributes', attrs);

            var rels = HLM.State.get('relationships');
            for (var relKey in character.relationships) {
                if (character.relationships.hasOwnProperty(relKey)) {
                    var rel = character.relationships[relKey];
                    rels[relKey] = typeof rel === 'object' ? (rel.value || 0) : rel;
                }
            }
            HLM.State.set('relationships', rels);
        }

        switchScreen('game-screen');
        if (HLM.Audio && HLM.Audio.playBGM) HLM.Audio.playBGM('main_theme');
        HLM.StorySystem.startStory(characterId);
        _startGameLoop();
    }

    function _startGameLoop() {
        _lastTick = Date.now();
        _gameLoopTimer = setInterval(function() {
            var now = Date.now();
            var delta = now - _lastTick;
            _lastTick = now;

            HLM.State.increment('statistics.totalPlayTime', delta);

            if (Math.random() < 0.01) {
                HLM.EventSystem.checkAndTrigger();
            }
        }, 1000);
    }

    function _stopGameLoop() {
        if (_gameLoopTimer) {
            clearInterval(_gameLoopTimer);
            _gameLoopTimer = null;
        }
    }

    function _loadAutoSave() {
        var saveData = HLM.Storage.loadAutoSave();
        if (saveData && saveData.state) {
            HLM.State.importState(saveData.state);
            switchScreen('game-screen');
            HLM.StorySystem.resumeFromNode(HLM.State.get('currentNode'));
            _startGameLoop();
        }
    }

    function _showSettings() {
        showOverlay('settings-screen');

        document.getElementById('setting-bgm-volume').value = HLM.State.get('settings.bgmVolume');
        document.getElementById('bgm-volume-value').textContent = HLM.State.get('settings.bgmVolume');
        document.getElementById('setting-sfx-volume').value = HLM.State.get('settings.sfxVolume');
        document.getElementById('sfx-volume-value').textContent = HLM.State.get('settings.sfxVolume');
        document.getElementById('setting-text-speed').value = HLM.State.get('settings.textSpeed');
        document.getElementById('text-speed-value').textContent = HLM.State.get('settings.textSpeed');
        document.getElementById('setting-auto-speed').value = HLM.State.get('settings.autoSpeed');
        document.getElementById('auto-speed-value').textContent = HLM.State.get('settings.autoSpeed');
    }

    function _showSaveScreen() {
        showOverlay('save-screen');
        _renderSaveSlots();
    }

    function _renderSaveSlots() {
        var container = document.getElementById('save-slots');
        container.innerHTML = '';

        for (var i = 1; i <= HLM.Storage.MAX_SAVES; i++) {
            var saveData = HLM.Storage.load(i);
            var slot = document.createElement('div');
            slot.className = 'save-slot';

            if (saveData) {
                var date = new Date(saveData.timestamp);
                var charName = saveData.state && saveData.state.character ?
                    (HLM.CharacterData[saveData.state.character] ?
                        HLM.CharacterData[saveData.state.character].name : '未知') : '未知';
                slot.innerHTML =
                    '<div class="slot-info">' +
                    '<div class="slot-number">存档 ' + i + '</div>' +
                    '<div class="slot-character">' + charName + '</div>' +
                    '<div class="slot-date">' + date.toLocaleString('zh-CN') + '</div>' +
                    '</div>' +
                    '<div class="slot-actions">' +
                    '<button class="slot-btn load-btn" data-slot="' + i + '">读取</button>' +
                    '<button class="slot-btn save-btn" data-slot="' + i + '">覆盖</button>' +
                    '<button class="slot-btn delete-btn" data-slot="' + i + '">删除</button>' +
                    '</div>';
            } else {
                slot.innerHTML =
                    '<div class="slot-info">' +
                    '<div class="slot-number">存档 ' + i + '</div>' +
                    '<div class="slot-empty">空</div>' +
                    '</div>' +
                    '<div class="slot-actions">' +
                    '<button class="slot-btn save-btn" data-slot="' + i + '">保存</button>' +
                    '</div>';
            }
            container.appendChild(slot);
        }

        container.querySelectorAll('.save-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var slot = parseInt(this.dataset.slot);
                HLM.Storage.save(slot);
                if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('save');
                _renderSaveSlots();
            });
        });

        container.querySelectorAll('.load-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var slot = parseInt(this.dataset.slot);
                var saveData = HLM.Storage.load(slot);
                if (saveData && saveData.state) {
                    HLM.State.importState(saveData.state);
                    switchScreen('game-screen');
                    HLM.StorySystem.resumeFromNode(HLM.State.get('currentNode'));
                    hideOverlay('save-screen');
                }
            });
        });

        container.querySelectorAll('.delete-btn').forEach(function(btn) {
            btn.addEventListener('click', function() {
                var slot = parseInt(this.dataset.slot);
                if (confirm('确定要删除存档 ' + slot + ' 吗？')) {
                    HLM.Storage.deleteSave(slot);
                    _renderSaveSlots();
                }
            });
        });
    }

    function _showDialogLog() {
        showOverlay('dialog-log');
        var container = document.getElementById('log-entries');
        container.innerHTML = '';

        var logs = HLM.State.get('dialogLog') || [];
        logs.slice(-50).forEach(function(log) {
            var entry = document.createElement('div');
            entry.className = 'log-entry';
            entry.innerHTML =
                '<span class="log-speaker">' + (log.speaker || '旁白') + '</span>' +
                '<span class="log-text">' + log.text + '</span>';
            container.appendChild(entry);
        });
        container.scrollTop = container.scrollHeight;
    }

    function _showGameMenu() {
        var panel = document.getElementById('side-panel');
        var isVisible = panel.style.display !== 'none';
        if (isVisible) {
            panel.style.display = 'none';
            return;
        }

        document.getElementById('panel-title').textContent = '游戏菜单';
        var content = document.getElementById('panel-content');
        content.innerHTML =
            '<div class="menu-panel">' +
            '<button class="panel-btn" id="panel-save">💾 存档</button>' +
            '<button class="panel-btn" id="panel-load">📂 读档</button>' +
            '<button class="panel-btn" id="panel-settings">⚙ 设置</button>' +
            '<button class="panel-btn" id="panel-log">📜 对话记录</button>' +
            '<button class="panel-btn" id="panel-achievements">🏆 成就</button>' +
            '<button class="panel-btn danger" id="panel-quit">🚪 返回主菜单</button>' +
            '</div>';
        panel.style.display = 'block';

        document.getElementById('panel-save').addEventListener('click', function() {
            panel.style.display = 'none';
            _showSaveScreen();
        });
        document.getElementById('panel-load').addEventListener('click', function() {
            panel.style.display = 'none';
            _showSaveScreen();
        });
        document.getElementById('panel-settings').addEventListener('click', function() {
            panel.style.display = 'none';
            _showSettings();
        });
        document.getElementById('panel-log').addEventListener('click', function() {
            panel.style.display = 'none';
            _showDialogLog();
        });
        document.getElementById('panel-achievements').addEventListener('click', function() {
            panel.style.display = 'none';
            HLM.AchievementSystem.showScreen();
        });
        document.getElementById('panel-quit').addEventListener('click', function() {
            if (confirm('确定要返回主菜单吗？未保存的进度将会丢失。')) {
                _stopGameLoop();
                _isAutoPlaying = false;
                if (HLM.Audio && HLM.Audio.stopBGM) HLM.Audio.stopBGM();
                panel.style.display = 'none';
                switchScreen('main-menu');
            }
        });
    }

    function _showInventory() {
        var panel = document.getElementById('side-panel');
        document.getElementById('panel-title').textContent = '物品栏';
        var content = document.getElementById('panel-content');
        var inventory = HLM.State.get('inventory') || [];

        if (inventory.length === 0) {
            content.innerHTML = '<div class="empty-message">暂无物品</div>';
        } else {
            var html = '<div class="inventory-grid">';
            inventory.forEach(function(item) {
                html += '<div class="inventory-item" title="' + (item.description || '') + '">' +
                    '<div class="item-icon">' + (item.icon || '📦') + '</div>' +
                    '<div class="item-name">' + item.name + '</div>' +
                    '</div>';
            });
            html += '</div>';
            content.innerHTML = html;
        }
        panel.style.display = 'block';
    }

    function _showAbout() {
        var panel = document.getElementById('side-panel');
        document.getElementById('panel-title').textContent = '关于游戏';
        var content = document.getElementById('panel-content');
        content.innerHTML =
            '<div class="about-content">' +
            '<h3>红楼梦模拟器 v1.0.0</h3>' +
            '<p>基于曹雪芹《红楼梦》原著开发的沉浸式文字冒险游戏。</p>' +
            '<p>玩家可选择不同身份进入大观园，体验原著剧情的不同走向，' +
            '通过精心设计的选择系统和随机事件创造高度个性化的游戏体验。</p>' +
            '<h4>技术栈</h4>' +
            '<p>HTML5 / CSS3 / 原生JavaScript</p>' +
            '<h4>声明</h4>' +
            '<p>本游戏仅供学习交流使用，所有剧情内容基于《红楼梦》原著创作。</p>' +
            '</div>';
        panel.style.display = 'block';
    }

    function _initMenuEffects() {
        var petalsContainer = document.getElementById('menu-petals');
        if (!petalsContainer) return;

        function createPetal() {
            var petal = document.createElement('div');
            petal.className = 'petal';
            petal.style.left = Math.random() * 100 + '%';
            petal.style.animationDuration = (5 + Math.random() * 10) + 's';
            petal.style.animationDelay = Math.random() * 5 + 's';
            petal.style.opacity = 0.3 + Math.random() * 0.5;
            petal.style.transform = 'rotate(' + (Math.random() * 360) + 'deg)';
            petalsContainer.appendChild(petal);

            setTimeout(function() {
                if (petal.parentNode) {
                    petal.parentNode.removeChild(petal);
                }
            }, 15000);
        }

        for (var i = 0; i < 20; i++) {
            setTimeout(createPetal, i * 300);
        }
        setInterval(createPetal, 800);
    }

    function updateScene(sceneId) {
        var scene = HLM.SceneData[sceneId];
        if (!scene) return;

        var bg = document.getElementById('scene-background');
        bg.style.background = scene.gradient || scene.backgroundColor || '#1a0a0a';

        if (scene.particles) {
            var effects = document.getElementById('scene-effects');
            effects.innerHTML = '';
            scene.particles.forEach(function(p) {
                var particle = document.createElement('div');
                particle.className = 'scene-particle ' + p.type;
                particle.style.cssText = p.style || '';
                effects.appendChild(particle);
            });
        }

        document.getElementById('scene-name').textContent = scene.name || '';
        HLM.State.increment('statistics.scenesVisited');
    }

    function updateAttributeDisplay() {
        var attrs = HLM.State.get('attributes') || {};
        var attrKeys = ['wisdom', 'charm', 'talent', 'emotion', 'fortune', 'health'];
        attrKeys.forEach(function(key) {
            var val = attrs[key] !== undefined ? Math.max(0, Math.min(15, attrs[key])) : 5;
            var barEl = document.getElementById('attr-' + key + '-bar');
            var valEl = document.getElementById('attr-' + key + '-val');
            if (barEl) barEl.style.width = (val / 15 * 100) + '%';
            if (valEl) {
                valEl.textContent = val;
                valEl.classList.remove('low', 'critical');
                if (key === 'health') {
                    if (val <= 2) valEl.classList.add('critical');
                    else if (val <= 3) valEl.classList.add('low');
                }
            }
        });
    }

    function showAttributeNotification(attrKey, changeAmount) {
        var container = document.getElementById('attribute-notifications');
        if (!container) return;

        var nameMap = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
        var relNameMap = { jbaoyu: '宝玉', ldaiyu: '黛玉', xbaochai: '宝钗', shi_xiangyun: '湘云', jiamu: '贾母', tanchun: '探春', wangxifeng: '凤姐', liwan: '李纨', miaoyu: '妙玉', qingwen: '晴雯', xiren: '袭人' };

        var label = nameMap[attrKey] || relNameMap[attrKey] || attrKey;
        var prefix = changeAmount > 0 ? '+' : '';

        var notif = document.createElement('div');
        var cls = changeAmount > 0 ? 'positive' : (changeAmount < 0 ? 'negative' : 'neutral');
        notif.className = 'attr-notification ' + cls;
        notif.textContent = label + ' ' + prefix + changeAmount;
        container.appendChild(notif);

        setTimeout(function() {
            if (notif.parentNode) notif.parentNode.removeChild(notif);
        }, 2000);
    }

    function updateStatus() {
        var timeOfDay = HLM.State.get('timeOfDay');
        var season = HLM.State.get('season');
        var day = HLM.State.get('day');

        var statusTime = document.querySelector('#status-time .status-value');
        var statusSeason = document.querySelector('#status-season .status-value');
        var statusDay = document.querySelector('#status-day .status-value');

        if (statusTime) statusTime.textContent = timeOfDay;
        if (statusSeason) statusSeason.textContent = season;
        if (statusDay) statusDay.textContent = '第' + day + '日';

        updateAttributeDisplay();
        _updateRelationshipDisplay();
    }

    function _updateRelationshipDisplay() {
        var container = document.getElementById('relationship-display');
        if (!container) return;
        container.innerHTML = '';

        var rels = HLM.State.get('relationships') || {};
        var currentChar = HLM.State.get('character');

        var relColors = {
            jbaoyu: '#ff6b6b', ldaiyu: '#81c784', xbaochai: '#64b5f6',
            shi_xiangyun: '#ffb74d', jiamu: '#ce93d8', tanchun: '#4db6ac',
            wangxifeng: '#ef5350', liwan: '#a1887f', miaoyu: '#b39ddb',
            qingwen: '#f48fb1', xiren: '#90a4ae', zijuan: '#a5d6a7',
            xue_yima: '#ffab91', wangfuren: '#bcaaa4', jiazheng: '#8d6e63',
            xingfuren: '#d7ccc8', zhaoyiniang: '#a1887f', jialian: '#ff8a65',
            ping_er: '#c5e1a5', ying_er: '#f0e68c', jialan: '#ffe082',
            sheyue: '#b0bec5'
        };

        for (var key in rels) {
            if (!rels.hasOwnProperty(key)) continue;
            if (key === currentChar) continue;

            var ch = HLM.CharacterData[key];
            if (!ch) continue;

            var val = typeof rels[key] === 'object' ? (rels[key].value || 0) : rels[key];
            var color = relColors[key] || '#d4a030';

            var bar = document.createElement('div');
            bar.className = 'relationship-bar-mini';
            bar.title = ch.name + ': ' + val;
            bar.innerHTML =
                '<span class="rel-icon">' + ch.portrait + '</span>' +
                '<span class="rel-name-short">' + ch.name.charAt(0) + '</span>' +
                '<span class="rel-bar-mini"><span class="rel-fill-mini" style="width:' + val + '%;background:' + color + ';"></span></span>' +
                '<span class="rel-val">' + val + '</span>';
            container.appendChild(bar);
        }
    }

    function showEventPopup(event) {
        var popup = document.getElementById('event-popup');
        document.getElementById('event-header').textContent = event.name;
        document.getElementById('event-text').textContent = event.text;

        var choicesContainer = document.getElementById('event-choices');
        choicesContainer.innerHTML = '';

        if (event.choices && event.choices.length > 0) {
            event.choices.forEach(function(choice, idx) {
                var btn = document.createElement('button');
                btn.className = 'event-choice-btn';
                btn.textContent = choice.text;
                btn.addEventListener('click', function() {
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
                    hideOverlay('event-popup');
                    if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('event_close');
                    HLM.StorySystem.resumeAfterEvent();
                });
                choicesContainer.appendChild(btn);
            });
        } else {
            var btn = document.createElement('button');
            btn.className = 'event-choice-btn';
            btn.textContent = '继续';
            btn.addEventListener('click', function() {
                hideOverlay('event-popup');
                HLM.StorySystem.resumeAfterEvent();
            });
            choicesContainer.appendChild(btn);
        }

        showOverlay('event-popup');
        if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('event_trigger');
        HLM.State.increment('statistics.eventsTriggered');
    }

    function showAchievementPopup(achievement) {
        var popup = document.getElementById('achievement-popup');
        document.getElementById('achievement-icon').textContent = achievement.icon || '🏆';
        document.getElementById('achievement-name').textContent = achievement.name;
        document.getElementById('achievement-desc').textContent = achievement.description;
        showOverlay('achievement-popup');
        popup.classList.add('achievement-unlock');

        if (HLM.Audio && HLM.Audio.playSFX) HLM.Audio.playSFX('achievement');

        setTimeout(function() {
            hideOverlay('achievement-popup');
            popup.classList.remove('achievement-unlock');
        }, 3000);
    }

    function addToDialogLog(speaker, text) {
        var logs = HLM.State.get('dialogLog') || [];
        logs.push({ speaker: speaker, text: text, timestamp: Date.now() });
        if (logs.length > 200) {
            logs = logs.slice(-100);
        }
        HLM.State.set('dialogLog', logs);
    }

    return {
        init: init,
        switchScreen: switchScreen,
        goBack: goBack,
        startGame: startGame,
        typewriterEffect: typewriterEffect,
        toggleAutoPlay: toggleAutoPlay,
        updateScene: updateScene,
        updateStatus: updateStatus,
        updateAttributeDisplay: updateAttributeDisplay,
        showAttributeNotification: showAttributeNotification,
        showEventPopup: showEventPopup,
        showAchievementPopup: showAchievementPopup,
        addToDialogLog: addToDialogLog,
        _stopGameLoop: _stopGameLoop
    };
})();
