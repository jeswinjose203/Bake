// src/Side.js
import './App.css';
import { Layout, Menu, theme } from "antd";
import React from "react";
import { useNavigate } from 'react-router-dom';

const { Sider } = Layout;
const { SubMenu } = Menu;

const Side = () => {
  const navigate = useNavigate();
  const {
    token: { colorBgContainer }
  } = theme.useToken();

  return (
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
        <Menu.Item key="1" onClick={() => navigate('/')}>Home</Menu.Item>
        <SubMenu key="sub1" title="Menu">
          <Menu.Item key="2" onClick={() => navigate('/cake')}>Cake</Menu.Item>
          <Menu.Item key="3" onClick={() => navigate('/pastries')}>Pastries</Menu.Item>
        </SubMenu>
        <Menu.Item key="7" onClick={() => navigate('/contact')}>Contact</Menu.Item>
      </Menu>
    </Sider>
  );
};

export default Side;
