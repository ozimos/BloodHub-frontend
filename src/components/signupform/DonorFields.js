import React, { Fragment } from "react";

import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export default function DonorFields({ handleChange }) {
  return (
    <Fragment>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="blood-group"
          onChange={handleChange}
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
          onChange={handleChange}
          label="Street Address"
          id="street-address"
          autoComplete="street-address"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="lg"
          onChange={handleChange}
          label="LG"
          id="lg"
          autoComplete="lg"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="state"
          label="State"
          onChange={handleChange}
          id="state"
          autoComplete="state"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="password"
          label="Password"
          onChange={handleChange}
          id="password"
          type="password"
          autoComplete="password"
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          variant="outlined"
          required
          fullWidth
          name="verifyPassword"
          label="Verify Password"
          onChange={handleChange}
          id="verifyPassword"
          type="password"
          autoComplete="verifyPassword"
        />
      </Grid>
    </Fragment>
  );
}
