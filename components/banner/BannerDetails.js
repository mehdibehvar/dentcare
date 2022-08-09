import React from 'react'
import { Grid, Typography } from "@mui/material"
import styled from '@emotion/styled';
import bannerStyles from "./Banner.module.scss"
export default function BannerDetails() {
    const DetailsWrapper=styled("div")(({theme})=>({
       position:"absolute",
       left: "0",
    top: "62%",
    transform: "translateY(-50%)",
    webkitTransform: "translateY(-50%)",
    mozTransform: "translateY(-50%)",
    margin: "auto",
    width: "100%",
    right: "0",
    }))
  return (
  
  <DetailsWrapper>
    <Grid >
      <Typography variant="h4" component={"h3"} pr={"20px"} className={bannerStyles.banner_title}>بهترین تجربه درمان  <Typography variant="h4" component={"span"} color="primary.main">زندگی</Typography> را با ما داشته باشید.</Typography>
    <Typography variant="body1" component="p" mb={"20px"} pr={"20px"} className={bannerStyles.banner_desc}>.کلنیک دندانپزشکی دکتر .... ارایه دهنده بهترین و با کیفیت ترین خدمات دندانپزشکی به شما دوست عزیز میباشدجهت رزرو  نوبت بر روی ایکن بالا کلیک کنید.</Typography>
    </Grid>
  </DetailsWrapper>

  )
}
