"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import bannerimg1 from "../../public/Assts/herobanner.jpeg"
import bannerimg2 from "../../public/Assts/Blog.png"
import bannerimg3 from "../../public/Assts/Blog2.png"
import bannerimg4 from "../../public/Assts/Blog3.png"
import bannerCalender from "../../public/Assts/herocalender.png"
import ButtonReuse from "../componentsForReuse/ButtonReuse"
import presentation from "../../public/Assts/heroicon2.png"
import pieChar from "../../public/Assts/heroicon3.png"
import analytics from "../../public/Assts/heroicon4.png"
import bannerCircleM from "../../public/Assts/bannerCirclemiddlwe.png"
import bookHomeWork from "../../public/Assts/bannerhomework.png"
import SchollBus from "../../public/Assts/bannercricleBus.png"
import education from "../../public/Assts/bannerCircleonline.png"
import chat from "../../public/Assts/banneCirleChat.png"
import Typewriter from "typewriter-effect"
import AppStoreBtn from "../componentsForReuse/AppStoreBtn"
import PlayStoreBtn from "../componentsForReuse/PlayStoreBtn"
import ContactModal from "../contactModal/ContactModal"

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [openModal, setOpenModal] = useState(false)

  const typewriterStrings = [
    { text: "School Management", image: bannerimg1 },
    { text: "Student Information Systems", image: bannerimg2 },
    { text: "Parent-Teacher Communication", image: bannerimg3 },
    { text: "Classroom Scheduling", image: bannerimg4 },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % typewriterStrings.length)
    }, 4000)

    return () => clearInterval(interval)
  }, [typewriterStrings.length])

  return (
    <>
      <style jsx global>{`
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        
        @keyframes spin2-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(-360deg);
          }
        }
        
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        
        .animate-spin2-slow {
          animation: spin2-slow 15s linear infinite;
        }
        
        .orbit-container {
          position: relative;
          width: 180px;
          height: 180px;
          margin: 0 auto;
        }
        
        .center-image {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 10;
        }
        
        .orbit {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border-radius: 50%;
          border: 2px solid rgba(3, 102, 214, 0.3);
        }
        
        .orbit-item {
          position: absolute;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: white;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          transform-origin: center;
        }
        
        /* Position each orbit item at a specific angle */
        .orbit-item:nth-child(1) {
          top: -24px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .orbit-item:nth-child(2) {
          top: 50%;
          right: -24px;
          transform: translateY(-50%);
        }
        
        .orbit-item:nth-child(3) {
          bottom: -24px;
          left: 50%;
          transform: translateX(-50%);
        }
        
        .orbit-item:nth-child(4) {
          top: 50%;
          left: -24px;
          transform: translateY(-50%);
        }
      `}</style>

      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />
      <section className="banner mt-[2.75rem] md:mt-3 sm:mt-64 md:relative">
        <div className="bg-cover bg-center w-full h-auto flex items-start justify-start">
          <div className="w-full h-full flex items-center banner-bg">
            <div className="max-w-full h-auto md:h-auto sm:max-w-7xl mx-auto p-8 text-start">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-start">
                {/* Column 1 */}
                <div className="flex flex-col justify-start items-start md:items-start text-white space-y-6 banner-info order-2 sm:order-1 md:order-1">
                  <h6 className="text-[14px] sm:text-[30px] mt-[40px] sm:mt-[100px] text-gray-100">
                    Government of India Recognised, Award winning School management software
                  </h6>
                  <h2 className="text-[18px]  sm:text-[34px] md:text-[37px] lg:text-[37px] font-bold">
                    Unified Platform for Streamlined{" "}
                    <Typewriter
                      options={{
                        autoStart: true,
                        loop: true,
                        delay: 100,
                        strings: typewriterStrings.map((item) => item.text),
                      }}
                      onInit={(typewriter) => {
                        typewriterStrings.forEach((item, index) => {
                          typewriter
                            .typeString(item.text)
                            .pauseFor(3000)
                            .deleteAll()
                            .callFunction(() => setCurrentIndex(index))
                        })
                        typewriter.start()
                      }}
                    />
                  </h2>
                  <p className="text-sm sm:text-xl md:text-xl text-start md:text-start">
                    Manage your school with ease using India's best school ERP – Made for Indian schools. Admission,
                    fees, attendance – all in one place. Try it free!
                  </p>
                  <div className="flex flex-col sm:w-full sm:flex-row lg:w-full md:flex-row items-center gap-4 w-full">
                    <div className=" flex gap-2">
                      <AppStoreBtn />
                      <PlayStoreBtn />
                    </div>
                    <div className="w-full block sm:w-full md:w-full mt-2 lg:w-full">
                      <ButtonReuse
                        onClick={() => {
                          window.location.href = "https://shorturl.at/Sq3QC"
                        }}
                        title="Get Started"
                        className="px-[15px] hidden sm:block md:px-[35px] py-[10px] md:py-[10px] text-[12px] md:text-[16px]"
                      />
                      <ButtonReuse
                        onClick={() => {
                          setOpenModal(true)
                        }}
                        title="Get Started For Free"
                        className="px-auto block sm:hidden md:px-[35px] py-[10px] md:py-[10px] text-[12px] md:text-[16px] w-full sm:w-auto"
                      />
                    </div>
                  </div>
                </div>

                {/* Column 2 */}
                <div className=" grid-cols-2 hidden sm:grid-cols-2 sm:grid gap-8 mt-20 md:mt-20 order-2 sm:order-1 md:order-1">
                  <div className="flex flex-col items-start flex-auto">
                    <Image
                      src={typewriterStrings[currentIndex].image || "/placeholder.svg"}
                      alt="Banner"
                      className="rounded-2xl w-64 h-72 mb-4 shadow-2xl object-cover"
                    />
                    <div className="flex items-center w-11/12 bg-white rounded-2xl shadow-sm p-2 md:p-4">
                      <Image src={bannerCalender || "/placeholder.svg"} alt="Calendar" className="w-12 h-auto" />
                      <p className="ml-4 text-gray-700 text-start font-medium">
                        <span className="font-bold">Track Attendance</span> <br /> Get real-time Insights
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col space-y-8 flex-auto">
                    <div className="grid grid-cols-2 gap-4 animate-updown">
                      <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-20 h-20">
                        <Image src={presentation || "/placeholder.svg"} alt="Presentation" className="w-12 h-auto" />
                      </div>
                      <div className="flex justify-center items-center bg-white shadow-sm rounded-full w-20 h-20 animate-updown">
                        <Image
                          src={pieChar || "/placeholder.svg"}
                          alt="Pie Chart"
                          className="w-12 h-auto translateYAnimation"
                        />
                      </div>
                    </div>
                    <div className="flex items-center bg-white rounded-2xl shadow-sm p-4 w-11/12">
                      <Image src={analytics || "/placeholder.svg"} alt="Analytics" className="w-10 h-auto" />
                      <p className="ml-4 text-gray-700 text-start font-semibold">
                        Grow Your School <br /> Blossom Results
                      </p>
                    </div>

                    {/* Circle Box - Improved with proper orbit animation */}
                    <div className="flex justify-center items-center p-4 w-full">
                      <div className="orbit-container">
                        {/* Center Image */}
                        <div className="center-image">
                          <Image
                            src={bannerCircleM || "/placeholder.svg"}
                            alt="Main Circle"
                            width={64}
                            height={64}
                            className="rounded-full object-cover shadow-lg z-10"
                          />
                        </div>

                        {/* Orbit Circle */}
                        <div className="orbit"></div>

                        {/* Rotating Container */}
                        <div
                          className="animate-spin-slow"
                          style={{ position: "absolute", width: "100%", height: "100%" }}
                        >
                          {/* Orbit Items */}
                          <div className="orbit-item">
                            <Image
                              src={bookHomeWork || "/placeholder.svg"}
                              alt="Book Homework"
                              width={32}
                              height={32}
                              className="animate-spin2-slow"
                            />
                          </div>

                          <div className="orbit-item">
                            <Image
                              src={SchollBus || "/placeholder.svg"}
                              alt="School Bus"
                              width={32}
                              height={32}
                              className="animate-spin2-slow"
                            />
                          </div>

                          <div className="orbit-item">
                            <Image
                              src={education || "/placeholder.svg"}
                              alt="Education"
                              width={32}
                              height={32}
                              className="animate-spin2-slow"
                            />
                          </div>

                          <div className="orbit-item">
                            <Image
                              src={chat || "/placeholder.svg"}
                              alt="Chat"
                              width={32}
                              height={32}
                              className="animate-spin2-slow"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Column 2 end */}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile button */}
        <div className="fixed bottom-0 left-0 right-0 w-full shadow-lg z-50 sm:hidden md:hidden">
          <ButtonReuse
            onClick={() => {
              setOpenModal(true)
            }}
            title="Get Started For Free"
            className="w-full p-3 text-sm md:text-base rounded-none"
          />
        </div>
      </section>
    </>
  )
}

export default Banner