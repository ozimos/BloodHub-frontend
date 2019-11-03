import React, { Fragment } from "react";
import { Field, ErrorMessage } from "formik";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function DonorFields({ handleChange }) {
  const donorFields = [
    {
      name: "blood-group",
      label: "Blood Group",
      id: "blood-group",
      autoComplete: "blood-group"
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
