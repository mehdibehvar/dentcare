import styled from "@emotion/styled"
import { Container, Typography } from "@mui/material"

export default function Loading() {
  const MapLoader=styled("div")(({theme})=>({
    backgroundColor:theme.palette.background.secondary,
    display:"flex",
    justifyContent:"center",
    alignItems:"center",
  }))
  return (  
<Container>
<MapLoader>
    <Typography variant="h6" component={"h3"} color="primary.main">لطفا مکان یاب دستگاه خود را فعال کنید.و صفحه را رفرش کنید.</Typography>
  </MapLoader>
</Container>
  )
}