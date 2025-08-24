"use client"

import React, { useEffect } from 'react';
import webOne from '../../public/Assts/web1.jpeg';
import webTwo from '../../public/Assts/web2.jpeg';
// import { faCheck, faStar, faHeart } from '@fortawesome/fontawesome-free-solid';
import mobileImg from '../../public/Assts/Vector.png';
import mobileImg2 from '../../public/Assts/Button with Shapes.png';
import { FaCheck, FaStar, FaHeart } from 'react-icons/fa';
import AOS from "aos";
import "aos/dist/aos.css";
import Image from 'next/image';

const AboutSection = () => {
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
    <section className="aboutUs text-[#141414] relative pt-12 bg-gradient-to-r from-white to-[#634fe644]
     via-transparent via-90% overflow-hidden">
      <div className="container">
        <div className="text-center sm:text-left mx-auto sm:mx-0" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
          <h4 className='text-[#542DFF] text-xl pb-2 font-semibold sm:text-[24px]'>What You Can Do With MyLeading Campus<sup>®</sup> <span className='w-44 h-[2px] mx-auto sm:mx-0 bg-[#542DFF] inline-block align-middle ml-3'></span> </h4>
          <h2 className='font-[Helvetica] font-bold text-[20px] sm:text-[35px] mb-3 capitalize'>Complete Web ERP & Mobile App for Schools
          </h2>
          <h3 className='text-[18px] sm:text-3xl font-medium'>MyLeading Campus <sup className='text-[18px] sm:text-3xl'>®</sup> : Simplify Management, increase admission</h3>
        </div>
        {/* image */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-10 relative" >
          <div className="col-span-1 bg-[#F9FFFB] p-6 border border-b[#D9D9D9] rounded-xl relative" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <div className='relative hidden md:block'>
              <Image src={webOne} alt="" className='w-[60%] h-full md:w-[384px] md:h-[358px] object-cover rounded-xl relative' />
              {/* mobile view */}
              <div>
                <button className='absolute bottom-5  right-4 flex justify-start items-center text-center bg-[#12A534] px-20 py-[5px] rounded-3xl text-white text-[18px]' > <span className='text-start'><span >Success</span> </span> <span className='flex justify-center items-center ml-[76%] px-[8px] py-[10px] rounded-full text-[#12A534] bg-white'><FaCheck /></span></button>
                <div className='w-20 h-20 rounded-full bg-[#12A534] text-center text-white absolute -top-[-7px] right-7'>
                  <FaCheck className='text-4xl leading-8 mt-5 ms-5' />
                </div>
              </div>
              <div className='absolute bottom-[7rem] right-7 z-10' style={{ zIndex: "1" }}>
                <FaHeart className='text-pink-400 absolute  text-[22px] bottom-[5px] right-[-11px] transform rotate-[47deg]' />
                <FaHeart className='text-pink-400 text-[12px] absolute bottom-[2px] right-[23px] transform rotate-[-21deg]' />
                <FaHeart className='text-pink-300 text-[10px] absolute bottom-[-13px] right-[8px] transform rotate-[29deg]' />
                <FaHeart className='text-pink-200 bottom-[-21px] right-[25px] relative text-[9px] transform rotate-[-13deg]' />
              </div>
              <div className='absolute bottom-[6rem] right-[9.5rem]' style={{ zIndex: "1" }}>
                <span className=' inline-block w-[6px] h-4 rounded-2xl transform rotate-[-29deg]' style={{ backgroundColor: "rgb(29, 78, 216, 54%)" }}></span>
                <span className=' inline-block w-[6px] h-4 absolute right-[-22px] bottom-[14px] rounded-2xl transform rotate-[-2deg]' style={{ backgroundColor: "rgb(29 78 216 / 68%)" }}></span>
                <span className=' inline-block w-[6px] h-4 rounded-2xl absolute right-[-45px] bottom-[6px] transform rotate-[44deg]' style={{ backgroundColor: "rgb(29, 78, 216, 54%)" }}></span>
              </div>

              <div className='absolute bottom-[5.5rem] right-64' style={{ zIndex: "1" }}>
                <FaStar className='absolute bottom-[2px] text-yellow-400 text-[20px] transform rotate-[116deg]' />
                <FaStar className='absolute right-[-46px] bottom-[-2px] text-yellow-300 text-[9px] transform rotate-[41deg]' />
              </div>
              <div className='absolute bottom-[-1.25rem] right-48' style={{ zIndex: "1" }}>
                <span className=' inline-block w-[6px] h-4 absolute bottom-[4px] right-[1px] rounded-2xl transform rotate-[39deg]' style={{ backgroundColor: "rgb(29, 78, 216, 54%)" }}></span>
                <span className=' inline-block w-[6px] h-4 rounded-2xl absolute right-[-19px] bottom-[2px] transform rotate-[0deg]' style={{ backgroundColor: "rgb(29, 78, 216, 54%)" }}></span>
                <span className=' inline-block w-[6px] h-4 rounded-2xl absolute right-[-38px] bottom-[5px] transform rotate-[-34deg]' style={{ backgroundColor: "rgb(29, 78, 216, 54%)" }}></span>
              </div>
              <div className='absolute right-[14rem] bottom-[-0.25rem]' style={{ zIndex: "1" }}>
                <FaStar className='absolute bottom-0 right-8  transform rotate-[85deg]' style={{ color: 'rgb(249 190 65)' }} />
                <FaStar className='absolute text-[#f7d182] bottom-[-16px] right-[14px] text-[14px] transform rotate-[76deg]' />
                <FaStar className='absolute right-[35px] bottom-[-22px] transform rotate-[98deg] text-[#e7a720]' />
              </div>
              <div className='absolute bottom-[-1rem] right-12' style={{ zIndex: "1" }}>
                <FaStar className='absolute right-[30px] bottom-[10px] text-yellow-400 text-[13px] transform rotate-[43deg]' />
                <FaStar className='text-[6px] text-yellow-300 absolute bottom-[22px] right-[9px]' />
              </div>
            </div>
            {/* mobile view */}
            <div className='relative block md:hidden'>
              <Image src={webOne} alt="" className='w-[60%] h-full md:w-[384px] md:h-[358px] object-cover rounded-xl relative' />
              <div className='absolute top-2 right-3'>
                <Image src={mobileImg} alt="" className='w-[30%] relative left-[70%]' />
                <Image src={mobileImg2} alt="" className='relative left-[35%] w-[75%]' />
              </div>
            </div>

            <div className='mt-8'>
              <h3 className='text-2xl font-semibold mb-2'>Fees Management</h3>
              <p className='text-xl font-normal text-slate-800'>
                Simplify online payments: set fees, track transactions, and automate reminders effortlessly.
              </p>
            </div>
          </div>

          <div className="col-span-1 bg-[#F9FFFB] p-6 border border-b[#D9D9D9] rounded-xl relative pb-[150px] md:pb-0" data-aos="zoom-in-up" data-aos-offset="200" data-aos-easing="ease-in-sine" data-aos-duration="400">
            <Image src={webTwo} alt="" className='w-[60%] h-full md:w-[384px] md:h-[358px] object-cover rounded-xl relative' />
            <div className='absolute top-14 right-0 md:right-11 bg-gradient-to-r from-[#F3EEFF] from-100% to-[#E9E1FF] to-91% rounded-xl shadow-xl py-2 md:py-6  px-2 md:px-5'>
              <h4 className='text-[18px] font-semibold'>Communication</h4>
              <p className='mb-9 text-sm text-[#0000008c]'>1 click Solution</p>
              {/* progress bar */}
              <div className=" relative size-36">
                <svg className="size-full -rotate-90" viewBox="0 0 36 36" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="18" cy="18" r="16" fill="none" className="stroke-current text-[#2DD4BF]" strokeWidth="2"></circle>
                  <circle
                    cx="18"
                    cy="18"
                    r="16"
                    fill="none"
                    className="stroke-current text-[#8C62FF]"
                    strokeWidth="4"
                    strokeDasharray="100"
                    strokeDashoffset="0"
                    strokeLinecap="round"
                    style={{
                      animation: 'progress 10s linear infinite'
                    }}
                  ></circle>
                  <style jsx>{`
                @keyframes progress {
                    0% {
                        stroke-dashoffset: 100;
                    }
                    100% {
                        stroke-dashoffset: 0;
                    }
                }
            `}</style>
                </svg>

                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full shadow-lg w-20 h-20 flex items-center justify-center">
                  <img
                    src="https://media.istockphoto.com/id/1133442802/vector/green-checkmark-vector-illustration.jpg?s=612x612&w=0&k=20&c=NqyVOdwANKlbJNqbXjTvEp2wIZWUKbfUbRxm9ROPk6M="
                    alt="Checkmark"
                    className="w-16 h-16 rounded-full object-cover"
                  />
                </div>

              </div>
              {/* progress bar end */}
            </div>
            <h3 className='text-2xl font-semibold mb-2 mt-8'>Parent & communication</h3>
            <p className='text-xl font-normal text-slate-800'>
              Send circulars and updates instantly, whatsApp, SMS & Email -All in 1 click
            </p>

          </div>
        </div>
      </div>

    </section>



  )
}

export default AboutSection