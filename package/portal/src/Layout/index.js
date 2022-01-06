import React, { useState } from 'react'
import { Layout } from 'antd';
import { Link } from 'react-router-dom'
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from '@ant-design/icons';
import './index.less';

const { Header, Sider, Content } = Layout;
function App() {
  const [collapsed, setCollapse] = useState(false)
  return (
    <div className="App" >
      <Layout>
        <Sider trigger={null} collapsible collapsed={collapsed}>
          <div className="logo" />
          <ul >
            <li key="project1" >
              <Link to="/project1">project1</Link>
            </li>
            <li key="project2" >
              <Link to="/project2">project2</Link>
            </li>
          </ul>
        </Sider>
        <Layout className="site-layout">
          <Header className="site-layout-background" style={{ padding: 0 }}>
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: 'trigger',
              onClick: () => { setCollapse(!collapsed) },
            })}
          </Header>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <div id="project1" />
            <div id="project2" />
          </Content>
        </Layout>
      </Layout>
    </div>
  );
}
export default App;