import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../SignUp.styles";
import { Box, Button } from "@material-ui/core";

// Sign up via Social network
export const SignUpSocialNetwork = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <>
      <Box mt={2} mb={2}>
        <Button classes={{ root: classes.facebookSignupButton }}>
          {t("signup.signUpText.withFacebook")}
        </Button>
      </Box>
      <Box mb={2}>
        <Button classes={{ root: classes.googleSignupButton }}>
          {t("signup.signUpText.withGoogle")}
        </Button>
      </Box>
    </>
  );
};
