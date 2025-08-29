"use client";

export const metadata = {
  title: "Contact Information | Myleading Campus ERP",
  description:
    "Find contact details for Myleading Campus ERP, including our location, email, and phone number. Reach out for school management software support or inquiries.",
};

import React from 'react';
import { FaPhone } from "react-icons/fa6";
import { FaPaperPlane } from "react-icons/fa";
import { MdMail } from "react-icons/md";

const ContactSec2 = () => {
      const iframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.675966791005!2d88.41590785541993!3d22.572782000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275adb4374e7b%3A0x595661c358a2371a!2sRDB%20Boulevard%20Building!5e0!3m2!1sen!2sin!4v1726121241567!5m2!1sen!2sin";
    return (
        <section className='my-[40px] p-2'>
            <div className="container">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                    {[
                        {
                            icon: <FaPaperPlane className="text-white font-bold" size={26} />,
                            title: 'Location',
                            content: 'RDB Boulevard, Block EP & GP Plot K-1, 5th Floor, Sector V, Kolkata, West Bengal 700055',
                            link: '#', // Add a valid URL if necessary
                        },
                        {
                            icon: <MdMail className="text-white font-bold" size={26} />,
                            title: 'Email',
                            content: 'hello@myleadingcampus.com',
                            link: 'mailto:hello@myleadingcampus.com',
                        },
                        {
                            icon: <FaPhone className="text-white font-bold" size={26} />,
                            title: 'Phone',
                            content: '+91-8981663638',
                            link: 'tel:+91-8981663638',
                        },
                    ].map((item, index) => (
                        <div key={index} className="col-span-1 flex flex-col h-full">
                            <div className="flex bg-white shadow-md rounded-lg p-6 flex-grow relative">
                                <div className='flex-shrink-0 bg-gradient-to-r from-[#633EFF] to-[#00ACCE] w-[45px] h-[45px] rounded-full flex items-center justify-center mr-[10px] z-[1]'>
                                    {item.icon}
                                </div>
                                <div className='flex-grow'>
                                    <h3 className='text-[24px] font-semibold text-[#383838] mb-[10px]'>{item.title}</h3>
                                    <p className='text-[16px] text-black leading-[24px]'>
                                        <a href={item.link}>{item.content}</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
          
            </div>
        </section>
    );
};

export default ContactSec2;