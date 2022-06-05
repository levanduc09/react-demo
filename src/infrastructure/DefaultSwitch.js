import React, { Component } from "react";
import { Switch } from "react-router";
import { HomePage } from "../pages/HomePage";
import { LoginPage } from "../pages/LoginPage";
import { Layout } from "./Layout";
import { RouteWithLayout } from "./RouteWithLayout";

export class DefaultSwitch extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <Switch>
        <RouteWithLayout layout={Layout} exact path="/" component={HomePage} />
        <RouteWithLayout layout={Layout} exact path="/login" component={LoginPage} />
      </Switch>
    );
  }
}
