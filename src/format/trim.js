/**
 * @module format
 */

/**
 * @desc 去除字符串两端的空格
 * @param {String} str -字符串
 * @return {String} 返回一个字符串
 */
export function trim(str = "") {
  return str.replace(/^\s+|\s+$/g, "");
}
