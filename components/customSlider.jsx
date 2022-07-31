import * as React from 'react';
import Slider from '@mui/material/Slider';
import { alpha, styled } from '@mui/material/styles';

const SuccessSlider = styled(Slider)(({ theme }) => ({
  width: 300,
  color: theme.palette.secondary.main,
  '& .MuiSlider-thumb': {
    '&:hover, &.Mui-focusVisible': {
      boxShadow: `0px 10px 0px 8px ${alpha(theme.palette.warning.light, 0.5)}`,
    },
    '&.Mui-active': {
      boxShadow: `0px 0px 10px 14px ${alpha(theme.palette.error.main, 0.8)}`,
    },
  },
}));

export default function CustomSlider() {
  return <SuccessSlider defaultValue={30} />;
}