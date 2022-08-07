import styled from "@emotion/styled";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {  Box, IconButton, Tooltip, tooltipClasses } from "@mui/material";

import  { useEffect, useState } from "react";
const LightTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]:{
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    boxShadow: theme.shadows[1],
    fontSize: 11,
    span:{
      ":before":{
        color: theme.palette.secondary.main
       }
    }
   
  },
}));
const ToolTipBox=styled(Box)(({theme})=>(props)=>({
 position:"fixed",
 bottom:"0",
 visibility:props.showTooltip,
 margin:theme.spacing(1),
 button:{
  backgroundColor:theme.palette.primary.main,
  color:theme.palette.secondary.main,
  padding:2,
  svg:{
    fontSize:30
  },
  ":hover":{
    backgroundColor:theme.palette.secondary.light
  }
 }
}))

export default function ScrollUpIcon() {
    const [showTooltip,setShowTooltip]=useState("hidden");
    const handleScrollUp=()=>{
      window.scroll({
        top: 0,
        right: 0,
        behavior: 'smooth'
      });
    };
    const handleShowScrollUpIcon=()=>{
      console.log("ssssssssssss");
      if(window.scrollY<=150){
        setShowTooltip("hidden");
      }else{
        setShowTooltip("visible")
      }
    }
    useEffect(()=>{
      document.addEventListener("scroll",handleShowScrollUpIcon);
  
      return ()=> document.removeEventListener("scroll",handleShowScrollUpIcon)
    },[])
  return (
    <ToolTipBox showTooltip={showTooltip} >
    <LightTooltip title="برو بالای صفحه" arrow>
       <IconButton onClick={handleScrollUp}>
         <KeyboardArrowUpIcon />
       </IconButton>
     </LightTooltip>
</ToolTipBox>
  )
}
