// index.js, 页面入口文件
// 整个语句都开启严格模式的语法
'use strict'; // 输出对象

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var keepsmiling = {};
console.log('global', global, global.document); // 运行代码，这里要兼顾node端与web端的使用

if (global.document) {
  if (!global.keepsmiling) {
    global.ks = global.keepsmiling = keepsmiling;
  } else {
    // 怎么处理
    throw new Error('keepsmiling 被占用，请修改尝试');
  }
} // 模块属性添加


var packageConfig = require('../package.json');

keepsmiling.version = packageConfig.version;
keepsmiling.description = packageConfig.description;
keepsmiling.doc = packageConfig.doc; // 获取下边的所有文件，并扩展原对象,files是一个函数，支持一级展示

var files = require.context('./', true, /\.[jt]s$/); // files.keys()，是拿到对应的文件夹的名称


var attr;
files.keys().forEach(function (key) {
  key.substring(key.lastIndexOf('/') + 1, key.lastIndexOf('.'));
  Object.assign(keepsmiling, files(key));
});
console.log('keepsmiling工具函数:', keepsmiling);
var _default = keepsmiling;
exports["default"] = _default;