"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.trim = trim;

/**
 * @module format
 */

/**
 * @desc 去除字符串两端的空格
 * @param {String} str -字符串
 * @return {String} 返回一个字符串
 */
function trim() {
  var str = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  return str.replace(/^\s+|\s+$/g, "");
}