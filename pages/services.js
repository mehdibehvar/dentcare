import Layout from 'components/layout'
import Navbar from 'components/navbar/Navbar'
import OurServices from 'components/ourServices/OurServices';
import data from 'utils/data'

export default function ServicesPage() {
  return (
    <Layout>
      <Navbar/>
       <OurServices servicesInfo={data.servicesInfo}/>
    </Layout>
  )
}
