## 本项目的几个分支

- `branch_simple_v01 `

  仅仅由webpack@4 + vue@2.6 构建成的最简单应用

- `branch_router_v01`

  webpack@4 + vue@2.6 + vue-router 简单路由应用

- `branch_storage_v01`

  webpack@4 + vue@2.6 + vue-router + vuex 简单状态管理

- `branch_dev_v01`

  加上了 eslint, typescript 等一系列开发中经常用到的代码管理插件

- `branch_admin_v01`

  最后使用 *ant-design-vue* 实现一个简单的管理台



## 目前进展

- `branch_simple_v01`

  Coding:  1.0 finished  *2019年02月23日21:51:03*

  Document: 1.0 doing

##  文档
- 见我的[segmentfault文章](https://segmentfault.com/a/1190000018265392) (https://segmentfault.com/a/1190000018265392)。

- babel-loader Install

  > webpack 4.x | babel-loader 8.x | babel 7.x

  ```node
  npm install -D babel-loader @babel/core @babel/preset-env webpack
  ```

  > webpack 4.x | babel-loader 7.x | babel 6.x

  ```node
  npm install -D babel-loader@7 babel-core babel-preset-env webpack
  ```

  > 注意，如果使用了 babel-loader 7.x，那么在rules中一定要指定presets

  ```javascript
  {
      test: /\.js$/,
      loader: 'babel-loader',
      options: {
        presets: ['babel-preset-env']
      }
  }
  ```



