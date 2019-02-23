"use strict";
const utils = require("./utils");
const config = require("./config");
const merge = require("webpack-merge");
const baseWebpackConfig = require("./webpack.base.config");
const HtmlWebpackPlugin = require("html-webpack-plugin");

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  output: {
    path: config.build.assetsRoot,
    filename: utils.assetsPath("js/[name].[hash:10].js"),
    chunkFilename: utils.assetsPath("js/[id].[hash:10].js"),
    publicPath: config.build.assetsPublicPath
  },
  devtool: false,
  plugins: [
    // see https://github.com/ampedandwired/html-webpack-plugin
    new HtmlWebpackPlugin({
      filename: config.build.index,
      template: "index.html",
      inject: 'body',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
        // more options:
        // https://github.com/kangax/html-minifier#options-quick-reference
      }
    })
  ]
});

module.exports = prodWebpackConfig;
