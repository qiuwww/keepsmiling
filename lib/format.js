/**
 * @module format
 */
/**
 * @desc   现金额转大写
 * @param  {Number} n - 金额
 * @return {String}
 */
export function digitUppercase (n) {
  const fraction = ["角", "分"];
  const digit = [
    "零", "壹", "贰", "叁", "肆",
    "伍", "陆", "柒", "捌", "玖"
  ];
  const unit = [
    ["元", "万", "亿"],
    ["", "拾", "佰", "仟"]
  ];
  const head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  let s = "";
  for(let i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
  }
  s = s || "整";
  n = Math.floor(n);
  for(let i = 0; i < unit[0].length && n > 0; i++) {
    let p = "";
    for(let j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }
    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][i] + s;
  }
  return head + s.replace(/(零.)*零元/, "元")
    .replace(/(零.)+/g, "零")
    .replace(/^整$/, "零元整");
}

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime - 现在的时间，格式是距今的毫秒数, 或者字符串型的描述
 * @return {String} - 返回一段描述的语句
 * @example
 * formatPassTime('2018/12/12'); // 默认是时间对应的格式
 * formatPassTime(1542200418000); // 数值型，默认是毫秒数
 */
export function formatPassTime (startTime) {
  let currentTime = Date.parse(new Date()),
    time = currentTime - Date.parse(new Date(startTime)),
    day = parseInt(time / (1000 * 60 * 60 * 24)),
    hour = parseInt(time / (1000 * 60 * 60)),
    min = parseInt(time / (1000 * 60)),
    month = parseInt(day / 30),
    year = parseInt(month / 12);
  if(year) return year + "年前";
  if(month) return month + "个月前";
  if(day) return day + "天前";
  if(hour) return hour + "小时前";
  if(min) return min + "分钟前";
  else return "刚刚";
}

/**
 * @desc   格式化现在距${endTime}的剩余时间
 * @param  {Date} endTime 剩余时间的截止日期
 * @return {String}
 */
export function formatRemainTime (endTime) {
  const startDate = new Date(); //开始时间
  const endDate = new Date(endTime); //结束时间
  const t = endDate.getTime() - startDate.getTime(); //时间差
  let d = 0,
    h = 0,
    m = 0,
    s = 0;
  if(t >= 0) {
    d = Math.floor(t / 1000 / 3600 / 24);
    h = Math.floor(t / 1000 / 60 / 60 % 24);
    m = Math.floor(t / 1000 / 60 % 60);
    s = Math.floor(t / 1000 % 60);
  }
  return d + "天 " + h + "小时 " + m + "分钟 " + s + "秒";
}

/**
 * 添加千分位，顺便固定小数位
 * @param  {number} num     - 数值型的值
 * @param  {number} fixNum  - 保留的小数位
 * @return {string}         - 返回结果字符串
 * @example
 * thousandsSeparator(123123123.4513212, 2);
 * // returns "123,123,123.45"
 */
export function thousandsSeparator (num, fixNum) {
  if(typeof num !== "number") {
    throw new Error("传入的数据应为数值型");
  }
  return (num.toFixed(fixNum) + "").replace(/\d{1,3}(?=(\d{3})+(\.\d*)?$)/g, "$&,");
}

/**
 * @desc 去除字符串两端的空格
 * @param {String} str -字符串
 * @return {String} 返回一个字符串
 */
export function trim (str = "") {
  return str.replace(/^\s+|\s+$/g, "");
}
