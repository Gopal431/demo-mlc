"use client"

import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import ring from '../../public/Assts/calendar-ring.png';
import card from '../../public/Assts/Mask-group-onw-upper-card.png';
import maskImg from '../../public/Assts/Mask group-one.png';
import book from '../../public/Assts/Mak-group-onw2book.png';
import maskImg2 from '../../public/Assts/Mask group-two.png';
import bus from '../../public/Assts/Mask group-three(Bus).png';
import maskImg3 from '../../public/Assts/Mask group-three.png';
import calender from '../../public/Assts/Mask group-four(calender).png';
import card2 from '../../public/Assts/Mask-group-four-upper-card.png';
import maskImg4 from '../../public/Assts/Mask-group-four.png';
import network from '../../public/Assts/Mask-group-five(network).png';
import maskImg5 from '../../public/Assts/Mask-group-five.png';
import Image from 'next/image';
import AOS from "aos";
import "aos/dist/aos.css";

const Section6Home = () => {
    const [isMobile, setIsMobile] = useState(false);

    const cardData = [
        { icon: ring, title: 'Keep Parents Updated with Homework and Notices', cardImg: card, maskImg: maskImg },
        { icon: book, title: 'Smarter School Management Starts Here', cardImg: card, maskImg: maskImg2 },
        { icon: bus, title: 'Make School Transport Safer and More Organised', cardImg: card, maskImg: maskImg3 },
        { icon: calender, title: 'Interactive Quizzes and Learning Materials for Every Class', cardImg: card2, maskImg: maskImg4 },
        { icon: network, title: 'Simplify School Transportation with Smart Solutions', cardImg: card2, maskImg: maskImg5 }
    ];

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        AOS.init({
            once: false,
            disable: isMobile,
            duration: 700,
            easing: "ease-out-cubic",
        });

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, [isMobile]);

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };

    return (
        <section className='bg-gradient-to-r from-[#7660FB] from-10% to-[#28A4D9] to-90% py-12'>
            <div className="container">
                <h2 className='text-[30px] md:text-[37px] leading-9 md:leading-10 font-semibold text-white' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">Leading the Way in School Management</h2>
                <p className='mt-3 text-[20px] md:text-[26px] leading-6 md:leading-[2rem] font-medium bg-gradient-to-r from-[#FBFAFF] to-[#FFEDF1] via-[#F2FDFF] bg-clip-text text-transparent w-[100%] md:w-[83%]' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    MyLeading Campus<sup className='text-white !text-[20px] md:!text-[18px] ml-[-1px]'>®</sup> makes managing school administration easy, ensuring maximum productivity and convenience at every step.
                </p>

                {/* Conditional rendering based on mobile view */}
                {isMobile ? (
                    <Slider {...settings} className="mt-10">
                        {cardData.map((card, index) => (
                            <div key={index} className='p-2'>
                                <div className='managment-box equal-height bg-[#F6F7F9] border border-solid border-[#D9D9D9] p-7 pb-0 rounded-[20px] transition-all duration-300 hover:scale-105'>
                                    <div className='flex mb-3'>
                                        <div className='flex-shrink-0 mr-2'>
                                            <Image src={card.icon} alt="" className='w-10 h-10' />
                                        </div>
                                        <div className='flex-grow card-content'>
                                            <span className='text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-semibold text-[#141414]'>{card.title}</span>
                                        </div>
                                    </div>
                                    <Image src={card.cardImg} alt="" className='mb-5' />
                                    <Image src={card.maskImg} alt="" />
                                </div>
                            </div>
                        ))}
                    </Slider>
                ) : (
                    <>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-10">
                            {cardData.slice(0, 3).map((card, index) => (
                                <div key={index} className='col-span-1' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                    <div className='managment-box equal-height bg-[#F6F7F9] border border-solid border-[#D9D9D9] p-7 pb-0 rounded-[20px] transition-all duration-300 hover:scale-105'>
                                        <div className='flex mb-3'>
                                            <div className='flex-shrink-0 mr-2'>
                                                <Image src={card.icon} alt="" className='w-10 h-10' />
                                            </div>
                                            <div className='flex-grow card-content'>
                                                <span className='text-[14px] leading-[18px] md:text-[18px] md:leading-[24px] font-semibold text-[#141414]'>{card.title}</span>
                                            </div>
                                        </div>
                                        <Image src={card.cardImg} alt="" className='mb-5 cardimg' />
                                        <Image src={card.maskImg} alt="" className='cardimg' />
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-7 h-full">
                            {cardData.slice(3, 5).map((card, index) => (
                                <div key={index} className='col-span-1' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                                    <div className='managment-box equal-height bg-[#F6F7F9] border border-solid border-[#D9D9D9] p-7 pb-0 rounded-[20px] transition-all duration-300 hover:scale-105'>
                                        <div className='flex mb-3'>
                                            <div className='flex-shrink-0 mr-2'>
                                                <Image src={card.icon} alt="" className='w-10 h-10' />
                                            </div>
                                            <div className='flex-grow card-content'>
                                                <span className='text-[18px] font-semibold text-[#141414]'>{card.title}</span>
                                            </div>
                                        </div>
                                        <Image src={card.cardImg} alt="" className='mb-5 h-full w-full cardimg' />
                                        <Image src={card.maskImg} alt="" className='h-full w-full cardimg' />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </>
                )}
            </div>
        </section>
    );
}

export default Section6Home;
