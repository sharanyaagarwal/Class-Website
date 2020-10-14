import axios from "axios";

export const postUserSignUp = async (
  values,
  setLoading,
  setError,
  setResponse,
  setShowScreenCode,
  setEmail
) => {
  try {
    setLoading(true);
    setResponse();
    const data = {
      first_name: values.firstName,
      last_name: values.lastName,
      email: values.email,
      password: values.password,
    };
    const response = await axios({
      method: "post",
      url: `https://localhost:9000/user/sign-up`,
      data,
    });
    if (response && response.data) {
      if (response.data.status === false) {
        // Unable to sign up - Error occurred
        setResponse({
          openState: true,
          severity: "error",
          message: response.data.message,
        });
      }
      if (response.data.status === true) {
        setResponse({
          openState: true,
          severity: "success",
          message: response.data.message,
        });
        setShowScreenCode(true);
        setEmail(values.email);
      }
    }
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};

export const verifyCode = async (
  values,
  email,
  setLoading,
  setError,
  setResponse,
  setShowVerificationStatusScreen
) => {
  setResponse();
  const data = {
    email,
    verification_code: values.verificationCode,
  };
  const response = await axios({
    method: "post",
    url: `https://localhost:9000/user/sign-up-code/verify`,
    data,
  });

  if (response && response.data) {
    if (response.data.status === false) {
      setResponse({
        openState: true,
        severity: "error",
        message: response.data.message,
      });
    }
    if (response.data.status === true) {
      setResponse({
        openState: true,
        severity: "success",
        message: response.data.message,
      });
      setShowVerificationStatusScreen(true);
    }
  }
};
