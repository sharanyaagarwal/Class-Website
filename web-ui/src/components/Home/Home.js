import React from "react";
import { Typography, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <Box m={2}>
      <Typography align="right">
        <Link to="/sign-up">Sign Up</Link>
      </Typography>
    </Box>
  );
};
