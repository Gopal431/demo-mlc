"use client"

import React from 'react'
import SectionWithBackground from '../commonComponents/SectionComponent'
import MLC from '../../public/MyLeading_Campus.png'

const AboutSec1 = () => {
  return (
    <SectionWithBackground 
      title="About Us" 
      breadcrumbs={[
        { label: 'Home', link: '/home' },
        { label: 'About', link: '' }
      ]} 
      backgroundImage={MLC}
    />
  )
}

export default AboutSec1;
