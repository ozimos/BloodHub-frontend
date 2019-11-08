import React, { Fragment } from "react";
import Typography from "@material-ui/core/Typography";
import AuthForm from "../AuthForm";
import SignInForm from "./SignInForm";
import validationSchema, { initialValues } from "../signup/formSettings";
import { login } from "../../../../actions/auth";

export default function SignIn() {
  return (
    <Fragment>
      <Typography component="h1" variant="h5">
        Sign In
      </Typography>
      <AuthForm
        action={login}
        validationSchema={validationSchema}
        initialValues={initialValues}
      >
        <SignInForm />
      </AuthForm>
    </Fragment>
  );
}
