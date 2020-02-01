import React from "react";

import { Route } from "react-router-dom";

import { Layout } from "antd";

import classnames from "classnames";

import { SiderView, HeaderView } from "../../components";

import Dashboard from "../Dashboard";
import Settings from "../Settings";

import "./index.less";

const { Content } = Layout;

export default class Home extends React.Component {
  state = {
    collapsed: false
  };

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed
    });
  };

  render() {
    return (
      <Layout>
        <SiderView collapsed={this.state.collapsed} {...this.props} />
        <Layout>
          <HeaderView collapsed={this.state.collapsed} toggle={this.toggle} />
          <Content
            className={classnames("content", {
              lang: !this.state.collapsed,
              nolang: this.state.collapsed
            })}
          >
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/settings" component={Settings} />
          </Content>
        </Layout>
      </Layout>
    );
  }
}
