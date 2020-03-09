// webpack.build.config.js
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin'); //使用前需要安装clean-webpack-plugin
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;
// eslint-disable-next-line no-undef
const ENV = process.env.NODE_ENV;
let filename = name + '.min.js';
let devtool = 'none';

module.exports = merge(baseWebpackConfig, {
  optimization: {
    minimizer: [
      new UglifyJsPlugin({
        cache: true,
        parallel: true,
        extractComments: true,
      }),
    ],
  },
  output: {
    // eslint-disable-next-line no-undef
    path: path.resolve(__dirname, '../dist/'),
    filename,
  },
  mode: 'production',
  // @ts-ignore
  devtool,
  plugins: [
    // 要删除的正是output.path！我的output配置项里的路径就是dist目录。
    new CleanWebpackPlugin(),
  ],
});
