import React from "react";
import { Grid, Typography, TextField, Box, Button } from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";

export const SignUpCode = (props) => {
  return (
    <Grid
      container
      direction="column"
      spacing={0}
      alignItems="center"
      justify="center"
      style={{ minHeight: "100vh" }}
    >
      <Grid item xs={3}>
        <Box mb={6}>
          <CheckCircleOutlineIcon style={{ color: "green" }} />
          <Typography display={"inline"} style={{ verticalAlign: "top" }}>
            Sign Up successful. A link has been sent to you over email with
            verification code.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Box mb={3}>
          <Typography variant={"subtitle2"} color={"textSecondary"}>
            Please enter code below to verify your email address.
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <TextField
          id="verificationCode"
          label="Verification Code"
          variant="outlined"
          fullWidth
          color="primary"
        />
      </Grid>
      <Grid item xs={4}>
        <Box mt={3}>
          <Button
            variant="outlined"
            color="primary"
            style={{ width: 100, height: 40 }}
          >
            Verify
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};
