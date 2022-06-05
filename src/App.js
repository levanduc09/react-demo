import React, { Component } from "react";
import MyProvider from "./contexts/MyProvider";
import "./custom.css";
import "./styles/main.scss";
import { initializeIcons } from "office-ui-fabric-react/lib/Icons";
import { MyThemeProvider } from "./infrastructure/MyThemeProvider";
import { AdminSwitch } from "./infrastructure/AdminSwitch";
import { DefaultSwitch } from "./infrastructure/DefaultSwitch";
import { SnackbarProvider } from "notistack";
import { SnackbarUtilsConfigurator } from "./SnackbarUtils";

initializeIcons();

export default class App extends Component {
  static displayName = App.name;

  constructor(props) {
    super(props);
    this.state = {
      mode: "public",
    };
  }

  render() {
    if (this.state.mode != "")
      return (
        <MyThemeProvider>
          <SnackbarProvider>
            <SnackbarUtilsConfigurator />
            <MyProvider {...this.state}>{this.state.mode === "admin" ? <AdminSwitch /> : <DefaultSwitch />}</MyProvider>
          </SnackbarProvider>
        </MyThemeProvider>
      );
    return "";
  }
}
