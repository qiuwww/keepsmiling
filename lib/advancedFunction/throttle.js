"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.throttle = throttle;

/**
 * @desc throttle 函数节流，在延迟delay时间内，如果连续触发就重置一次的时间，d一次uration时间内只允许触发，合并了函数去抖动与函数节流
 * @param {*} func 要处理的函数
 * @param {*} delay 防抖动的时间
 * @param {*} duration 节流的时间间隔
 * @example
 * function scrollFn(){
 *   console.log(1)
 * }
 * window.onscroll = throttle(scrollFn,100,500)
 */
function throttle(func) {
  var delay = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;

  if (typeof func !== "function") {
    throw Error("throttle函数报错: 第一个参数需要是函数类型");
  }

  var timer = null;
  var begin = new Date();
  return function () {
    var context = this,
        args = arguments;
    var current = new Date();
    clearTimeout(timer);

    if (current - begin >= duration) {
      func.apply(context, args);
      begin = current;
    } else {
      timer = setTimeout(function () {
        func.apply(context, args);
      }, delay);
    }
  };
}