import Banner from 'components/banner/Banner';
import Layout from '../components/layout';
import Navbar from "components/navbar/Navbar"
import AboutUs from 'components/aboutus/AboutUs';
import OurServices from 'components/ourServices/OurServices';
import Gallery from 'components/gallery/Gallery';
import WhiteningSection from 'components/whitening/WhiteningSection';
import Location from 'components/geoLocation/Location';
export default function Home() {
  return (
   <>
    <Layout>
      <Banner/> 
      <Navbar/> 
      <AboutUs/>
      <OurServices/> 
      <Gallery/>
      <WhiteningSection/>
     <Location/>
    </Layout>
   </>
  )
}
