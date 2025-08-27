import React from "react";
import Image from "next/image";
import { FaAppStore } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { SiMaterialdesign } from "react-icons/si";
import Section10Home from "../home/Section10Home";
import Section12Home from "../home/Section12Home";
import { RiStackFill } from "react-icons/ri";
import { MdDashboardCustomize, MdOutlineFingerprint } from "react-icons/md";
import { IoMdTimer } from "react-icons/io";
const BiometricAttendanceManagement = ({parsedFeature}) => {
          const faqSectionData = {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Dive into our frequently asked questions to learn more about MyLeading Campus®",
    faqs: [
      {
        id: 1,
        question: "Is biometric attendance safe for children?",
        answer:
          "Yes. Our system uses harmless fingerprint or face scan technology, which is 100% safe and widely used worldwide.",
      },
      {
        id: 2,
        question: "What if a student forgets to mark attendance?",
        answer:
          "The system allows manual override by the admin with proper authorization, ensuring no records are lost.",
      },
      {
        id: 3,
        question: "Can parents see attendance in real time?",
        answer:
          "Absolutely. Parents receive instant updates through the school’s mobile app or SMS/WhatsApp alerts.",
      },
      {
        id: 4,
        question: "Does it work without internet?",
        answer:
          "Yes. Data is stored locally and auto-syncs with the cloud once internet is available.",
      },
         {
        id: 5,
        question: "How long does setup take?",
        answer:
          "Installation is quick, and most schools go live within a day.",
      },
    ],
  };
  return (
  <div className="tw-w-full tw-h-auto tw-bg-white">
           <section className="">
             <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
               <div className="border-b border-gray-900 pb-10">
                 <h1 className="text-3xl font-bold text-center sm:text-4xl text-gray-600">
                   {parsedFeature?.title}
                 </h1>
                 <h2 className="max-w-3xl mx-auto mt-5 text-xl text-center ">
                   {parsedFeature?.why}
                 </h2>
               </div>
               <div className="flex justify-between iteam-">
               <div>
                <h1 className="text-xl font-bold text-left sm:text-3xl text-gray-600">Why Schools Need Biometric Attendance</h1>
                <h2 className="w-[50%] mt-3 text-gray-600">Schools and colleges face daily challenges in marking attendance fairly and quickly. Traditional methods are often manipulated, while manual records can be lost or miscalculated.</h2>
               </div>
               <div className="w-[200px] h-28 bg-red-500"></div>
               </div>
               <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                 <div>
                   <div className="mt-4 space-y-12">
                     {parsedFeature?.features.map((item, index) => {
                      const Icon = item.icons;
                      return (
                        <div key={index} className="flex">
                          <div className="flex-shrink-0">
                            <div className="flex items-center justify-center w-12 h-12 rounded-md">
                              <Icon className="w-6 h-6 text-blue-600" />
                            </div>
                          </div>
                          <div className="ml-4">
                            <h4 className="text-lg font-medium leading">
                              {item.fe}
                            </h4>
                            <p className="mt-2 text-gray-600">{item.description}</p>
                          </div>
                        </div>
                      );
                    })}
                   </div>
                 </div>
                 <div aria-hidden="true" className="mt-10 lg:mt-0">
                   <Image
                     width="600"
                     height="600"
                     src="https://images.unsplash.com/photo-1516542076529-1ea3854896f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxNHx8Y29tcHV0ZXJ8ZW58MHwwfHx8MTY5OTE3MDk1N3ww&ixlib=rb-4.0.3&q=80&w=1080"
                     className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                     style="color:transparent"
                   />
                 </div>
               </div>
             </div>
           </section>
     
           <section className="bg-white">
             <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
               <div className="container mx-auto px-6 p-6 bg-white">
                 <div className="mb-16 text-center border-b border-gray-900 pb-10">
                   <h1 className="mt-2 text-5xl lg:text-5xl font-bold tracking-tight text-gray-900">
                  Benefits of Biometric Attendance System for Schools, Teachers & Parents
                   </h1>
                 </div>
     
                 <div className="flex flex-wrap my-12">
                   {parsedFeature?.benefits?.map((feature, index) => (
                     <div
                       key={index}
                       className={`
                    w-full md:w-1/2 lg:w-1/3 p-8
                    ${index % 3 !== 2 ? "md:border-r" : ""} 
                    ${index < 3 ? "md:border-b" : ""}
                  `}
                     >
                       <div className="flex items-center mb-6">
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 32 32"
                           width="20"
                           height="20"
                           fill="currentColor"
                           className="h-6 w-6 text-indigo-500"
                         >
                           <path d="M16 3C8.8 3 3 8.8 3 16s5.8 13 13 13 13-5.8 13-13c0-1.398-.188-2.793-.688-4.094L26.688 13.5c.2.8.313 1.602.313 2.5 0 6.102-4.898 11-11 11S5 22.102 5 16 9.898 5 16 5c3 0 5.695 1.195 7.594 3.094L25 6.688C22.7 4.386 19.5 3 16 3zm11.281 4.281L16 18.563l-4.281-4.282-1.438 1.438 5 5 .719.687.719-.687 12-12z"></path>
                         </svg>
                         <div className="ml-4 text-xl text-gray-900">
                           {feature?.title}
                         </div>
                       </div>
                       <p className="leading-loose text-gray-500">
                         {feature.description}
                       </p>
                     </div>
                   ))}
                 </div>
               </div>
             </div>
           </section>
     
           <section className="pb-16 px-6 bg-white">
             <div className="max-w-7xl bg-gray-50 h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl p-8 shadow-md">
               <div className="space-y-8">
                 <h1 className="font-bold text-2xl text-gray-900">
                   Key Features of Our Biometric System
                 </h1>
     
                 <div className="flex items-start gap-4">
                   <div className="text-3xl text-gray-800">
                     <MdOutlineFingerprint />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl text-gray-900">
                       Fingerprint & Face Recognition 
                     </h3>
                     <p className="text-gray-600 mt-1">
                   Quick, contactless options for all age groups.
                     </p>
                   </div>
                 </div>
     
                 <div className="flex items-start gap-4">
                   <div className="text-3xl text-blue-500">
                     <IoMdTimer />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl text-gray-900">
                      Real-Time Updates 
                     </h3>
                     <p className="text-gray-600 mt-1">
                     Attendance data reflects instantly on admin dashboards and mobile apps.
                     </p>
                   </div>
                 </div>
               </div>
     
               <div className="flex justify-center">
                 <Image
                   src="/Assts/logo/phone.svg"
                   alt="Phone Mockup"
                   width={700}
                   height={1200}
                   priority
                   className="tw-h-full tw-w-full tw-object-cover tw-object-bottom"
                 />
               </div>
             </div>
     
             <div className="max-w-7xl mt-16 bg-gray-50 h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl p-8 shadow-md">
               <div className="flex justify-center">
                 <Image
                   src="/Assts/logo/laptop.svg"
                   alt="Laptop Mockup"
                   width={700}
                   height={1200}
                   priority
                   className="tw-h-full tw-w-full tw-object-cover tw-object-bottom"
                 />
               </div>
     
               <div className="space-y-8">
                 <h1 className="font-bold text-2xl text-gray-900">
                How Biometric Attendance Works
                 </h1>
     
                 <div className="flex items-start gap-4">
                   <div className="text-3xl text-pink-800">
                     <SiMaterialdesign />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl text-gray-900">
                      Seamless Integration
                     </h3>
                     <p className="text-gray-600 mt-1">
                      Works smoothly with your existing ERP, payroll, and ID system.
                     </p>
                   </div>
                 </div>
     
                 <div className="flex items-start gap-4">
                   <div className="text-3xl text-black">
                     <RiStackFill />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl text-gray-900">
                      Cloud Storage
                     </h3>
                     <p className="text-gray-600 mt-1">
                     Safe, secure, and accessible anytime, anywhere.
                     </p>
                   </div>
                 </div>
                   <div className="flex items-start gap-4">
                   <div className="text-3xl text-red-500">
                     <MdDashboardCustomize />
                   </div>
                   <div>
                     <h3 className="font-semibold text-xl text-gray-900">
                     Custom Reports 
                     </h3>
                     <p className="text-gray-600 mt-1">
                    Generate daily, monthly, or yearly reports in a single click.
                     </p>
                   </div>
                 </div>
               </div>
             </div>
           </section>
           <Section10Home sectionData={faqSectionData} />
             <Section12Home />
         </div>
  )
}

export default BiometricAttendanceManagement