import React from "react";
import { Formik } from "formik";
import { MemoryRouter as Router } from "react-router-dom";
import { ThemeProvider, styled } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { createMuiTheme } from "@material-ui/core/styles";
import { action } from "@storybook/addon-actions";
import { Provider } from "react-redux";

import BaseSignupForm from "./BaseSignupForm";
import DonorFields from "./donor/DonorFields";
import DonorSignup from "./donor/DonorSignup";
import RequesterSignup from "./requester/RequesterSignup";

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

export const requesterSignupForm = () => <BaseSignupForm />;
export const donorSignupForm = () => (
  <BaseSignupForm>
    <DonorFields />
  </BaseSignupForm>
);
export const donorFormikSignup = () => <DonorSignup />;
export const requesterFormikSignup = () => <RequesterSignup />;
requesterSignupForm.story = wrapWithFormik;
donorSignupForm.story = wrapWithFormik;
