import React, { Fragment } from "react";
import { Field } from "formik";
import { string } from "yup";
import { TextField } from "formik-material-ui";
import Grid from "@material-ui/core/Grid";
import MenuItem from "@material-ui/core/MenuItem";

const location = string()
  .max(20, "Must be 20 characters or less")
  .min(2, "Must be 2 characters or more")
  .required("Required");

export const donorInitialValues = {
  bloodGroup: "",
  street: "",
  lg: "",
  state: "",
  phone: ""
};
const bloodGroups = [
  "A_positive",
  "A_negative",
  "B_positive",
  "B_negative",
  "AB_positive",
  "AB_negative",
  "O_positive",
  "O_negative"
];
export const donorValidationFields = {
  bloodGroup: string()
    .oneOf(bloodGroups)
    .required("Required"),
  street: string()
    .max(40, "Must be 40 characters or less")
    .required("Required"),
  lg: location,
  state: location
};

export default function DonorFields() {
  const donorFields = [
    {
      name: "bloodGroup",
      label: "Blood Group",
      id: "bloodGroup",
      inputProps: {
        "data-testid": "bloodGroup"
      },
      autoComplete: "off",
      select: true
    },
    {
      name: "street",
      label: "Street Address",
      id: "street-address",
      autoComplete: "street-address"
    },
    {
      name: "lg",
      label: "Local Government",
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
      name: "phone",
      label: "Phone Number",
      id: "phone",
      autoComplete: "phone",
      type: "phone"
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
          >
            {field.select &&
              bloodGroups.map(group => (
                <MenuItem key={group} value={group}>
                  {group}
                </MenuItem>
              ))}
          </Field>
        </Grid>
      ))}
    </Fragment>
  );
}
