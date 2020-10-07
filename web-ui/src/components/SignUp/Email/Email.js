import React from "react";
import {
  Paper,
  Grid,
  Dialog,
  Typography,
  Box,
  IconButton,
  Slide,
} from "@material-ui/core";
import { EmailForm } from "./EmailForm";
import { useTranslation } from "react-i18next";
import { Close as CloseIcon } from "@material-ui/icons";
import { useHistory } from "react-router-dom";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export const Email = (props) => {
  const { t } = useTranslation();
  const [open, setOpen] = React.useState(true);
  const history = useHistory();

  if (!open) {
    history.push("/sign-up");
  }

  return (
    <Dialog fullScreen open={open} TransitionComponent={Transition}>
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
          <Grid item xs={3} children={<EmailForm />}></Grid>
          <Grid item xs={3}>
            <Box mt={2}></Box>
            <Typography>
              {t("signup.alreadyMemberText")}{" "}
              <Typography component="span">{t("signup.loginText")}</Typography>
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Dialog>
  );
};
