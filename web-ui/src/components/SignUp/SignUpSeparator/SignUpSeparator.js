import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../SignUp.styles";
import { Typography, Box } from "@material-ui/core";

// Sign up via Social network
export const SignUpSeparator = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box m={2} classes={{ root: classes.signUpSeparator }}>
      <Typography display="inline" classes={{ root: classes.separatorText }}>
        {t("signup.separatorORText")}
      </Typography>
    </Box>
  );
};
