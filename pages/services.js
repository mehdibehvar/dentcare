import Layout from 'components/layout'
import Navbar from 'components/navbar/Navbar'
import OurServices from 'components/ourServices/OurServices';
import data from 'utils/data'

export default function ServicesPage({dataObject}) {
  return (
    <Layout>
      <Navbar/>
       <OurServices servicesInfo={dataObject}/>
    </Layout>
  )
}
export async function getStaticProps() {
  const dataObject=data.servicesInfo;
  return{
    props:{
      dataObject
    }
  }
}