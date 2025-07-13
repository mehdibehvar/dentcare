import Layout from 'components/layout'
import Gallery from 'components/gallery/Gallery'
import Navbar from 'components/navbar/Navbar'
import data from 'utils/data'

export default function GalleryPage() {
  return (
    <Layout>
      <Navbar/>
       <Gallery gallery={data.gallery}/>
    </Layout>
  )
}
