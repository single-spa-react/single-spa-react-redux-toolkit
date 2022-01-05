import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import App from './src/app.js';

function domElementGetter() {
  return document.getElementById('project1')
}

const reactLifecycle = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: App,  // function/class Component 函数或者类组件
  domElementGetter,
});

export const bootstrap = [
  reactLifecycle.bootstrap,
];

export const mount = [
  reactLifecycle.mount,
];

export const unmount = [
  reactLifecycle.unmount,
];