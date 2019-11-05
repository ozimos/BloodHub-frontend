import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import { Switch, Route, useRouteMatch } from "react-router-dom";
import Copyright from "./Copyright";
import Navbar from "./Navbar";
import RequesterSignup from "./signupform/RequesterSignup";
import DonorSignup from "./signupform/DonorSignup";

const useStyles = makeStyles(theme => ({
  "@global": {
    body: {
      backgroundColor: theme.palette.common.white
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main
  }
}));

export default function SignUp() {
  const classes = useStyles();
  const { path } = useRouteMatch();
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Switch>
            <Route path={`${path}/donate`}>
              <DonorSignup />
            </Route>
            <Route path={`${path}/request`}>
              <RequesterSignup />
            </Route>
          </Switch>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Container>
  );
}
