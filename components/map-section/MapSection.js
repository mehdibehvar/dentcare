import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';

export default function MapSection() {
  return (
    <Box component="section" py={6} >
      <Container>
        <Grid container justifyContent="center">
          <Grid item xs={12} md={9}>
            <Typography variant="h5" gutterBottom align="center">
              موقعیت مکانی ما
            </Typography>
            <Box
              sx={{
                position: 'relative',
                overflow: 'hidden',
                paddingTop: '56.25%', // 16:9 aspect ratio
                borderRadius: 2,
                boxShadow: 3,
              }}
            >
              <iframe
                title="Google Map"
                src={`https://maps.google.com/maps?q=28.956967903491538,50.83655940427638&z=15&output=embed`}
                width="100%"
                height="100%"
                style={{
                  border: 0,
                  position: 'absolute',
                  top: 0,
                  left: 0,
                }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
