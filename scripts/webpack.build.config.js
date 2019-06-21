// webpack.build.config.js
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.base.config.js");
const merge = require("webpack-merge");
const path = require("path");
const CleanWebpackPlugin = require("clean-webpack-plugin"); //使用前需要安装clean-webpack-plugin
// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;
// eslint-disable-next-line no-undef
const ENV = process.env.NODE_ENV;

let filename, devtool, plugins = [];
// 引入插件,每次都删除dist下的文件，重新生成
plugins.push(new CleanWebpackPlugin(
  ["dist/keepsmiling.min.js", "dist/*.js.map"], //匹配删除的文件
  {
    // eslint-disable-next-line no-undef
    root: path.resolve(__dirname, "../"), //根目录
    verbose: true, //开启在控制台输出信息
    dry: false //启用删除文件
  })
);

if (ENV === "prod") {
  filename = name + ".js";
  devtool = "#source-map";
} else if (ENV === "dep") {
  filename = name + ".min.js";
  plugins.push(new webpack.optimize.UglifyJsPlugin());
  devtool = "none";
}

module.exports = merge(baseWebpackConfig, {
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, "../dist/"),
    filename,
  },
  devtool,
  plugins,
});
