'use strict'
const path = require('path')
const config = require('./config')

const { VueLoaderPlugin } = require('vue-loader')

module.exports = {
  // The base directory, an absolute path, for resolving entry points and loaders from configuration
  context: path.resolve(__dirname, '../'),
  // 入口
  entry: {
      app: './src/main.js'
  },
  // build的出口
  output: {
    path: config.build.assetsRoot,
    filename: '[name].bundle.[hash:10].js',
    publicPath: process.env.NODE_ENV === 'production'
      ? config.build.assetsPublicPath
      : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      '@': path.resolve(__dirname, '../src'),
    }
  },
  // 1. vue-loader vue-template-compiler
  // 2. webpack.config 中添加rules loader .vue文件
  // 3. webpack.config 中添加plugins new VueLoaderPlugin()  PS: 引入方法 const { VueLoaderPlugin } = require('vue-loader')
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}
