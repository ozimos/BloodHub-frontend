import React, { Fragment } from "react";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import RequesterSignup from "./requester/RequesterSignup";
import DonorSignup from "./donor/DonorSignup";

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
