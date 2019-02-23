### 安装webpack4
最新的webpack版本是：v4.29.5
要安装最新版本或特定版本，请运行以下命令之一：
`npm install --save-dev webpack`
`npm install --save-dev webpack@<version>`
result: **`+ webpack@4.29.5`**

如果你使用 webpack 4+ 版本，你还需要安装 CLI
`npm install --save-dev webpack-cli`
result: **`+ webpack-cli@3.2.3`**

开发环境(development)和生产环境(production)的构建目标差异很大。在开发环境中，我们需要具有强大的、具有实时重新加载(live reloading)或热模块替换(hot module replacement)能力的 source map 和 localhost server。而在生产环境中，我们的目标则转向于关注更小的 bundle，更轻量的 source map，以及更优化的资源，以改善加载时间。由于要遵循逻辑分离，我们通常建议为每个环境编写彼此独立的 webpack 配置。

虽然，以上我们将生产环境和开发环境做了略微区分，但是，请注意，我们还是会遵循不重复原则(Don't repeat yourself - DRY)，保留一个“通用”配置。为了将这些配置合并在一起，我们将使用一个名为 webpack-merge 的工具。通过“通用”配置，我们不必在环境特定(environment-specific)的配置中重复代码。

我们先从安装 webpack-merge 开始，并将之前指南中已经成型的那些代码再次进行分离：
`npm install --save-dev webpack-merge`
result: **`+ webpack-merge@4.2.1`**


`npm install vue-loader -S`
`npm install vue-template-compiler -S`
`npm install css-loader -S`
`npm install babel-core@6 -D`
`npm install babel-loader@7 -D`

`npm install copy-webpack-plugin -D`
`npm install html-webpack-plugin -D`

webpack-dev-server 为你提供了一个简单的 web 服务器，并且能够实时重新加载(live reloading)。让我们设置以下：
`npm install --save-dev webpack-dev-server`
result: **`+ webpack-dev-server@3.2.0`**

修改配置文件，告诉开发服务器(dev server)，在哪里查找文件：
```javascript
{
   devServer: {
   contentBase: './dist'
  },
}```

