import styled from "@emotion/styled"
import { Box } from "@mui/material"
import Navbar from "components/navbar/Navbar"
import BannerDetails from "./BannerDetails"
import ReactSvgLogo from "./ReactLogo"
export default function Banner() {
    const BannerSection=styled("section")(({theme})=>({
        backgroundImage:"url(./assets/images/bann.jpg)",
        position: "relative",
        backgroundSize: "cover",
        overflow: "hidden",
        backgroundAttachment: "inherit",
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
            backgroundPosition:"70% 0"
        }
    }));
    const MyLogo=styled("div")(({theme})=>({
        width:70,
        height:50,
        backgroundColor:"primary.main",
        position:"absolute",
        top:170,
        left:300,
    }));
  return (
   <BannerSection>
   <Box>
    <MyLogo>
        <ReactSvgLogo/>
    </MyLogo>
   <BannerDetails/>
   </Box>
   </BannerSection>
  )
}
