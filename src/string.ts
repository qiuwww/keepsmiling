/**
 * @module string
 */

/// <reference path="../typings.d.ts" />
/**
 * 大写每个单词的首字母
 * @summary 使用replace（）匹配每个单词的第一个字符
 * @function
 * @param {String} str - 需要判断的字符串
 * @return {Boolean}
 * @example
 * stringCapitalizeEveryWord('hello world!')
 * // 'Hello World!'
 */
export const stringCapitalizeEveryWord: Keepsmiling.StringCapitalizeEveryWord = str =>
  str.replace(/\b[a-z]/g, char => char.toUpperCase());
