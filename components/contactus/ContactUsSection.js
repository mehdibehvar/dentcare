import { Box, Container, Grid, Paper, Typography } from "@mui/material";
import { GraySection } from "components/other/styledComponents";
import TreatIcon from "components/other/TreatIcon";
import FormikForm from "./FormikForm";
import InTouchList from "./InTouchList";

export default function ContactUsSection() {
  return (
    <GraySection>
      <Container fixed>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Box>
              <Grid>
                <TreatIcon />
                <Typography variant="h6" mb={1} component={"h6"}>
                  پیام خود را برای ما ارسال کنید:
                </Typography>
              </Grid>

              <FormikForm />
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box>
              <Paper elevation={12} square>
                <Box sx={{ padding: 2 }}>
                  <Typography variant="h6" component={"div"}>
                    {" "}
                    با ما در تماس باشید...
                  </Typography>
                  <Typography variant="caption" component={"p"}>
                    راههای ارتباطی با ما به صورت تمام وقت در خدمت رسانی به شما
                    است.
                  </Typography>
                </Box>
                <InTouchList />
              </Paper>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </GraySection>
  );
}
