import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";
import { string, ref } from "yup";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

const location = string()
  .max(20, "Must be 20 characters or less")
  .min(2, "Must be 2 characters or more")
  .required("Required");

export const donorInitialValues = {
  bloodGroup: '',
  street: '',
  lg: '',
  state: '',
  password: '',
  verifyPassword: '',
}

export const donorValidationFields = {
  bloodGroup: string()
    .max(3, "Must be 3 characters or less")
    .required("Required"),
  street: string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  lg: location,
  state: location,
  password: string()
    .min(8, "Must be 8 characters or more")
    .max(40, "Must be 40 characters or less")
    .matches(
      /^(?=.*?[#?!@$%^&*-]).{8,}$|.{15}/,
      "Must have at least one special character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[A-Z]).{8,}$|.{15}/,
      "Must have at least one uppercase character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[a-z]).{8,}$|.{15}/,
      "Must have at least one lowercase character or be at least 15 characters long"
    )
    .matches(
      /^(?=.*?[0-9]).{8,}$|.{15}/,
      "Must have at least one integer or be at least than 15 characters long"
    )
    .required("Required"),
  verifyPassword: string().oneOf(
    [ref("password"), null],
    "Passwords must match"
  )
};

export default function DonorFields({ handleChange }) {
  const donorFields = [
    {
      name: "bloodGroup",
      label: "Blood Group",
      id: "bloodGroup",
      autoComplete: "bloodGroup"
    },
    {
      name: "street",
      label: "Street Address",
      id: "street-address",
      autoComplete: "street-address"
    },
    {
      name: "lg",
      label: "LG",
      id: "lg",
      autoComplete: "lg"
    },
    {
      name: "state",
      label: "State",
      id: "state",
      autoComplete: "state"
    },
    {
      name: "password",
      label: "Password",
      id: "password",
      type: "password",
      autoComplete: "password"
    },
    {
      name: "verifyPassword",
      label: "Verify Password",
      id: "verifyPassword",
      type: "password",
      autoComplete: "verifyPassword"
    }
  ];
  return (
    <Fragment>
      {donorFields.map(field => (
        <Fragment key={field.id}>
          <Grid item xs={12}>
            <Field
              variant="outlined"
              required
              component={TextField}
              fullWidth
              {...field}
            />
          </Grid>
          <Grid item xs={12}>
            <ErrorMessage name={field.name} component="div" />
          </Grid>
        </Fragment>
      ))}
    </Fragment>
  );
}
