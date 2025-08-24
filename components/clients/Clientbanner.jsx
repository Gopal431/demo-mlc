import React from 'react'
import SectionWithBackground from '../commonComponents/SectionComponent'
import MLC from '../../public/MyLeading_Campus.png'

const Clientbanner = () => {
  return (
    <SectionWithBackground
     title="Client"
     breadcrumbs={[
        {label: "Home", link: '/home'},
        {label: 'Client',link: ""}
     ]}
     backgroundImage={MLC}
    />
  )
}

export default Clientbanner