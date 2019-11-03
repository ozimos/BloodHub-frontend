import React from "react";

import { Field, Form, ErrorMessage } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import RouterLink from "../RouterLink";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

export default function BaseSignupForm({ component: Component, isSubmitting }) {
  const classes = useStyles();
  return (
    <Form className={classes.form}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <Field
            autoComplete="fname"
            name="firstName"
            variant="outlined"
            required
            component={TextField}
            fullWidth
            id="firstName"
            label="First Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Field
            variant="outlined"
            required
            component={TextField}
            fullWidth
            id="lastName"
            label="Last Name"
            name="lastName"
            autoComplete="lname"
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
            variant="outlined"
            required
            component={TextField}
            fullWidth
            id="email"
            label="Email Address"
            type="email"
            name="email"
            autoComplete="email"
          />
        </Grid>
        <Grid item xs={12}>
          <ErrorMessage name="email" component="div" />
        </Grid>
        {Component && <Component />}
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
