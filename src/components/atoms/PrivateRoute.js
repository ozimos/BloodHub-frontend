import React from "react";
import { Route, Redirect } from "react-router-dom";
import { getUserToken } from "utils/auth";

export default ({ children, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      getUserToken() ? (
        children
      ) : (
        <Redirect
          to={{ pathname: "/signin", state: { from: props.location } }}
        />
      )
    }
  />
);
