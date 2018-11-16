/**
 * @module array
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
export function arrayAverage(arr) {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, cur) => acc + cur, 0) / arr.length;
  } else {
    throw Error("arrayAverage函数需要一个数组类型的参数");
  }
}
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
export function arrayFibonacci(n) {
  return Array(n).fill(0).reduce((acc, val, i) => acc.concat(i > 1 ? acc[i - 1] + acc[i - 2] : i), []);
}

/**
 * 从数组中获取最大值
 * @function
 * @summary 使用Math.max（）与spread运算符（...）结合得到数组中的最大值。
 * @param {Array} arr - 传入的数组，通过...运算，展开为一组数
 * @return {Nummber} 返回当前数组的最大值
 * @example
 * arrayMax([10, 1, 5]);
 * // returns 10
 */
export const arrayMax = arr => Math.max(...arr);
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
