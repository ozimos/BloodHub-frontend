import React from "react";
import { object } from "yup";
import PartialForm, {baseInitialValues, baseValidationFields} from "./signupform/PartialForm";
import { requestBlood } from "../../actions/auth";

export default () => (
  <PartialForm
    action={requestBlood}
    redirectPath="/blood-request-details"
    validationSchema={object(baseValidationFields)}
    initialValues={baseInitialValues}
  />
);
