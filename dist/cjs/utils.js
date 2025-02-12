"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearRequestTimeout = exports.requestTimeout = void 0;
const requestAnimFrame = (() => {
    if (typeof window !== "undefined") {
        return (window.requestAnimationFrame ||
            window.webkitRequestAnimationFrame ||
            window.mozRequestAnimationFrame ||
            window.oRequestAnimationFrame ||
            window.msRequestAnimationFrame ||
            function cb(callback) {
                window.setTimeout(callback, 1000 / 60);
            });
    }
    return () => {
    };
})();
const requestTimeout = function (fn, delay) {
    if (!window.requestAnimationFrame &&
        !window.webkitRequestAnimationFrame &&
        !(window.mozRequestAnimationFrame && window.mozCancelRequestAnimationFrame) &&
        !window.oRequestAnimationFrame &&
        !window.msRequestAnimationFrame) {
        return window.setTimeout(fn, delay);
    }
    const start = new Date().getTime();
    const handle = { value: 0 };
    function loop() {
        const current = new Date().getTime();
        const delta = current - start;
        if (delta >= delay) {
            fn.call(null);
        }
        else {
            handle.value = requestAnimFrame(loop);
        }
    }
    handle.value = requestAnimFrame(loop);
    return handle;
};
exports.requestTimeout = requestTimeout;
const clearRequestTimeout = function (handle) {
    return window.cancelAnimationFrame
        ? window.cancelAnimationFrame(handle.value)
        : window.webkitCancelAnimationFrame
            ? window.webkitCancelAnimationFrame(handle.value)
            : window.webkitCancelRequestAnimationFrame
                ? window.webkitCancelRequestAnimationFrame(handle.value)
                : window.mozCancelRequestAnimationFrame
                    ? window.mozCancelRequestAnimationFrame(handle.value)
                    : window.oCancelRequestAnimationFrame
                        ? window.oCancelRequestAnimationFrame(handle.value)
                        : window.msCancelRequestAnimationFrame
                            ? window.msCancelRequestAnimationFrame(handle.value)
                            : clearTimeout(handle);
};
exports.clearRequestTimeout = clearRequestTimeout;
//# sourceMappingURL=utils.js.map