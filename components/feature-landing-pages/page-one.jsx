import React from "react";
import Image from "next/image";
import Section10Home from "../home/Section10Home";
import ButtonReuse from "../componentsForReuse/ButtonReuse";
import { IoLogoMarkdown, IoSchool } from "react-icons/io5";
import { FaSchool, FaStar } from "react-icons/fa";
import Link from "next/link";
import { GrSchedule } from "react-icons/gr";

function PageOne({ parsedFeature }) {
  function Stat({ value, label,Icon }) {
    return (
      <div className="flex flex-col  items-center justify-start gap-2 text-center">
      
          <div className="text-2xl font-semibold text-gray-900 flex items-center justify-center gap-2">{!!Icon && <Icon/>}{value}</div>
          <div className="text-sm text-gray-500">{label}</div>
       
      </div>
    );
  }
  return (
    <>
      {!parsedFeature ? (
        <div>Loading</div>
      ) : (
        <div className="tw-w-full tw-h-auto tw-bg-white">
          <section className="">
            <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
              <div className="border-b border-gray-900 pb-10">
                <h1 className="text-3xl font-bold md:text-center text-left sm:text-4xl text-gray-600">
                  {parsedFeature?.title}
                </h1>
                <h2 className="max-w-3xl mx-auto mt-5 text-xl md:text-center text-left">
                  {parsedFeature?.why}
                </h2>
              </div>
              <div className="flex flex-col md:flex-row justify-between items-center gap-6">
                {/* Left Content */}
                <div className="text-left w-full md:w-1/2">
                  <h1 className="text-xl sm:text-3xl font-bold text-gray-600">
                    {parsedFeature?.herosection?.title}
                  </h1>
                  <p className="mt-3 text-gray-600 text-base sm:text-lg md:w-3/4 mx-auto md:mx-0">
                    {parsedFeature?.herosection?.dec}
                  </p>
                </div>

                {/* Right Form */}
                   <section className="w-full md:w-1/2 px-4 md:px-0">
  <div className="mx-auto max-w-6xl py-6 md:py-10">
    <div className="rounded-2xl border border-gray-200 bg-gray-100 p-4 sm:p-6 md:p-8 flex flex-col gap-4">
      {/* Top row */}
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
        <div className="flex items-center gap-2 md:gap-4">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
            Why choose MyLeading Campus
          </h2>
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm sm:text-base md:text-lg text-gray-600">
        MyLeading Campus is the most popular ERP library for School management.
      </p>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <Stat 
          value="4.5+" 
          label="Average Ratings for Mobile Apps" 
          Icon={() => <FaStar className="text-[#603bfc]" />} 
        />
        <Stat 
          value="100+" 
          label="Registered Schools" 
          Icon={() => <FaSchool className="text-[#603bfc]" />} 
        />
        <Stat 
          value="12500+" 
          label="Active Students" 
          Icon={() => <IoSchool className="text-[#603bfc]" />} 
        />
      </div>

      {/* Button */}
      <div className="mt-4 w-full flex justify-center md:justify-start">
        <a
          href="https://wa.me/9874344994?text=Hello"
          target="_blank"
          className="flex gap-2 max-w-[200px] justify-center items-center rounded-full bg-gradient-to-r from-[#622BFF] to-[#16B2D0] px-4 py-2 text-sm sm:text-base font-semibold text-white transition hover:bg-blue-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
        >
          Book a Demo <GrSchedule className="text-lg sm:text-xl" />
        </a>
      </div>
    </div>
  </div>
</section>
              </div>

              <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
                <div>
                  <div className="mt-4 space-y-12">
                    {parsedFeature?.features.map((item, index) => {
                      const Icon = item.icons;
                      return (
                        <div
                          key={index}
                          className="flex flex-col bg-white shadow-md md:shadow-none rounded-lg p-4 mb-4"
                        >
                          <div className="flex md:items-center text-left mb-2">
                            <div className="flex-shrink-0 mr-3">
                              <div className="flex items-center justify-center w-12 h-12 rounded-md bg-blue-50">
                                <Icon className="w-6 h-6 text-blue-600" />
                              </div>
                            </div>
                            <p className="text-lg font-medium">{item.fe}</p>
                          </div>

                          <p className="mt-2 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
                <div aria-hidden="true" className="mt-10 lg:mt-0">
                  <Image
                    width="600"
                    height="600"
                    src={"/image/School_ERP_features.png"}
                    className="mx-auto rounded-lg shadow-lg dark-bg-gray-500"
                    style={{ color: "transparent" }}
                  />
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
              <div className="container mx-auto px-6 p-6 bg-white">
                <div className="mb-16 md:text-center text-left border-b border-gray-900 pb-10">
                  <h2 className="mt-2 text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-gray-900">
                    {parsedFeature?.title2}
                  </h2>
                </div>

                <div className="flex flex-wrap my-12">
                  {parsedFeature?.benefits?.map((feature, index) => (
                    <div
                      key={index}
                      className={`
                       w-full md:w-1/2 lg:w-1/3 p-8 shadow-md md:shadow-none
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

          <section className="pb-16 px-6 bg-gray-50 pt-5">
            <div className="max-w-7xl bg-white h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl p-8 shadow-md">
              <div className="space-y-8">
                <h2 className="font-bold text-2xl text-gray-900">
                  {parsedFeature?.FeaturesDataMobile?.title}
                </h2>

                {parsedFeature?.FeaturesDataMobile?.features.map((feature) => {
                  const Icon = feature?.icon;
                  return (
                    <div key={feature.id} className="flex items-start gap-4">
                      <Icon className="w-6 h-6 text-blue-600" />
                      <div>
                        <h3 className="font-semibold text-xl text-gray-900">
                          {feature.title}
                        </h3>
                        <p className="text-gray-600 mt-1">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex justify-center">
                <Image
                  src={parsedFeature?.FeaturesDataMobile?.imgUrl}
                  alt="Phone Mockup"
                  width={300}
                  height={500}
                  priority
                />
              </div>
            </div>

            <div className="max-w-7xl mt-16 bg-white h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl p-8 shadow-md">
              <div className="flex justify-center">
                <Image
                  src="/image/Banner.png"
                  alt="Laptop Mockup"
                  width={700}
                  height={1200}
                  priority
                  className="tw-h-full tw-w-full tw-object-cover tw-object-bottom"
                />
              </div>

              <div className="space-y-8">
                <h2 className="font-bold text-2xl text-gray-900">
                  {parsedFeature?.FeaturesDataOfLaptop?.title}
                </h2>

                {parsedFeature?.FeaturesDataOfLaptop?.features?.map(
                  (feature) => {
                    const Icon = feature?.icon;
                    return (
                      <div key={feature.id} className="flex items-start gap-4">
                        <Icon className={`w-6 h-6 ${feature.iconColour}`} />
                        <div>
                          <h3 className="font-semibold text-xl text-gray-900">
                            {feature.title}
                          </h3>
                          <p className="text-gray-600 mt-1">
                            {feature.description}
                          </p>
                        </div>
                      </div>
                    );
                  }
                )}
              </div>
            </div>
          </section>
          <Section10Home sectionData={parsedFeature?.faqSectionData} />
          {/* <Section12Home /> */}
        </div>
      )}
    </>
  );
}

export default PageOne;
