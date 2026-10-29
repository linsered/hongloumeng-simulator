var HLM = window.HLM || {};

HLM.Loader = (function() {
    var _resources = {};
    var _loadingQueue = [];
    var _loadedCount = 0;
    var _totalCount = 0;
    var _onProgress = null;
    var _onComplete = null;
    var _onError = null;

    function registerResource(id, type, src) {
        _resources[id] = {
            id: id,
            type: type,
            src: src,
            loaded: false,
            data: null,
            error: null
        };
        _loadingQueue.push(id);
        _totalCount++;
    }

    function registerBatch(resources) {
        resources.forEach(function(res) {
            registerResource(res.id, res.type, res.src);
        });
    }

    function loadAll(onProgress, onComplete, onError) {
        _onProgress = onProgress;
        _onComplete = onComplete;
        _onError = onError;
        _loadedCount = 0;

        if (_loadingQueue.length === 0) {
            if (_onComplete) _onComplete();
            return;
        }

        var queue = _loadingQueue.slice();
        _loadingQueue = [];

        queue.forEach(function(id) {
            var resource = _resources[id];
            switch (resource.type) {
                case 'image':
                    _loadImage(resource);
                    break;
                case 'audio':
                    _loadAudio(resource);
                    break;
                case 'json':
                    _loadJSON(resource);
                    break;
                case 'font':
                    _loadFont(resource);
                    break;
                default:
                    resource.loaded = true;
                    _onResourceLoaded(resource);
            }
        });
    }

    function _loadImage(resource) {
        var img = new Image();
        img.onload = function() {
            resource.data = img;
            resource.loaded = true;
            _onResourceLoaded(resource);
        };
        img.onerror = function() {
            resource.error = 'Failed to load image: ' + resource.src;
            resource.loaded = true;
            resource.data = _createPlaceholderImage();
            _onResourceLoaded(resource);
        };
        img.src = resource.src;
    }

    function _loadAudio(resource) {
        var audio = new Audio();
        audio.preload = 'auto';
        audio.oncanplaythrough = function() {
            resource.data = audio;
            resource.loaded = true;
            _onResourceLoaded(resource);
        };
        audio.onerror = function() {
            resource.error = 'Failed to load audio: ' + resource.src;
            resource.loaded = true;
            resource.data = null;
            _onResourceLoaded(resource);
        };
        audio.src = resource.src;
    }

    function _loadJSON(resource) {
        var xhr = new XMLHttpRequest();
        xhr.open('GET', resource.src, true);
        xhr.onload = function() {
            if (xhr.status === 200) {
                try {
                    resource.data = JSON.parse(xhr.responseText);
                } catch(e) {
                    resource.error = 'Invalid JSON: ' + resource.src;
                }
            } else {
                resource.error = 'HTTP ' + xhr.status + ': ' + resource.src;
            }
            resource.loaded = true;
            _onResourceLoaded(resource);
        };
        xhr.onerror = function() {
            resource.error = 'Network error: ' + resource.src;
            resource.loaded = true;
            _onResourceLoaded(resource);
        };
        xhr.send();
    }

    function _loadFont(resource) {
        if (document.fonts && document.fonts.load) {
            document.fonts.load('16px ' + resource.id).then(function() {
                resource.data = true;
                resource.loaded = true;
                _onResourceLoaded(resource);
            }).catch(function() {
                resource.data = true;
                resource.loaded = true;
                _onResourceLoaded(resource);
            });
        } else {
            setTimeout(function() {
                resource.data = true;
                resource.loaded = true;
                _onResourceLoaded(resource);
            }, 100);
        }
    }

    function _onResourceLoaded(resource) {
        _loadedCount++;
        var progress = _totalCount > 0 ? _loadedCount / _totalCount : 1;

        if (_onProgress) {
            _onProgress(progress, _loadedCount, _totalCount, resource);
        }

        if (resource.error && _onError) {
            _onError(resource);
        }

        if (_loadedCount >= _totalCount && _onComplete) {
            _onComplete();
        }
    }

    function _createPlaceholderImage() {
        var canvas = document.createElement('canvas');
        canvas.width = 200;
        canvas.height = 300;
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = '#2a1a1a';
        ctx.fillRect(0, 0, 200, 300);
        ctx.fillStyle = '#8b6914';
        ctx.font = '14px serif';
        ctx.textAlign = 'center';
        ctx.fillText('图片加载失败', 100, 155);
        return canvas;
    }

    function get(id) {
        return _resources[id] ? _resources[id].data : null;
    }

    function isLoaded(id) {
        return _resources[id] ? _resources[id].loaded : false;
    }

    function getProgress() {
        return _totalCount > 0 ? _loadedCount / _totalCount : 0;
    }

    function preloadCriticalResources() {
        return new Promise(function(resolve) {
            var criticalCSS = [
                'src/css/main.css',
                'src/css/ui.css',
                'src/css/scenes.css',
                'src/css/characters.css',
                'src/css/animations.css'
            ];

            var loaded = 0;
            criticalCSS.forEach(function(href) {
                var link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = href;
                link.onload = link.onerror = function() {
                    loaded++;
                    if (loaded >= criticalCSS.length) {
                        resolve();
                    }
                };
                if (!document.querySelector('link[href="' + href + '"]')) {
                    document.head.appendChild(link);
                } else {
                    loaded++;
                    if (loaded >= criticalCSS.length) resolve();
                }
            });

            if (criticalCSS.length === 0) resolve();
        });
    }

    return {
        registerResource: registerResource,
        registerBatch: registerBatch,
        loadAll: loadAll,
        get: get,
        isLoaded: isLoaded,
        getProgress: getProgress,
        preloadCriticalResources: preloadCriticalResources
    };
})();
