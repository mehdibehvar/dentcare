import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import styled from '@emotion/styled';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import data from 'utils/data';
import { MobileFriendly } from '@mui/icons-material';

const ListWrapper = styled("div")(({theme})=>({
  li: {
    textAlign: "right",
    transition: "opacity 0.3s",
    ":hover": {
      opacity: "0.6"
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight:0,
    },
  },
  a:{
    textAlign: "right",
    transition: "opacity 0.3s",
    ":hover": {
      opacity: "0.6"
    },
    [theme.breakpoints.down("sm")]: {
      paddingRight:0,
    },
  }
}));

export default function InTouchList() {
  const {info}=data;
  return (
    <ListWrapper>
      <List sx={{ width: '100%' }}>

        {/* آدرس مطب */}
        <ListItem>
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="آدرس"
            secondary={`${info.address}`}
          />
        </ListItem>

        {/* تماس  موبایل */}
        <ListItem component="a" href={`tel:${info.mobile}`} aria-label="تماس موبایل با مطب">
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <MobileFriendly />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="موبایل" secondary={`${info.mobile}`} sx={{textAlign:"right"}}/>
        </ListItem>


        {/* ثابت تماس تلفنی */}
        <ListItem component="a" href={`tel:${info.telephon}`} aria-label="تماس تلفنی با مطب">
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <CallIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="تلفن ثابت" secondary={`${info.telephon}`} sx={{textAlign:"right"}}/>
        </ListItem>

        {/* واتساپ */}
        {/* <ListItem
          component="a"
          href={info.whatsApp}
          target="_blank"
          rel="noopener"
          aria-label="ارتباط واتساپی با مطب"

        >
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <WhatsAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="واتساپ" secondary={`${info.mobile}`} sx={{textAlign:"right"}} />
        </ListItem> */}

      </List>
    </ListWrapper>
  );
}
