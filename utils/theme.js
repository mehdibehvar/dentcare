import { createTheme } from "@mui/material";
 const theme=createTheme({
    typography:{
        fontFamily:"Vazirmatn-RD"
    },
    palette:{
        primary:{
            main:"#FF059B",/////#72C7ED////FF059B///#0FACEF
            light:"#0facef",
        },
        secondary:{
            main:"#fab3e4",
            light:"#e5fab3",
            dark:"#e5fab3",   
        },
        text:{
            primary:"#333333",
            secondary:"#666666",
            disabled:"#999999"
        },
        background:{
            paper:"#FFFFFF",
            default:"#FAFAFA",
        }
    }
})
export default theme;