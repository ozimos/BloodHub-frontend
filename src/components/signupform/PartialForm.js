import React, { useState, Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import RouterLink from "../RouterLink";
import Grid from "@material-ui/core/Grid";
import {Redirect} from 'react-router-dom'
import { makeStyles } from "@material-ui/core/styles";
import { connect } from "react-redux";


const useStyles = makeStyles(theme => ({
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

function PartialForm({component: Component, dispatch, action, redirectPath, isLoggedIn}) {

  const classes = useStyles();

  const [formData, setFormData] = useState({});

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(state => ({ ...state, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (formData.firstName && formData.lastName && formData.email ) {
      dispatch(action(formData));
    }
  };

  return (
    isLoggedIn ? <Redirect to={redirectPath} /> :
    <Fragment>
      <form className={classes.form} noValidate onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="firstName"
              variant="outlined"
              required
              fullWidth
              id="firstName"
              label="First Name"
              autoFocus
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="lastName"
              label="Last Name"
              name="lastName"
              autoComplete="lname"
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              type="email"
              name="email"
              autoComplete="email"
              onChange={handleChange}
            />
          </Grid>
          {Component && <Component handleChange={handleChange}/>}
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
        >
          Proceed
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/signin" component={RouterLink} variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </form>
    </Fragment>
  );
}

const mapStateToProps = (state) => ({
  isLoggedIn: state.auth.isLoggedIn
})

export default connect(mapStateToProps)(PartialForm)
