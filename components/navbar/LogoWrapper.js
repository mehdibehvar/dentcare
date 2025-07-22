import styled from "@emotion/styled";
import { Box } from "@mui/material";
import Logo from "components/logo";
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
    top: "50%",
    transform: "translateY(-50%)",
    right: "-16px",
    width: 0,
    height: 0,
    borderTop: "20px solid transparent",
    borderBottom: "20px solid transparent",
    borderLeft: "20px solid #fafafa",
    zIndex: 100,
  },
  '& .subtitle': {
    fontSize: "24px",
    marginTop: "30px",
    transition: "all 1s ease",
    ":hover": {
      color: theme.palette.secondary.main,
      transform: "scale(1.1)",
    },
    [theme.breakpoints.down("sm")]: {
      fontSize: "18px",
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
  [theme.breakpoints.down("sm")]: {
    paddingLeft: "14px",
    paddingRight: 0,
  },
}));
export default function LogoWrapper() {
  return (
    <LogoBox color="primary.main">

      <div className="kapakana-font subtitle"><span>Dr Bita Behvar</span></div>
      <Logo details={{ width: 60, height: 60, alt: "دندانپزشکی دکتر بیتا بهور", toothColor: "#640D5F" }} />
    </LogoBox>
  );
}
