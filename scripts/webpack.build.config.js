// webpack.build.config.js
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const path = require('path');
const name = process.env.npm_package_name;
const ENV = process.env.NODE_ENV;

let filename, devtool, plugins = []; 

if(ENV === 'prod') {
	filename = name + '.js';
	devtool = '#source-map';
}else if(ENV === 'dep') {
	filename = name + '.min.js';
	plugins.push(new webpack.optimize.UglifyJsPlugin());
	devtool = 'none';
}

module.exports = merge(baseWebpackConfig, {
    output: {
		path: path.resolve(__dirname, '../dist/'),
		filename: filename
	},
	devtool: devtool,
    plugins: plugins
});
