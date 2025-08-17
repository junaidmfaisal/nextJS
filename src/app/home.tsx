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
import Sample1 from '@/components/Sample1'
import Sample2 from '@/components/Sample2'
import Sample3 from '@/components/Sample3'
function Mainpage() {
  return (
    <div>
      <Nav/>
      <Hero/>
      <About/>
      <Sample1/>
      <Sample2/>
      <Sample3/>
      <WhyChoose/>
      <Mission/>
      <Journey/>
      <Faq/>
      
    </div>
  )
}

export default Mainpage
