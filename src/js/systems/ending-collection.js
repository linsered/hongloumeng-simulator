var HLM = window.HLM || {};

HLM.EndingCollection = (function() {
    var STORAGE_KEY = 'hlm_endings';
    var _returnTarget = 'main-menu';

    function init() {}

    function _loadEndings() {
        try {
            var data = localStorage.getItem(STORAGE_KEY);
            return data ? JSON.parse(data) : {};
        } catch(e) {
            return {};
        }
    }

    function _saveEndings(endings) {
        try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify(endings));
        } catch(e) {}
    }

    function recordEnding(endingId, endingData) {
        var endings = _loadEndings();
        if (!endings[endingId]) {
            endings[endingId] = {
                id: endingId,
                title: endingData.title || '未知结局',
                character: endingData.character || '',
                characterName: endingData.characterName || '',
                poem: endingData.poem || '',
                text: (endingData.text || '').substring(0, 300),
                timestamp: Date.now(),
                count: 1
            };
        } else {
            endings[endingId].count = (endings[endingId].count || 0) + 1;
            endings[endingId].timestamp = Date.now();
        }
        _saveEndings(endings);
    }

    function getCollectedEndings() {
        return _loadEndings();
    }

    function getCollectedCount() {
        var endings = _loadEndings();
        return Object.keys(endings).length;
    }

    function getTotalCount() {
        var count = 0;
        for (var key in HLM.StoryData) {
            if (HLM.StoryData.hasOwnProperty(key) && HLM.StoryData[key].isEnding) {
                count++;
            }
        }
        return count;
    }

    function isCollected(endingId) {
        var endings = _loadEndings();
        return !!endings[endingId];
    }

    function getEndingsByCharacter(charId) {
        var endings = _loadEndings();
        var result = {};
        for (var key in endings) {
            if (endings.hasOwnProperty(key) && endings[key].character === charId) {
                result[key] = endings[key];
            }
        }
        return result;
    }

    function _getCharIdFromKey(key) {
        if (key.indexOf('baoyu') !== -1 && key.indexOf('xiangyun') === -1) return 'jbaoyu';
        if (key.indexOf('ldaiyu') !== -1) return 'ldaiyu';
        if (key.indexOf('xbaochai') !== -1) return 'xbaochai';
        if (key.indexOf('xiangyun') !== -1) return 'shi_xiangyun';
        if (key.indexOf('jiamu') !== -1) return 'jiamu';
        if (key.indexOf('tanchun') !== -1) return 'tanchun';
        if (key.indexOf('xifeng') !== -1 || key.indexOf('wangxifeng') !== -1) return 'wangxifeng';
        if (key.indexOf('liwan') !== -1) return 'liwan';
        if (key.indexOf('miaoyu') !== -1) return 'miaoyu';
        if (key.indexOf('qingwen') !== -1) return 'qingwen';
        if (key.indexOf('xiren') !== -1) return 'xiren';
        if (key.indexOf('cross') !== -1) return 'cross';
        return '';
    }

    function getAllPossibleEndings() {
        var result = [];
        var charMap = {
            jbaoyu: '贾宝玉', ldaiyu: '林黛玉', xbaochai: '薛宝钗',
            shi_xiangyun: '史湘云', jiamu: '贾母', tanchun: '贾探春',
            wangxifeng: '王熙凤', liwan: '李纨', miaoyu: '妙玉',
            qingwen: '晴雯', xiren: '袭人', cross: '群像·联合'
        };
        var charOrder = ['jbaoyu','ldaiyu','xbaochai','shi_xiangyun','jiamu','tanchun','wangxifeng','liwan','miaoyu','qingwen','xiren','cross'];
        var grouped = {};
        charOrder.forEach(function(cId) {
            grouped[cId] = [];
        });

        var storyData = HLM.StoryData || {};
        for (var key in storyData) {
            if (!storyData.hasOwnProperty(key)) continue;
            var node = storyData[key];
            if (!node || !node.isEnding) continue;

            var charId = _getCharIdFromKey(key);
            if (!charId) continue;

            grouped[charId].push({
                id: key,
                title: node.title || '未知结局',
                character: charId,
                characterName: charMap[charId] || '未知',
                poem: node.poem || '',
                collected: isCollected(key)
            });
        }

        charOrder.forEach(function(cId) {
            var endings = grouped[cId];
            if (endings.length === 0) return;
            endings.forEach(function(e) {
                result.push(e);
            });
        });

        return { list: result, grouped: grouped, charOrder: charOrder, charMap: charMap };
    }

    function showScreen(returnTarget) {
        _returnTarget = returnTarget || 'main-menu';

        var data = getAllPossibleEndings();
        var collected = getCollectedCount();
        var total = getTotalCount();

        var screen = document.getElementById('ending-collection-screen');
        if (!screen) return;

        var statsEl = document.getElementById('ending-collection-stats');
        var gridEl = document.getElementById('ending-collection-grid');

        statsEl.innerHTML = '<span class="ending-stats-text">已收集 <strong>' + collected + '</strong> / ' + total + ' 个结局</span>' +
            '<div class="ending-progress-bar"><div class="ending-progress-fill" style="width:' + (total > 0 ? Math.round(collected / total * 100) : 0) + '%;"></div></div>';

        var html = '';
        data.charOrder.forEach(function(cId) {
            var endings = data.grouped[cId];
            if (!endings || endings.length === 0) return;
            var cName = data.charMap[cId] || '未知';
            var charCollected = endings.filter(function(e) { return e.collected; }).length;

            html += '<div class="ending-char-group">';
            html += '<div class="ending-char-header">';
            html += '<span class="ending-char-name">' + cName + '</span>';
            html += '<span class="ending-char-count">' + charCollected + '/' + endings.length + '</span>';
            html += '</div>';
            html += '<div class="ending-char-grid">';

            endings.forEach(function(e) {
                if (e.collected) {
                    html += '<div class="ending-card collected" data-id="' + e.id + '">';
                    html += '<div class="ending-card-title">' + e.title + '</div>';
                    if (e.poem) {
                        html += '<div class="ending-card-poem">' + e.poem.substring(0, 30) + (e.poem.length > 30 ? '...' : '') + '</div>';
                    }
                    html += '</div>';
                } else {
                    html += '<div class="ending-card locked">';
                    html += '<div class="ending-card-title">？？？</div>';
                    html += '<div class="ending-card-poem">未解锁</div>';
                    html += '</div>';
                }
            });

            html += '</div></div>';
        });

        if (!html) {
            html = '<div style="text-align:center;color:var(--color-text-dim);padding:40px;">暂无结局数据</div>';
        }

        gridEl.innerHTML = html;

        gridEl.querySelectorAll('.ending-card.collected').forEach(function(card) {
            card.addEventListener('click', function() {
                var id = this.dataset.id;
                _showEndingDetail(id);
            });
        });

        screen.classList.add('active');
    }

    function hideScreen() {
        var screen = document.getElementById('ending-collection-screen');
        if (screen) {
            screen.classList.remove('active');
        }

        var detailEl = document.getElementById('ending-detail-popup');
        if (detailEl) {
            detailEl.style.display = 'none';
        }
    }

    function _showEndingDetail(endingId) {
        var endings = _loadEndings();
        var data = endings[endingId];
        if (!data) return;

        var detailEl = document.getElementById('ending-detail-popup');
        if (!detailEl) return;

        detailEl.innerHTML =
            '<div class="ending-detail-content">' +
            '<div class="ending-detail-close" id="ending-detail-close">✕</div>' +
            '<div class="ending-detail-title">' + data.title + '</div>' +
            '<div class="ending-detail-character">' + data.characterName + '</div>' +
            '<div class="ending-detail-divider"></div>' +
            '<div class="ending-detail-text">' + (data.text || '') + '</div>' +
            (data.poem ? '<div class="ending-detail-poem">' + data.poem + '</div>' : '') +
            '<div class="ending-detail-meta">达成次数：' + (data.count || 1) + '</div>' +
            '</div>';

        detailEl.style.display = 'flex';

        document.getElementById('ending-detail-close').addEventListener('click', function() {
            detailEl.style.display = 'none';
        });
    }

    return {
        init: init,
        recordEnding: recordEnding,
        getCollectedEndings: getCollectedEndings,
        getCollectedCount: getCollectedCount,
        getTotalCount: getTotalCount,
        isCollected: isCollected,
        getEndingsByCharacter: getEndingsByCharacter,
        getAllPossibleEndings: getAllPossibleEndings,
        showScreen: showScreen,
        hideScreen: hideScreen
    };
})();
