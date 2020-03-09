"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.deepClone = deepClone;
exports.objectCopyData = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

/**
 * @desc 深拷贝，支持常见类型
 * @summary
 * 1. assign复制深层的引用对象，复制的只是一个引用；
 * 2. JSON的方法，不能复制function和prototype；
 * 3. 真正的复制，必须遍历依次复制；
 * @param {Any} values 需要拷贝的类型
 * @return {Any} 返回对应的数据结构
 */
function deepClone(values) {
  var copy; // Handle the 3 simple types, and null or undefined

  if (values == null || (0, _typeof2["default"])(values) !== "object") return values; // Handle Date

  if (values instanceof Date) {
    copy = new Date();
    copy.setTime(values.getTime());
    return copy;
  } // Handle Array


  if (values instanceof Array) {
    copy = [];

    for (var i = 0, len = values.length; i < len; i++) {
      copy[i] = deepClone(values[i]);
    }

    return copy;
  } // Handle Object


  if (values instanceof Object) {
    copy = {};

    for (var attr in values) {
      if (values.hasOwnProperty(attr)) copy[attr] = deepClone(values[attr]);
    }

    return copy;
  }

  throw new Error("Unable to copy values! Its type isn't supported.");
}
/**
 * 如果只需要克隆数据，这个足以
 * @summary 这种方式对于prototype和function无法操作
 * @param  {Any} target 需要复制的内容
 * @return {Object} obj
 */


var objectCopyData = function objectCopyData() {
  var target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  return JSON.parse(JSON.stringify(target));
};

exports.objectCopyData = objectCopyData;