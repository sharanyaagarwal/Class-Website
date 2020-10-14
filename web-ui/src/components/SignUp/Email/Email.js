import React from "react";
import {
  Paper,
  Grid,
  Dialog,
  Typography,
  Box,
  IconButton,
} from "@material-ui/core";
import { EmailForm } from "./EmailForm";
import { useTranslation } from "react-i18next";
import { Close as CloseIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import { SignUpCode } from "./SignUpCode";

export const Email = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();
  const [showScreenCode, setShowScreenCode] = React.useState(false);
  const [email, setEmail] = React.useState("");

  if (!open) {
    history.push("/");
  }

  return (
    <Dialog fullScreen open={open}>
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
        {!showScreenCode ? (
          <Grid
            container
            direction="column"
            spacing={0}
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh" }}
          >
            <Grid item xs={3}>
              <Box mb={4}>
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
              </Box>
            </Grid>
            <Grid
              item
              xs={3}
              children={
                <EmailForm
                  setShowScreenCode={setShowScreenCode}
                  setEmail={setEmail}
                />
              }
            ></Grid>
            <Grid item xs={3}>
              <Box mt={2}></Box>
              <Typography>
                {t("signup.alreadyMemberText")}{" "}
                <Typography component="span">
                  {t("signup.loginText")}
                </Typography>
              </Typography>
            </Grid>
          </Grid>
        ) : (
          <SignUpCode email={email} />
        )}
      </Paper>
    </Dialog>
  );
};
