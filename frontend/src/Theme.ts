import { createMuiTheme } from "@material-ui/core/styles";

const primary = "#509595";
const primaryLight = "#99E3D9";
const secondary = "#2F3647";
const secondaryDark = "#1B1F2C";

export default createMuiTheme({
  palette: {
    primary: {
      main: primary,
      light: primaryLight,
      dark: secondaryDark,
    },
    secondary: {
      main: secondary,
    },
    text: {
      primary: "#f4f4f4",
      secondary: "white",
    },
  },
  typography: {
    fontFamily: '"Inter", sans-serif',
  },
  overrides: {
    MuiPaper: {
      root: {
        backgroundColor: secondary,
      },
    },
  },
});
