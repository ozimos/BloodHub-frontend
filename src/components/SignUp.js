import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RequesterSignup from "./signupform/RequesterSignup";
import DonorSignup from "./signupform/DonorSignup";

export default function SignUp() {
  const { path } = useRouteMatch();
  return (
    <Fragment>
      <Switch>
        <Route path={`${path}/donate`}>
          <DonorSignup />
        </Route>
        <Route path={`${path}/request`}>
          <RequesterSignup />
        </Route>
      </Switch>
    </Fragment>
  );
}
