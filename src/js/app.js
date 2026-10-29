var HLM = window.HLM || {};

(function() {
    var _appInitialized = false;

    function init() {
        if (_appInitialized) return;

        HLM.Engine.init();

        _appInitialized = true;

        console.log('红楼梦模拟器 v1.0.0 初始化完成');
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
