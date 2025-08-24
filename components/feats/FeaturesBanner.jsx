import React from 'react'
import SectionWithBackground from '../commonComponents/SectionComponent'
import MLC from '../../public/MyLeading_Campus.png'

const FeaturesBanner = () => {
  return (
     <SectionWithBackground
        title="Features"
        breadcrumbs={[
            {label: "Home", link: '/home'},
            {label: "Features", link: ''}
        ]}
        backgroundImage={MLC}
     />
  )
}

export default FeaturesBanner