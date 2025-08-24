
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
  console.log("Parsed Feature:", parsedFeature);
  const features = [
    "Lesson Planning",
    "Digital Learning",
    "Assessment & Grading",
    "Library Management",
    "Homework & Assignment",
  ];
  const lessonFeatures = [
    "Teacher’s Calendar with Lesson Plan Schedule and Status",
    "Scheduling of Week-Month-Year Lesson Plan Deliveries",
    "Homework and Classwork Update",
    "Reports on Lesson Plan Coverage",
    "Customized Lesson Plan with User-defined Database Fields",
    "Daily Teacher’s Diary/Logbook",
    "Observation for Student’s Homework",
  ];
  return (
    <div className="tw-w-full tw-h-auto tw-bg-white">
      <section className="relative bg-blue-50 py-16 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start md:items-center">
          {/* Left content */}
          <div className="md:w-2/3 space-y-6">
            <h2 className="text-3xl font-semibold text-blue-900">{parsedFeature?.title}</h2>
            <p className="text-gray-700 text-base leading-relaxed font-['Segoe_UI'] text-[16px]">
           {parsedFeature?.desc}
            </p>

            {/* Feature buttons */}
            <div className="flex flex-wrap gap-4 mt-4">
              {features.map((feature, idx) => (
                <button
                  key={idx}
                  className="px-5 py-2 border border-blue-500 text-blue-500 rounded-full hover:bg-blue-100 transition"
                >
                  {feature}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Optional background icon/pattern */}
        <div className="absolute top-[20%] right-0 opacity-10 w-[300px] h-[300px]">
          {/* Replace this with SVG or image pattern */}
          <img
            src="/Assts/logo.png"
            alt="Academics Illustration"
            className="w-[300px] h-[300px] rounded-2xl"
          ></img>
        </div>
      </section>
        <section className="max-w-7xl bg-gray-50 mt-10 h-auto mx-auto grid grid-cols- md:grid-cols-1 gap-5 items-center   p-8 shadow-md">
        {/* Top Section: Image + Text */}
        <div className="flex flex-col md:flex-row gap-6 ">
          <div className="md:w-auto">
            <Image
              src={"/Assts/logo/Lesson-Planning.jpg"}
              alt="Students collaborating"
              width={400}
              height={700}
              priority
              className="tw-h-full tw-w-full tw-object-cover tw-object-bottom rounded-2xl"
            />
          </div>
          <div className="md:w-2/3 md:pl-6 flex flex-col gap-4">
            <h2 className="text-2xl font-bold text-blue-900">
              Lesson Planning
            </h2>
            <p className="text-gray-700 font-['Segoe_UI'] text-[16px]">
              Effective teaching strategies and well-structured lesson planning
              play a pivotal role in a student’s educational journey throughout
              the academic session. Schools encounter multiple challenges in
              creating and organizing the most suitable lesson plans which
              contribute to student’s success. By introducing modern age Lesson
              planning, Edunext Technologies turned this tangled task into a
              simplified yet the most effective process for schools.
            </p>
            <p className="text-gray-700 font-['Segoe_UI'] text-[16px]">
              This modern solution not only provides an overview of teachers’
              day-to-day tasks with the teacher’s calendar but allows them to
              create multiple lesson plans with ease. Whereas, the dashboard
              makes analysis a handy job for concerned authorities with a
              holistic overview of lesson planning from multiple aspects.
              Hands-on customization is the key highlight of this module which
              comes with user-defined database fields. This makes the
              modification process easy for the school and teachers.
            </p>
            <p className="text-gray-700 font-['Segoe_UI'] text-[16px]">
              Talking about customization, schools can also import additional
              plans in this module at any given point in time. Moreover,
              Teacher’s Diary is also available to maintain digital records and
              tasks. At last, schools can generate multiple reports to evaluate
              the performance of classes and teachers.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-3">
          <h3 className="text-xl font-semibold text-blue-900 mb-4 flex items-center">
            <span className="inline-block w-4 h-4 bg-blue-500 rounded-full mr-2"></span>
            Features of Lesson Planning
          </h3>
          <ul className="space-y-2 text-gray-700">
            {lessonFeatures.map((feature, index) => (
              <li key={index} className="flex items-center">
                <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full font-['Segoe_UI'] mr-2"></span>
                {feature}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className="py-16 px-6 bg-white">
        <div className="max-w-7xl bg-gray-50  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl  p-8 shadow-md">
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-gray-800">
                <IoPhonePortrait />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Mobile App
                </h3>
                <p className="text-gray-600 mt-1">
                  Our cutting-edge cloud service provides seamless
                  synchronization across all your devices, ensuring your files,
                  photos, and documents.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-3xl text-blue-500">
                <FaAppStore />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Organize your School
                </h3>
                <p className="text-gray-600 mt-1">
                  With robust security features, real-time backup, and
                  user-friendly interfaces, CloudSync gives you the peace of
                  mind that comes with reliable.
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
        <div className="max-w-7xl mt-16 bg-gray-50  h-auto mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center rounded-2xl  p-8 shadow-md">
          <div className="flex justify-center">
            <Image
              src="/Assts/logo/laptop.svg"
              alt="Phone Mockup"
              width={700}
              height={1200}
              priority
              className="tw-h-full tw-w-full tw-object-cover tw-object-bottom"
            />
          </div>
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="text-3xl text-pink-800">
                <SiMaterialdesign />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Digital Product Design
                </h3>
                <p className="text-gray-600 mt-1">
                  Our cutting-edge cloud service provides seamless
                  synchronization across all your devices, ensuring your files,
                  photos, and documents.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="text-3xl text-black">
                <FaXTwitter />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-gray-800">
                  Logo Design
                </h3>
                <p className="text-gray-600 mt-1">
                  With robust security features, real-time backup, and
                  user-friendly interfaces, CloudSync gives you the peace of
                  mind that comes with reliable.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
