import React from "react";
import { useTranslation } from "react-i18next";
import { useStyles } from "../SignUp.styles";
import { CheckBox } from "@material-ui/icons";
import { Typography, Box } from "@material-ui/core";

// Join community checkbox
export const JoinCommunity = () => {
  const { t } = useTranslation();
  const classes = useStyles();
  return (
    <Box mt={4}>
      <CheckBox value={true} inputProps={{ "aria-label": "Join Community" }} />{" "}
      <Typography
        display="inline"
        classes={{ root: classes.joinCommunityText }}
      >
        {t("signup.joinCommunityText")}
      </Typography>
    </Box>
  );
};
