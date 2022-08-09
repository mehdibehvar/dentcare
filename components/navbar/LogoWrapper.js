import styled from '@emotion/styled'
import { Box } from '@mui/material'
const LogoBox=styled(Box)(({theme})=>({
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
  ":after":{
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
  span:{
    paddingTop: "21px",
    paddingLeft:theme.spacing(0.5),
    transition:"all 1s ease",
   ":hover":{
    color:theme.palette.secondary.main,
    transform:'scale(1.1)'
   }
  },
  i:{
    fontSize: 30,
    transition:"all 1s ease",
    ":hover":{
     color:theme.palette.secondary.main,
     transform:'scale(1.1)'
    }
  }
}))
export default function LogoWrapper() {
  return (
    <LogoBox color="primary.light">
        <span>
          DentCare</span><i  className={`fa fa-tooth`}></i>
    </LogoBox>
  )
}
