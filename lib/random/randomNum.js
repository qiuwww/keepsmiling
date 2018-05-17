
/**
 * @description 返回一个[min, max]的数值
 * @param  {Number} min [左边界，不传就是0]
 * @param  {Number} max [右边界，不传默认10000]
 * @return {Number}     [返回一个数值型的值]
 */
export function randomNum(min = 0, max = Math.pow(2, 53) - 1) {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}