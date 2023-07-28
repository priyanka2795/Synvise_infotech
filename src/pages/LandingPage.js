import React from 'react'
import Header from '../common/Header'
import Footer from '../common/Footer'
// import './assets/css/style.css'
import HeroSlider from './HeroSlider'
import AboutUs from './AboutUs'
import Testimonial from './Testimonial'
import Services from './Services'
import Resources from './Resources'
import Contact from './Contact'
import Training from './Training'
import ScrollButton from '../common/ScrollButton';
import Team from './Team'
import Blog from './Blog'

function App() {
  return (
    <div>
        <Header/>
        <HeroSlider/>
        <AboutUs/>
        <Services/>
        <Training/>
        <Resources/>
        {/* <Blog/> */}
        {/* <Team/> */}
        <Testimonial/>
        <Contact/>
        <Footer/>
        <ScrollButton />
    </div>
  )
}

export default App
