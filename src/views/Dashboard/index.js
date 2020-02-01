import React from "react";

import { Card } from "antd";

export default class Dashboard extends React.Component {
  render() {
    console.log("xuan ran le ? ");
    return (
      <Card
        title="Default size card"
        extra={<a href="#">More</a>}
        style={{ width: 300 }}
      >
        <p>Card content</p>
        <p>Card content</p>
        <p>Card content</p>
      </Card>
    );
  }
}
