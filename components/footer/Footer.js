import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import VolunteerActivismIcon from "@mui/icons-material/VolunteerActivism";
import SocialIcons from "components/other/SocialIcons";
import styled from "@emotion/styled";
export default function Footer() {
  const FooterWrapper = styled("footer")(({ theme }) => ({
    backgroundColor:theme.palette.primary.light,
    marginBottom:theme.spacing(2)
  }));
   const LeftBox=styled(Box)(({theme})=>({
    direction:"ltr",
    display:"flex",
    alignItems:"center",
    justifyContent:"start",
   margin:theme.spacing(1),
   [theme.breakpoints.down("sm")]:{
    justifyContent:"center",
   },
   strong:{
    transition:"all 1s ease",
    ":hover":{
        color:theme.palette.secondary.light,
        fontSize:14
    }
   },
   i:{
    color:theme.palette.secondary.main,
    transition:"all 1s ease",
    ":hover":{
        color:theme.palette.secondary.light,
        transform:"rotate(10deg)translateX(8px)scale(1.2)",  
    }
   }
   }));
   const RightBox=styled(Box)(({theme})=>({
       margin:theme.spacing(1)
   }))
  return (
    <FooterWrapper>
  <Grid container>
       <Grid item xs={12} sm={6}>
        <RightBox>
        <SocialIcons/>
        </RightBox>
       
      </Grid>
      <Grid item xs={12} sm={6}>
        <LeftBox>
          <Typography variant="caption" component={"span"}>
          Designed by{" "}
          <Typography variant="subtitile1" component={"strong"}>
            Mehdi Behvar 
          </Typography>
           {" "} with:
        </Typography>
          <Typography variant="caption" component="i">
          <VolunteerActivismIcon/>
          </Typography>
        </LeftBox>
    </Grid>
  </Grid>
    </FooterWrapper>
  );
}
