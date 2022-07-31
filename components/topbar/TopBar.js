import { AppBar,Box,Grid,Toolbar, Typography } from '@mui/material';
import React from 'react'
import styled from '@emotion/styled';
import { orange, red } from '@mui/material/colors';
import topbarClasses from './TopBar.module.css'
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';

export default function TopBar() {
   const MyCallIcon=styled("span")(({theme})=>({
    [theme.breakpoints.up("md")]:{
      color:red[500]
    }
   }))
  return (
<Box className={topbarClasses.topbar} >
<Grid container>
    <Grid item xs={12} sm={10} md={8} color="primary.main">
        <ul className={topbarClasses.topbarList}>
            <li><PhoneInTalkIcon sx={{fontSize:"16px",marginLeft:"2px"}}/><Typography variant='overline' component={"span"} color="primary.main">تلفن تماس : 09909459497</Typography></li>
            <li><AccessTimeIcon sx={{fontSize:"16px",marginLeft:"2px"}}/><Typography variant='overline' component={"span"} color="primary.main"> ساعات کاری:شنبه تا پنجشنبه از ساعت 8:00 الی 9:00</Typography></li>
        </ul>
    </Grid>
    <Grid item xs={12} sm={2} md={4}>
        <Box color="primary.light" className={topbarClasses.topbarSocial}>
            <EmailIcon sx={{fontSize:"20px",marginLeft:"5px"}}/>
            <InstagramIcon sx={{fontSize:"20px",marginLeft:"5px"}}/>
            <YouTubeIcon sx={{fontSize:"20px",marginLeft:"5px"}}/>
            <TwitterIcon sx={{fontSize:"20px",marginLeft:"5px"}}/>
        </Box>
    </Grid>
</Grid>
</Box>
  )
}
