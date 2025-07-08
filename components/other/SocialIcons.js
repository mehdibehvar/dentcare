import EmailIcon from '@mui/icons-material/Email';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import TwitterIcon from '@mui/icons-material/Twitter';
import { SocialIconsBox } from './styledComponents';
import CallIcon from '@mui/icons-material/Call';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Assuming you are passing `gap` and `iconColor` props, we are adding the functionality to call or open social media links.
export default function SocialIcons({ gap, iconColor }) {

  const handlePhoneClick = (phoneNumber) => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleEmailClick = (email) => {
    window.location.href = `mailto:${email}`;
  };

  const handleWhatsAppClick = (phoneNumber) => {
    window.location.href = `https://wa.me/${phoneNumber}`;
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com', '_blank');
  };

  const handleYouTubeClick = () => {
    window.open('https://www.youtube.com', '_blank');
  };


  return (
    <SocialIconsBox gap={gap} iconColor={iconColor ? iconColor : '#000000'}>
      <div onClick={() => handlePhoneClick("09054851056")} style={{ cursor: 'pointer' }}>
        <CallIcon />
      </div>
      <div onClick={() => handleWhatsAppClick("09054851056")} style={{ cursor: 'pointer' }}>
        <WhatsAppIcon />
      </div>
      <div onClick={() => handleEmailClick("drbitabehvarmatab@gmail.com")} style={{ cursor: 'pointer' }}>
        <EmailIcon />
      </div>
      <div onClick={handleInstagramClick} style={{ cursor: 'pointer' }}>
        <InstagramIcon />
      </div>
      <div onClick={handleYouTubeClick} style={{ cursor: 'pointer' }}>
        <YouTubeIcon />
      </div>
    </SocialIconsBox>
  );
}
