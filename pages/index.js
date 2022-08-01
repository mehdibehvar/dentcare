import { Button, Typography} from '@mui/material';
import Banner from 'components/banner/Banner';
import Layout from '../components/layout';
import Navbar from "components/navbar/Navbar"
import AboutUs from 'components/aboutus/AboutUs';
import OurServices from 'components/ourServices/OurServices';
export default function Home() {
  return (
   <>
    <Layout>
      <Banner/> 
      <Navbar/> 
      <AboutUs/>
      <OurServices/> 
    </Layout>
   </>
  )
}
