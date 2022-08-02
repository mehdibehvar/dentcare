/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import {
  Container,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { GraySection } from "components/aboutus/aboutusStyledComponents";
import TreatIcon from "components/other/TreatIcon";
import Image from "next/image";
import data from "utils/data";
import galleryClasses from "./Gallery.module.scss"
import { useRef, useState } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import CloseIcon from '@mui/icons-material/Close';
import { red } from "@mui/material/colors";

function srcset(image, size,rows = 1,cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

export default function Gallery() {
  const [fullScreen,setFullscreen]=useState(false);
 const imageItemRef = useRef()
  const {gallery}=data
  const handleFullScreen=(e,image)=>{
    setFullscreen(image)
  console.log(image);

    // e.target.parentElement.classList.add(galleryClasses.showFull);
    // e.target.parentElement.children[0].classList.add(galleryClasses.showcloseIcon)
  }
const handleCloseFullScreen=(e)=>{
  setFullscreen(false)
}


  return (
    <GraySection>
      <Container>
        <Grid>
          <TreatIcon />
          <Typography variant="h5" mb={1} component={"h1"}>
            گالری تصاویر:
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
   <Grid container >
   {!fullScreen?<> <ImageList
      sx={{ width:"100%", height:"100%",overflowY:"hidden",overflowX:"hidden" ,marginBottom:10,margin:5 }}
      variant="quilted"
      cols={3}
      rowHeight={150}
    >
      
        {gallery.map((item) => (
        <ImageListItem className={galleryClasses.imageItem}   sx={{margin:1}}   key={item.img} cols={item.cols || 1} rows={item.rows || 1}>
          <div className={galleryClasses.blurCover}></div>
          <img
         
         className={galleryClasses.galleryImage}
            {...srcset(item.img,121,item.rows,item.cols)}
            alt={item.title}
            loading="lazy"
          />
          
          <i className={`fa fa-arrows-alt ${galleryClasses.expandIcon}`} onClick={(e)=>handleFullScreen(e,item.img)}></i>
        </ImageListItem>
      ))}
     
    </ImageList> </>:<>
        <div className={galleryClasses.fullWrapper}>
          <div> 
            <img
           src={`${fullScreen}`}
           />
          </div>
           <IconButton onClick={handleCloseFullScreen}  sx={{backgroundColor:"primary.main",color:"yellow",position:"absolute",right:"50%",top:"5px",transform:"translateX(50%)",zIndex:"100"}} size="larg" aria-label="close fullscreen image">
           <CloseIcon />
            </IconButton>
        
        </div>
      </>}
   </Grid>
      </Container>
    </GraySection>
  );
}
