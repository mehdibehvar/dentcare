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
  const ListWrapper=styled("div")({
    li:{
      textAlign:"right",
    },
  })
  return (
    <ListWrapper>
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
    <ListItem>
      <ListItemAvatar>
        <Avatar variant='square' sx={{ bgcolor:"secondary.main" }}>
          <LocationOnIcon />
        </Avatar>
      </ListItemAvatar>

<ListItemText primary="آدرس" secondary="بوشهر-میدان امام خمینی-کوچه لاله-جنب فست فود پت و مت"/>
  

    </ListItem>
    <ListItem>
      <ListItemAvatar>
         <Avatar variant='square' sx={{ bgcolor:"secondary.main" }}>
          <CallIcon />
        </Avatar>
      </ListItemAvatar>
     
      <ListItemText primary="تلفن تماس" secondary="0990945****" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
      <Avatar variant='square' sx={{ bgcolor:"secondary.main" }}>
          <MailIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="ایمیل" secondary="Drbitabehvar@gmail.com" />
    </ListItem>
    <ListItem>
      <ListItemAvatar>
      <Avatar variant='square' sx={{ bgcolor: "secondary.main" }}>
          <WhatsAppIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary="ایمیل" secondary="099997***" />
    </ListItem>
  </List>
    </ListWrapper>

  )
}
