import React from "react";
import Image from "next/image";
import { FaAppStore } from "react-icons/fa6";
import { IoPhonePortrait } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { SiMaterialdesign } from "react-icons/si";
export default function Page({ params }) {
  const { feature } = params;
  let parsedFeature = {};
  try {
    parsedFeature = JSON.parse(decodeURIComponent(feature));
  } catch (err) {
    parsedFeature = { title: "Invalid Feature", desc: "" };
  }
  console.log("HIIII", parsedFeature);
  return (
    <div className="tw-w-full tw-h-auto tw-bg-white">
      <section className="">
        <div className="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h1 className="text-3xl font-bold text-center sm:text-5xl">
              {parsedFeature?.title}
            </h1>
            <h2 className="max-w-3xl mx-auto mt-4 text-xl text-center ">
              {parsedFeature?.why}
            </h2>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="mt-4 space-y-12">
                {parsedFeature?.features.map((item, index) => (
                  <div key={index} className="flex">
                 
                    <div className="flex-shrink-0">
                      <div className="flex items-center justify-center w-12 h-12 rounded-md">
                      <SiMaterialdesign className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div className="ml-4">
                      <h4 className="text-lg font-medium leading">{item.fe}</h4>
                      <p className="mt-2 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
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
            <div className="mb-16 text-center">
              <h1 className="mt-2 text-5xl lg:text-7xl font-bold tracking-tight text-gray-900">
                How we Best then others
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
              MyLeading Campus® Mobile App Features
            </h1>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-gray-800">
                <IoPhonePortrait />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  Stay Connected Anywhere
                </h3>
                <p className="text-gray-600 mt-1">
                  Our mobile app ensures seamless synchronization of school
                  information, enabling parents and students to stay updated
                  anytime, anywhere.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-blue-500">
                <FaAppStore />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  Organize School Activities Effortlessly
                </h3>
                <p className="text-gray-600 mt-1">
                  With real-time updates, secure access, and user-friendly
                  design, the app helps parents, teachers, and students manage
                  school activities efficiently.
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
              Our Digital Design Features
            </h1>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-pink-800">
                <SiMaterialdesign />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  Digital Product Design
                </h3>
                <p className="text-gray-600 mt-1">
                  Create intuitive, modern, and responsive digital products with
                  our design services, ensuring seamless user experiences across
                  all devices.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-black">
                <FaXTwitter />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-900">
                  Logo & Branding Design
                </h3>
                <p className="text-gray-600 mt-1">
                  Craft unique logos and branding elements that reflect your
                  school's identity, enhancing recognition and trust among
                  students and parents.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
