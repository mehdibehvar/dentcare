import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import Loader from "components/loader/Loading";
import Image from "next/image";
import React from "react";
const AboutPicWrapper = styled("div")(({ theme }) => ({
  width: "100%",
  borderRadius: "8px",
  overflow: "hidden",
}));
const Summary = styled("li")(({ theme }) => ({
  margin: theme.spacing(2),
  "& i": {
    color: theme.palette.primary.light,
    fontSize: 13,
    marginLeft: theme.spacing(1),
  },
  "& span": {
    color: theme.palette.text.secondary,
  },
}));
export default function TabContent({ tabDisplay, tabInfo }) {
  const { title, description, image, summary } = tabInfo;
  const displayState = tabDisplay === title ? "block" : "none";
  const summaryList = summary.map((smr, index) => (
    <Summary key={index}>
      <i className="fa fa-check" aria-hidden="true" />
      <Typography variant="subtitle1" component={"span"}>
        {smr}
      </Typography>
    </Summary>
  ));
  return (
    <div style={{ display: `${displayState}` }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={12} md={6}>
          <AboutPicWrapper>
            {image ? (
              <Image
                src={`${image}`}
                alt="bitacare"
                width={400}
                height={320}
                layout="responsive"
              />
            ) : (
              <Loader />
            )}
          </AboutPicWrapper>
        </Grid>
        <Grid item xs={12} sm={12} md={6}>
          <Typography
            variant="h6"
            mr={3}
            component={"h2"}
            color={"text.primary"}
          >
            {title}:
          </Typography>
          <Typography
            variant="caption"
            mr={3}
            component={"p"}
            sx={{ color: "text.disabled" }}
          >
            {description}
          </Typography>
          <ul>{summaryList}</ul>
        </Grid>
      </Grid>
    </div>
  );
}
