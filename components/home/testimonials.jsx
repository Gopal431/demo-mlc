"use client";

import Image from 'next/image';
import { useState, useRef } from "react";
const testimonials = [
  {
    name: 'Anita Sharma',
    role: 'Principal, DEV Mission International  Institute',
    text: 'MyLeading Campus has completely transformed our school’s operations. Its intuitive design and robust features help us manage every department efficiently.',
    avatar: "/gallery/4.jpg", // female
    school: "Authpur National Model H. S. School",
  },
  {
    name: 'Ravi Verma',
    role: 'Admin Officer, DEV Authpur National Model H. S. School',
    text: 'I can now handle student records, fee collection, and communication without any confusion. This ERP is truly a time-saver.',
    avatar: "/gallery/3.jpg", // male
    school: "National Model School Sodepur",
  },
  {
    name: 'Meena Joshi',
    role: 'Vice Principal, National Model School Sodepur',
    text: 'With MyLeading Campus, we have streamlined communication with parents and improved classroom efficiency.',
    avatar: "/gallery/4.jpg", // female
    school: "BIMS Kolkata",
  },
  {
    name: 'Amitabh Singh',
    role: 'Math Teacher, BIMS Kolkata',
    text: 'I love how easy it is to manage attendance and grades. Parents are also more engaged thanks to the communication tools.',
    avatar:  "/gallery/3.jpg",// male
    school: "Maria's Day School Ramrajatala",

  },
  {
    name: 'Priya Nair',
    role: 'School Administrator, Don Bosco School, Malda',
    text: 'The dashboard provides a complete view of school activities. Managing student data has never been this simple.',
    avatar: "/gallery/4.jpg", // female
    school: "Don Bosco School, Malda",
  },
  {
    name: 'Sandeep Iyer',
    role: 'Accountant, Trinity Public School',
    text: 'Managing payrolls, fees, and expenses is hassle-free now. The reports are very insightful for decision making.',
    avatar: "/gallery/3.jpg", // male
    school: "Trinity Public School",
  },
  {
    name: 'Neha Gupta',
    role: "Parent, Maria's Day School Ramrajatala",
    text: 'I stay updated with my child’s progress, homework, and attendance. It feels good to be involved and informed.',
    avatar: "/gallery/4.jpg", // female
    school: "Maria's Day School Ramrajatala",
  },
  {
    name: 'Rahul Chauhan',
    role: 'IT Administrator, Vikramshila Academy',
    text: 'MyLeading Campus is secure and always up. The support team is excellent and quick to help.',
    avatar:  "/gallery/3.jpg", // male
    school: "Vikramshila Academy",
  },
  {
    name: 'Swati Mishra',
    role: "Science Teacher, Maria's Day School Mourigram",
    text: 'Tracking student performance has become much easier. MyLeading Campus is helping teachers a lot.',
    avatar: "/gallery/4.jpg", // female
    school: "Maria's Day School Mourigram",
  },
  {
    name: 'Manoj Tripathi',
    role: "Registrar, Maria's International School Boinchi",
    text: 'The admission and registration system is very well-designed. Our work is faster and more organized.',
    avatar:  "/gallery/3.jpg", // male
    school: "Maria's International School Boinchi",
  },
  {
    name: 'Pooja Desai',
    role: 'Operations Manager, Authpur National Model H. S. School',
    text: 'From transport to library management, MyLeading Campus handles it all smoothly. Great platform!',
    avatar: "/gallery/4.jpg", // female
    school: "Authpur National Model H. S. School",
  },
  {
    name: 'Arun Mehra',
    role: 'School Head, Don Bosco School, Malda',
    text: 'We’ve seen noticeable improvement in operations since implementing MyLeading Campus. It’s built for Indian schools.',
    avatar:  "/gallery/3.jpg", // male
    school: "Don Bosco School, Malda",
  },
];

  
  

export default function TestimonialsGrid() {
   const [activeIndex, setActiveIndex] = useState(0);
  const sliderRef = useRef(null);

  // detect current visible slide
  const handleScroll = () => {
    if (sliderRef.current) {
      const scrollLeft = sliderRef.current.scrollLeft;
      const cardWidth = sliderRef.current.firstChild.offsetWidth + 16; // card width + gap
      const index = Math.round(scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  // always show 3 dots (like a pager)
  const getDotClass = (dotIndex) => {
    if (dotIndex === 1) return "bg-blue-600"; // middle dot = active
    return "bg-gray-300";
  };

  return (
   <div className="max-w-7xl mx-auto px-4 md:py-12 py-5">
      <div className="text-center md:mb-12 mb-5">
        <h2 className="md:text-6xl text-2xl font-extrabold text-gray-900">
          What Our Users Are Saying
        </h2>
      </div>

      {/* Mobile Slide */}
      <div className="md:hidden">
        <div
          ref={sliderRef}
          onScroll={handleScroll}
          className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide"
        >
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex-shrink-0 snap-center w-72 bg-white hover:shadow-lg border border-gradient-to-r from-[#5F3CFB] via-[#4091E1] to-[#21ACD2] rounded-2xl shadow-sm p-6"
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="rounded-full w-10 h-10"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{item.text}</p>
              {item.school && (
                <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                  {item.school}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Fixed 3 Dot indicators */}
        <div className="flex justify-center mt-4 space-x-2">
          {[0, 1, 2].map((dotIndex) => (
            <span
              key={dotIndex}
              className={`w-3 h-3 rounded-full transition ${getDotClass(dotIndex)}`}
            />
          ))}
        </div>
      </div>

      {/* Desktop Masonry */}
      <div className="hidden md:block">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className={`break-inside-avoid bg-white hover:shadow-lg border border-gradient-to-r from-[#5F3CFB] via-[#4091E1] to-[#21ACD2] rounded-2xl shadow-sm p-6 mb-4 ${
                idx % 2 === 0 ? "h-80" : "h-64"
              }`}
            >
              <div className="flex items-center mb-4">
                <img
                  src={item.avatar}
                  alt={item.name}
                  className="rounded-full w-10 h-10"
                />
                <div className="ml-3">
                  <p className="font-semibold text-gray-900">{item.name}</p>
                  <p className="text-sm text-gray-500">{item.role}</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{item.text}</p>
              {item.school && (
                <div className="text-xs text-gray-500 mt-auto pt-2 border-t border-gray-100">
                  {item.school}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>

  );
}
