import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn-RD",
  },
  palette: {
    primary: {
      main: "#FF2DD1",
      light: "#FF7EE4",
      dark: "#C4009C",
    },
    secondary: {
      main: "#63C8FF",
      light: "#A1DEFF",
      dark: "#2196DB",
    },

    text: {
      primary: "#333333",
      secondary: "#666666",
      disabled: "#999999",
    },
    background: {
      paper: "#FAFAFA",
      default: "#FAFAFA",
    },
  },
});
export default theme;
