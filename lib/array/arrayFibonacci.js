"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayFibonacci = arrayFibonacci;

/**
 * @module format
 */

/**
 * 斐波那契数组
 * @function
 * @summary 使用Array.reduce（）向数组中添加值，后面的一个数等于前面两个数相加之和（前两个除外）。
 * @param {Number} n - 创建一个特定长度的空数组，初始化前两个值（0和1）。
 * @return {Array} 返回斐波那契数组的指定长度
 * @example
 * arrayFibonacci(5)
 * // returns [0,1,1,2,3]
 */
function arrayFibonacci(n) {
  return Array(n).fill(0).reduce(function (acc, val, i) {
    return acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i);
  }, []);
}