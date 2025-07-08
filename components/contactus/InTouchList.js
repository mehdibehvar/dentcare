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

export default function InTouchList() {
  const ListWrapper = styled("div")({
    li: {
      textAlign: "right",
      cursor:"pointer",
      ":hover":{
       opacity:"0.6"
      }
    },
  });

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = (phoneNumber) => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  return (
    <ListWrapper>
      <List sx={{ width: '100%' }}>
        <ListItem>
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <LocationOnIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary="آدرس"
            secondary="-میدان امام خمینی-نبش خیابان بیسیم-کوچه لاله یک"
          />
        </ListItem>
        
        <ListItem  onClick={() => handlePhoneClick("09054851056")}>
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <CallIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="تلفن تماس" secondary="09054851056" />
        </ListItem>

        <ListItem  onClick={() => handleEmailClick("drbitabehvarmatab@gmail.com")}>
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <MailIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="ایمیل" secondary="drbitabehvarmatab@gmail.com" />
        </ListItem>

        <ListItem  onClick={() => handleWhatsAppClick("+989054851056")}>
          <ListItemAvatar>
            <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
              <WhatsAppIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary="واتساپ" secondary="09054851056" />
        </ListItem>
      </List>
    </ListWrapper>
  );
}
