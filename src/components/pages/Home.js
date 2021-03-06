import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Copyright from 'components/atoms/Copyright'
import RouterLink from 'components/atoms/RouterLink'
import Navbar from 'components/molecules/Navbar'


const useStyles = makeStyles(theme => ({
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
}));


export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <CssBaseline />
      <Navbar />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
              Filling the Infrastructure Gap
            </Typography>
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Welcome to BloodHub. An app that connects donors to people in dire need
            </Typography>
            <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button component={RouterLink} to="/auth/signup/donate" variant="contained" color="primary">
                    Sign Up as a Donor
                  </Button>
                </Grid>
                <Grid item>
                  <Button component={RouterLink} to="/auth/signup/request" variant="outlined" color="primary">
                    Request Blood
                  </Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>
      </main>
      {/* Footer */}
      <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          We Save Lives
        </Typography>
        <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
          Solving the problem of delivering blood without blood banking
        </Typography>
        <Copyright />
      </footer>
      {/* End footer */}
    </React.Fragment>
  );
}