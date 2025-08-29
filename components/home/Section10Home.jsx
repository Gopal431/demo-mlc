"use client";

import React, { useState } from "react";
import { GoChevronDown, GoChevronUp } from "react-icons/go";
export default function Section10Home({ sectionData }) {
  const { title, subtitle, faqs } = sectionData;
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F2F5FF] py-10">
      <div className="container mx-auto px-4">
        {/* Section Heading */}
        <div className="text-left md:text-center mb-12">
          <h2 className="font-[Helvetica] font-bold text-black text-[24px] sm:text-[40px] mb-2 capitalize">
            {title}
          </h2>
          <h3 className="text-[18px] sm:text-3xl text-black font-medium md:text-center text-left w-[80%] mx-auto">
            {subtitle}
          </h3>
        </div>

        {/* Accordion */}
        <div className="grid grid-cols-1 mt-9">
          <div id="accordion-collapse" className="bg-white rounded-lg shadow-sm">
            {faqs.map((faq, index) => (
              <div key={faq.id} className="border-b border-gray-200">
                <h2>
                  <button
                    type="button"
                    className={`flex items-center justify-between w-full p-3 font-medium gap-3 focus:ring-1 focus:ring-purple-300 hover:bg-gray-100 transition ${
                      activeIndex === index
                        ? "bg-gradient-to-l from-[#DDF7FF] to-[#ECE8FF] text-black"
                        : "text-gray-500"
                    }`}
                    aria-expanded={activeIndex === index}
                    onClick={() => toggleAccordion(index)}
                  >
                    <span className="text-[14px] md:text-center text-left md:text-[20px] flex font-semibold text-black">
                      <span
                        className="mr-3 hidden md:block md:text-2xl font-bold text-gray-400"
                        style={{ verticalAlign: "top" }}
                      >
                        {`0${faq.id}`}
                      </span>
                      {faq.question}
                    </span>
                    {activeIndex === index ? (
                      <span className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white">
                      <GoChevronUp />
                      </span>
                    ) : (
                      <span className="w-8 h-8 bg-[#F3F5F6] rounded-full flex items-center justify-center text-black">
                       <GoChevronDown />

                      </span>
                    )}
                  </button>
                </h2>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    activeIndex === index ? "max-h-screen" : "max-h-0 hidden"
                  }`}
                >
                  <div className="p-5 bg-white">
                    <p className="text-black">{faq.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
