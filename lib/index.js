// index.js, 页面入口文件
// 整个语句都开启严格模式的语法
"use strict";
// 输出对象
const keepsmiling = {};

// 运行代码
if(window && typeof window !== "undefined") {
  if(!window.keepsmiling) {
    window.ks = window.keepsmiling = keepsmiling;
  } else {
    // 怎么处理
  }
}

// 模块属性添加
const packageConfig = require("../package.json");
keepsmiling.version = packageConfig.version;
keepsmiling.description = packageConfig.description;
keepsmiling.doc = packageConfig.doc;

// 获取下边的所有文件，并扩展原对象,files是一个函数，支持一级展示
const files = require.context("./", true, /\.js$/);
// files.keys()，是拿到对应的文件夹的名称
files.keys().forEach(key => {
  key.substring(key.lastIndexOf("/") + 1, key.lastIndexOf("."));
  Object.assign(keepsmiling, files(key));
});

console.log("keepsmiling工具函数:", keepsmiling);

export default keepsmiling;
