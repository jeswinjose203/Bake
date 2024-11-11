import './App.css';
import { Layout, Menu, theme } from "antd";
import ReactDOM from "react-dom/client";
import React from "react";
import MainContent from "./MainContent.js";
const { Sider } = Layout;
const { SubMenu } = Menu; // Import SubMenu from Menu
 
const Side = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
 
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="demo-logo-vertical" />
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
          <Menu.Item key="1">Home</Menu.Item>
          <SubMenu key="sub1" title="About">
            <Menu.Item key="2">Our Team</Menu.Item>
            <Menu.Item key="3">Our Story</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" title="Services">
            <Menu.Item key="4">Consulting</Menu.Item>
            <Menu.Item key="5">Development</Menu.Item>
            <Menu.Item key="6">Support</Menu.Item>
          </SubMenu>
          <Menu.Item key="7">Contact</Menu.Item>
        </Menu>
      </Sider>
      <MainContent/>
    </Layout>
  );
};
 
export default Side;
 
 