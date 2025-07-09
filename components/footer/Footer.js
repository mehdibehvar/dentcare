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
  return (
    <FooterWrapper>
      <Grid container>
        <Grid sm={1}></Grid>
        <Grid sm={6}>
          <Box>
            <Box sx={{ padding: 2 }}>
              <Typography variant="h6" component={"div"}>
                {" "}
                ارتباط با ما{" "}
              </Typography>
              <Typography variant="caption" component={"p"}>
                شما می‌توانید از طریق راه‌های ارتباطی زیر با ما تماس بگیرید.{" "}
              </Typography>
            </Box>
            <InTouchList />
          </Box>
        </Grid>
        <Grid item xs={12} sm={4} sx={{ padding: 2 }}>
          <Typography variant="h6" component={"div"}>
            {" "}
            با ما در تماس باشید...
          </Typography>
          <RightBox>
            <SocialIcons
              gap={"20px"}
              iconColor={"#63C8FF"}
            />
          </RightBox>
        </Grid>
      </Grid>
      <Grid sm={1}></Grid>
    </FooterWrapper>
  );
}
