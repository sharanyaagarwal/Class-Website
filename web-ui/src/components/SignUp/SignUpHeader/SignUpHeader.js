import React from "react";
import { useTranslation } from "react-i18next";
import { Typography, Box } from "@material-ui/core";

// Sign up header
export const SignUpHeader = () => {
  const { t } = useTranslation();
  return (
    <Box mb={6}>
      <Typography
        variant="h3"
        align="center"
        style={{
          fontFamily: "'Nunito', sans-serif",
          fontWeight: 600,
        }}
      >
        {t("signup.title")}
      </Typography>
      <Typography variant="h6" align="center">
        {t("signup.alreadyMemberText")}{" "}
        <Typography variant="h6" display="inline">
          {t("signup.loginText")}
        </Typography>
      </Typography>
    </Box>
  );
};
