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
export const arrayMin = arr => Math.min(...arr);
