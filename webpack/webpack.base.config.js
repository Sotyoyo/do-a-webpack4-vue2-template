const path = require("path")
const { VueLoaderPlugin } = require('vue-loader')
const ifProd = process.env.NODE_ENV === 'production' ? true : false

const config = {
  dev: {
    mode: 'development',
    assetsPublcPath: '/'
  },
  prod: {
    mode: 'production',
    index: path.resolve(__dirname, "../dist/index.html"),
    assetsPublcPath: path.resolve(__dirname, "../dist"),
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
    extensions: ['.js', '.vue', 'json'],
    alias: {
      "@": path.resolve (__dirname, "../src")
    }
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
        include: [path.resolve(__dirname, '../src'), path.resolve(__dirname, '../test')],
        loader: 'babel-loader'
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
