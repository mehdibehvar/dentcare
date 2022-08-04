/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import {
  Container,
  Grid,
  IconButton,
  Tooltip,
  Typography,
} from "@mui/material";
import { HeroSection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import { useRef } from "react";
import FlipIcon from "@mui/icons-material/Flip";
const WhiteningFrame = styled("div")({
  width: "100%",
  border: "8px solid white",
  position: "relative",
  overflow: "hidden",
  img: {
    display: "block",
    width: "100%",
    maxWidth: "none",
    height: "100%",
    verticalAlign: "middle",
  },
});
const AfterWrapper = styled("div")({
  width: "50%",
  height: "100%",
  position: "absolute",
  overflow: "hidden",
  right: 0,
  top: 0,
  div: {
    display: "block",
    width: "max-content",
    maxWidth: "none",
    height: "inherit",
    verticalAlign: "middle",
  },
});
const FlipIconWrapper = styled("span")(({ theme }) => ({
  width: 4,
  height: "100%",
  backgroundColor: theme.palette.background.paper,
  position: "absolute",
  top: "0%",
  right: "50%",
  display: "flex",
  alignItems: "end",
  justifyContent: "center",
  button: {
    cursor: "w-resize",
    backgroundColor: theme.palette.primary.main,
    zIndex:"1000",
     
    ":hover": {
      backgroundColor: "rgba(83, 189, 236, 0.6)",
    },
  },
  svg: {
    fontSize: 20,
    color: "#fff",
  },
}));
export default function WhiteningSection() {
  const fliperRef = useRef();
  const draggableIconRef = useRef();
  const afterRef = useRef();
  const frameRef = useRef();

  const flipStyle=(frameRefRect,movement)=>{
    const frameWidth = frameRefRect.width;
    const percent = 100 - (movement / frameWidth) * 100;
    if (percent <= 97 && percent >= 2) {
      fliperRef.current.style.right = `${percent}%`;
      afterRef.current.style.width = `${percent}%`;
    }
  }
  const dragFliper = (e) => {
    const frameRefRect = frameRef.current.getBoundingClientRect();
    const movement = e.pageX - frameRefRect.left;
    flipStyle(frameRefRect,movement)
  };
  const touchFliper = (e) => {
    const touchLocation = e.targetTouches[0];
    const xcoords = touchLocation.pageX;
    const frameRefRect = frameRef.current.getBoundingClientRect();
    const movement = xcoords - frameRefRect.left;
    flipStyle(frameRefRect,movement)
  };
  return (
    <HeroSection>
      <Container>
        <Grid>
          <TreatIcon />
          <Typography variant="h5" mb={1} component={"h1"}>
            پروسه سفید کردن و بلیچینگ :
          </Typography>
          <Typography
            variant="caption"
            mb={2}
            component={"p"}
            color={"text.disabled"}
          >
            .ما در اینجا تمامی خدمات دندانپزشکی را به مراجعه کنندگان عزیز با
            بالاترین کیفیت ارایه میدهیم.
          </Typography>
        </Grid>
        <Grid container sx={{ display: "flex", justifyContent: "center" }}>
          <Grid item xs={10} sm={6}>
            <WhiteningFrame ref={frameRef}>
              <img src="/assets/images/before.png" alt="before whitening" />
              <AfterWrapper ref={afterRef}>
                <div>
                  <img src="/assets/images/after.png" alt="after whitening" />
                </div>
              </AfterWrapper>
              <FlipIconWrapper ref={fliperRef}>
                <IconButton
                  draggable={true}
                  ref={draggableIconRef}
                  onTouchMove={touchFliper}
                  onDrag={dragFliper}
                >
                  <FlipIcon />
                </IconButton>
              </FlipIconWrapper>
            </WhiteningFrame>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}
