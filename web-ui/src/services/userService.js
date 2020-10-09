import axios from "axios";

export const postUserSignUp = async (
  values,
  setLoading,
  setError,
  setResponse
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
      }
    }
  } catch (error) {
    setError(error);
  } finally {
    setLoading(false);
  }
};
