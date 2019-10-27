import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import InputBase from "@material-ui/core/InputBase";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Copyright from "./Copyright";
import Navbar from "./Navbar";

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
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3)
  },
  submit: {
    margin: theme.spacing(3, 0, 2)
  }
}));

const BootstrapInput = withStyles(theme => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(1)
    }
  },
  input: {
    borderRadius: 4,
    minWidth: 300,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "20px 26px 20px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
    }
  }
}))(InputBase);

export default function RequestBlood() {
  const classes = useStyles();
  const [values, setValues] = useState({
    hospital: {
      name: "hai",
      address: {
        street: "random",
        lga: "random",
        state: "random"
      }
    },
    bloodGroup: "",
  });

  const handleChange = event => {
    setValues(oldValues => ({
      ...oldValues,
      [event.target.name]: event.target.value
    }));
  };

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Navbar />
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  name="otp"
                  variant="outlined"
                  required
                  fullWidth
                  id="otp"
                  label="OTP Code"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="filled-hospital-simple">
                    Hospital
                  </InputLabel>
                  <Select
                    value={values.hospital}
                    onChange={handleChange}
                    required
                    input={
                      <BootstrapInput name="age" id="filled-hospital-simple" />
                    }
                    inputProps={{
                      name: "hospital",
                      id: "filled-hospital-simple"
                    }}
                  >
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <FormControl variant="filled" className={classes.formControl}>
                  <InputLabel htmlFor="blood-group-select">
                    Blood Group
                  </InputLabel>
                  <Select
                    value={values.bloodGroup}
                    onChange={handleChange}
                    required
                    input={
                      <BootstrapInput
                        name="bloodGroup"
                        id="blood-group-select"
                      />
                    }
                    inputProps={{
                      name: "bloodGroup",
                      id: "filled-blood-group"
                    }}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    <MenuItem value={"A+"}>A+</MenuItem>
                    <MenuItem value={"A-"}>A-</MenuItem>
                    <MenuItem value={"B+"}>B+</MenuItem>
                    <MenuItem value={"B-"}>B-</MenuItem>
                    <MenuItem value={"AB+"}>AB+</MenuItem>
                    <MenuItem value={"AB-"}>AB-</MenuItem>
                    <MenuItem value={"O+"}>O+</MenuItem>
                    <MenuItem value={"O-"}>O-</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
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
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </Container>
  );
}
