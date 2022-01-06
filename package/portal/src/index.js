
import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './index.css';
import Layout from './Layout';
import { BrowserRouter } from 'react-router-dom';
import "../single-spa-config"; // 引入微前端配置文件;

ReactDOM.render(
  <BrowserRouter>
    <Layout />
  </BrowserRouter>,
  document.getElementById('root')
);