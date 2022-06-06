import React from "react";
import { Route } from "react-router-dom";

export const RouteWithLayout = ({ component: Component, layout: Layout, ...rest }) => (
  <Route
    {...rest}
    element={(props) => (
      <Layout>
        <Component {...props} />
      </Layout>
    )}
  />
);
