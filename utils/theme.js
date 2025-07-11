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



// {
//   primary: {
//     main: "#FFD700",      // Bright gold
//     light: "#FFEA70",     // Soft, luminous gold
//     dark: "#C6A100",      // Deep, rich golden shade
//   },
//   secondary: {
//     main: "#1E3A8A",      // Royal blue (excellent contrast with gold)
//     light: "#3B5FC9",     // Lighter blue for hover/focus
//     dark: "#102559",      // Navy blue
//   },
//   text: {
//     primary: "#1A1A1A",    // For light backgrounds
//     secondary: "#4B4B4B",  // Muted dark gray
//     disabled: "#888888",   // Standard disabled text
//   },
//   background: {
//     paper: "#FFFBE6",      // Pale gold wash (soft on the eyes)
//     default: "#FFF9DB",    // Light gold-tinted background
//   },
// }