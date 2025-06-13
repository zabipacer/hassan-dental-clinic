import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/Hero'

import FeaturedServices from './components/Feature'
import WhyChooseUs from './components/Why'
import Testimonials from './components/Testimonial'
import LocalSEOSection from './components/LocalMAp'
import FaqAccordion from './components/FAQS'
import Footer from './components/Footer'
import TestimonialsA from './components/ApiTestimonial'
import AboutSection from './components/Why'
import AboutDoctor from './components/AboutDoctor'
import HassanGallery from './components/HassanGallery'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<HeroSection/>

<FeaturedServices/>
<AboutDoctor/>
<AboutSection/>
<HassanGallery/>
<Testimonials/>
<LocalSEOSection/>
<FaqAccordion/>

    </>
  )
}

export default App
