import styled from '@emotion/styled'
import React, { useEffect, useState } from 'react'
import ResponsiveAppBar from './ResponsiveAppBar'

export default function Navbar() {
  const[position,setPosition]=useState("relative");
  const topValue=position==="relative"?"80%":"0"
    const Navbar=styled("nav")(()=>({
        zIndex: "99",
        position:`${position}`,
        top:`${topValue}`,
        width: "100%",
        padding: "10px 0",
        overflow: "hidden",
        bottom: "8px",
    }));
    const changePosition=()=>{
      console.log(window.scrollY);
      if(window.scrollY>=450){
        setPosition("fixed")
       }
       if(window.scrollY<=450){
        setPosition("relative")
       }
    }
    useEffect(()=>{
     document.addEventListener("scroll",changePosition)
    return ()=>{
      document.removeEventListener("scroll",changePosition)
    }
    },[])
   
  
  return (
    <Navbar>
       <ResponsiveAppBar/>
    </Navbar>
  )
}
