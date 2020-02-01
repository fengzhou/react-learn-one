import React from "react";

import classnames from "classnames";
import "./index.less";

import { Layout, Menu, Icon, Dropdown } from "antd";

const { Header } = Layout;

const menu = (
  <Menu>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.alipay.com/"
      >
        1st menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="http://www.taobao.com/"
      >
        2nd menu item
      </a>
    </Menu.Item>
    <Menu.Item>
      <a target="_blank" rel="noopener noreferrer" href="http://www.tmall.com/">
        3rd menu item
      </a>
    </Menu.Item>
  </Menu>
);

export default class HeaderView extends React.Component {
  render() {
    return (
      <Header
        className={classnames("header-top", {
          "guding-header-1": this.props.collapsed,
          "guding-header": !this.props.collapsed
        })}
      >
        <div className="header-div">
          <Icon
            className="trigger"
            type={this.props.collapsed ? "menu-unfold" : "menu-fold"}
            onClick={this.props.toggle}
          />
          <div style={{ flex: "1 1 0%" }}></div>
          <div className="header-menu">
            <Icon type="search" />
            <Icon type="question-circle" theme="twoTone" />
            <Icon type="message" theme="twoTone" />

            <Dropdown overlay={menu}>
              <span>kurong~</span>
            </Dropdown>
          </div>
        </div>
      </Header>
    );
  }
}
