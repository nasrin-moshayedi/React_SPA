import React from "react";
// import { withStyles } from "@material-ui/core/styles";
// material-ui imports
import MenuItem from "@material-ui/core/MenuItem";
import Grid from "@material-ui/core/Grid";

// style
// import "mainPage.css";

function MainPage() {
  return (
    <div>
      <Grid
        container
        justify="center"
        alignContent="space-around"
        alignItems="center"
      >
        <Grid item xs={1}>
          <MenuItem style={{ textAlign: "center" }}>home</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem>about me</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem>contact me</MenuItem>
        </Grid>
        <Grid item xs={1}>
          <MenuItem>skills</MenuItem>
        </Grid>
      </Grid>
    </div>
  );
}

export default MainPage;
