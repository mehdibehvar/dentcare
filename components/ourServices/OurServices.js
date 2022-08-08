import { Container, Grid, Typography } from "@mui/material";
import { LightSection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import ServiceBox from "./ServiceBox";

export default function OurServices({servicesInfo}) {
    const servicesBoxList=servicesInfo.map(service=> <Grid key={service.title} item xs={12} sm={6} md={6} lg={4}>
    <ServiceBox boxInfo={service}/>
      </Grid>)
  return (
    <LightSection>
      <Container>
        <Grid>
          <TreatIcon />
          <Typography variant="h5" mb={1} component={"h1"}>
            خدمات ما :
          </Typography>
          <Typography variant="caption" mb={2} component={"p"} color={"text.disabled"}>
            .ما در اینجا تمامی خدمات دندانپزشکی را به مراجعه کنندگان عزیز با
            بالاترین کیفیت ارایه میدهیم.
          </Typography>
        </Grid>
        <Grid container spacing={2}>
        {servicesBoxList}
        </Grid>
      </Container>
    </LightSection>
  );
}
