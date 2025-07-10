import { Container, Grid, Typography } from "@mui/material";
import { LightSection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import ServiceBox from "./ServiceBox";

export default function OurServices({ servicesInfo }) {
  const servicesBoxList = servicesInfo.map((service, index) => (
    <Grid key={service.title} item xs={12} sm={6} md={6} lg={4}>
      <ServiceBox boxInfo={service} position={index + 1} />
    </Grid>
  ));

  return (
    <LightSection>
      <Container>
        <Grid>
          <TreatIcon />
          <Typography variant="h5" mb={1} component="h2">
            خدمات دندانپزشکی ما
          </Typography>
          <Typography
            variant="body1"
            mb={2}
            component="p"
            color="text.secondary"
          >
            ما در مطب دکتر بیتا بهور تمامی خدمات تخصصی دندانپزشکی را با بهترین
            کیفیت و تجهیزات به مراجعه‌کنندگان عزیز ارائه می‌دهیم.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
          {servicesBoxList}
        </Grid>
      </Container>
    </LightSection>
  );
}
