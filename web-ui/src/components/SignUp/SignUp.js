import React from "react";
import { Paper, Grid, Dialog } from "@material-ui/core";
import { SignUpHeader } from "./SignUpHeader/SignUpHeader";
import { SignUpSocialNetwork } from "./SignUpSocialNetwork/SignUpSocialNetwork";
import { SignUpSeparator } from "./SignUpSeparator/SignUpSeparator";
import { SignUpEmail } from "./SignUpEmail/SignUpEmail";
import { JoinCommunity } from "./JoinCommunity/JoinCommunity";
// import { Close as CloseIcon } from "@material-ui/icons";

export const SignUp = () => {
  return (
    <Dialog fullScreen open={true}>
      <Paper>
        {/* <CloseIcon fontSize={"large"} /> */}
        <Grid
          container
          direction="column"
          spacing={0}
          alignItems="center"
          justify="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3}>
            <SignUpHeader />
          </Grid>
          <Grid item xs={3}>
            <SignUpSocialNetwork />
          </Grid>
          <Grid item xs={3}>
            <SignUpSeparator />
          </Grid>
          <Grid item xs={3}>
            <SignUpEmail />
          </Grid>
          <Grid item xs={3}>
            <JoinCommunity />
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
};
