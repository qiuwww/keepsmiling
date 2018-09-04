/**
 * @description 检测字符串是不是回文结构
 * @param {String} str [需要检测的字符串]
 * @return {Boolean}   [返回的boolan值]
 */
export function isPalindrome(str) {
  str = str.replace(/W/g, "").toLowerCase();
  return (str === str.split("").reverse().join(""));
}
