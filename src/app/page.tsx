import React from 'react'
import Nav from '@/components/Nav'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Footer from '@/components/Footer'
import WhyChoose from '@/components/Whychoose'
import Mission from '@/components/Mission'
import Journey from '@/components/Journey'
import CTASection from '@/components/CTA'
import Faq from '@/components/Faq'
function Mainpage() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <WhyChoose/>
      <Mission/>
      <Journey/>
      <Faq/>
      <CTASection/>
      <Footer/>
    </div>
  )
}

export default Mainpage
