import React from "react";
import { object } from "yup";
import AuthForm from "../../AuthForm";
import BaseSignupForm, {
  baseInitialValues,
  baseValidationFields
} from "../BaseSignupForm";
import { REGISTER_USER } from "apolloUtils/requests";

export default () => (
  <AuthForm
    redirectPath="/blood-request-details"
    validationSchema={object(baseValidationFields)}
    authMutation={REGISTER_USER}
    initialValues={baseInitialValues}
  >
    <BaseSignupForm />
  </AuthForm>
);
