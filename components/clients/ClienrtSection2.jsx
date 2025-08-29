"use client"

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import clientImg from '../../public/Assts/ANMS-SO.png';
import clientImg2 from '../../public/Assts/ANMS.png';
import clientImg3 from '../../public/Assts/BYITC.png';
import clietImg4 from '../../public/Assts/CENTRAL.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../src/App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import { InfiniteMovingCardsDemo } from '../../app/componentsForReuse/infiniteMovingCardsComponent';

const ClienrtSection2 = ({ lineColor, dotColor, lineWidth }) => {
    // useffect
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
            img: clientImg2,
        },
        {
            img: clientImg,
        },
        {
            img: clientImg3,
        },
        {
            img: clietImg4,
        },

    ];

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplaySpeed: 3000,
        autoplay: true,
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
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,
                    autoplaySpeed: 3000,
                }
            }
        ]
    };

    return (
        <section className='p-3 md:p-12 pb-20 md:pb-24 clientsec2 secbanner'>
            <div className="container">
                <h2 className='font-[Helvetica] font-bold text-[20px] sm:text-[40px] leading-[21px] md:leading-[46px] capitalize text-center text-[#000] bg-gradient-to-r from-[#633EFF] via-[#FF335E] to-[#00ACCE] bg-clip-text text-transparent w-[68%] mx-auto mb-6' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400" style={{ width: '100%' }}>
                    Trusted by several Schools & Colleges
                </h2>
                <p className='text-[16px] sm:text-[20px] w-full md:w-[58%] md:leading-[26px] text-[#615f5f] block m-auto mb-8 font-normal md:text-center text-left mt-[2.5rem]' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    Trusted by over 50+ Schools 50,000+ Students and 1000+ teachers to Manage their classes, Monitor & Manage their Schools operations.
                </p>
                {/* <Slider {...settings}>
                    {List.map((item, index) => (
                        <div key={index} className='p-2'>
                            <div className='slide-content2 h-auto flex flex-col justify-between bg-white shadow-lg rounded-lg p-3'>
                                <img src={item.img} alt="" className='w-full h-auto mb-4 block object-contain aspect-[2/1]' />
                            </div>
                        </div>
                    ))}
                </Slider> */}
                <InfiniteMovingCardsDemo />
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
      `}</style>
        </section>
    );
}

export default ClienrtSection2;
