import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/Hero'
import { Navbar } from './components/Nav'
import FeaturedServices from './components/Feature'
import WhyChooseUs from './components/Why'
import Testimonials from './components/Testimonial'
import LocalSEOSection from './components/LocalMAp'
import FaqAccordion from './components/FAQS'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<HeroSection/>
<Navbar/>
<FeaturedServices/>
<WhyChooseUs/>
<Testimonials/>
<LocalSEOSection/>
<FaqAccordion/>
<Footer/>
    </>
  )
}

export default App
