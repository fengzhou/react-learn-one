import React from "react";

import Home from "./views/Home";

import { HashRouter as Router, Route } from "react-router-dom";

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Route
          path="/"
          render={routerProps => {
            return <Home {...routerProps} />;
          }}
        />
      </Router>
    );
  }
}
