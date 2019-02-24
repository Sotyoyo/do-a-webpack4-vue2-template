const BaseConfig = require("./webpack.base.config")
const merge = require("webpack-merge")
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = merge(BaseConfig, {
  plugins: [
    // https://github.com/ampedandwired/html-webpack-plugin
    // 这是一个webpack的插件来创建html文件渲染你的webpack生成的bundle
    new HtmlWebpackPlugin({
      // 写入bundle的那个index.html
      filename: 'index.html',
      template: 'index.html'
    })
  ]
})
