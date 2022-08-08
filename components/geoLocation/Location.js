import { Container, Grid, Typography } from "@mui/material";
import { LightSection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import dynamic from "next/dynamic";
// Leaflet makes direct calls to the DOM when it is loaded,
//  therefore React Leaflet is not compatible with server-side rendering.
//set .leaflet-container css style in global style {width:100%,height:300px}
const MapWithNoSSR = dynamic(() => import("./LeafLetMap"), {
  ssr: false
});
function Location() {
  return (
    <>
    <LightSection>
    <Container>
    <Grid>
          <TreatIcon />
          <Typography variant="h6" mb={1} component={"h6"}>
             موقعیت فعلی ما:
          </Typography>
          <Typography
            variant="caption"
            mb={2}
            component={"p"}
            color={"text.disabled"}
          >
           برای رفتن به موقعیت خود بر روی نقشه کلیک کنید:
          </Typography>
        </Grid>
          <div>
         <MapWithNoSSR/>
          </div>
    </Container>
    </LightSection>
    </>
  );
}
export default Location;
////React Leaflet does not replace Leaflet,
/// it only provides bindings between React and Leaflet.  <Loader sizeNumber={"100"}/>