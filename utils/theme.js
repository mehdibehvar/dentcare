import { createTheme } from "@mui/material";


 const theme=createTheme({
    typography:{
        fontFamily:"Vazirmatn-RD"
    },
    palette:{
        primary:{
            main:"#0FACEF",
            light:"#0facef"
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