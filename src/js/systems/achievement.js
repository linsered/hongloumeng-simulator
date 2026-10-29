var HLM = window.HLM || {};

HLM.AchievementSystem = (function() {
    var _unlockedAchievements = [];
    var _initialized = false;

    function init() {
        _unlockedAchievements = HLM.Storage.loadAchievements();
        _initialized = true;
    }

    function checkAchievements() {
        if (!_initialized) return;

        var newUnlocks = [];

        HLM.AchievementData.forEach(function(ach) {
            if (_isUnlocked(ach.id)) return;

            if (_checkCondition(ach.condition)) {
                _unlockAchievement(ach);
                newUnlocks.push(ach);
            }
        });

        newUnlocks.forEach(function(ach) {
            HLM.Engine.showAchievementPopup(ach);
        });

        if (newUnlocks.length > 0) {
            HLM.State.increment('statistics.achievementsUnlocked', newUnlocks.length);
            _saveAchievements();
        }
    }

    function _checkCondition(condition) {
        if (!condition) return false;

        switch (condition.type) {
            case 'progress':
                return HLM.State.get(condition.key) >= condition.value;

            case 'flag':
                return HLM.State.get(condition.key) === condition.value;

            case 'attribute':
                return HLM.State.get(condition.key) >= condition.value;

            case 'all_attributes':
                var attrs = HLM.State.get(condition.key);
                if (!attrs) return false;
                for (var key in attrs) {
                    if (attrs.hasOwnProperty(key) && attrs[key] < condition.value) {
                        return false;
                    }
                }
                return true;

            case 'statistic':
                return (HLM.State.get(condition.key) || 0) >= condition.value;

            case 'relationship':
                return (HLM.State.get(condition.key) || 0) >= condition.value;

            case 'relationship_max':
                var rels = HLM.State.get('relationships') || {};
                for (var rKey in rels) {
                    if (rels.hasOwnProperty(rKey)) {
                        var val = typeof rels[rKey] === 'object' ? (rels[rKey].value || 0) : rels[rKey];
                        if (val >= condition.value) return true;
                    }
                }
                return false;

            case 'relationships_count':
                var relationships = HLM.State.get('relationships') || {};
                var count = 0;
                for (var relKey in relationships) {
                    if (relationships.hasOwnProperty(relKey)) {
                        var relVal = typeof relationships[relKey] === 'object' ? (relationships[relKey].value || 0) : relationships[relKey];
                        if (relVal >= condition.threshold) count++;
                    }
                }
                return count >= condition.value;

            case 'multi_relationship':
                var keys = condition.key;
                for (var i = 0; i < keys.length; i++) {
                    var relValue = HLM.State.get(keys[i]);
                    var numVal = typeof relValue === 'object' ? (relValue.value || 0) : (relValue || 0);
                    if (numVal < condition.value) return false;
                }
                return true;

            case 'scenes_visited':
                return (HLM.State.get(condition.key) || 0) >= condition.value;

            case 'seasons':
                return false;

            case 'time_explored':
                return HLM.State.get('timeOfDay') === '子时';

            case 'all_achievements':
                return _unlockedAchievements.length >= condition.value;

            case 'ending_count':
                var endingCount = HLM.EndingCollection ? HLM.EndingCollection.getCollectedCount() : 0;
                if (condition.value === -1) {
                    return endingCount >= HLM.EndingCollection.getTotalCount();
                }
                return endingCount >= condition.value;

            default:
                return false;
        }
    }

    function _unlockAchievement(ach) {
        _unlockedAchievements.push({
            id: ach.id,
            unlockedAt: Date.now()
        });
    }

    function _isUnlocked(achId) {
        return _unlockedAchievements.some(function(a) {
            return a.id === achId;
        });
    }

    function _saveAchievements() {
        HLM.Storage.saveAchievements(_unlockedAchievements);
    }

    function showScreen() {
        var screen = document.getElementById('achievement-screen');
        screen.style.display = 'flex';
        screen.classList.add('active');

        var stats = document.getElementById('achievement-stats');
        var total = HLM.AchievementData.length;
        var unlocked = _unlockedAchievements.length;
        var percentage = total > 0 ? Math.round((unlocked / total) * 100) : 0;

        stats.innerHTML =
            '<div style="display:flex;justify-content:center;gap:30px;margin-bottom:15px;">' +
            '<div class="stat-card"><div class="stat-value">' + unlocked + '/' + total + '</div><div class="stat-label">已解锁</div></div>' +
            '<div class="stat-card"><div class="stat-value">' + percentage + '%</div><div class="stat-label">完成度</div></div>' +
            '</div>' +
            '<div class="progress-bar"><div class="progress-bar-fill" style="width:' + percentage + '%"></div></div>';

        var grid = document.getElementById('achievement-grid');
        grid.innerHTML = '';

        var categories = { story: '剧情', character: '角色', exploration: '探索', social: '社交', collection: '收集', ending: '结局' };

        HLM.AchievementData.forEach(function(ach) {
            var isUnlocked = _isUnlocked(ach.id);
            var card = document.createElement('div');
            card.className = 'achievement-card ' + (isUnlocked ? 'unlocked' : 'locked');

            var tierNames = { bronze: '铜', silver: '银', gold: '金', platinum: '铂' };
            var tierClass = 'tier-' + ach.tier;

            card.innerHTML =
                '<div class="ach-icon">' + (isUnlocked ? ach.icon : '🔒') + '</div>' +
                '<div class="ach-name">' + (isUnlocked ? ach.name : '???') + '</div>' +
                '<div class="ach-desc">' + (isUnlocked ? ach.description : '未解锁') + '</div>' +
                '<div class="ach-tier ' + tierClass + '">' + tierNames[ach.tier] + ' · ' + (categories[ach.category] || ach.category) + '</div>';

            grid.appendChild(card);
        });
    }

    function getUnlockedList() {
        return _unlockedAchievements.slice();
    }

    function getUnlockedCount() {
        return _unlockedAchievements.length;
    }

    function getTotalCount() {
        return HLM.AchievementData.length;
    }

    function getProgress() {
        return _unlockedAchievements.length / HLM.AchievementData.length;
    }

    return {
        init: init,
        checkAchievements: checkAchievements,
        showScreen: showScreen,
        getUnlockedList: getUnlockedList,
        getUnlockedCount: getUnlockedCount,
        getTotalCount: getTotalCount,
        getProgress: getProgress
    };
})();
