<h1 align="center">single-spa-react-redux-toolkit</h1>

<div align="center">

single-spa-react-redux-toolkit:
react+single-spa-react+@reduxjs/toolkit 🚀🚀🚀, 这是基座项目，此处决定拉取对应的子应用

[![Documentation](https://img.shields.io/badge/documentation-yes-brightgreen.svg)](https://github.com/single-spa-react/single-spa-react-redux-toolkit#readme) [![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/single-spa-react/single-spa-react-redux-toolkit/graphs/commit-activity) [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://github.com/single-spa-react/single-spa-react-redux-toolkit/blob/master/LICENSE)

</div>

## ⌨️ 基座本地开发

```bash
$ git clone git@github.com:single-spa-react/single-spa-react-redux-toolkit.git
$ cd single-spa-react-redux-toolkit
$ cd portal
$ npm install
$ npm start
```

**建议：**
```js
```single-spa-config/index.js```

if(process.env.NODE_ENV === 'dev') {
  import('./dev-single-spa.config')
} else {
  import('./build-single-spa.config')
}

```
修改为直接导出```import('./build-single-spa.config')``` 无需再单独编译子应用



打开浏览器访问 http://127.0.0.1:8080/project1/。

## 相关资料： 
1，项目依赖包梳理：https://segmentfault.com/a/1190000019006667

## 相关推广

1. https://github.com/xlei1123/daymanage
   > 这是一个使用 umi 开发的项目，想学习 umi 的新手可以学习一下
2. https://github.com/xlei1123/dtext
   > 前端文案默认值处理利器，统一定制修改，同时支持使用时特殊指定




