import React from "react";
import { Paper, Grid, Dialog, IconButton, Slide } from "@material-ui/core";
import { SignUpHeader } from "./SignUpHeader/SignUpHeader";
import { SignUpSocialNetwork } from "./SignUpSocialNetwork/SignUpSocialNetwork";
import { SignUpSeparator } from "./SignUpSeparator/SignUpSeparator";
import { SignUpEmail } from "./SignUpEmail/SignUpEmail";
import { JoinCommunity } from "./JoinCommunity/JoinCommunity";
import { Close as CloseIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const SignUp = () => {
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  if (!open) {
    history.push("/");
  }
  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
      <Paper>
        <IconButton
          aria-label="Close SignUp form"
          onClick={() => {
            setOpen(false);
          }}
          style={{ position: "absolute", right: 0 }}
        >
          <CloseIcon fontSize={"large"} color="secondary" />
        </IconButton>
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
