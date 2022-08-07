import styled from "@emotion/styled";
import { Box } from "@mui/material";
  ////section style///////
  export const GraySection = styled("section")(({ theme }) => ({
    backgroundColor:theme.palette.background.default,
    padding: "10px",
  }));
  export const LightSection = styled("section")(({ theme }) => ({
    backgroundColor:theme.palette.background.paper,
    padding: "10px",
  }));
  export const HeroSection= styled("section")(({ theme }) => ({
    backgroundImage:"url(./assets/images/bann.jpg)",
    width:"100%",
    backgroundSize:"contain",
    position:"relative",
    overflow: "hidden",
    zIndex:"0",
    height: "480px",
    backgroundRepeat: "no-repeat",
    ":after":{
      content: '""',
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      backgroundColor: "rgb(237 237 237 / 86%)",
      zIndex: "-1",
    }
  }));
  export const SocialIconsBox =styled(Box)(({ theme }) => (props) => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
  
    svg:{
        fontSize:"25px",
        marginLeft:"5px",
        transition:"all 1s ease",
        color:props.iconColor,
        ":hover":{
            color:theme.palette.secondary.main,
            transform:"rotate(10deg)"
        }
    },
    [theme.breakpoints.down("xs")]:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
  }));