import {
  Container,
  Grid,
  Typography,
} from "@mui/material";
import { GraySection } from "components/aboutus/aboutusStyledComponents";
import TreatIcon from "components/other/TreatIcon";
import Image from "next/image";
import data from "utils/data";
import CloseFullscreenIcon from '@mui/icons-material/CloseFullscreen';
import galleryClasses from "./Gallery.module.scss"
import { useState } from "react";
export default function Gallery() {
  const [fullScreen,setFullscreen]=useState(false);
  const handleFullScreen=(e)=>{
    setFullscreen(true)
  
    e.target.parentElement.classList.add(galleryClasses.showFull);
    e.target.parentElement.children[0].classList.add(galleryClasses.showcloseIcon)
  }
const handleCloseFullScreen=(e)=>{
  setFullscreen(false)
  console.log(fullScreen);
  e.target.parentElement.classList.remove(galleryClasses.showFull);
  e.target.parentElement.children[0].classList.remove(galleryClasses.showcloseIcon)
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
   <Grid container spacing={2}>
   <Grid item xs={4} sm={4} md={4} lg={4}>
        <div className={galleryClasses.imageWrapper} >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />    
            <Image 
            src="/assets/images/gallery6.png"
            alt="bitacare"
            width={400}
            height={515}
            layout="responsive"
            />   
                         <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>        
        </div>
        <div className={galleryClasses.imageWrapper} >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />    
            <Image 
            src="/assets/images/gallery7.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
            />    
                         <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>       
        </div>
        
    </Grid>
    <Grid item xs={4} sm={4} md={4} lg={4}>
        <div className={galleryClasses.imageWrapper} >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />    
            <Image 
            src="/assets/images/gallery3.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
            />  
                         <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>         
        </div>
        <div className={galleryClasses.imageWrapper}  >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />    
            <Image 
            src="/assets/images/gallery4.png"
            alt="bitacare"
            width={400}
            height={250}
            layout="responsive"
            />  
                         <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>         
        </div>
        <div className={galleryClasses.imageWrapper} >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />    
            <Image 
            src="/assets/images/gallery5.png"
            alt="bitacare"
            width={400}
            height={250}
            layout="responsive"
            />  
            <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>         
        </div>
        
    </Grid>

    <Grid item xs={4} sm={4} md={4} lg={4}>
        <div className={galleryClasses.imageWrapper} >
          <CloseFullscreenIcon onClick={handleCloseFullScreen} />         
           <Image 
            src="/assets/images/gallery1.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
       
            /> 
             <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>
        </div>
        <div className={galleryClasses.imageWrapper} >
        <CloseFullscreenIcon onClick={handleCloseFullScreen} />  
            <Image 
            src="/assets/images/gallery2.png"
            alt="bitacare"
            width={400}
            height={515}
            layout="responsive"
            />  
             <div className={fullScreen?galleryClasses.noBlur:null}>
            </div> 
            <i className={`fa fa-arrows-alt ${fullScreen?galleryClasses.noExpandIcon:null}`} onClick={handleFullScreen}></i>
        </div>
        
    </Grid>
   </Grid>
      </Container>
    </GraySection>
  );
}
