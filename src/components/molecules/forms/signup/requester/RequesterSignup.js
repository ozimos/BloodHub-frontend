import React from "react";
import { object } from "yup";
import AuthForm from "../../AuthForm";
import BaseSignupForm, {
  baseInitialValues,
  baseValidationFields
} from "../BaseSignupForm";
import { requestBlood } from "actions/auth";

export default () => (
  <AuthForm
    action={requestBlood}
    redirectPath="/blood-request-details"
    validationSchema={object(baseValidationFields)}
    initialValues={baseInitialValues}
  >
    <BaseSignupForm />
  </AuthForm>
);
