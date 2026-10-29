var HLM = window.HLM || {};

HLM.Storage = (function() {
    var STORAGE_PREFIX = 'hlm_';
    var SAVE_PREFIX = STORAGE_PREFIX + 'save_';
    var MAX_SAVES = 10;
    var AUTO_SAVE_KEY = STORAGE_PREFIX + 'autosave';

    function isAvailable() {
        try {
            var test = '__storage_test__';
            localStorage.setItem(test, test);
            localStorage.removeItem(test);
            return true;
        } catch(e) {
            return false;
        }
    }

    function save(slotId, gameState) {
        if (!isAvailable()) {
            console.warn('LocalStorage not available');
            return false;
        }
        try {
            var saveData = {
                id: slotId,
                timestamp: Date.now(),
                version: '1.0.0',
                state: gameState || HLM.State.exportState()
            };
            var key = slotId === 'auto' ? AUTO_SAVE_KEY : SAVE_PREFIX + slotId;
            localStorage.setItem(key, JSON.stringify(saveData));
            HLM.State.increment('statistics.savesCount');
            return true;
        } catch(e) {
            console.error('Save failed:', e);
            return false;
        }
    }

    function load(slotId) {
        if (!isAvailable()) return null;
        try {
            var key = slotId === 'auto' ? AUTO_SAVE_KEY : SAVE_PREFIX + slotId;
            var data = localStorage.getItem(key);
            if (!data) return null;
            var saveData = JSON.parse(data);
            return saveData;
        } catch(e) {
            console.error('Load failed:', e);
            return null;
        }
    }

    function deleteSave(slotId) {
        if (!isAvailable()) return false;
        try {
            var key = slotId === 'auto' ? AUTO_SAVE_KEY : SAVE_PREFIX + slotId;
            localStorage.removeItem(key);
            return true;
        } catch(e) {
            return false;
        }
    }

    function getSavesList() {
        if (!isAvailable()) return [];
        var saves = [];
        for (var i = 1; i <= MAX_SAVES; i++) {
            var data = load(i);
            if (data) {
                saves.push({
                    slot: i,
                    timestamp: data.timestamp,
                    character: data.state ? data.state.character : null,
                    chapter: data.state ? data.state.chapter : 0,
                    currentNode: data.state ? data.state.currentNode : null
                });
            }
        }
        return saves;
    }

    function hasSave(slotId) {
        if (!isAvailable()) return false;
        var key = slotId === 'auto' ? AUTO_SAVE_KEY : SAVE_PREFIX + slotId;
        return localStorage.getItem(key) !== null;
    }

    function autoSave() {
        return save('auto');
    }

    function loadAutoSave() {
        return load('auto');
    }

    function saveSetting(key, value) {
        if (!isAvailable()) return false;
        try {
            localStorage.setItem(STORAGE_PREFIX + 'setting_' + key, JSON.stringify(value));
            return true;
        } catch(e) {
            return false;
        }
    }

    function loadSetting(key, defaultValue) {
        if (!isAvailable()) return defaultValue;
        try {
            var data = localStorage.getItem(STORAGE_PREFIX + 'setting_' + key);
            if (data === null) return defaultValue;
            return JSON.parse(data);
        } catch(e) {
            return defaultValue;
        }
    }

    function saveAchievements(achievements) {
        if (!isAvailable()) return false;
        try {
            localStorage.setItem(STORAGE_PREFIX + 'achievements', JSON.stringify(achievements));
            return true;
        } catch(e) {
            return false;
        }
    }

    function loadAchievements() {
        if (!isAvailable()) return [];
        try {
            var data = localStorage.getItem(STORAGE_PREFIX + 'achievements');
            return data ? JSON.parse(data) : [];
        } catch(e) {
            return [];
        }
    }

    function getStorageUsage() {
        if (!isAvailable()) return 0;
        var total = 0;
        for (var key in localStorage) {
            if (localStorage.hasOwnProperty(key) && key.indexOf(STORAGE_PREFIX) === 0) {
                total += localStorage.getItem(key).length;
            }
        }
        return total;
    }

    function clearAll() {
        if (!isAvailable()) return;
        var keysToRemove = [];
        for (var i = 0; i < localStorage.length; i++) {
            var key = localStorage.key(i);
            if (key.indexOf(STORAGE_PREFIX) === 0) {
                keysToRemove.push(key);
            }
        }
        keysToRemove.forEach(function(key) {
            localStorage.removeItem(key);
        });
    }

    return {
        isAvailable: isAvailable,
        save: save,
        load: load,
        deleteSave: deleteSave,
        getSavesList: getSavesList,
        hasSave: hasSave,
        autoSave: autoSave,
        loadAutoSave: loadAutoSave,
        saveSetting: saveSetting,
        loadSetting: loadSetting,
        saveAchievements: saveAchievements,
        loadAchievements: loadAchievements,
        getStorageUsage: getStorageUsage,
        clearAll: clearAll,
        MAX_SAVES: MAX_SAVES
    };
})();
