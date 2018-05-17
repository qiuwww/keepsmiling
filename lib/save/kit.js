// kit.js
// http://imweb.io/topic/5704a23a06f2400432c1397f
/* 事件停止被触发N秒后才会再次触发回调，防抖动函数
 * @param {Function} func - 回调执行函数
 * @param {String} wait - 触发间隔
 * @param {Boolean} immediate - 是否延时执行
 */
function debounce(func, wait, immediate) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
};

// Usage
var myEfficientFn = debounce(function() {
    // todo
}, 250);
window.addEventListener('resize', myEfficientFn);


/* 轮询条件函数，根据状态执行相应回调
 * @param {Function} fn- 条件函数
 * @param {Function} callback - 成功回调
 * @param {Function} errback - 失败回调
 * @param {int} timeout - 超时间隔
 * @param {int} interval - 轮询间隔
 */
export function poll(fn, callback, errback, timeout, interval) {
    var endTime = Number(new Date()) + (timeout || 2000);
    interval = interval || 100;

    (function p() {
            // If the condition is met, we're done! 
            if(fn()) {
                callback();
            }
            // If the condition isn't met but the timeout hasn't elapsed, go again
            else if (Number(new Date()) < endTime) {
                setTimeout(p, interval);
            }
            // Didn't match and too much time, reject!
            else {
                errback(new Error('timed out for ' + fn + ': ' + arguments));
            }
    })();
}

// Usage:  ensure element is visible
poll(
    function() {
        return document.getElementById('lightbox').offsetWidth > 0;
    },
    function() {
        // Done, success callback
    },
    function() {
        // Error, failure callback
    }
);


// once
// 实用的执行一次函数，不用多解释。虽然很简单的函数，但是防止重复加载或者初始化的习惯必须养成。
function once(fn, context) { 
    var result;

    return function() { 
        if(fn) {
            result = fn.apply(context || this, arguments);
            fn = null;
        }

        return result;
    };
}

// Usage
var canOnlyFireOnce = once(function() {
    console.log('Fired!');
});