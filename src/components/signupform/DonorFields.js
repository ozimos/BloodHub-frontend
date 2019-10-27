import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function DonorFields() {
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
            id="state"
            autoComplete="state"
          />
        </Grid>
      </Fragment>
    );
  }