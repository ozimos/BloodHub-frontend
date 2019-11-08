import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Copyright from "../atoms/Copyright";
import { makeStyles } from "@material-ui/core/styles";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Navbar from "../molecules/Navbar";
import SignUp from "../molecules/forms/signup/SignUp";
import SignIn from "../molecules/forms/signin/SignIn";

const useStyles = makeStyles(theme => ({
  root: {
    height: "100vh"
  },
  image: {
    // place blood hub image here
    backgroundImage: "url(https://source.unsplash.com/random)",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center"
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function AuthPage() {
  const classes = useStyles();
  const { path } = useRouteMatch();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Navbar />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Switch>
            <Route path={`${path}/signin`}>
              <SignIn />
            </Route>
            <Route path={`${path}/signup`}>
              <SignUp />
            </Route>
          </Switch>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
