"use client"

import React, { useEffect } from 'react';
import Slider from "react-slick";
import aboutImg from '../../public/Assts/web5.png';
import aboutImg2 from '../../public/Assts/web4.png';
import aboutImg3 from '../../public/Assts/web3.png';
import aboutImg4 from '../../public/Assts/folder.png';
import Chart from '../../public/Assts/chart.png';
import Progress from '../../public/Assts/progress.png';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';


const AboutSection2 = () => {
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

  const aboutInfo = [
    {
      img: aboutImg,
      heading: 'Attendance Management',
      para: 'Biometric attendance, face detection, real-time parent notifications, and diverse analytical reports',
      boxInfoImg: Progress,
      boxInfoStyles: "absolute shadow-lg rounded-lg p-2 top-4 right-4 bg-gradient-to-r from-[#fff2f345] from-100% via-[#FFF6F7] via-63% to-[#fff2f345] to-77% w-[70%]"
    },
    {
      img: aboutImg2,
      heading: 'Report Card/Grade Sheet',
      para: "Create graphical report cards in line with school formats, and analyse and compare students' progress.",
      boxInfoImg: Chart,
      boxInfoStyles: "top-4 right-4 absolute bg-gradient-to-r from-[#fff2f342] from-100% via-[#FFF6F7] via-63% to-[#f2e0e03d] to-77% shadow-lg rounded-lg p-3 w-[65%]"
    },
    {
      img: aboutImg3,
      heading: 'Admission Management',
      para: 'Online forms and document uploads, Admission status tracking, Notification to parent',
      boxInfoImg: aboutImg4,
      boxInfoStyles: "absolute top-4 right-0 w-[40%] m-auto bg-[#f2faff38] shadow-lg rounded-lg p-2"
    }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <section className="relative pb-0 md:pb-12 overflow-hidden pt-12 px-4 md:px-8 lg:px-16">
      <div className="container">
        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 h-full">
          {aboutInfo.map((item, index) => (
            <div className="col-span-1" key={index} data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
              <div className="box-one bg-[#FFFCFC] shadow-md rounded-lg px-8 py-6 h-[529px] border-[#d4d4d4] border border-solid relative">
                <Image src={item.img} alt="" className='w-full h-auto mt-8' />
                <div className={`box-info ${item.boxInfoStyles}`}>
                  <Image src={item.boxInfoImg} alt="" className="w-full h-auto" />
                </div>
                <h2 className={`text-[20px] font-semibold text-[#141414] mb-2 mt-4 ${index === aboutInfo.length - 1 ? 'pt-4' : ''}`}>
                  {item.heading}
                </h2>
                <p className='text-[15px] font-normal text-[#393939]'>
                  {item.para}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View */}
        <div className="md:hidden mb-[100px]">
          <Slider {...settings}>
            {aboutInfo.map((item, index) => (
              <div key={index} data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                <div className="box-one bg-[#FFFCFC] shadow-md rounded-lg px-8 py-6 border-[#d4d4d4] border border-solid relative">
                 <Image src={item.img} alt=""   className='w-full h-auto mt-8' />
                  <div className={`box-info ${item.boxInfoStyles}`}>
                    <Image src={item.boxInfoImg} alt="" className="w-full h-auto" />
                  </div>
                  <h2 className={`text-[20px] font-semibold text-[#141414] mb-2 mt-4 ${index === aboutInfo.length - 1 ? 'pt-4' : ''}`}>
                    {item.heading}
                  </h2>
                  <p className='text-[15px] font-normal text-[#393939]'>
                    {item.para}
                  </p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default AboutSection2;
