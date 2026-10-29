var HLM = window.HLM || {};

HLM.CharacterSystem = (function() {
    var _selectedCharacter = null;

    function showCharacterSelect() {
        HLM.Engine.switchScreen('character-select');
        _renderCharacterGrid();
    }

    function _renderCharacterGrid() {
        var grid = document.getElementById('character-grid');
        grid.innerHTML = '';

        var chars = HLM.CharacterData;
        for (var id in chars) {
            if (!chars.hasOwnProperty(id)) continue;
            var ch = chars[id];
            var card = document.createElement('div');
            card.className = 'char-card';
            card.dataset.id = id;
            card.innerHTML =
                '<div class="char-portrait">' + ch.portrait + '</div>' +
                '<div class="char-name">' + ch.name + '</div>' +
                '<div class="char-title">' + ch.title + '</div>';
            card.addEventListener('click', function() {
                _selectCharacter(this.dataset.id);
            });
            grid.appendChild(card);
        }
    }

    function _selectCharacter(id) {
        _selectedCharacter = id;
        var cards = document.querySelectorAll('.char-card');
        cards.forEach(function(c) {
            c.classList.toggle('selected', c.dataset.id === id);
        });

        var ch = HLM.CharacterData[id];
        var detail = document.getElementById('character-detail');
        detail.style.display = 'block';

        document.getElementById('detail-portrait').textContent = ch.portrait;
        document.getElementById('detail-name').textContent = ch.name;
        document.getElementById('detail-title').textContent = ch.title;

        var attrsHtml = '';
        var attrNames = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
        for (var key in ch.attributes) {
            if (ch.attributes.hasOwnProperty(key)) {
                attrsHtml += '<div class="attr-item"><span class="attr-label">' + (attrNames[key] || key) + '</span><span class="attr-value">' + ch.attributes[key] + '</span></div>';
            }
        }
        document.getElementById('detail-attributes').innerHTML = attrsHtml;
        document.getElementById('detail-background').innerHTML = '<h4 style="color:#d4a030;margin-bottom:8px;">背景故事</h4><p>' + ch.background + '</p>';

        var relsHtml = '<h4 style="color:#d4a030;margin-bottom:8px;">人物关系</h4>';
        for (var relKey in ch.relationships) {
            if (!ch.relationships.hasOwnProperty(relKey)) continue;
            var rel = ch.relationships[relKey];
            var relChar = HLM.CharacterData[relKey];
            var relName = relChar ? relChar.name : relKey;
            relsHtml += '<div class="rel-item"><span class="rel-name">' + relName + '</span><span class="rel-type">' + rel.type + '</span><div class="rel-bar"><div class="rel-bar-fill" style="width:' + rel.value + '%"></div></div></div>';
        }
        document.getElementById('detail-relationships').innerHTML = relsHtml;

        var storiesHtml = '<h4 style="color:#d4a030;margin-bottom:8px;">专属剧情线</h4>';
        ch.storylines.forEach(function(sl) {
            storiesHtml += '<div class="storyline-item"><div class="storyline-name">' + sl.name + '</div><div class="storyline-desc">' + sl.desc + '</div></div>';
        });
        document.getElementById('detail-storylines').innerHTML = storiesHtml;
    }

    function confirmSelection() {
        if (!_selectedCharacter) return;
        HLM.Engine.startGame(_selectedCharacter);
    }

    function showInfo() {
        var panel = document.getElementById('side-panel');
        document.getElementById('panel-title').textContent = '角色信息';
        var ch = HLM.CharacterData[HLM.State.get('character')];
        if (!ch) return;

        var attrs = HLM.State.get('attributes');
        var attrNames = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
        var html = '<div style="text-align:center;margin-bottom:15px;"><span style="font-size:3em;">' + ch.portrait + '</span><h3 style="color:#d4a030;">' + ch.name + '</h3><p style="color:#a89888;">' + ch.title + '</p></div>';
        html += '<div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;">';
        for (var key in attrs) {
            if (attrs.hasOwnProperty(key)) {
                html += '<div class="attr-item"><span class="attr-label">' + (attrNames[key] || key) + '</span><span class="attr-value">' + attrs[key] + '</span></div>';
            }
        }
        html += '</div>';
        document.getElementById('panel-content').innerHTML = html;
        panel.style.display = 'block';
    }

    function showRelationships() {
        var panel = document.getElementById('side-panel');
        document.getElementById('panel-title').textContent = '人物关系';
        var rels = HLM.State.get('relationships') || {};
        var html = '';
        for (var key in rels) {
            if (!rels.hasOwnProperty(key)) continue;
            var ch = HLM.CharacterData[key];
            var name = ch ? ch.name : key;
            var val = typeof rels[key] === 'object' ? (rels[key].value || 50) : rels[key];
            html += '<div class="rel-item"><span class="rel-name">' + name + '</span><div class="rel-bar" style="width:100px;"><div class="rel-bar-fill" style="width:' + val + '%"></div></div><span style="color:#d4a030;font-size:0.9em;">' + val + '</span></div>';
        }
        if (!html) html = '<div class="empty-message">暂无关系数据</div>';
        document.getElementById('panel-content').innerHTML = html;
        panel.style.display = 'block';
    }

    return {
        showCharacterSelect: showCharacterSelect,
        confirmSelection: confirmSelection,
        showInfo: showInfo,
        showRelationships: showRelationships
    };
})();
