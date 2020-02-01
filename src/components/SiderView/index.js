import React from "react";

import bugReport from "../../assert/images/bug.png";
import "./index.less";
import { Layout, Menu, Icon } from "antd";

import { Link, NavLink } from "react-router-dom";

const { Sider } = Layout;

export default class SiderView extends React.Component {
  handleClickLink = ({ key }) => {
    this.props.history.push(key);
  };
  render() {
    console.log(this.props);
    return (
      <Sider
        className="guding-sider"
        trigger={null}
        collapsible
        collapsed={this.props.collapsed}
        width={256}
      >
        <div className="logo">
          <a href="/">
            <img src={bugReport} alt="" />
            {!this.props.collapsed && <h1>Ant Design Pro</h1>}
          </a>
        </div>
        <Menu
          className="menul"
          theme="dark"
          mode="inline"
          onClick={this.handleClickLink}
        >
          <Menu.Item key="/dashboard">
            <Icon type="user" />
            <span>dashboard</span>
          </Menu.Item>
          <Menu.Item key="/settings">
            <Icon type="video-camera" />
            <span>settings</span>
          </Menu.Item>
          <Menu.Item key="3">
            <Icon type="upload" />
            <span>nav 3</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }
}
