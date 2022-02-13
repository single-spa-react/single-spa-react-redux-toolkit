import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './src/app.js';


let reactLifecycle={};

if (process.env.NODE_ENV === 'development') {
  // 本地开发 加载一些资源， 生产环境中统一由基座拉取
  // @ts-ignore
  import ('antd/dist/antd.css');
  console.log('document.getElementById()==>', <App />, document.getElementById('project1'));
  ReactDOM.render(<App />, document.getElementById('project1'));
} else {
  function domElementGetter() {
    return document.getElementById('project1')
  }
  reactLifecycle = singleSpaReact({
    React,
    ReactDOM,
    rootComponent: App,  // function/class Component (函数或者类组件)
    domElementGetter,
  });
}

export const bootstrap = [
  reactLifecycle.bootstrap,
];

export const mount = [
  reactLifecycle.mount,
];

export const unmount = [
  reactLifecycle.unmount,
];


