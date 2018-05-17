
/**
 * 主要用于代码的组织与es6语法处理, base公共的基础配置
 */
const path = require('path');
const webpack = require('webpack');
const ENV = process.env.NODE_ENV;
const name = process.env.npm_package_name;
const packageConfig = require('../package.json');

module.exports = {
	entry: {
		name: path.resolve(__dirname, '../lib/index.js')
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader?cacheDirectory'
				},
				include: path.resolve(__dirname, '../lib/')
			}
		]
	},
	resolve: {
		extensions: ['.js']
	}
}
