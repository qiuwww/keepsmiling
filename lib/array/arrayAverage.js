"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayAverage = arrayAverage;

/**
 * @module format
 */

/**
 * 获取数组的平均值
 * @function
 * @param {Array} arr - 输入数组
 * @return {number} 返回数组的平均值
 * @example
 * arrayAverage([1,2,3]);
 * // returns 2
 */
function arrayAverage(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce(function (acc, cur) {
      return acc + cur;
    }, 0) / arr.length;
  } else {
    throw Error("arrayAverage函数需要一个数组类型的参数");
  }
}