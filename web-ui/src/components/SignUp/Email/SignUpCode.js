import React from "react";
import { Grid, Typography, TextField, Box, Button } from "@material-ui/core";
import { CheckCircleOutline as CheckCircleOutlineIcon } from "@material-ui/icons";
import { Formik } from "formik";
import { verifyCode } from "../../../services/userService";
import * as Yup from "yup";
import { SignUpCodeVerificationStatus } from "./SignUpCodeVerificationStatus";
import { Notification } from "../../UI/Notification";

export const SignUpCode = (props) => {
  const [formData] = React.useState({
    verificationCode: "",
  });

  const email = props.email;

  const [, setLoading] = React.useState(false);
  const [, setError] = React.useState(null);
  const [response, setResponse] = React.useState();

  const [
    showVerificationStatusScreen,
    setShowVerificationStatusScreen,
  ] = React.useState(false);

  return (
    <Formik
      // initialValues - User to store the Formik form's intial form values
      /** !Object */ initialValues={formData}
      /** !Boolean */ enableReinitialize={true}
      // onSubmit - Callback definition to execute on the click of Form Submit
      onSubmit={(values, { setSubmitting, setFieldError }) => {
        setSubmitting(true);
        verifyCode(
          values,
          email,
          setLoading,
          setError,
          setResponse,
          setShowVerificationStatusScreen
        );
      }}
      validationSchema={signUpCodeValidation}
    >
      {(props) => {
        const { dirty, isValid, handleSubmit, handleChange } = props;
        return !showVerificationStatusScreen ? (
          <>
            <form onSubmit={handleSubmit} autoComplete="off">
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
                    <Typography
                      display={"inline"}
                      style={{ verticalAlign: "top" }}
                    >
                      Sign Up successful. A link has been sent to you over email
                      with verification code.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <Box mb={3}>
                    <Typography variant={"subtitle2"} color={"textSecondary"}>
                      Please enter code below to verify your email address.
                    </Typography>
                  </Box>
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    id="verificationCode"
                    label="Verification Code"
                    variant="outlined"
                    fullWidth
                    color="primary"
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={4}>
                  <Box mt={3}>
                    <Button
                      variant="outlined"
                      color="primary"
                      style={{ width: 100, height: 40 }}
                      type="submit"
                      disabled={!dirty || !isValid}
                    >
                      Verify
                    </Button>
                  </Box>
                </Grid>
              </Grid>
            </form>
            {response && <Notification {...response} />}
          </>
        ) : (
          <SignUpCodeVerificationStatus />
        );
      }}
    </Formik>
  );
};

const signUpCodeValidation = Yup.object().shape({
  verificationCode: Yup.number()
    .positive()
    .test((value) => value.toString().length === 8),
});
