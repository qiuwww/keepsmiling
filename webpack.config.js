
// webpack.config.js
// 生产模式

const path = require('path');
const webpack = require('webpack');
const ExtracTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
	// 入口文件
	entry: {
		index: './src/index.js',
		om: './src/om.js'
	},
	// 输出控制
	output: {
		// 输出文件的根目录
		path: path.resolve(__dirname, './dist/'),
		// 访问文件的地址
		publicPath: '/',
		// 输出文件名称
		filename: '[name].js' // 文件名，前面可以添加一部分路径
	},
	// 处理模块
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader'
				},
				include: path.resolve(__dirname, './src/')
			},
			{
				test: /\.css|\.styl$/,
				use: ExtracTextPlugin.extract({
					fallback: 'style-loader',
					use: [
						{
							loader: 'css-loader'
						},
						{
							loader: 'stylus-loader'
						}
					]
				})
			},
			{
				test: /\.(png|jpg|gif)$/,
				use: [
					{
						loader: 'url-loader?limit=10000&name=images/[name].[ext]'
					}
				]
			}
		]
	},
	plugins: [
		// 公共计算文件提取
		// new webpack.optimize.CommonsChunkPlugin({
		// 	name: 'vendor',
		// 	filename: 'js/' + projectName + '/vendor.js',
		// 	minChunks: function (modules) {
		// 		return module.context && module.context.indexOf('node_modules') !== -1;
		// 	}
		// }),
		// new ExtracTextPlugin('css/[name].css'),
		// new HtmlWebpackPlugin({
		//     template: path.resolve(__dirname, 'page/index.html'),
		//     filename: 'page/index.html',
		//     chunks: ['om']
		//   })
	],
	resolve: {
		extensions: ['.js', '.css', '.html', '.styl']
	},
	externals: {
		'mock': 'window.Mock',
		'jquery': 'window.jQuery', // 用于文件直接页面引入，在需要使用的js中，需要 let $ = require('jquery');
	},
	// source-map 
	devtool: "source-map"
}
