var HLM = window.HLM || {};

HLM.Animations = (function() {
    var _activeAnimations = [];

    function sceneTransition(fromScene, toScene, callback) {
        var container = document.getElementById('scene-container');
        var bg = document.getElementById('scene-background');

        bg.classList.add('transitioning');

        setTimeout(function() {
            if (callback) callback();

            bg.classList.remove('transitioning');
        }, 800);
    }

    function showSceneName(name) {
        var existing = document.querySelector('.scene-name-display');
        if (existing) existing.remove();

        var display = document.createElement('div');
        display.className = 'scene-name-display';
        display.textContent = name;

        var container = document.getElementById('scene-container');
        container.appendChild(display);

        requestAnimationFrame(function() {
            display.classList.add('show');
        });

        setTimeout(function() {
            if (display.parentNode) {
                display.parentNode.removeChild(display);
            }
        }, 3000);
    }

    function particleBurst(x, y, color, count) {
        count = count || 12;
        color = color || '#d4a030';

        var container = document.getElementById('scene-effects');
        if (!container) return;

        var burst = document.createElement('div');
        burst.className = 'particle-burst';
        burst.style.left = x + 'px';
        burst.style.top = y + 'px';

        for (var i = 0; i < count; i++) {
            var particle = document.createElement('div');
            particle.className = 'particle';
            particle.style.backgroundColor = color;

            var angle = (Math.PI * 2 * i) / count;
            var distance = 30 + Math.random() * 50;
            particle.style.setProperty('--px', Math.cos(angle) * distance + 'px');
            particle.style.setProperty('--py', Math.sin(angle) * distance + 'px');

            burst.appendChild(particle);
        }

        container.appendChild(burst);

        setTimeout(function() {
            if (burst.parentNode) burst.parentNode.removeChild(burst);
        }, 1200);
    }

    function inkSplash(x, y) {
        var container = document.getElementById('scene-effects');
        if (!container) return;

        var splash = document.createElement('div');
        splash.className = 'ink-splash';
        splash.style.left = x + 'px';
        splash.style.top = y + 'px';

        for (var i = 0; i < 5; i++) {
            var drop = document.createElement('div');
            drop.className = 'ink-drop';
            var size = 10 + Math.random() * 30;
            drop.style.width = size + 'px';
            drop.style.height = size + 'px';
            drop.style.left = (Math.random() * 40 - 20) + 'px';
            drop.style.top = (Math.random() * 40 - 20) + 'px';
            drop.style.animationDelay = (Math.random() * 0.3) + 's';
            splash.appendChild(drop);
        }

        container.appendChild(splash);

        setTimeout(function() {
            if (splash.parentNode) splash.parentNode.removeChild(splash);
        }, 2000);
    }

    function screenFlash(color, duration) {
        color = color || 'rgba(255, 255, 255, 0.3)';
        duration = duration || 300;

        var flash = document.createElement('div');
        flash.style.cssText =
            'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:' + color + ';pointer-events:none;z-index:999;' +
            'animation:fadeIn ' + (duration / 2) + 'ms ease, fadeOut ' + (duration / 2) + 'ms ease ' + (duration / 2) + 'ms forwards;';

        document.body.appendChild(flash);

        setTimeout(function() {
            if (flash.parentNode) flash.parentNode.removeChild(flash);
        }, duration + 100);
    }

    function shakeElement(element, intensity, duration) {
        intensity = intensity || 5;
        duration = duration || 500;

        if (!element) return;
        element.style.animation = 'shake ' + duration + 'ms ease';

        setTimeout(function() {
            element.style.animation = '';
        }, duration);
    }

    function fadeInElement(element, duration, callback) {
        duration = duration || 500;
        if (!element) return;

        element.style.opacity = '0';
        element.style.display = '';
        element.style.transition = 'opacity ' + duration + 'ms ease';

        requestAnimationFrame(function() {
            element.style.opacity = '1';
        });

        if (callback) {
            setTimeout(callback, duration);
        }
    }

    function fadeOutElement(element, duration, callback) {
        duration = duration || 500;
        if (!element) return;

        element.style.transition = 'opacity ' + duration + 'ms ease';
        element.style.opacity = '0';

        setTimeout(function() {
            element.style.display = 'none';
            if (callback) callback();
        }, duration);
    }

    function slideInElement(element, direction, duration, callback) {
        duration = duration || 400;
        if (!element) return;

        var transforms = {
            left: 'translateX(-100%)',
            right: 'translateX(100%)',
            up: 'translateY(-100%)',
            down: 'translateY(100%)'
        };

        element.style.transform = transforms[direction] || transforms.left;
        element.style.opacity = '0';
        element.style.display = '';
        element.style.transition = 'transform ' + duration + 'ms cubic-bezier(0.4,0,0.2,1), opacity ' + duration + 'ms ease';

        requestAnimationFrame(function() {
            element.style.transform = 'translate(0, 0)';
            element.style.opacity = '1';
        });

        if (callback) {
            setTimeout(callback, duration);
        }
    }

    function createFloatingText(text, x, y, color, duration) {
        color = color || '#d4a030';
        duration = duration || 1500;

        var el = document.createElement('div');
        el.textContent = text;
        el.style.cssText =
            'position:fixed;left:' + x + 'px;top:' + y + 'px;' +
            'color:' + color + ';font-family:var(--font-title);' +
            'font-size:1.2em;pointer-events:none;z-index:200;' +
            'animation:slideUp ' + duration + 'ms ease forwards;';

        document.body.appendChild(el);

        setTimeout(function() {
            if (el.parentNode) el.parentNode.removeChild(el);
        }, duration + 100);
    }

    function createWeatherEffect(type, container) {
        container = container || document.getElementById('scene-effects');
        if (!container) return;

        container.innerHTML = '';

        switch (type) {
            case 'rain':
                for (var i = 0; i < 30; i++) {
                    var drop = document.createElement('div');
                    drop.className = 'raindrop';
                    drop.style.left = Math.random() * 100 + '%';
                    drop.style.animationDuration = (0.5 + Math.random() * 0.5) + 's';
                    drop.style.animationDelay = Math.random() * 2 + 's';
                    container.appendChild(drop);
                }
                break;
            case 'snow':
                for (var j = 0; j < 20; j++) {
                    var flake = document.createElement('div');
                    flake.className = 'snowflake';
                    flake.style.left = Math.random() * 100 + '%';
                    flake.style.animationDuration = (5 + Math.random() * 10) + 's';
                    flake.style.animationDelay = Math.random() * 5 + 's';
                    flake.style.width = (4 + Math.random() * 8) + 'px';
                    flake.style.height = flake.style.width;
                    container.appendChild(flake);
                }
                break;
            case 'petals':
                for (var k = 0; k < 15; k++) {
                    var petal = document.createElement('div');
                    petal.className = 'scene-particle petal';
                    petal.style.left = Math.random() * 100 + '%';
                    petal.style.animation = 'fall ' + (8 + Math.random() * 12) + 's linear infinite';
                    petal.style.animationDelay = Math.random() * 8 + 's';
                    container.appendChild(petal);
                }
                break;
        }
    }

    function clearWeatherEffect() {
        var container = document.getElementById('scene-effects');
        if (container) container.innerHTML = '';
    }

    return {
        sceneTransition: sceneTransition,
        showSceneName: showSceneName,
        particleBurst: particleBurst,
        inkSplash: inkSplash,
        screenFlash: screenFlash,
        shakeElement: shakeElement,
        fadeInElement: fadeInElement,
        fadeOutElement: fadeOutElement,
        slideInElement: slideInElement,
        createFloatingText: createFloatingText,
        createWeatherEffect: createWeatherEffect,
        clearWeatherEffect: clearWeatherEffect
    };
})();
