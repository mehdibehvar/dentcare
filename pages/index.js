import Banner from 'components/banner/Banner';
import Layout from '../components/layout';
import Navbar from "components/navbar/Navbar"
import AboutUs from 'components/aboutus/AboutUs';
import OurServices from 'components/ourServices/OurServices';
import Gallery from 'components/gallery/Gallery';
import WhiteningSection from 'components/whitening/WhiteningSection';
import Location from 'components/geoLocation/Location';
import ContactUsSection from 'components/contactus/ContactUsSection';
import Head from 'next/head';
import data from 'utils/data';
export default function Home({dataObject}) {
  const {aboutusTabInfo,gallery,servicesInfo}=dataObject;
  return (
   <>
   <Head>
   <title>BitaCare website</title>
    <meta name="description" content="بهترین مطب دندانپزشکی در بوشهر"/>
   </Head>
    <Layout>
      <Banner/> 
      <Navbar/> 
      <AboutUs aboutusTabInfo={aboutusTabInfo}/>
      <OurServices servicesInfo={servicesInfo}/> 
      <Gallery gallery={ gallery }/>
      <WhiteningSection/>
         <Location/>
     <ContactUsSection/>
    </Layout>
   </>
  )
}
export async function getServerSideProps() {
  const dataObject=data;
  return {
    props:{
      dataObject
    }
  }
}