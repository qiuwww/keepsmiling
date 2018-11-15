/**
 * @description once
 * @summary 实用的执行一次函数，不用多解释。虽然很简单的函数，但是防止重复加载或者初始化的习惯必须养成。
 * @param {Function} fn - 需要执行一次的函数，被包装后，只有第一次会执行
 * @param {*} context - 当前函数执行的上下问环境
 * @example
 * var canOnlyFireOnce = once(function () {
 *   console.log('Fired!');
 * });
 * canOnlyFireOnce(); // Fired
 * canOnlyFireOnce();
 */
export function once (fn, context) {
  let result;
  return function () {
    if(fn) {
      result = fn.apply(context || this, arguments);
      fn = null;
    }
    return result;
  };
}
