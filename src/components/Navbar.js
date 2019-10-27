import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import RouterLink from './RouterLink'

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    homeLink: {
      textDecoration: "none",
    }
  }));

export default function Navbar() {
    const classes = useStyles();

    return (
        <AppBar position="relative">
        <Toolbar>
          <CameraIcon className={classes.icon} />
          <Typography className={classes.homeLink} component={RouterLink} to="/" variant="h6" color="inherit" noWrap>
            Blood Hub
          </Typography>
        </Toolbar>
      </AppBar>
    )
}