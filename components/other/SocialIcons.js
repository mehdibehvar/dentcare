import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import { SocialIconsBox } from "./styledComponents";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import { MobileFriendly } from "@mui/icons-material";
import data from "utils/data";

export default function SocialIcons({ gap, iconColor }) {
  const { info } = data;
  const { mobile, instagram, whatsApp } = info;
  return (
    <SocialIconsBox gap={gap} iconColor={iconColor ?? "#000"}>
      <a
        href={whatsApp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="چت واتساپی"
      >
        <WhatsAppIcon />
      </a>

      <a
        href={instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="صفحه اینستاگرام دکتر بیتا بهور"
      >
        <InstagramIcon />
      </a>
      <a href={`tel:${mobile}`} aria-label="تماس با مطب">
        <MobileFriendly />
      </a>
      {/* <a
        href="https://www.youtube.com"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="کانال یوتیوب"
      >
        <YouTubeIcon />
      </a> */}
    </SocialIconsBox>
  );
}
