export const metadata = {
  title: "About Us | Myleading Campus ERP",
  description:
    "Learn more about Myleading Campus ERP, a leading school management software solution designed to streamline operations, enhance communication, and empower educational institutions.",
};

import React from 'react';
import AboutSec1 from '../../components/aboutUs/AboutSec1';
import Aboutsec2 from '../../components/aboutUs/AboutSec2';
import Aboutsec4 from '../../components/aboutUs/AboutSec4';
import AboutSec3 from '../../components/aboutUs/AboutSec3';
// import ContectSec3 from '../../components/contactUs/ContactSec3'

const MainPage = () => {
    return (
        <div>
            <AboutSec1 />
            <Aboutsec2 />
            <AboutSec3 />
            <Aboutsec4 />
        </div>
    );
};

export default MainPage;