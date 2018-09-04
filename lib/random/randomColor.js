

/**
 * @desc 生成随机的6位16进制颜色值
 * @returns String
 */

export function randomColor() {
  return "#" + (~~(Math.random() * (1 << 24))).toString(16);
};
