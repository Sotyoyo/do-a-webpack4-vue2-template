'use strict'
const config = require('./config')
const merge = require('webpack-merge')
const path = require('path')
const baseWebpackConfig = require('./webpack.base.config')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devServer: {
    // terminal不显示built信息 PS: necessary for FriendlyErrorsPlugin
    quiet: true,
    // 访问路径出错自动回到index.html
    historyApiFallback: {
      rewrites: [
        { from: /.*/, to: path.posix.join(config.dev.assetsPublicPath, 'index.html') },
      ],
    }
  },
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    // This is a webpack plugin that simplifies creation of HTML files to serve your webpack bundles. This is especially useful for webpack bundles that include a hash in the filename which changes every compilation
    new HtmlWebpackPlugin({
      // The file to write the HTML to. Defaults to index.html
      filename: 'index.html',
      // webpack require path to the template. Please see the docs for details
      template: 'index.html',
      // When passing true or 'body' all javascript resources will be placed at the bottom of the body element. 'head' will place the scripts in the head element
      // 设为 false || head 会导致加载不出vue  因为定义在dom元素之前了
      inject: 'body'
    })
  ]
})

module.exports = devWebpackConfig;