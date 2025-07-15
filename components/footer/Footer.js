import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import SocialIcons from "components/other/SocialIcons";
import styled from "@emotion/styled";
import InTouchList from "components/contactus/InTouchList";
import data from "utils/data";
export default function Footer() {
  const { info } = data;
  const FooterWrapper = styled("footer")(({ theme }) => ({
    backgroundColor: theme.palette.primary.light,
    // marginBottom: theme.spacing(2),
    paddingTop:theme.spacing(3),
    paddingRight:theme.spacing(4),
    [theme.breakpoints.down("sm")]: {
      padding:theme.spacing(2),
      paddingBottom:theme.spacing(7),
    },
  }));
  const BaseBox = styled(Box)(({ theme }) => ({
    direction: "ltr",
    display: "flex",
    alignItems: "center",
    justifyContent: "start",
    margin: theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      justifyContent: "center",
    },
    strong: {
      transition: "all 1s ease",
      ":hover": {
        color: theme.palette.secondary.light,
        fontSize: 14,
      },
    },
    i: {
      color: theme.palette.secondary.main,
      transition: "all 1s ease",
      ":hover": {
        color: theme.palette.secondary.light,
        transform: "rotate(10deg)translateX(8px)scale(1.2)",
      },
    },
  }));
  const RightBox = styled("div")(({ theme }) => ({
    marginTop: theme.spacing(2),
    display: "flex",
    [theme.breakpoints.down("lg")]: {
      marginBottom: 50,
    },
  }));
  const SectionHeader = styled("h4")(({ theme }) => ({
    borderBottom: "4px solid",
    borderBottomColor: theme.palette.secondary.main,
    width:"fit-content",
    marginBottom:theme.spacing(3),
    padding:theme.spacing(1),
    [theme.breakpoints.down("sm")]: {
      ":first-of-type":{ marginTop:theme.spacing(2)},
      marginBottom:theme.spacing(1),
    },

  }))
  return (
    <FooterWrapper>
      <Grid container rowSpacing={3}>
        <Grid item xs={12} sm={4}>
          <SectionHeader>
            {" "}
            درباره ما    
          </SectionHeader>
          <Typography variant="body1" component={"span"}>
            مطب دندانپزشکی دکتر بیتا بهور واقع در میدان امام خمینی بوشهر، ارائه‌دهنده خدماتی مانند ایمپلنت، لمینت، درمان ریشه، زیبایی لبخند، عصب‌کشی و معاینه تخصصی با پیشرفته‌ترین تجهیزات روز است.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={4} >
          <Box>
              <SectionHeader>
                {" "}
                ارتباط با ما{" "}
              </SectionHeader>
            <InTouchList />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} >
          <SectionHeader>
            {" "}
            با ما در تماس باشید...
          </SectionHeader>
          <RightBox>
            <SocialIcons
              gap={"20px"}
              iconColor={"#63C8FF"}
            />
          </RightBox>
        </Grid>
      </Grid>
    </FooterWrapper>
  );
}
