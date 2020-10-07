import { createMuiTheme } from "@material-ui/core/styles";

const FONT_FAMILY = [
  "Georgia, serif",
  "'Nunito', sans-serif",
  "'Helvetica', 'Arial', sans-serif",
];
const TEXT_GRAY = "#333333";

export const classWebTheme = createMuiTheme({
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: 15,
    fontWeight: 500,
  },
  palette: {
    primary: {
      main: "#FFD45A",
    },
    secondary: {
      main: TEXT_GRAY,
    },
    text: {
      primary: TEXT_GRAY,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "initial",
        borderRadius: 20,
      },
      label: {
        color: TEXT_GRAY,
      },
      outlinedPrimary: {
        "&:hover": {
          backgroundColor: "#FFD45A",
        },
        borderWidth: 3,
      },
    },
  },
});
