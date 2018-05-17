// index.js, 页面入口文件

// 输出对象
let keepsmiling = {};

// 运行代码
if(window && typeof window !== 'undefined') {
	if(!window.keepsmiling) {
		window.keepsmiling = keepsmiling;
	}
}
// 模块属性添加
const packageConfig = require('../package.json');
keepsmiling.version = packageConfig.version;
keepsmiling.description = packageConfig.description;

// 获取下边的所有文件，并扩展原对象,files是一个函数，支持一级展示
// const files = require.context('./', true, /^\.\/.+\/.+\.js$/);
const files = require.context('./', true, /^\.\/(is|random|object)\/.+\.js$/);
// files.keys()，是拿到对应的文件夹的名称
let attr, modules = [];
files.keys().forEach(key => {
    attr = key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
	Object.assign(keepsmiling, files(key));
});

console.log("keepsmiling工具函数:", keepsmiling);
export default keepsmiling;