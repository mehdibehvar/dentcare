import styled from "@emotion/styled";
import {
  Box,
  Container,
  Grid,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { GraySection } from "components/aboutus/aboutusStyledComponents";
import TreatIcon from "components/other/TreatIcon";
import Image from "next/image";
import data from "utils/data";
import SettingsOverscanIcon from '@mui/icons-material/SettingsOverscan';
 const ImageWrapper=styled("div")(({theme})=>({
      marginBottom:theme.spacing(2),
      borderRadius:8,
      overflow:"hidden",
      transition:"1s ease",
      "& svg":{visibility:"hidden",position:"absolute" ,top:"0",transition:"all 2s ease-in"},
      ":hover":{
      transform:"scale(1.05)",
        opacity:"0.5",
        "& div":{
            backgroundColor:"black",
            opacity:"0.5",
            position:"absolute",
            width:"400px",
            height:"100%",
            top:0
         },
         "& svg":{
            visibility:"visible",
            top:"50%",
            right:"50%",
            transform:"translate(50%,25%)",
            zIndex:"33"
         }
      }
 }))

export default function Gallery() {
    const {gallery:itemData}=data;
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
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery6.png"
            alt="bitacare"
            width={400}
            height={515}
            layout="responsive"
            />           
        </ImageWrapper>
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery7.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
            />           
        </ImageWrapper>
        
    </Grid>
    <Grid item xs={4} sm={4} md={4} lg={4}>
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery3.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
            />           
        </ImageWrapper>
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery4.png"
            alt="bitacare"
            width={400}
            height={250}
            layout="responsive"
            />           
        </ImageWrapper>
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery5.png"
            alt="bitacare"
            width={400}
            height={250}
            layout="responsive"
            />           
        </ImageWrapper>
        
    </Grid>

    <Grid item xs={4} sm={4} md={4} lg={4}>
        <ImageWrapper>
        <SettingsOverscanIcon/>
           <Image 
            src="/assets/images/gallery1.png"
            alt="bitacare"
            width={400}
            height={300}
            layout="responsive"
            /> 
             <div>
            </div>          
            
        </ImageWrapper>
        <ImageWrapper>
            <Image 
            src="/assets/images/gallery2.png"
            alt="bitacare"
            width={400}
            height={515}
            layout="responsive"
            />  
                     
        </ImageWrapper>
        
    </Grid>
   </Grid>
      </Container>
    </GraySection>
  );
}
