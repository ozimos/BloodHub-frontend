import React, { Fragment } from "react";
import { Field } from "formik";
import { string } from "yup";
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
}

export const donorValidationFields = {
  bloodGroup: string()
    .max(3, "Must be 3 characters or less")
    .required("Required"),
  street: string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  lg: location,
  state: location
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
    }
  ];
  return (
    <Fragment>
      {donorFields.map(field => (
          <Grid key={field.id} item xs={12}>
            <Field
              variant="outlined"
              required
              component={TextField}
              fullWidth
              {...field}
            />
          </Grid>
      ))}
    </Fragment>
  );
}
