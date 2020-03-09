"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.digitUppercase = digitUppercase;

/**
 * @module format
 */

/**
 * @desc   现金额转大写
 * @param  {Number} n - 金额
 * @return {String}
 * @example
 * digitUppercase(1000292);
 * // "壹佰万零贰佰玖拾贰元整"
 */
function digitUppercase(n) {
  if (1000000000000 <= n) {
    return "超限";
  }

  var fraction = ["角", "分"];
  var digit = ["零", "壹", "贰", "叁", "肆", "伍", "陆", "柒", "捌", "玖"];
  var unit = [["元", "万", "亿"], ["", "拾", "佰", "仟"]];
  var head = n < 0 ? "欠" : "";
  n = Math.abs(n);
  var s = "";

  for (var i = 0; i < fraction.length; i++) {
    s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, "");
  }

  s = s || "整";
  n = Math.floor(n);

  for (var _i = 0; _i < unit[0].length && n > 0; _i++) {
    var p = "";

    for (var j = 0; j < unit[1].length && n > 0; j++) {
      p = digit[n % 10] + unit[1][j] + p;
      n = Math.floor(n / 10);
    }

    s = p.replace(/(零.)*零$/, "").replace(/^$/, "零") + unit[0][_i] + s;
  }

  return head + s.replace(/(零.)*零元/, "元").replace(/(零.)+/g, "零").replace(/^整$/, "零元整");
}