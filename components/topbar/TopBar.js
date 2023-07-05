import {Box,Grid, Typography } from '@mui/material';
import topbarClasses from './TopBar.module.css'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PhoneInTalkIcon from '@mui/icons-material/PhoneInTalk';
import { SocialIconsBox } from 'components/other/styledComponents';
import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import theme from 'utils/theme';
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
const ScrollBarTrack = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 8,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  overflow: "hidden",
  zIndex:1000
}));
const ScrollBar = styled(Box)(({ theme, scrollBarWidth }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 8,
  width: `${scrollBarWidth}%`,
 
}));
const  getDocHeight  =  ()  =>  {
  return Math.max(
    document.body.scrollHeight,  document.documentElement.scrollHeight,
    document.body.offsetHeight,  document.documentElement.offsetHeight,
    document.body.clientHeight,  document.documentElement.clientHeight
  );
}
export default function TopBar() {
  const [scroller, setScroller] = useState(0);

  const handleScroll = (e) => {
    const  scrollTop  =  window.pageYOffset;
    const  winHeight  =  window.innerHeight;
    const docHeight=getDocHeight();
    const  totalDocScrollLength  =  docHeight  -  winHeight;
    const percentOfScroll = Math.floor(((scrollTop) / totalDocScrollLength ) *  100);
    setScroller(percentOfScroll);
  };
  useEffect(() => {
    document.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
<>
<ScrollBarTrack>
    <ScrollBar scrollBarWidth={scroller} />
  </ScrollBarTrack>
<Box className={topbarClasses.topbar} >
<Grid container>
    <Grid item xs={12} sm={10} md={8} color="primary.main">
        <ul className={topbarClasses.topbarList}>
            <li><PhoneInTalkIcon sx={{fontSize:"16px",marginLeft:"2px"}}/><Typography variant='overline' component={"span"} color="primary.main">تلفن تماس : 09909459497</Typography></li>
            <li><AccessTimeIcon sx={{fontSize:"16px",marginLeft:"2px"}}/><Typography variant='overline' component={"span"} color="primary.main"> ساعات کاری:شنبه تا پنجشنبه از ساعت 8:00 الی 9:00</Typography></li>
        </ul>
    </Grid>
    <Grid item xs={12} sm={2} md={4}>
   <SocialIconsBox iconColor={theme.palette.primary.main}>
   <EmailIcon />
    <InstagramIcon  />
    <YouTubeIcon  />
    <TwitterIcon  />
   </SocialIconsBox>
    </Grid>
</Grid>
</Box>
</>
  )
}
