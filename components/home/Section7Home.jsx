"use client"

import { useEffect } from "react"
import { FaTimes, FaCheck } from "react-icons/fa"
import EmLogo from "../../public/Assts/Emlogo.png"
import vs from "../../public/Assts/VS.png"
import AOS from "aos"
import "aos/dist/aos.css"
import Image from "next/image"

const withoutCampusFeatures = [
  { title: "Manual", description: "Static PDFs, manual updates" },
  { title: "Generic", description: "Paper cards, manual inventory" },
  { title: "Old", description: "Email attachments, lost papers" },
  { title: "Lost Information", description: "Phone calls, handwritten notes" },
  { title: "Delayed", description: "Manual calculations, paperwork" },
  { title: "Inefficient", description: "Time-consuming paperwork, inefficient workflows" },
]

const withCampusFeatures = [
  { title: "Automated", description: "Drag-and-drop scheduling, visual overviews, mobile access" },
  { title: "Smart", description: "Barcode scanning, automated reminders, digital loans and returns" },
  { title: "Fast", description: "Secure online platform, automated feedback tools, syllabus version control" },
  { title: "Instant", description: "Instant alerts, two-way messaging, progress reports" },
  { title: "Automated", description: "Automated fee tracking, online payments, integrated reports" },
  { title: "Streamlined", description: "Automated workflows, digital approvals, data-driven insights" },
]

const Section7Home = () => {
  useEffect(() => {
    const isPhone = window.innerWidth <= 768
    AOS.init({
      once: false,
      disable: isPhone,
      duration: 700,
      easing: "ease-out-cubic",
    })
    AOS.refresh()
  }, [])

  return (
    <section className="py-9 bg-gradient-to-l from-[#f2eeff4b] from-10% to-[#634fe63f] to-90% relative overflow-hidden">
      <div className="container flex flex-col items-center px-4 sm:px-6">
        {/* VS Image - Responsive positioning */}
        <div className="relative w-full flex justify-center">
          <Image
            src={vs || "/placeholder.svg"}
            alt="VS"
            className="w-[12%] md:w-[3%] h-auto absolute top-[1305px] md:top-[450px] right-[45%] md:right-[31%] z-10"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          />
        </div>

        <h2
          className="font-[Helvetica] font-bold text-[24px] sm:text-[40px] mb-2 capitalize md:text-center text-left text-[#111827]"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
        >
          Supercharge Your School with MyLeading Campus<sup className="text-[24px] sm:text-[30px] ">®</sup>
        </h2>

        <h3
          className="text-[18px] sm:text-3xl font-medium md:text-center text-left text-[#111827]"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
        >
          Empower Teachers, Support Students — All in One Platform
        </h3>

        <h3
          className="text-[16px] font-normal w-full sm:w-[80%] md:w-[70%] md:text-center text-left mt-4 sm:mt-7 text-[#111827]"
          data-aos="zoom-in-up"
          data-aos-offset="200"
          data-aos-easing="ease-in-sine"
          data-aos-duration="400"
        >
          Handle communication, attendance, homework, fees, and exams from a single dashboard. Built for Indian schools
          that value simplicity and efficiency
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 mt-[30px] md:mt-[130px] gap-5 md:gap-16 relative w-full">
          {/* Features Column */}
          <div
            className="col-span-1 mt-[85px] md:mt-[3px]"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <ul>
              {[
                "Timetable Management",
                "Library Management",
                "Upload Assignments & Syllabus",
                "Easy Parent Communication",
                "Fees Management",
                "Streamlined Administrative Tasks",
              ].map((feature, index) => (
                <li
                  key={index}
                  className="text-[14px] sm:text-[15px] font-semibold text-[#141414] border border-x-0 border-y-0 border-t-[1px] w-full border-[#D9D9D9] min-h-[65px] py-3 flex items-center"
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Without MyLeading Campus Column */}
          <div
            className="col-span-1 flex flex-col"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <div className="card-box border border-x border-y border-[#eaeaea50] bg-gradient-to-r to-[#f2eeff2c] from-[#F1FCFF] rounded-[20px] py-4 px-3 sm:py-3 sm:px-5 mt-[0] md:-mt-[76px] flex-1">
              <h4 className="text-[15px] font-semibold text-[#141414]">
                Without MyLeading Campus<sup className="text-[18px]">®</sup>
              </h4>
              <h6 className="text-[14px] font-normal text-[#393939] pb-2 sm:pb-4">Manual workflows</h6>
              <ul>
                {withoutCampusFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex text-[14px] sm:text-[16px] font-semibold text-[#141414] py-3 border border-x-0 border-y-0 border-t-[1px] w-full border-[#D9D9D9] min-h-[65px]"
                  >
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <FaTimes className="w-[18px] h-[18px] rounded-full bg-[#D90000] p-1 text-white align-middle" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[18px] sm:text-[18px]">{feature.title}</h4>
                      {/* <h6 className="text-[12px] sm:text-[14px] font-normal text-[#393939] line-clamp-2">
                        {feature.description}
                      </h6> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* With MyLeading Campus Column */}
          <div
            className="col-span-1 flex flex-col mt-[60px] md:mt-[3px]"
            data-aos="zoom-in-up"
            data-aos-offset="200"
            data-aos-easing="ease-in-sine"
            data-aos-duration="400"
          >
            <div className="card-box bg-[#fff] shadow-lg rounded-[20px] py-4 px-3 sm:py-3 sm:px-5 mt-[0px] md:mt-[-76px] flex-1">
              <div className="flex items-center">
                <div className="flex-shrink-0 mr-2">
                  <Image
                    src={EmLogo || "/placeholder.svg"}
                    alt="Logo"
                    className="w-[30px] md:w-[40px] h-[30px] md:h-[40px]"
                  />
                </div>
                <div>
                  <h4 className="text-[15px] md:text-[18px] font-semibold text-[#141414] bg-gradient-to-r to-[#542DFF] from-[#21A9D5] text-transparent bg-clip-text">
                    With MyLeading Campus<sup className="text-[15px] text-blue-700 md:text-[18px]">®</sup>
                  </h4>
                  <h6 className="text-[14px] font-normal text-[#393939] pb-2 sm:pb-4">
                    Efficient and thriving school community
                  </h6>
                </div>
              </div>
              <ul>
                {withCampusFeatures.map((feature, index) => (
                  <li
                    key={index}
                    className="flex text-[14px] sm:text-[16px] font-semibold text-[#141414] py-3 border border-x-0 border-y-0 border-t-[1px] w-full border-[#D9D9D9] min-h-[65px]"
                  >
                    <div className="flex-shrink-0 mr-2 mt-1">
                      <FaCheck className="w-[18px] h-[18px] rounded-full bg-gradient-to-r to-[#542DFF] from-[#21A9D5] p-1 text-white align-middle" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="text-[18px] sm:text-[18px] bg-gradient-to-r to-[#542DFF] from-[#21A9D5] text-transparent bg-clip-text font-bold">
                        {feature.title}
                      </h4>
                      {/* <h6 className="text-[12px] sm:text-[14px] font-normal text-[#393939] line-clamp-2">
                        {feature.description}
                      </h6> */}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Section7Home