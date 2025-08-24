import React from 'react'
import SectionWithBackground from '../commonComponents/SectionComponent'
import MLC from '../../public/MyLeading_Campus.png'

const TestimonialSec1 = () => {
  return (
    <SectionWithBackground
       title="Testimonial"
       breadcrumbs={[
        {label: "Home", link:"/home"},
        {label: "Testimonial", link:''}
       ]}
       backgroundImage={MLC}
    />
  )
}

export default TestimonialSec1