// import React from "react"

// const App = () => <h1>Hello from project1</h1>
// console.log(123456);
// export default App

import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import routes from './routes';
import store from './models/store';

const renderApp = () => <Provider store={store}>
  <Router>
    <ConfigProvider locale={zhCN}>
      <Routes>
        {routes.map((route, index) => (
          <Route key={index}
            path={route.path}
            element={route.element} />
          ))}
      </Routes>
    </ConfigProvider>
  </Router>
</Provider>;

export default renderApp;
