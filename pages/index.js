import Banner from "components/banner/Banner";
import Layout from "../components/layout";
import Navbar from "components/navbar/Navbar";
import AboutUs from "components/aboutus/AboutUs";
import OurServices from "components/ourServices/OurServices";
import Gallery from "components/gallery/Gallery";
import WhiteningSection from "components/whitening/WhiteningSection";
import Head from "next/head";
import data from "utils/data";
import MapSection from "components/map-section/MapSection";
export default function Home() {
  const { aboutusTabInfo, gallery, servicesInfo } = data;
  return (
    <>
      <Head>
        <title> دندان پزشک بوشهر</title>
        <meta name="description" content="بهترین مطب دندان پزشکی در بوشهر" />
      </Head>
      <Layout>
        <Banner />
        <Navbar />
        <AboutUs aboutusTabInfo={aboutusTabInfo} />
        <OurServices servicesInfo={servicesInfo} />
        <Gallery gallery={gallery} />
        <WhiteningSection />
        <MapSection/>
      </Layout>
    </>
  );
}

