import React from "react";
import { Formik } from "formik";
import { MemoryRouter as Router } from "react-router-dom";
import { styled } from "@material-ui/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Container from "@material-ui/core/Container";
import { configureProviderWrapper } from "utils/test-utils";
import BaseSignupForm from "./BaseSignupForm";
import DonorFields from "./donor/DonorFields";
import DonorSignup, { initialValues } from "./donor/DonorSignup";
import RequesterSignup from "./requester/RequesterSignup";

const ProviderWrapper = configureProviderWrapper({ mocks: [] });
const Div = styled("div")({ backgroundColor: "white" });
const wrapWithFormik = {
  decorators: [
    storyFn => <Formik initialValues={initialValues}>{storyFn()}</Formik>
  ]
};

export default {
  title: "SignUp Form",
  decorators: [
    storyFn => (
      <ProviderWrapper>
        <CssBaseline />
        <Container component="main" maxWidth="sm">
          <Div>
            <Router>{storyFn()}</Router>
          </Div>
        </Container>
      </ProviderWrapper>
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
