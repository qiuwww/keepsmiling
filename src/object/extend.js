/**
 * @module object
 */

/**
 * @desc 对象扩展，这里本质上还是浅复制，如果属性是一个应用类型就会复制属性的指向
 * @param {object} obj, 需要被扩展的对象
 * @param {object} extension 使用当前对象去覆盖obj的属性，并添加extension的特有属性
 * @return {object} 返回一个对象，是改变了的obj
 */
export function extendObj(obj = {}, extension = {}) {
  if (typeof Object.assign === "function") {
    obj = Object.assign(obj, extension);
  }
  for (var key in extension) {
    obj[key] = extension[key];
  }
  return obj;
}
