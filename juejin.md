### 基础目录结构以及各个文件的作用
![structure.png](https://user-gold-cdn.xitu.io/2019/2/25/169226b061a5fe8a?w=538&h=284&f=png&s=50565)

### 初始npm项目

#### npm init

一路回车，一律使用默认的npm项目配置

#### package.json修改scripts

> 如下：

```json
{
  "name": "doing-a-webpack4-vue2-pro",
  "version": "1.0.0",
  "description": "超级详细的手写webpack4配置来启动vue2项目（附配置作用）",
  "main": "index.js",
  "author": "",
  "license": "ISC",
  "scripts": {
    "dev": "webpack-dev-server --config webpack/webpack.dev.config.js"
  },
  "engines": {
    "node": ">= 8.0.0",
    "npm": ">= 3.0.0"
  },
  "browserslist": [
    "> 1%",
    "last 2 versions",
    "not ie <= 8"
  ]
}

```

> 说明：
> `npm run dev` 用来启动命令 `webpack-dev-server --config webpack/webpack.dev.config.js`
> 这里将开发环境(development)的配置 *webpack/webpack-dev-config.js* 传入到启动的server config中。[详情][2]
> 故这里需要做两件事情：
> a. `npm install webpack-dev-server -D` *开发依赖*
> b. 书写 *webpack.dev.config.js*

### 书写 webpack.dev.config.js
> 说明：
> 由于 *webpack.dev.config.js* 与 *webpack.prod.config.js* 近似，所以手写一个 *webpack.base.config.js*来减少配置耦合量。
> 提示：`base.config`与`dev.config`需要用webpack提供的 `webpack-merge` 来合并
> 故这里需要做两件事情：
> a. `npm install webpack-merge -D` *这个放到后面安装config需要的依赖中一起做，稍后会写到*
> b. 书写 *webpack.base.config.js*

### 书写 webpack.base.config.js

#### webpack/webpack.base.config.js

```javascript
const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')

const ifProd = process.env.NODE_ENV === 'production' ? true : false

const config = {
  dev: {
    mode: 'development',
    assetsPublcPath: '/',
    assetsSubDirectory: './'
  },
  prod: {
    mode: 'production',
    index: path.resolve(__dirname, "../dist/index.html"),
    assetsPublcPath: path.resolve(__dirname, "../dist"),
    assetsSubDirectory: './'
  }
}
module.exports = {
  mode: ifProd ? 'production' : 'development',
  context: path.resolve(__dirname, '../'),
  entry: {
    app: './src/main.js'
  },
  output: {
    filename: '[name].bulde.[hash:10].js',
    path: ifProd ? config.prod.assetsPublcPath : config.dev.assetsPublcPath
  },
  resolve: {
    extensions: ['.js', '.vue'],
  },
  devServer: {
    quiet: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader',
          }
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['babel-preset-env']
        }
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new VueLoaderPlugin()
  ]
}

```
> 我们可以看到，这里base.config需要的开发依赖有:
> `babel-loader@7` (7.x版本需要配合 `babel-core` `babel-preset-env`)
> `webpack` (4.x版本需要配合 `webpack-cli`)
> `css-loader` (需要配合 `vue-style-loader`)
> `vue-loader` (需要配合 `vue-template-compiler`)
> 故在命令行执行如下命令
> `npm install -D babel-loader@7 babel-core babel-preset-env webpack webpack-cli`
> `npm install -D css-loader vue-style-loader vue-loader vue-template-compiler`
> *详细的配置说明解释几天后给出*


### 回到 webpack.dev.config.js

#### webpack/webpack.dev.config.js

```javascript
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
```
> 我们可以看到，这里dev.config需要的开发依赖有:
> `webpack-merge` (前面提到的用来将dev.config和base.config合并的依赖)
> `html-webpack-plugin`
> 故在命令行执行如下命令
> `npm install -D html-webpack-plugin webpack-merge`

### 可以开始写vue啦！

#### src/main.js

> 我们在上面的 *webpack.base.config.js* 中写到了 entry: {app: './src/main.js'}
> 这就是我们的vue入口了。如下:

```javascript
import Vue from "vue"; // 引入vue
import App from "./App"; // 引入组件App

new Vue ({
  el: '#app', // 挂载到index.html中的#app上
  render: h => h (App) // 用App.vue渲染
})

```

#### src/App.vue

> 简单的一个首页

```vue
<template>
  <div>
    <h1>Success</h1>
  </div>
</template>
<style>
  h1 {
    background: #FAFBBB
  }
</style>

```
> 如上，我们需要引入vue，所以：
> `npm install vue -S` (自动安装2.x版本的vue)

### 最后

#### 代码结构:

![structure2.png](https://user-gold-cdn.xitu.io/2019/2/25/169226bcefbdf866?w=534&h=566&f=png&s=55222)

#### index.html
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="icon" href="#" type="image/x-icon">
    <title>doing</title>
  </head>
  <body>
    <div id="app"></div>
  </body>
</html>

```

#### 运行项目
> `npm run dev`


#### 源码地址

> 具体的项目源码地址：[https://github.com/Sotyoyo/do-a-webpack4-vue2-template/][4]
> 源码与本文章稍有出入，后期会做到统一，希望给个star支持一下！


  [2]: https://webpack.docschina.org/configuration/dev-server/
  [4]: https://github.com/Sotyoyo/do-a-webpack4-vue2-template/