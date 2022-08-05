import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import {  Box, IconButton, Tooltip } from "@mui/material";
import  { useEffect, useState } from "react";
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
    <Box sx={{position:"fixed",bottom:"0",visibility:showTooltip,margin:1}}>
    <Tooltip title="برو بالای صفحه">
       <IconButton onClick={handleScrollUp} color="secondary" sx={{backgroundColor:"primary.main"}}>
         <KeyboardArrowUpIcon />
       </IconButton>
     </Tooltip>
</Box>
  )
}
