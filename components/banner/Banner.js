import styled from "@emotion/styled";
import { Box } from "@mui/material";
import BannerDetails from "./BannerDetails";
import ReactSvgLogo from "./ReactLogo";
import { useEffect, useState } from "react";
export default function Banner() {
  const BannerSection = styled("section")(({ theme }) => ({
    backgroundImage: "url(./assets/images/bann.jpg)",
    position: "relative",
    backgroundSize: "cover",
    overflow: "hidden",
    backgroundAttachment: "inherit",
    height: "86vh",
    backgroundPosition: "62% 0%",
    [theme.breakpoints.up("md")]: {
      height: "93vh",
      backgroundPosition: "70% 0",
    },
    [theme.breakpoints.down("md")]: {
      height: "86vh",
      backgroundPosition: "70% 0",
    },
    [theme.breakpoints.down("sm")]: {
      height: "80vh",
      backgroundPosition: "70% 0",
    },
    [theme.breakpoints.down("xs")]: {
      height: "72vh",
      backgroundPosition: "70% 0",
    },
  }));
  const MyLogo = styled("div")(({ theme }) => ({
    width: 70,
    height: 50,
    backgroundColor: "primary.main",
    position: "absolute",
    top: 170,
    left: 300,
  }));
  const [platform, setPlatform] = useState("");
  useEffect(() => {
    var standalone = window.navigator.standalone,
      userAgent = window.navigator.userAgent.toLowerCase(),
      safari = /safari/.test(userAgent),
      ios = /iphone|ipod|ipad/.test(userAgent);

    console.log("standalone:", standalone);
    console.log("userAgent:", userAgent);
    console.log("safari:", safari);
    console.log("ios:", ios);

    if (ios) {
      if (!standalone && safari) {
        console.log("// Safari");
        setPlatform("Safari on iOS");
      } else if (!standalone && !safari) {
        console.log("// iOS webview");
        setPlatform("iOS Webview");
      }
    } else {
      if (userAgent.includes("wv")) {
        console.log("      // Android webview");
        setPlatform("Android Webview");
      } else {
        console.log("     // Chrome");
        setPlatform("Chrome or Other");
      }
    }
  }, []);

  return (
    <BannerSection>
      <Box>
        <Box sx={{ display: "none" }}>Detected platform: {platform}</Box>
        <MyLogo>
          {/* <ReactSvgLogo /> */}
        </MyLogo>
        <BannerDetails />
      </Box>
    </BannerSection>
  );
}
