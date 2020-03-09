"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPassTime = formatPassTime;

/**
 * @module format
 */

/**
 * @desc   格式化${startTime}距现在的已过时间
 * @param  {Date} startTime - 现在的时间，格式是距今的毫秒数, 或者字符串型的描述
 * @return {String} - 返回一段描述的语句
 * @example
 * formatPassTime('2018/12/12'); // 默认是时间对应的格式
 * formatPassTime(1542200418000); // 数值型，默认是毫秒数
 */
function formatPassTime(startTime) {
  var currentTime = Date.parse(new Date()),
      time = currentTime - Date.parse(new Date(startTime)),
      day = parseInt(time / (1000 * 60 * 60 * 24)),
      hour = parseInt(time / (1000 * 60 * 60)),
      min = parseInt(time / (1000 * 60)),
      month = parseInt(day / 30),
      year = parseInt(month / 12);
  if (year) return year + "年前";
  if (month) return month + "个月前";
  if (day) return day + "天前";
  if (hour) return hour + "小时前";
  if (min) return min + "分钟前";else return "刚刚";
}