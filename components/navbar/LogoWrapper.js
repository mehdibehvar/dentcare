import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Logo from "components/logo";
import Image from "next/image";
const LogoBox = styled(Box)(({ theme }) => ({
  width: "40%",
  height: "100%",
  backgroundColor: "#fafafa",
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: "10px",
  paddingLeft: "30px",
  position: "absolute",
  left: "-25px",
  ":after": {
    content: '""',
    position: "absolute",
    right: "-15px",
    width: "40px",
    height: "40px",
    transform: "rotate(45deg)",
    webkitTransform: "rotate(45deg)",
    zIndex: "100",
    backgroundColor: "#fafafa",
  },
 '& .subtitle':{
    fontSize: "24px",
    marginTop: "30px",
    transition: "all 1s ease",
    ":hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
   display: "none",
    },
  },
  svg: {
      transition: "all 1s ease",
      ":hover": {
        fill: theme.palette.secondary.main,
        transform: "scale(1.1)",
    },
  },
  [theme.breakpoints.up("xl")]: {
    left: "-15%",
    justifyContent: "center",
    width: "50%",
  },
}));
export default function LogoWrapper() {
  return (
    <LogoBox color="primary.main">

      <div className="kapakana-font subtitle"><span>Dr Bita Behvar</span></div>
      {/* <Image
        src="/assets/images/logos/suntooth-1100-950.svg"
        alt="logo"
        width={40}
        height={40}
      /> */}
      <Logo details={{width: 40, height: 40, alt: "دندانپزشکی دکتر بیتا بهور",toothColor:"#FF2DD1"}}/>
    </LogoBox>
  );
}
