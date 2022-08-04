import styled from "@emotion/styled"
import { Box } from "@mui/material"
import Navbar from "components/navbar/Navbar"
import BannerDetails from "./BannerDetails"
export default function Banner() {
    const BannerSection=styled("section")(({theme})=>({
   backgroundImage:"url(./assets/images/bann.jpg)",
        position: "relative",
        backgroundSize: "cover",
        overflow: "hidden",
        backgroundAttachment: "fixed",
        height: "86vh",
        backgroundPosition: "62% 0%",
        [theme.breakpoints.up("md")]:{
            height:"93vh",
            backgroundPosition:"70% 0"
        },
        [theme.breakpoints.down("md")]:{
            height:"86vh",
            backgroundPosition:"70% 0"
        },
        [theme.breakpoints.down('sm')]:{
            height:"80vh",
            backgroundPosition:"70% 0"
        },
        [theme.breakpoints.down("xs")]:{
            height:"72vh",
            backgroundPosition:"40% 0"
        }
    }))
  return (
   <BannerSection>
   <Box>
   <BannerDetails/>
   </Box>
   </BannerSection>
  )
}
