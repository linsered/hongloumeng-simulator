var HLM = window.HLM || {};

HLM.Audio = (function() {
    var _bgmAudio = null;
    var _sfxAudioPool = {};
    var _ambientAudio = null;
    var _bgmVolume = 0.7;
    var _sfxVolume = 0.8;
    var _ambientVolume = 0.5;
    var _currentBGM = null;
    var _muted = false;
    var _SFX_POOL_SIZE = 5;
    var _audioContext = null;

    var _SFX_DEFINITIONS = {
        click: { frequency: 800, duration: 0.08, type: 'sine' },
        save: { frequency: 600, duration: 0.15, type: 'sine', sweep: 1200 },
        achievement: { frequency: 523, duration: 0.3, type: 'sine', harmonics: [659, 784] },
        event_trigger: { frequency: 440, duration: 0.2, type: 'triangle', sweep: 660 },
        event_close: { frequency: 660, duration: 0.1, type: 'sine', sweep: 440 },
        choice_select: { frequency: 700, duration: 0.1, type: 'sine' },
        scene_change: { frequency: 300, duration: 0.4, type: 'sine', sweep: 500 },
        dialogue_advance: { frequency: 900, duration: 0.05, type: 'sine' },
        negative: { frequency: 300, duration: 0.2, type: 'sawtooth', sweep: 200 },
        positive: { frequency: 400, duration: 0.2, type: 'sine', sweep: 800 },
        unlock: { frequency: 523, duration: 0.5, type: 'sine', harmonics: [659, 784, 1047] }
    };

    var _BGM_PATTERNS = {
        main_theme: { notes: [523, 587, 659, 698, 659, 587, 523, 494], tempo: 0.5, type: 'sine' },
        yihong_theme: { notes: [659, 698, 784, 880, 784, 698, 659, 587], tempo: 0.6, type: 'sine' },
        xiaoxiang_theme: { notes: [440, 494, 523, 587, 523, 494, 440, 392], tempo: 0.7, type: 'triangle' },
        hengwu_theme: { notes: [392, 440, 494, 523, 587, 523, 494, 440], tempo: 0.5, type: 'sine' },
        hall_theme: { notes: [330, 392, 440, 494, 523, 587, 659, 587], tempo: 0.4, type: 'sine' },
        ambient_night: { notes: [262, 294, 330, 349, 330, 294, 262, 247], tempo: 0.8, type: 'sine' },
        path_theme: { notes: [494, 523, 587, 659, 587, 523, 494, 440], tempo: 0.55, type: 'triangle' },
        bridge_theme: { notes: [349, 392, 440, 494, 523, 494, 440, 392], tempo: 0.6, type: 'sine' }
    };

    function init() {
        _bgmVolume = HLM.State.get('settings.bgmVolume') / 100;
        _sfxVolume = HLM.State.get('settings.sfxVolume') / 100;

        try {
            _audioContext = new (window.AudioContext || window.webkitAudioContext)();
        } catch(e) {
            console.warn('Web Audio API not available');
        }

        _initSFXPool();
    }

    function _initSFXPool() {
        for (var key in _SFX_DEFINITIONS) {
            if (!_SFX_DEFINITIONS.hasOwnProperty(key)) continue;
            _sfxAudioPool[key] = [];
        }
    }

    function _ensureAudioContext() {
        if (_audioContext && _audioContext.state === 'suspended') {
            _audioContext.resume();
        }
    }

    function playSFX(name) {
        if (_muted || !_audioContext) return;
        _ensureAudioContext();

        var def = _SFX_DEFINITIONS[name];
        if (!def) return;

        try {
            var now = _audioContext.currentTime;
            var osc = _audioContext.createOscillator();
            var gainNode = _audioContext.createGain();

            osc.type = def.type || 'sine';
            osc.frequency.setValueAtTime(def.frequency, now);

            if (def.sweep) {
                osc.frequency.linearRampToValueAtTime(def.sweep, now + def.duration * 0.8);
            }

            gainNode.gain.setValueAtTime(_sfxVolume * 0.3, now);
            gainNode.gain.exponentialRampToValueAtTime(0.001, now + def.duration);

            osc.connect(gainNode);
            gainNode.connect(_audioContext.destination);

            osc.start(now);
            osc.stop(now + def.duration);

            if (def.harmonics) {
                def.harmonics.forEach(function(freq, idx) {
                    var harmOsc = _audioContext.createOscillator();
                    var harmGain = _audioContext.createGain();
                    harmOsc.type = 'sine';
                    harmOsc.frequency.setValueAtTime(freq, now + (idx + 1) * 0.1);
                    harmGain.gain.setValueAtTime(_sfxVolume * 0.15, now + (idx + 1) * 0.1);
                    harmGain.gain.exponentialRampToValueAtTime(0.001, now + def.duration + (idx + 1) * 0.1);
                    harmOsc.connect(harmGain);
                    harmGain.connect(_audioContext.destination);
                    harmOsc.start(now + (idx + 1) * 0.1);
                    harmOsc.stop(now + def.duration + (idx + 1) * 0.1);
                });
            }
        } catch(e) {
            // Silently fail
        }
    }

    function playBGM(name) {
        if (!name || name === _currentBGM) return;
        stopBGM();

        _currentBGM = name;
        var pattern = _BGM_PATTERNS[name];
        if (!pattern) return;

        _startBGMLoop(pattern);
    }

    var _bgmLoopTimer = null;
    var _bgmNoteIndex = 0;

    function _startBGMLoop(pattern) {
        if (!_audioContext) return;
        _ensureAudioContext();
        _bgmNoteIndex = 0;

        function playNextNote() {
            if (!_currentBGM) return;
            _ensureAudioContext();

            try {
                var note = pattern.notes[_bgmNoteIndex % pattern.notes.length];
                var now = _audioContext.currentTime;
                var duration = pattern.tempo;

                var osc = _audioContext.createOscillator();
                var gainNode = _audioContext.createGain();

                osc.type = pattern.type || 'sine';
                osc.frequency.setValueAtTime(note, now);

                gainNode.gain.setValueAtTime(_bgmVolume * 0.08, now);
                gainNode.gain.setValueAtTime(_bgmVolume * 0.08, now + duration * 0.7);
                gainNode.gain.exponentialRampToValueAtTime(0.001, now + duration);

                osc.connect(gainNode);
                gainNode.connect(_audioContext.destination);

                osc.start(now);
                osc.stop(now + duration);
            } catch(e) {
                // Silently fail
            }

            _bgmNoteIndex++;
            _bgmLoopTimer = setTimeout(playNextNote, pattern.tempo * 1000);
        }

        playNextNote();
    }

    function stopBGM() {
        _currentBGM = null;
        if (_bgmLoopTimer) {
            clearTimeout(_bgmLoopTimer);
            _bgmLoopTimer = null;
        }
    }

    function setBGMVolume(vol) {
        _bgmVolume = Math.max(0, Math.min(1, vol));
    }

    function setSFXVolume(vol) {
        _sfxVolume = Math.max(0, Math.min(1, vol));
    }

    function toggleMute() {
        _muted = !_muted;
        if (_muted) {
            stopBGM();
        } else if (_currentBGM) {
            var pattern = _BGM_PATTERNS[_currentBGM];
            if (pattern) _startBGMLoop(pattern);
        }
        return _muted;
    }

    function isMuted() {
        return _muted;
    }

    function playAmbient(type) {
        // Placeholder for environmental audio
    }

    function stopAmbient() {
        // Placeholder
    }

    return {
        init: init,
        playSFX: playSFX,
        playBGM: playBGM,
        stopBGM: stopBGM,
        setBGMVolume: setBGMVolume,
        setSFXVolume: setSFXVolume,
        toggleMute: toggleMute,
        isMuted: isMuted,
        playAmbient: playAmbient,
        stopAmbient: stopAmbient
    };
})();
