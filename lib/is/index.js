/**
 * @descption 添加js的类型判断函数
 * @return {[function]}
 */
(function() {
	"use strict";
	const types = "Array Object String Date RegExp Function Boolean Number Null Undefined".split(" ");
	function type() {
		return Object.prototype.toString.call(this).slice(8, -1);
	}
	for(let i = types.length; i--;) {
		keepsmiling["is" + types[i]] = (function(self) {
			return function(elem) {
				return type.call(elem) === self;
			};
		})(types[i]);
	}
})();//类型判断

