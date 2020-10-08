import React from "react";
import { Grid, TextField, Button } from "@material-ui/core";
import { Formik } from "formik";
import * as Yup from "yup";

export const EmailForm = () => {
  const [formData] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  return (
    <Formik
      // initialValues - User to store the Formik form's intial form values
      /** !Object */ initialValues={formData}
      /** !Boolean */ enableReinitialize={true}
      // onSubmit - Callback definition to execute on the click of Form Submit
      onSubmit={(values, { setSubmitting, setFieldError }) => {}}
      validationSchema={signUpEmailFormValidation}
    >
      {(props) => {
        const { values, dirty, isValid, handleSubmit, handleChange } = props;
        return (
          <form onSubmit={handleSubmit}>
            {console.log(values)}
            <Grid container spacing={2} justify="center" alignItems="center">
              <Grid item xs={12}>
                <TextField
                  id="firstName"
                  label="First Name"
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="lastName"
                  label="Last Name"
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="email"
                  label="Email"
                  fullWidth
                  color="primary"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  label="Password"
                  fullWidth
                  type="password"
                  color="primary"
                  variant="outlined"
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Button
                  variant="outlined"
                  color="primary"
                  type="submit"
                  style={{ width: 240, height: 48 }}
                  disabled={!dirty || !isValid}
                >
                  Sign up
                </Button>
              </Grid>
            </Grid>
          </form>
        );
      }}
    </Formik>
  );
};

const signUpEmailFormValidation = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().required(),
  password: Yup.string().required(),
});
