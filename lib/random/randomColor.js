

/**
 * @desc 生成随机的6位16进制颜色值
 * @return String
 */
export function randomColor() {
	// return "#" + (~~(Math.random()*(1<<24))).toString(16);
	return '#' + ('00000' + (Math.random() * 0x1000000 << 0).toString(16)).slice(-6);
}