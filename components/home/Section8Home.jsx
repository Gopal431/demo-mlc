"use client"

import React, { useEffect, useState } from 'react';
import shortBanner from '../../public/Assts/shortbannerOne.png';
import shortBanner2 from '../../public/Assts/shortbannerTwo.png';
import ButtonReuse from '../componentsForReuse/ButtonReuse';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";
import ContactModal from '../contactModal/ContactModal';

const Section8Home = () => {
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    const isPhone = window.innerWidth <= 768;
    AOS.init({
      once: false,
      disable: isPhone,
      duration: 700,
      easing: "ease-out-cubic",
    });
    AOS.refresh();
  }, []);

  return (
    <section className='bg-gradient-to-r from-[#7660FB] from-10% to-[#28A4D9] to-90% py-12'>
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          {/* Text Section */}
          <div className='w-full sm:w-[70%] md:w-[60%]' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <h2 className='text-[30px] md:text-[37px] font-semibold text-white leading-[2rem] md:leading-[2rem] mb-2 md:mb-[20px]'>
              One Software to replace them all....
            </h2>
            <p className='mt-3 text-[26px] font-medium bg-gradient-to-r from-[#FBFAFF] to-[#FFEDF1] via-[#F2FDFF] bg-clip-text text-transparent w-full md:w-[83%] leading-9'>
              Manage everything from classroom activities to school administration with one simple system.
            </p>
            <ButtonReuse onClick={() => {
              setOpenModal(true);
            }} title="Get Demo" className="animate-updown px-[25px] md:px-[35px] py-[10px] md:py-[10px] bg-gradient-to-r from-[#fff] to-[#fff] text-[12px] md:text-[16px] text-[#000] mt-[35px] block w-full md:w-auto" />
          </div>

          {/* Image Section */}
          <div className="w-full sm:w-[30%] md:w-[40%] hidden md:block" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <div className="relative">
              <Image src={shortBanner} alt="" className='w-[55%] h-auto' />
              <Image src={shortBanner2} alt="" className='w-[66%] h-auto absolute top-[-9px] right-[-66px]' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Section8Home;