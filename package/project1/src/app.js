// import React from "react"

// const App = () => <h1>Hello from project1</h1>
// console.log(123456);
// export default App

import React from 'react';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routes from './routes';
import store from './models/store';

const renderApp = () => <Provider store={store}>
  <BrowserRouter>
    <ConfigProvider locale={zhCN}>
      <Routes>
        {routes.map((route, index) => (
        <Route key={index}
          path={route.path}
          element={route.element} />
        ))}
      </Routes>
    </ConfigProvider>
  </BrowserRouter>
</Provider>;

export default renderApp;
