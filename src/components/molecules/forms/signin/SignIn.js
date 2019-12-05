import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import AuthForm from "../AuthForm";
import SignInForm from "./SignInForm";
import validationSchema, { initialValues } from "../signup/formSettings";
import { LOG_IN_USER } from "apolloUtils/requests";

export default function SignIn() {
  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <AuthForm
        validationSchema={validationSchema}
        authMutation={LOG_IN_USER}
        initialValues={initialValues}
      >
        <SignInForm />
      </AuthForm>
    </Fragment>
  );
}
