"use client"

import React,{useEffect} from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
// import '../../src/App.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Aboutsec4 = () => {
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
            // img: img,
            desc: "“With our online fees payment feature, users can easily settle their fees with just a few clicks, without the hassle of queuing up or visiting our physical office, all while ensuring the safety and security of their transactions.”",
            // occupation: 'Principal',
            // sName: 'Delhi Public School'
        },
        {
            // img: img,
            desc: "“With our online fees payment feature, users can easily settle their fees with just a few clicks, without the hassle of queuing up or visiting our physical office, all while ensuring the safety and security of their transactions.”",
            // occupation: 'Teacher',
            // sName: "St. Xavier's College, Mumbai"
        },
        {
            // img: img,
            desc: "“With our online fees payment feature, users can easily settle their fees with just a few clicks, without the hassle of queuing up or visiting our physical office, all while ensuring the safety and security of their transactions.”",
            // occupation: 'Parent',
            // sName: 'Bengaluru'
        },
        {
            // img: img,
            desc: "“With our online fees payment feature, users can easily settle their fees with just a few clicks, without the hassle of queuing up or visiting our physical office, all while ensuring the safety and security of their transactions.”",
            // occupation: 'Hostel Warden',
            // sName: 'Rishi Valley School'
        },
        {
            // img: img,
            desc: "With our online fees payment feature, users can easily settle their fees with just a few clicks, without the hassle of queuing up or visiting our physical office, all while ensuring the safety and security of their transactions.",
            // sName: 'Kendriya Vidyalaya, Hyderabad'
        },
    
    ];

    const settings = {
        dots: true,
        navs:false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true, 
        autoplaySpeed: 3000,
        pauseOnHover: true, 
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
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
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    autoplay: true,          
                    autoplaySpeed: 3000,   
                }
            }
        ]
    };

    return (
        <section className='p-10 md:p-12 pb-20 md:pb-24 abouttes'>
            <div className="container">
                {/* <h2 className='font-[Helvetica] font-bold text-[24px] sm:text-[40px] mb-4 leading-[30px] md:leading-[46px] capitalize text-center text-[#000]' data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
                And We Are Not the Only Ones Saying That…
                </h2>
                <h3 className='text-[18px] sm:text-3xl font-medium bg-gradient-to-r from-[#633EFF] via-[#FF335E] to-[#00ACCE] bg-clip-text text-transparent text-center w-[68%] mx-auto mb-8'  data-aos="zoom-in-down" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="500">
                Hear how real schools are experiencing the power of 
                MyLeading Campus<span className='text-[18px] sm:text-3xl ml-[1px]'>®</span>
                </h3> */}
                <Slider {...settings}>
                    {List.map((item, index) => (
                        <div key={index} className='p-2'>
                            <div className='slide-content bg-[#EBF1FF] p-5 px-3 shadow-lg rounded-md h-[100%] flex flex-col justify-between'>

                                <p className='mb-2 text-[18px] leading-[28px] font-medium text-[#413D45] flex-grow'>{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
}

export default Aboutsec4;
