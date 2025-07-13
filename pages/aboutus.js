import AboutUs from 'components/aboutus/AboutUs'
import Layout from 'components/layout'
import Navbar from 'components/navbar/Navbar'
import React from 'react'
import data from 'utils/data'


export default function Aboutus() {
  return (
    <Layout>
      <Navbar/>
      <AboutUs aboutusTabInfo={data.aboutusTabInfo}/>
    </Layout>
  )
}
