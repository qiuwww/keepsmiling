"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.arrayMin = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

/**
 * @module array
 */

/**
 * 从数组中获取最小值
 * @function
 * @summary 使用Math.min（）与 spread运算符（...）结合得到数组中的最大值。
 * @param {Array} arr - 传入的数组，或者类数组
 * @return {Nummber} 返回当前数组的最小值
 * @example
 * arrayMin([10, 1, 5])
 * // returns 1
 */
var arrayMin = function arrayMin(arr) {
  return Math.min.apply(Math, (0, _toConsumableArray2["default"])(arr));
};

exports.arrayMin = arrayMin;