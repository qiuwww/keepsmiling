// webpack.dev.config.js
const path = require('path');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.config.js');
const merge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// eslint-disable-next-line no-undef
const name = process.env.npm_package_name;

module.exports = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      title: 'keepsmiling',
      file: 'index.html',
      template: './static/index.html',
      chunks: ['index'],
      inject: true,
    }),
  ],
  watch: true,
  devServer: {
    hot: true,
    inline: true,
    port: 3006,
    proxy: {
      '**': 'http://127.0.0.1:3006/',
    },
  },
});
