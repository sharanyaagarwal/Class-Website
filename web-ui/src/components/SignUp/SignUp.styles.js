import { makeStyles } from "@material-ui/core/styles";

const signUpButton = {
  width: 316,
  height: 48,
};

const LIGHT_GREY = "#D4D4D2";
const WHITE = "#FFFFFF";

export const useStyles = makeStyles({
  facebookSignupButton: {
    backgroundColor: "#3b5998",
    color: WHITE,
    ...signUpButton,
    "&:hover": {
      backgroundColor: "#3b5998",
    },
    fontFamily: "Helvetica",
  },
  googleSignupButton: {
    backgroundColor: "#4285f4",
    color: WHITE,
    ...signUpButton,
    "&:hover": {
      backgroundColor: "#4285f4",
    },
    fontFamily: "Helvetica",
  },
  signUpSeparator: {
    width: 320,
    textAlign: "center",
    margin: "0 auto 30px",
    height: 11,
    borderBottom: "1px solid",
    borderColor: LIGHT_GREY,
  },
  separatorText: {
    backgroundColor: WHITE,
    padding: "0 13px",
  },
  signUpEmail: {
    // border: "1px solid",
    // borderColor: LIGHT_GREY,
    ...signUpButton,
  },
  joinCommunityText: {
    verticalAlign: "top",
  },
});
