import React, {useState, Fragment} from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import ToggleButton from '@material-ui/lab/ToggleButton';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Blood Hub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function DonorFields() {
  return (
    <Fragment>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="blood-group"
            label="Blood Group"
            type="string"
            id="blood-group"
            autoComplete="blood-group"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="street"
            label="Street Address"
            type="string"
            id="street-address"
            autoComplete="street-address"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="lga"
            label="LGA"
            type="string"
            id="lga"
            autoComplete="lga"
            />
        </Grid>
        <Grid item xs={12}>
            <TextField
            variant="outlined"
            required
            fullWidth
            name="state"
            label="State"
            type="string"
            id="state"
            autoComplete="state"
            />
        </Grid>
    </Fragment>
  );
}

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));


export default function SignUp() {
  const classes = useStyles();


  const [isDonor, setIsDonor] = useState(true);

  const handleAlignment = (event, newAlignment) => {
    setIsDonor(newAlignment);
  };
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>

        <ToggleButtonGroup
            value={isDonor}
            exclusive
            onChange={handleAlignment}
            aria-label="is a donor"
          >
            <ToggleButton value={true} aria-label="left aligned">
            Register as a Donor
            </ToggleButton>
            <ToggleButton value={false} aria-label="centered">
            Request a Blood Donation
            </ToggleButton>
        </ToggleButtonGroup>


        <form className={classes.form} noValidate>
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="phone"
                label="Phone"
                type="phone"
                name="phone"
                autoComplete="phone"
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
              />
            </Grid>
            {isDonor && <DonorFields />}
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="password"
                type="password"
                label="password"
                name="email"
                autoComplete="email"
              />
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
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="#" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}