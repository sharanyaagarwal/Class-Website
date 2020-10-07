import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../SignUp.styles";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

// Sign up via Social network
export const SignUpEmail = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Link to="/sign-up-email" style={{ textDecoration: "none" }}>
      <Button variant="outlined" classes={{ root: classes.signUpEmail }} m={2}>
        {t("signup.signUpText.withEmailText")}
      </Button>
    </Link>
  );
};
