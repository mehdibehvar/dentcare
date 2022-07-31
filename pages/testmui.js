import { Checkbox, Slider, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Layout from '../components/layout';
import { createTheme, styled, ThemeProvider } from '@mui/material/styles';
import { green, orange } from '@mui/material/colors';
import CustomSlider from '../components/customSlider';
const Div = styled('div')(({ theme }) => ({
  ...theme.typography.button,
  backgroundColor:"#efefef",
  padding: theme.spacing(2),
}));
const outerTheme = createTheme({
  palette: {
    primary: {
      main: orange[500],
    },
  },
});

const innerTheme = createTheme({
  palette: {
    primary: {
      main: green[500],
    },
  },
});
export default function TestMui() {
  return (
<Layout>
<div>
  <ul>
    <li>1 hello mehdi</li>
    <li>2</li>
    <li>3</li>
  </ul>
  <Button variant="contained"   color='success' sx={{color:"red",marginTop:"10px",marginBottom:"20px"}}>سلام دنیا</Button>
  <Typography variant="body1" dir='rtl' gutterBottom>
      سلام این دوره متریال یو ای می باشد
      </Typography>
      <Typography variant="caption" display="block" gutterBottom>
        button text
      </Typography>
      <Typography variant="h3" gutterBottom component="div">
        h3. Heading
      </Typography>
      <Div>{"This div's text looks like that of a button."}</Div>
      <Typography variant="h1" component="h6">
  h1. Heading
</Typography>
<ThemeProvider theme={outerTheme}>
      <Checkbox defaultChecked />
      <ThemeProvider theme={innerTheme}>
        <Checkbox defaultChecked />
      </ThemeProvider>
    </ThemeProvider>
    <Slider
      defaultValue={50}
      sx={{
        width: 500,
        color: 'primary.main',
      }}
    />
    <Typography variant='body1' component="div" gutterBottom className='mehdibody1'>
      salam man mehdi hastam
    </Typography>
  <  CustomSlider/>
</div>
</Layout>
  )
}
