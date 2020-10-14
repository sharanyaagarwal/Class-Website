import React from "react";
import { Grid, Typography, Box } from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import { Link } from "react-router-dom";

export const SignUpCodeVerificationStatus = (props) => {
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
            Sign up code verified sucessfully. Please use your credentials to{" "}
            <Link to="/user/login">Login</Link>.
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
