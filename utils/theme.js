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
            primary:"#000000",
            secondary:"#666666",
            disabled:"#999999"
        },
        background:{
            paper:"#FFFFFF",
            menue:"rgba(83, 189, 236, 0.8)"
        }
    }
})
export default theme;