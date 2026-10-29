var HLM = window.HLM || {};

HLM.UI = (function() {
    function createNotification(message, type, duration) {
        type = type || 'info';
        duration = duration || 3000;

        var existing = document.querySelector('.notification');
        if (existing) existing.remove();

        var notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;

        if (type === 'success') {
            notification.style.borderColor = '#4caf50';
            notification.style.color = '#81c784';
        } else if (type === 'warning') {
            notification.style.borderColor = '#ff9800';
            notification.style.color = '#ffb74d';
        } else if (type === 'error') {
            notification.style.borderColor = '#f44336';
            notification.style.color = '#ef5350';
        }

        document.body.appendChild(notification);

        requestAnimationFrame(function() {
            notification.classList.add('show');
        });

        setTimeout(function() {
            notification.classList.remove('show');
            setTimeout(function() {
                if (notification.parentNode) notification.parentNode.removeChild(notification);
            }, 400);
        }, duration);
    }

    function createToast(message, type) {
        type = type || 'info';

        var container = document.querySelector('.toast-container');
        if (!container) {
            container = document.createElement('div');
            container.className = 'toast-container';
            document.body.appendChild(container);
        }

        var toast = document.createElement('div');
        toast.className = 'toast toast-' + type;
        toast.textContent = message;

        container.appendChild(toast);

        setTimeout(function() {
            if (toast.parentNode) toast.parentNode.removeChild(toast);
        }, 3000);
    }

    function createProgressBar(container, value, max, label) {
        var wrapper = document.createElement('div');
        wrapper.style.marginBottom = '8px';

        if (label) {
            var labelEl = document.createElement('div');
            labelEl.style.cssText = 'display:flex;justify-content:space-between;margin-bottom:4px;';
            labelEl.innerHTML =
                '<span style="color:var(--color-text-dim);font-size:0.85em;">' + label + '</span>' +
                '<span style="color:var(--color-gold);font-size:0.85em;">' + value + '/' + max + '</span>';
            wrapper.appendChild(labelEl);
        }

        var bar = document.createElement('div');
        bar.className = 'progress-bar';
        var fill = document.createElement('div');
        fill.className = 'progress-bar-fill';
        fill.style.width = (max > 0 ? (value / max * 100) : 0) + '%';
        bar.appendChild(fill);
        wrapper.appendChild(bar);

        if (container) container.appendChild(wrapper);
        return wrapper;
    }

    function createAttributeBar(attrName, value, maxValue, attrKey) {
        var wrapper = document.createElement('div');
        wrapper.className = 'char-attribute-bar';

        var label = document.createElement('span');
        label.className = 'attr-label';
        var attrNames = { wisdom: '智慧', charm: '魅力', talent: '才华', emotion: '情感', fortune: '福气', health: '健康' };
        label.textContent = attrNames[attrKey] || attrName;
        wrapper.appendChild(label);

        var bar = document.createElement('div');
        bar.className = 'attr-bar';
        var fill = document.createElement('div');
        fill.className = 'attr-fill ' + attrKey;
        fill.style.width = (maxValue > 0 ? (value / maxValue * 100) : 0) + '%';
        bar.appendChild(fill);
        wrapper.appendChild(bar);

        var val = document.createElement('span');
        val.className = 'attr-value';
        val.textContent = value;
        wrapper.appendChild(val);

        return wrapper;
    }

    function createRelationshipNode(charId, relData) {
        var ch = HLM.CharacterData[charId];
        if (!ch) return null;

        var node = document.createElement('div');
        node.className = 'rel-node';

        var emoji = document.createElement('span');
        emoji.className = 'rel-emoji';
        emoji.textContent = ch.portrait;
        node.appendChild(emoji);

        var name = document.createElement('span');
        name.className = 'rel-name';
        name.textContent = ch.name;
        node.appendChild(name);

        if (relData && relData.type) {
            var badge = document.createElement('span');
            badge.className = 'rel-type-badge';
            badge.textContent = relData.type;
            node.appendChild(badge);
        }

        return node;
    }

    function showModal(title, content, buttons) {
        var overlay = document.createElement('div');
        overlay.className = 'modal-overlay';

        var modal = document.createElement('div');
        modal.className = 'modal-content';

        var titleEl = document.createElement('h3');
        titleEl.style.cssText = 'font-family:var(--font-title);color:var(--color-gold);margin-bottom:15px;text-align:center;';
        titleEl.textContent = title;
        modal.appendChild(titleEl);

        var contentEl = document.createElement('div');
        contentEl.style.cssText = 'line-height:1.8;color:var(--color-text);margin-bottom:20px;';
        if (typeof content === 'string') {
            contentEl.innerHTML = content;
        } else {
            contentEl.appendChild(content);
        }
        modal.appendChild(contentEl);

        if (buttons && buttons.length > 0) {
            var btnGroup = document.createElement('div');
            btnGroup.className = 'btn-group';
            btnGroup.style.cssText = 'justify-content:center;';

            buttons.forEach(function(btnDef) {
                var btn = document.createElement('button');
                btn.className = 'menu-btn' + (btnDef.primary ? ' primary' : '');
                btn.textContent = btnDef.text;
                btn.addEventListener('click', function() {
                    if (btnDef.action) btnDef.action();
                    closeModal(overlay);
                });
                btnGroup.appendChild(btn);
            });
            modal.appendChild(btnGroup);
        }

        overlay.appendChild(modal);
        document.body.appendChild(overlay);

        requestAnimationFrame(function() {
            overlay.classList.add('active');
        });

        overlay.addEventListener('click', function(e) {
            if (e.target === overlay) {
                closeModal(overlay);
            }
        });

        return overlay;
    }

    function closeModal(overlay) {
        if (!overlay) return;
        overlay.classList.remove('active');
        setTimeout(function() {
            if (overlay.parentNode) overlay.parentNode.removeChild(overlay);
        }, 300);
    }

    function createTabBar(tabs, onTabChange) {
        var bar = document.createElement('div');
        bar.className = 'tab-bar';

        tabs.forEach(function(tab, idx) {
            var item = document.createElement('button');
            item.className = 'tab-item' + (idx === 0 ? ' active' : '');
            item.textContent = tab.label;
            item.dataset.tabId = tab.id;

            item.addEventListener('click', function() {
                bar.querySelectorAll('.tab-item').forEach(function(t) {
                    t.classList.remove('active');
                });
                item.classList.add('active');
                if (onTabChange) onTabChange(tab.id);
            });

            bar.appendChild(item);
        });

        return bar;
    }

    function formatTime(ms) {
        var seconds = Math.floor(ms / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);

        if (hours > 0) {
            return hours + '小时' + (minutes % 60) + '分钟';
        }
        if (minutes > 0) {
            return minutes + '分钟' + (seconds % 60) + '秒';
        }
        return seconds + '秒';
    }

    function formatDate(timestamp) {
        var d = new Date(timestamp);
        return d.getFullYear() + '/' + (d.getMonth() + 1) + '/' + d.getDate() + ' ' +
            d.getHours() + ':' + String(d.getMinutes()).padStart(2, '0');
    }

    return {
        createNotification: createNotification,
        createToast: createToast,
        createProgressBar: createProgressBar,
        createAttributeBar: createAttributeBar,
        createRelationshipNode: createRelationshipNode,
        showModal: showModal,
        closeModal: closeModal,
        createTabBar: createTabBar,
        formatTime: formatTime,
        formatDate: formatDate
    };
})();
