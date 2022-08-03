/* eslint-disable @next/next/no-img-element */
import styled from "@emotion/styled";
import { Container, Grid, IconButton, Tooltip, Typography } from "@mui/material";
import { HeroSection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import Image from "next/image";
import  { useEffect, useRef, useState } from "react";
import FlipIcon from "@mui/icons-material/Flip";
const WhiteningFrame = styled("div")({
  width: "100%",
  border: "8px solid white",
  position: "relative",
  overflow:"hidden",
  "img":{
    display:"block",
    width:"100%",
    maxWidth:"none",
    height:"100%",
     verticalAlign:"middle",
  },
});
const AfterWrapper = styled("div")({
  width: "50%",
  height:"100%",
  position: "absolute",
  overflow:"hidden",
  right:0,
  top: 0,
  "div":{
    display:"block",
    width:"max-content",
    maxWidth:"none",
  height:"inherit",
    verticalAlign:"middle",
  },
});
const FlipIconWrapper=styled("span")(({theme})=>({
    width:4,
    height:"100%",
    backgroundColor:theme.palette.background.paper,
    position:"absolute",
    top:"0%",
    right:"50%",
    display:"flex",
    alignItems:"center",
    justifyContent:"center",
     "button":{
        fontSize:30,
        cursor:"w-resize",
        backgroundColor:theme.palette.primary.main,
        ":hover":{
            backgroundColor:"rgba(83, 189, 236, 0.6)"
        }
     },
     "svg":{
        fontSize:30,
        color:"#fff"
     }

}))
export default function WhiteningSection() {
    const fliperRef = useRef();
    const draggableIconRef = useRef();
    const afterRef=useRef();
    const frameRef=useRef();
    const animateFliper=(e)=>{
        const movement=e.pageX-frameRef.current.offsetLeft;
        const frameWidth=frameRef.current.clientWidth
       const percent=100-(movement/frameWidth)*100;
       console.log(percent)
       if(percent<=100 && percent>=5){
        fliperRef.current.style.right=`${percent}%`;
        afterRef.current.style.width=`${percent}%`;
       }
        

    }
    useEffect(()=>{    
            draggableIconRef.current.addEventListener("dragstart",(e)=>animateFliper(e));
            draggableIconRef.current.addEventListener("drag",(e)=>animateFliper(e));
            draggableIconRef.current.addEventListener("dragend",(e)=>animateFliper(e));
            frameRef.current.addEventListener("dragover",(event)=>{
                event.preventDefault()
            },false)
            frameRef.current.addEventListener("drop",(e)=>animateFliper(e))
    },[])
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
          <Grid item xs={6}>
            <WhiteningFrame ref={frameRef}>
              <img
                src="/assets/images/before.png"
                alt="before whitening"
             
              />
              <AfterWrapper ref={afterRef}>
               <div>
               <img
                  src="/assets/images/after.png"
                  alt="after whitening"
            
                />
               </div>
              </AfterWrapper>
              <FlipIconWrapper ref={fliperRef}>
              <Tooltip title="قبل و بعد ">
              <IconButton draggable={true} onClick={(e)=>setMouseDown(true)} ref={draggableIconRef}  aria-label="" className="flipButton">
                  <FlipIcon />
                </IconButton>
                </Tooltip>
               
              </FlipIconWrapper>
            </WhiteningFrame>
          </Grid>
        </Grid>
      </Container>
    </HeroSection>
  );
}
