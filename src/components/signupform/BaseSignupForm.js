import React from "react";

import { Field, Form, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import RouterLink from "../RouterLink";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import { string, ref } from "yup";


export const baseInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  verifyPassword: ""
};

export const baseValidationFields = {
  firstName: string()
    .max(15, "Must be 15 characters or less")
    .required("Required"),
  lastName: string()
    .max(20, "Must be 20 characters or less")
    .required("Required"),
  email: string()
    .email("Invalid email addresss`")
    .required("Required"),
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

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const fieldAttributes = {
  variant: "outlined",
  required: true,
  component: TextField,
  fullWidth: true
};

export default function BaseSignupForm({ component: Component, isSubmitting }) {
  const classes = useStyles();
  return (
    <Form className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            autoComplete="fname"
            name="firstName"
            id="firstName"
            label="First Name"
            autoFocus
            {...fieldAttributes}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
            {...fieldAttributes}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ErrorMessage name="firstName" component="div" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <ErrorMessage name="lastName" component="div" />
        </Grid>
        <Grid item xs={12}>
          <Field
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
            {...fieldAttributes}
            />
        </Grid>
        <Grid item xs={12}>
          <ErrorMessage name="email" component="div" />
        </Grid>
        {Component && <Component />}
        <Grid item xs={12}>
          <Field
            id="password"
            label="Password"
            type="password"
            name="password"
            autoComplete="email"
            {...fieldAttributes}
          />
        </Grid>
        <Grid item xs={12}>
          <ErrorMessage name="password" component="div" />
        </Grid>
        <Grid item xs={12}>
          <Field
            id="verifyPassword"
            label="Verify Password"
            type="password"
            name="verifyPassword"
            autoComplete="email"
            {...fieldAttributes}
          />
        </Grid>
        <Grid item xs={12}>
          <ErrorMessage name="verifyPassword" component="div" />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isSubmitting}
      >
        Proceed
      </Button>
      <Grid container justify="flex-end">
        <Grid item>
          <Link component={RouterLink} to="signin" variant="body2">
            Already have an account? Sign in
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
}
