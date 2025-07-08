import React from 'react';
import { Grid, Typography } from "@mui/material";
import styled from '@emotion/styled';
import bannerStyles from "./Banner.module.scss";

export default function BannerDetails() {
  const DetailsWrapper = styled("div")(({ theme }) => ({
    position: "absolute",
    left: "0",
    top: "62%",
    transform: "translateY(-50%)",
    webkitTransform: "translateY(-50%)",
    mozTransform: "translateY(-50%)",
    margin: "auto",
    width: "100%",
    right: "0",


  }));

  const BannerText = styled(Typography)(({ theme }) => ({
    // For smaller than 720px, reduce the font size for component="p" to less than 14px
    [theme.breakpoints.down('sm')]: {
      fontSize: "24px", // Adjust font size for "p" component on smaller screens
      padding:12
    },
  }));

  return (
    <DetailsWrapper>
      <Grid>
        <Typography
          variant="h3"
          component={"h3"}
          pr={"20px"}
          className={bannerStyles.banner_title}
        >
           بهترین تجربه درمان
           {" "}
          <Typography variant="h4" component={"span"} color="primary.main">
            زندگی  
          </Typography>{" "}
          را با ما داشته باشید.
        </Typography>
        <BannerText
          variant="h5"
          component="p"
          mb={"20px"}
          pr={"20px"}
          className={bannerStyles.banner_desc}
        >
          مطب دندانپزشکی دکتر{" "}
          <Typography variant="h4" component={"span"} color="primary.main">
            بیتا بهور
          </Typography>{" "}
          ارایه دهنده بهترین و با کیفیت ترین خدمات دندانپزشکی به شما
          دوست عزیز می باشد.
        </BannerText>
      </Grid>
    </DetailsWrapper>
  );
}
