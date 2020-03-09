/**
 * @module is
 */
/**
 * @desc 判断`obj`是否为空
 * @param {Object} obj object
 * @return {Boolean}
 */

export function isEmptyObject(obj) {
  if (!obj || typeof obj !== "object" || Array.isArray(obj)) return false;
  return !Object.keys(obj).length;
}

/**
 * @desc   判断是否为邮箱地址
 * @param  {String}  str - 邮箱地址
 * @return {Boolean}
 */
export function isEmail(str) {
  return /\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/.test(str);
}
/**
 * @desc  判断是否为身份证号
 * @param  {String} code - 身份证号
 * @return {Object} 包括返回结果的状态及提示信息
 */
export function isIdCard(code) {
  // return /^(^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$)|(^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[Xx])$)$/.test(str);
  let city = {
    11: "北京",
    12: "天津",
    13: "河北",
    14: "山西",
    15: "内蒙古",
    21: "辽宁",
    22: "吉林",
    23: "黑龙江 ",
    31: "上海",
    32: "江苏",
    33: "浙江",
    34: "安徽",
    35: "福建",
    36: "江西",
    37: "山东",
    41: "河南",
    42: "湖北 ",
    43: "湖南",
    44: "广东",
    45: "广西",
    46: "海南",
    50: "重庆",
    51: "四川",
    52: "贵州",
    53: "云南",
    54: "西藏 ",
    61: "陕西",
    62: "甘肃",
    63: "青海",
    64: "宁夏",
    65: "新疆",
    71: "台湾",
    81: "香港",
    82: "澳门",
    91: "国外 ",
  };
  let tip = "";
  let pass = true;
  if (
    !code ||
    !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i.test(code)
  ) {
    tip = "身份证号格式错误";
    pass = false;
  } else if (!city[code.substr(0, 2)]) {
    tip = "地址编码错误";
    pass = false;
  } else {
    //18位身份证需要验证最后一位校验位
    if (code.length == 18) {
      code = code.split("");
      //∑(ai×Wi)(mod 11)
      //加权因子
      let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2];
      //校验位
      let parity = [1, 0, "X", 9, 8, 7, 6, 5, 4, 3, 2];
      let sum = 0;
      let ai = 0;
      let wi = 0;
      for (let i = 0; i < 17; i++) {
        ai = code[i];
        wi = factor[i];
        sum += ai * wi;
      }
      if (parity[sum % 11] != code[17]) {
        tip = "校验位错误";
        pass = false;
      }
    }
  }
  return { pass, tip };
}
/**
 * @desc   判断是否为手机号
 * @param  {String} str - 手机号的数值型或者字符串
 * @return {Boolean}
 */
export function isPhoneNum(str) {
  return /^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/.test(str);
}
/**
 * @desc   判断是否为URL地址
 * @param  {String} str - URL地址
 * @return {Boolean}
 */
export function isUrl(str) {
  return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/i.test(str);
}

/**
 * 判断是纯对象（非数组，非函数）
 * @param {object} obj 需要判断的对象
 * @return {Boolean}
 */
export const isObject = function(obj) {
  if (obj && typeof obj === "object" && obj.toString === "[object Object]") {
    return true;
  } else {
    return false;
  }
};

/**
 * 检测是不是指数
 * @param {*} n - 需要判断的数值
 */
export function isPrime(n) {
  return !/^.?$|^(..+?)\1+$/.test("1".repeat(n));
}

/**
 * @desc 添加js的类型判断函数
 * @return {function}
 */

export const typeJudg = (() => {
  const typeJudg = {};
  const types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(" ");
  function type() {
    return Object.prototype.toString.call(this).slice(8, -1);
  }
  for (let i = types.length; i--; ) {
    typeJudg["is" + types[i]] = (function(self) {
      return function(elem) {
        return type.call(elem) === self;
      };
    })(types[i]);
  }
  return typeJudg;
})(); //类型判断

/**
 * 判断是不是在node环境下执行代码
 * @summary Only Node.JS has a process letiable that is of [[Class]] process
 * @param {object} - 当前的全局process对象
 * @return {Boolean}
 */
export const isBrowserEnv = process =>
  Object.prototype.toString.call(typeof process !== "undefined" ? process : 0) ===
  "[object process]";
/**
 * @function
 * @description 检测字符串是不是回文结构
 * @param {String} str - 需要检测的字符串
 * @return {Boolean} 返回的boolan值
 * @example
 * isPalindrome("level");
 * // returns true
 * isPalindrome("levels");
 * // returns false
 */
export function isPalindrome(str) {
  str = str.replace(/W/g, "").toLowerCase();
  return (
    str ===
    str
      .split("")
      .reverse()
      .join("")
  );
}
