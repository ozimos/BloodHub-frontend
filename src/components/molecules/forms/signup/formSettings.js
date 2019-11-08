import { string, object } from "yup";

export const initialValues = {
  email: "",
  password: ""
};

export const validationFields = {
  email: string()
    .email("Invalid email addresss`")
    .required("Required"),
  password: string()
    .min(8, "Must be 8 characters or more")
    .max(40, "Must be 40 characters or less")
    .required("Required"),
};

export default object(validationFields)