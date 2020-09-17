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
    text: {
      primary: TEXT_GRAY,
    },
  },
  overrides: {
    MuiButton: {
      root: {
        textTransform: "initial",
        borderRadius: "none",
      },
    },
  },
});
