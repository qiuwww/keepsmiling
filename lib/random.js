/**
 * @module random
 */
/**
 * @description 生成随机的6位16进制颜色值
 * @returns {String} 返回一个#aabbcc的颜色值
 * @example
 * randomColor();
 * // #aabbcc
 */
export function randomColor () {
  return "#" + (~~(Math.random() * (1 << 24))).toString(16);
}

/**
 * @description 返回一个[min, max]的数值
 * @param  {Number} min - 左边界，不传就是0
 * @param  {Number} max - 右边界，不传默认10000
 * @return {Number} 返回一个数值型的值
 * @example
 * randomNum(1,3);
 * // 1,2,3一个随机的数
 */
export function randomNum (min = 0, max = Math.pow(2, 53) - 1) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
