import styled from "@emotion/styled";
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