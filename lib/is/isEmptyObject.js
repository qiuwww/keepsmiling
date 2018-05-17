/**
 * @descption   判断`obj`是否为空
 * @param  {[Object]}
 * @return {[Boolean]}
 */
export function isEmptyObject(obj) {
	if(!obj || typeof obj !== "object" || Array.isArray(obj)) {
		return false;
	}
	return !Object.keys(obj).length;
}
