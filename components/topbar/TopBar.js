import { Box, Grid, Typography } from "@mui/material"; 
import topbarClasses from "./TopBar.module.css";
import theme from "utils/theme";
import { useEffect, useState } from "react";
import styled from "@emotion/styled";
import SocialIcons from "components/other/SocialIcons";
import data from "utils/data";
import { MobileFriendly } from "@mui/icons-material";

const ScrollBarTrack = styled(Box)(({ theme }) => ({
  width: "100%",
  height: 8,
  backgroundColor: theme.palette.background.paper,
  position: "sticky",
  top: 0,
  overflow: "hidden",
  zIndex: 1000,
}));

const ScrollBar = styled(Box, {
  shouldForwardProp: (prop) => prop !== "scrollBarWidth"
})(({ theme, scrollBarWidth }) => ({
  backgroundColor: theme.palette.primary.main,
  height: 8,
  width: `${scrollBarWidth}%`,
}));

const getDocHeight = () => {
  return Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );
};

// Ring animation
const RingAnimation = styled(MobileFriendly)(({ theme }) => ({
  fontSize: "16px",
  marginLeft: "2px",
  animation: "ring 3s infinite", // Ring animation every 3 seconds
  '@keyframes ring': {
    '0%': {
      transform: 'scale(1)',
      boxShadow: '0 0 5px 2px rgba(99, 200, 255,0.4)', 
    },
    '50%': {
      transform: 'scale(1.2)', // slightly increase the size
      boxShadow: '0 0 15px 5px rgba(99, 200, 255,1)', // increase glow effect
    },
    '100%': {
      transform: 'scale(1)', // return to original size
      boxShadow: '0 0 5px 2px rgba(99, 200, 255,0.4)', // return to soft glow
    }
  }
}));

export default function TopBar() {
  const [scroller, setScroller] = useState(0);
  const {info}=data;
  const handleScroll = (e) => {
    const scrollTop = window.pageYOffset;
    const winHeight = window.innerHeight;
    const docHeight = getDocHeight();
    const totalDocScrollLength = docHeight - winHeight;
    const percentOfScroll = Math.floor(
      (scrollTop / totalDocScrollLength) * 100
    );
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
      <Box className={topbarClasses.topbar}>
        <Grid container>
          <Grid item xs={6} sm={6} color="primary.main">
            <ul className={topbarClasses.topbarList}>
              <li>
                <a
                  href={`tel:${info.mobile}`}
                  aria-label="تماس با مطب"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    textDecoration: "none",
                    color: "inherit",
                  }}
                >
                  <RingAnimation />
                  <Typography
                    variant="overline"
                    component="span"
                    color="primary.main"
                  >
                     تماس : {info.mobileText}
                  </Typography>
                </a>
              </li>
            </ul>
          </Grid>
          <Grid item xs={6} sm={6}>
            <SocialIcons iconColor={theme.palette.primary.main} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
}
