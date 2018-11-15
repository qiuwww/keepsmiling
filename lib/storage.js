/**
 * @module storage
 */
/**
 * 存储localStorage
 * @param {string} name - 要存储的key
 * @param {*} content - 内容会被序列化为字符串
 * @example
 * setLocalStorage({a:1});
 * setLocalStorage(123);
 */
export const setLocalStorage = (name, content) => {
  if (!name) return;
  if (typeof content !== 'string') {
    content = JSON.stringify(content);
  }
  window.localStorage.setItem(name, content);
}
/**
 * 获取localStorage
 * @param {string} name - 想要获取的键名
 * @return {*} 返回结果的真是状态，如果是字符串就返回字符串，如果是json对象就返回js对象
 */
export const getLocalStorage = name => {
  if (!name) return;
  const value = window.localStorage.getItem(name);
  try {
    return JSON.parse(value);
  } catch (e) {
    return value;
  }
}
/**
 * 删除localStorage
 * @param {string} name key
 */
export const removeLocalStorage = name => {
  if (!name) return;
  window.localStorage.removeItem(name);
}

/**
 * 设置cookie
 * @param {string} cname - 需要设置的cookie的名称
 * @param {string|number} cvalue - 这里不可以是引用类型的，需要拆开，不要存储太复杂的数据结构
 * @param {number} exdays - 过期天数
 * @example
 * setCookie('token', 'adsdfdsf', 2);
 */
export const setCookie = (cname, cvalue, exdays) => {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toGMTString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}
/**
 * 获取cookie
 * @param {string} cname - key
 * @return {string|number} - value
 * @example
 * getCookie('token');
 * // returns adsdfdsf
 */
export const getCookie = (cname) => {
  var name = cname + "=";
  var ca = document.cookie.split(';');
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i].trim();
    if (c.indexOf(name) == 0) { return c.substring(name.length, c.length); }
  }
  return "";
}

/**
 * @desc 设置过期时间为之前的值
 * @param {string} name - 需要设置的key
 */
export const removeCookie = (name) => {
  this.setCookie(name, '1', -1);
}
