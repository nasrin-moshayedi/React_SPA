import React from "react";

// material-ui imports
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";


function MainPage() {
  return (
    <div className="red">

      <Grid
        container
        justify="flex-end"
        alignContent="space-around"
        alignItems="center"
      >
        <Grid item xs={1}>
          <MenuItem class="center-menu-item">home</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem class="center-menu-item">about me</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem class="center-menu-item">contact me</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem class="center-menu-item">skills</MenuItem>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
