import { createTheme } from "@mui/material";
const theme = createTheme({
  typography: {
    fontFamily: "Vazirmatn-RD",
  },
  palette: {
primary: {
  main: "#640D5F",
  light: "#9B4F91",  // Lighter shade
  dark: "#3F003C",   // Darker shade
},
secondary: {
  main: "#FFCC00",
  light: "#FFD733",  // Lighter shade
  dark: "#CC9A00",   // Darker shade
},


    text: {
      primary: "#333333",
      secondary: "#F5F5F5",
      disabled: "#999999",
      dark:"#0d0d0d"
    },
    background: {
      paper: "#FAFAFA",
      default: "#FAFAFA",
    },
  },
});
export default theme;


