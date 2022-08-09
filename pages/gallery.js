import Layout from 'components/layout'
import Gallery from 'components/gallery/Gallery'
import Navbar from 'components/navbar/Navbar'
import data from 'utils/data'

export default function GalleryPage({dataObject}) {
  return (
    <Layout>
      <Navbar/>
       <Gallery gallery={dataObject}/>
    </Layout>
  )
}
export async function getStaticProps() {
  const dataObject=data.gallery;
  if(!dataObject){
    return{
      notFound:true
    }
  }
  return{
    props:{
      dataObject
    }
  }
}