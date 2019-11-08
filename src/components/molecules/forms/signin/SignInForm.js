import React from "react";

import { Field, Form } from "formik";
import { TextField } from "formik-material-ui";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { makeStyles } from "@material-ui/core/styles";
import RouterLink from "../../../atoms/RouterLink";

const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const fieldAttributes = {
  variant: "outlined",
  margin: "normal",
  component: TextField,
  required: true,
  fullWidth: true
};

export default function SignInForm({ isSubmitting }) {
  const classes = useStyles();
  return (
    <Form className={classes.form} noValidate>
      <Field
        id="email"
        label="Email Address"
        type="email"
        name="email"
        autoComplete="email"
        {...fieldAttributes}
      />
      <Field
        id="password"
        label="Password"
        type="password"
        name="password"
        autoComplete="password"
        {...fieldAttributes}
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        className={classes.submit}
        disabled={isSubmitting}
      >
        Sign In
      </Button>
      <Grid container>
        <Grid item>
          <Link component={RouterLink} to="/auth/signup/donate" variant="body2">
            Don't have an account? Sign Up
          </Link>
        </Grid>
      </Grid>
    </Form>
  );
}
