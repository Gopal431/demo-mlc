export const metadata = {
  title: "Contact Us | Myleading Campus ERP",
  description:
    "Get in touch with Myleading Campus ERP for school management software inquiries, support, or partnership opportunities. We're here to help your educational institution succeed.",
};

import React from 'react'
import Contactbanner from '../../components/contactUs/ContactBanner.jsx';
import ContactSec2 from '../../components/contactUs/ContactSec2'
import ContectSec3 from '../../components/contactUs/ContactSec3'

const page = () => {
    return (
        <div>
            {/* className="flex justify-center items-center" */}
            {/* Contact banner */}
            <Contactbanner />
            {/* sec2 */}
            <ContactSec2 />
            {/* contactForm */}
            <ContectSec3 />
        </div>
    )
}

export default page