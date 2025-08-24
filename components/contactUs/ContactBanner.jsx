"use client"

import React from 'react'
import SectionWithBackground from '../commonComponents/SectionComponent'
import MLC from '../../public/MyLeading_Campus.png'

const Contactbanner = () => {
    return (
        <SectionWithBackground
            title="Conatct Us"
            breadcrumbs={[
                { label: "Home", link: "/" },
                { label: "Contact Us", link: "" }
            ]}
            backgroundImage={MLC}
        />
    )
}

export default Contactbanner