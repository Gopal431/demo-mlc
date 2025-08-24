"use client"

export const metadata = {
  title: "Testimonials | Myleading Campus ERP",
  description:
    "Read testimonials from school principals, teachers, parents, and staff who use Myleading Campus ERP. Discover how our school management software transforms educational institutions.",
};

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import img from '../../public/Assts/quoate.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const TestimonialSec2 = ({ lineColor, dotColor, lineWidth }) => {
  // useeffect
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

  const List = [
    {
      img: img,
      desc: "Since switching to software, our administrative tasks have become a breeze. We've saved countless hours on paperwork, improved communication with parents.",
      occupation: 'Principal',
      sName: 'National Model School Sodepur',
    },
    {
      img: img,
      desc: "Software has empowered me to personalise learning and engage my students like never before.",
      occupation: 'Teacher',
      sName: "Authpur National Model High School",
    },
    {
      img: img,
      desc: "With software, I receive instant updates on attendance, grades, and school events straight to my phone.",
      occupation: 'Parent',
      sName: 'The Vedanta Academy',
    },
    {
      img: img,
      desc: "Managing our hostel operations used to be a logistical nightmare. But Myleading campus has changed everything!",
      occupation: 'Hostel Warden',
      sName: 'Techno India Group Public School, Krishnanagar',
    },
    {
      img: img,
      desc: "Implementing Myleading Campus has been one of the best decisions we've made for our school.",
      occupation: 'Principal',
      sName: 'St. John\'s Public School',
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
          autoplaySpeed: 3000,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
          autoplay: true,
          autoplaySpeed: 3000,
        },
      },
    ],
  };

  return (
    <section className="p-3 md:p-12 pb-20 md:pb-24 secbanner">
      <div className="container-fuild">
        <h2
          className="font-[Helvetica] font-bold text-[20px] sm:text-[40px] leading-[21px] md:leading-[46px] capitalize text-center w-[68%] mx-auto mb-6 bg-gradient-to-r from-[#633EFF]  to-[#00ACCE] bg-clip-text text-transparent"
          data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"
        >
          What schools say
        </h2>
        <p
          className="text-[16px] sm:text-[20px] w-full md:w-[52%] md:leading-[30px] text-[#615f5f] block m-auto mb-8 font-normal text-center mt-[2.5rem]"
          data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400"
        >
          Streamline administrative tasks, reduces paperwork, and eliminates duplication of effort. This results in increased efficiency and productivity, which benefits both teachers and administrators
        </p>
        <Slider {...settings}>
          {List.map((item, index) => (
            <div key={index} className="p-2">
              <div className="slide-content bg-[#EBF1FF] p-5 px-3 shadow-lg rounded-md h-[290px] flex flex-col justify-between">
                <Image src={item.img} alt="" className="w-[40px] mb-4" />
                <p className="mb-2 text-[15px] leading-[22px] font-medium text-[#413D45] flex-grow">{item.desc}</p>
                <h4 className="font-semibold text-[14px] text-[#67646A]">{item.occupation}</h4>
                <h6 className="text-[13px] font-medium text-[#413D45]">{item.sName}</h6>
              </div>
            </div>
          ))}
        </Slider>
      </div>
      <style jsx>{`
        .secbanner h2 {
          position: relative;
        }
        .secbanner h2::before {
          position: absolute;
          content: '';
          top: 60px;
          left: 0;
          right: 0;
          margin: 0 auto;
          width: ${lineWidth || '160px'};
          height: 6px;
          background-color: ${lineColor || '#d8f2f7'};
          border-radius: 8px;
        }
        .secbanner h2::after {
          position: absolute;
          content: '';
          top: 57px;
          left: 0;
          right: 19%;
          margin: 0 auto;
          width: 10px;
          height: 10px;
          border-radius: 50%;
          background: ${dotColor || 'linear-gradient(to right, #16B2D0, #542DFF, #FF335E)'};
          animation: animate2 8s linear infinite;
        }
        @keyframes animate2 {
          0% {
            left: 0;
          }
          100% {
            left: ${lineWidth ? `calc(${lineWidth} - 10px)` : '38%'};
          }
        }
           @media (max-width:991px){
              .secbanner h2::before{
              top:42px;
              }
              .secbanner h2::after{
              top: 40px;
            }
          }
      `}</style>
    </section>
  );
};

export default TestimonialSec2;
