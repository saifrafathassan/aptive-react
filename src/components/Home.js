import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Pricing from './Pricing'
import Testimonials from './Testimonials'
import Faq from './Faq'
import Contact from './Contact'
import Footer from './Footer'
import './Home.css'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Pricing/>
      <Testimonials/>
      <Faq/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default Home