/**
 * 主要用于代码的组织与es6语法处理, base公共的基础配置
 * 开发与打包browser版本
 */

const path = require('path');

module.exports = {
  entry: {
    // eslint-disable-next-line no-undef
    // 入口目录src/
    index: path.resolve(__dirname, '../src/index.js'),
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        use: {
          loader: 'ts-loader',
          // 这里转译的target，要在tsconfig中配置
        },
        include: path.resolve(__dirname, '../src/'),
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
        // eslint-disable-next-line no-undef
        include: path.resolve(__dirname, '../src/'),
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.json', '.ts'],
  },
  plugins: [],
};
