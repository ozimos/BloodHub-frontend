import React from "react";
import { Formik } from "formik";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider, styled } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import BaseSignupForm from "./BaseSignupForm";
import DonorFields from "./DonorFields";
import AuthForm from "./AuthForm";

const store = {
  getState: () => ({ auth: { isLoggedIn: false } }),
  subscribe: () => 0,
  dispatch: action("dispatch")
};
const Div = styled("div")({ backgroundColor: "white" });
const wrapWithFormik = {
  decorators: [storyFn => <Formik>{storyFn()}</Formik>]
};

export default {
  title: "SignUp Form",
  decorators: [
    storyFn => (
      <Provider store={store}>
        <ThemeProvider theme={createMuiTheme()}>
          <CssBaseline />
          <Container component="main" maxWidth="sm">
            <Div>
              <Router>{storyFn()}</Router>
            </Div>
          </Container>
        </ThemeProvider>
      </Provider>
    )
  ]
};

const partialProps = {
  action,
  redirectPath: "/dashboard"
};

export const nonDonorSignupForm = () => <BaseSignupForm />;
export const donorSignupForm = () => <BaseSignupForm component={DonorFields} />;
export const donorFormikSignup = () => (
  <AuthForm component={DonorFields} {...partialProps}>
    <BaseSignupForm component={DonorFields} />
  </AuthForm>
);
export const nonDonorFormikSignup = () => (
  <AuthForm {...partialProps}>
    <BaseSignupForm />
  </AuthForm>
);
nonDonorSignupForm.story = wrapWithFormik;
donorSignupForm.story = wrapWithFormik;
