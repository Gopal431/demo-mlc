"use client"

import React, { useEffect } from 'react';
// import CountUp from 'react-countup';
import Slider from 'react-slick';
import calender from '../../public/Assts/calendar.png';
import sms from '../../public/Assts/smspng.png';
import monitor from '../../public/Assts/monitor.png';
import grow from '../../public/Assts/grow.png';
import AOS from "aos";
import "aos/dist/aos.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image';

const AboutSection3 = () => {
  const features = [
    {
      imgSrc: calender,
      title: "Simplify Daily School Administration",
      description: "Handle routine tasks like attendance, fee collection, and report cards faster. Cut down manual work and let staff focus on what matters most—students.",
    },
    {
      imgSrc: sms,
      title: "Assign and Track Homework Easily",
      description: "Let teachers share assignments with students in just a few clicks. Parents get instant notifications, and students can submit homework online—keeping everyone on the same page.",
    },
    {
      imgSrc: monitor,
      title: "Use Data to Track and Support Student Progress",
      description: "Access real-time reports on attendance, academics, and activities. Spot issues early and make informed decisions to help students do better.",
    },
  ];
  const features2 = [
    {
      imgSrc: calender,
      title: "Simplify Daily School Administration",
      description: "Handle routine tasks like attendance, fee collection, and report cards faster. Cut down manual work and let staff focus on what matters most—students.",
    },
    {
      imgSrc: sms,
      title: "Assign and Track Homework Easily",
      description: "Let teachers share assignments with students in just a few clicks. Parents get instant notifications, and students can submit homework online—keeping everyone on the same page.",
    },
    {
      imgSrc: monitor,
      title: "Use Data to Track and Support Student Progress",
      description: "Access real-time reports on attendance, academics, and activities. Spot issues early and make informed decisions to help students do better.",
    },
  ];

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 5000,
    pauseOnHover: true, 
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
                infinite: true,
                dots: true,
                autoplay: true,          
                autoplaySpeed: 5000,   
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1,
                autoplay: true,          
                autoplaySpeed: 5000,   
            }
        }
    ]
};

  return (
    <section className='mb-10'>
      <div className="container text-[#141414]">
        <h2 className='font-[Helvetica] font-bold text-[24px]  sm:text-[40px] mb-3 capitalize text-center md:text-start' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
          Growing your School is challenging.
        </h2>
        <h3 className='text-[18px] sm:text-3xl font-medium text-center md:text-start' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
          MyLeading Campus <sup className='text-[18px] sm:text-3xl'>®</sup> makes it easy.
        </h3>
        <div className=" grid-cols-1 md:grid-cols-2 gap-5 mt-10 hidden md:grid">
          <div className='col-span-1' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            {features.map((feature, index) => (
              <div key={index} className="flex bg-[#FFFFFF] rounded-lg shadow-md p-3 pb-8 mb-6">
                <div className='flex-shrink-0 mr-2'>
                  <Image src={feature.imgSrc} alt="" className='w-8 h-auto' />
                </div>
                <div className='feature-content flex-grow'>
                  <h5 className='text-[20px] font-semibold text-[#141414]'>{feature.title}</h5>
                  <p className='text-[14px] font-normal text-[#393939] mt-2'>{feature.description}</p>
                  <div className="w-full bg-[#F9F7FF] rounded-none h-[10px] dark:bg-transparent mt-5">
                    <div className="bg-gradient-to-r from-[#633EFF] from-10% via-[#FF335E] via-40% to-[#00CBF2] to-50% h-[10px] rounded-none animate-progress"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="col-span-1" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <div className="img-box bg-gradient-to-r from-[#FFDFE3] from-10% to-[#62cde880] to-80% rounded-[20px]">
              <Image src={grow} alt="" className='w-[70%] h-[510px] object-cover rounded-lg' />
            </div>
          </div>
        </div>
        <div className="md:hidden mt-10 growigsli">
          <Slider {...sliderSettings}>
            {features2.map((feature, index) => (
              <div key={index} className="flex bg-[#FFFFFF] rounded-lg shadow-md p-3 pb-8 mb-6">
                <div className='flex-shrink-0 bg-gradient-to-r from-[#FFDFE3] from-10% to-[#62cde880] to-80% rounded-[20px] mb-5'>
                  <Image src={feature.imgSrc} alt="" className='w-full h-full' />
                </div>
                <div className='feature-content flex-grow'>
                  <h5 className='text-[20px] font-semibold text-[#141414]'>{feature.title}</h5>
                  <p className='text-[14px] font-normal text-[#393939] mt-2'>{feature.description}</p>
                  <div className="w-full bg-[#F9F7FF] rounded-none h-[10px] dark:bg-transparent mt-5">
                    <div className="bg-gradient-to-r from-[#633EFF] from-10% via-[#FF335E] via-40% to-[#00CBF2] to-50% h-[10px] rounded-none animate-progress"></div>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </section>
  );
}

export default AboutSection3;
