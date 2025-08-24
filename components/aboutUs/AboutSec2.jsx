"use client"

import React from 'react'

const AboutSec2 = ({lineColor, dotColor, lineWidth}) => {
  return (
    <section className='my-10 secbanner p-10 mt-0'>
         <div className="container">
             <h2 className='text-[18px] leading-0 sm:text-4xl font-medium text-center mt-12 mb-5 text-[#633EFF]'>Welcome to <span className='text-[18px] sm:text-4xl font-medium bg-gradient-to-r from-[#633EFF] from-20% via-[#FF335E] via-50% to-[#00ACCE] to-90% bg-clip-text text-transparent text-center mb-[40px] '>MyLeading Campus®</span></h2>
             <div className="grid grid-cols-1 text-[#000]">
                 <div className="col-span-1">
                     <p className='text-18px leading-[24px] md:text-[20px] md:leading-[28px] text-justify mt-[30px]'>
                     Welcome to MyLeading Campus ®, the cutting-edge cloud based Integrated school management software. We are dedicated to revolutionizing the way schools, colleges and universities manage their operations and streamlining their administrative processes. Our user-friendly school management ERP makes it easy to manage data and resources, improve communication and collaboration, and transform your school's management. With MyLeading Campus ® school management ERP, you'll experience the power of an all-in-one solution that simplifies administrative and academic tasks and makes your school's management a breeze. Our comprehensive system is designed to elevate your school's management to the next level. Our advanced Mobile App streamlines every aspect of school management, from student and teacher data to resources and communication. With MyLeading Campus ®, schools can experience the power of a comprehensive and cutting-edge campus management system. Our team of experienced professionals is committed to providing top-notch support and constantly updating our software to meet the changing needs of schools. We are proud to be the preferred choice for schools looking to elevate their management to the next level.

                     </p>
                 </div>
             </div>
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
          right: 13%;
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
            left: ${lineWidth ? `calc(${lineWidth} - 10px)` : '26%'};
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
  )
}

export default AboutSec2