import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../SignUp.styles";
import { Button } from "@material-ui/core";

// Sign up via Social network
export const SignUpEmail = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Button variant="outlined" classes={{ root: classes.signUpEmail }} m={2}>
      {t("signup.signUpText.withEmailText")}
    </Button>
  );
};
