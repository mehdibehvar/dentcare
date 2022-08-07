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
export default function TopBar() {
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
   <SocialIconsBox iconColor={theme.palette.primary.main}>
   <EmailIcon />
    <InstagramIcon  />
    <YouTubeIcon  />
    <TwitterIcon  />
   </SocialIconsBox>
    </Grid>
</Grid>
</Box>
  )
}
