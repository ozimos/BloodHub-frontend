import React from "react";
import { object } from "yup";
import PartialForm, {baseInitialValues, baseValidationFields} from "./signupform/PartialForm";
import DonorFields, {donorInitialValues, donorValidationFields} from "./signupform/DonorFields";
import { signup } from "../../actions/auth";

export const initialValues = {...baseInitialValues, ...donorInitialValues};

export const validationSchema = object({...baseValidationFields, ...donorValidationFields});

export default () => (
  <PartialForm
    action={signup}
    component={DonorFields}
    redirectPath="/dashboard"
    validationSchema={validationSchema}
    initialValues={initialValues}
  />
);
