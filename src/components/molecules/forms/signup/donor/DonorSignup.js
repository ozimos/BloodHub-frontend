import React from "react";
import { object } from "yup";
import AuthForm from "../../AuthForm";
import BaseSignupForm, {
  baseInitialValues,
  baseValidationFields
} from "../BaseSignupForm";
import DonorFields, {
  donorInitialValues,
  donorValidationFields
} from "./DonorFields";
import { REGISTER_USER } from "apolloUtils/requests";

export const initialValues = { ...baseInitialValues, ...donorInitialValues };

export const validationSchema = object({
  ...baseValidationFields,
  ...donorValidationFields
});

export default () => (
  <AuthForm
    redirectPath="/dashboard"
    validationSchema={validationSchema}
    initialValues={initialValues}
    authMutation={REGISTER_USER}
  >
    <BaseSignupForm>
      <DonorFields />
    </BaseSignupForm>
  </AuthForm>
);
