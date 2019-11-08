import React from "react";
import { object } from "yup";
import AuthForm from "../../AuthForm";
import BaseSignupForm, {baseInitialValues, baseValidationFields} from "../BaseSignupForm";
import DonorFields, {donorInitialValues, donorValidationFields} from "./DonorFields";
import { signup } from "../../../../../actions/auth";

export const initialValues = {...baseInitialValues, ...donorInitialValues};

export const validationSchema = object({...baseValidationFields, ...donorValidationFields});

export default () => (
  <AuthForm
    action={signup}
    redirectPath="/dashboard"
    validationSchema={validationSchema}
    initialValues={initialValues}
  >
  <BaseSignupForm component={DonorFields} />
</AuthForm>
);
