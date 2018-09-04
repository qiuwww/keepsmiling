/**
 *
 * @param {Array} arr []
 */
export function average(arr) {
  if(Array.isArray(arr)) {
    return arr.reduce((acc, cur, index, array) => acc + cur, 0) / arr.length;
  }else{
    throw Error("average函数需要一个数组类型的参数");
  }
}
