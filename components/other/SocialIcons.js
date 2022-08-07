import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import styled from '@emotion/styled';
import { Box } from '@mui/material';


const SocialIconsBox = styled(Box)(({ theme }) => ({
    display:"flex",
    alignItems:"center",
    justifyContent:"space-around",
    svg:{
        fontSize:"25px",
        marginLeft:"5px",
        transition:"all 1s ease",
        ":hover":{
            color:theme.palette.secondary.light,
            transform:"rotate(10deg)"
        }
    },
    [theme.breakpoints.down("xs")]:{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
    }
  }));
export default function SocialIcons() {



  return (
    <SocialIconsBox>
    <EmailIcon />
    <InstagramIcon  />
    <YouTubeIcon  />
    <TwitterIcon  />
  </SocialIconsBox>
  )
}
