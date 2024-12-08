import React from 'react'
import Top_Head from './multiy-components/top-header'
import Header from './multiy-components/header'
import Hero from './multiy-components/hero-section'
import Editers from './multiy-components/editers'
import Our_Product from './multiy-components/our-product'
import ClassicSection from './multiy-components/clasic-product'
import Neural from './multiy-components/neural'
import CenteredDetails from './multiy-components/furture-post'
import Navbar from './multiy-components/uper-footer'
import Footer from './multiy-components/footer-2'

export default function Home() {
  return (
    <div>
      <Top_Head />
      <Header/>
      <Hero />
      <Editers />
      <Our_Product />
      <ClassicSection />
      <Neural />
      <CenteredDetails />
      <Navbar />
      <Footer />
    </div>
  )
}
