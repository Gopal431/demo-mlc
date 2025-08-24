"use client"

import React, { useEffect } from 'react';
import Slider from 'react-slick';
import img from '../../public/Assts/quoate.png';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// import '../../src/App.css';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const Section9Home = () => {
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
        <section className='p-3 md:p-12 pb-20 md:pb-24'>
            <div className="container-fuild">
                <h2 className='font-[Helvetica] font-bold text-[24px] sm:text-[40px] mb-4 leading-[30px] md:leading-[46px] capitalize text-center text-[#000]' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    And We Are Not the Only Ones Saying That…
                </h2>
                <h3 className='text-[18px] sm:text-3xl font-bold text-[#111827] text-center w-[68%] mx-auto mb-8' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                    Hear how real schools are experiencing the power of
                    MyLeading Campus<sup className='text-[18px] sm:text-3xl'>®</sup>
                </h3>
                <Slider {...settings}>
                    {List.map((item, index) => (
                        <div key={index} className="p-2">
                            <div className="slide-content bg-[#EBF1FF] p-5 px-3 shadow-lg rounded-md h-[290px] flex flex-col justify-between">
                                <Image src={item.img} alt="" className="w-[40px] mb-4" />
                                <p className="mb-2 text-[0.938rem] leading-[22px] font-medium text-[#413D45] flex-grow overflow-hidden">{item.desc}</p>
                                <h4 className="font-semibold text-[14px] text-[#67646A]">{item.occupation}</h4>
                                <h6 className="text-[13px] font-medium text-[#413D45]">{item.sName}</h6>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Section9Home;
