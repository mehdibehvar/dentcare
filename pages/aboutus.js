import AboutUs from 'components/aboutus/AboutUs'
import Layout from 'components/layout'
import Navbar from 'components/navbar/Navbar'
import React from 'react'
import data from 'utils/data'


export default function Aboutus({dataObject}) {
  return (
    <Layout>
      <Navbar/>
      <AboutUs aboutusTabInfo={dataObject}/>
    </Layout>
  )
}
export async function getStaticProps() {
  const dataObject=data.aboutusTabInfo;
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