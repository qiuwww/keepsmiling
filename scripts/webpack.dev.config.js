// webpack.dev.config.js
const path = require("path");
const webpack = require("webpack");
const baseWebpackConfig = require("./webpack.base.config.js");
const merge = require("webpack-merge");
const ExtracTextPlugin = require("extract-text-webpack-plugin");
const name = process.env.npm_package_name;
const server = require("./devServer.js")();

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(__dirname, "../devserver/"),
    // 访问 http://127.0.0.1:3002/devserver/keepsmiling.js
    publicPath: "/devserver/",
    filename: name + ".js"
  },
  devtool: "cheap-module-eval-source-map",
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new ExtracTextPlugin({
      filename: "style.css", // 必须配置的文件名，插入到html中的
      disable: true // 不生成
    })
  ],
  watch: true,
  devServer: {
    // 这边的流程是请求3002端口，代理page/index.html，其中的js文件再代理到开发代理
    // 告诉服务器从哪里提供内容。只有在你想要提供静态文件时才需要。devServer.publicPath 将用于确定应该从哪里提供 bundle，并且此选项优先。
    contentBase: path.join(__dirname, "../devserver"),
    hot: true,
    inline: true,
    port: 3002,
    proxy: { // 只是代理js，对应的css，直接带入
      "/devserver/keepsmiling.js": "http://127.0.0.1:3002/",
      // 代理tpl
      "**": "http://127.0.0.1:3000/"
    }
  }
});
