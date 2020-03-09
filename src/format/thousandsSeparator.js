/**
 * @module format
 */

/**
 * 添加千分位，顺便固定小数位
 * @param  {number} num     - 数值型的值
 * @param  {number} fixNum  - 保留的小数位
 * @return {string} 返回结果字符串
 * @example
 * thousandsSeparator(123123123.4513212, 2);
 * // returns "123,123,123.45"
 */
export function thousandsSeparator(num, fixNum) {
  if (typeof num !== "number") {
    throw new Error("传入的数据应为数值型");
  }
  return (num.toFixed(fixNum) + "").replace(
    /\d{1,3}(?=(\d{3})+(\.\d*)?$)/g,
    "$&,"
  );
}
