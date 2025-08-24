"use client";
import React, { useState } from "react";
import { FaUserGraduate, FaChalkboardTeacher, FaGooglePlay, FaApple } from "react-icons/fa";
import AppStoreBtn from "../componentsForReuse/AppStoreBtn";
import PlayStoreBtn from "../componentsForReuse/PlayStoreBtn";
import Image from "next/image";
function OurProduct() {
    const [activeTab, setActiveTab] = useState("student-parent");

    const studentParentAppLinks = {
        playStore:
            "https://play.google.com/store/apps/details?id=com.myleadingcampus.students&hl=en_IN",
        appStore: "https://apps.apple.com/in/app/mlc-buddy/id6743425226",
    };

    const teacherAdminAppLinks = {
        playStore: "https://play.google.com/store/apps/details?id=com.mlcApp&hl=en_IN",
        appStore: "https://apps.apple.com/in/app/myleading-campus/id6499431776",
    };

    const renderDownloadButtons = (links) => (
        <div className="flex space-x-6 mt-6">
            <AppStoreBtn />
            <PlayStoreBtn />
        </div>
    );

    // SEO keyword-rich intro
    const seoIntro = (
        <header className="bg-white py-8 px-4 md:px-12 rounded-lg text-center">
            <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-4">
                India’s 1 School & College Management Software
            </h1>

            <p className="text-lg md:text-xl text-gray-700 mb-6 max-w-3xl mx-auto">
                <span className="font-medium">MyLeading Campus®️</span> offers an AI-powered,
                all-in-one school and college ERP system—trusted by top institutes across India.
                Simplify academic and administrative tasks, boost collaboration, and empower
                students, parents, teachers, and administrators.
            </p>

            <div className="text-green-600 text-base md:text-lg font-semibold">
                Trusted by 100+ Leading Schools & Colleges Across India
            </div>
        </header>
    );

    const renderTable = () => {
        if (activeTab === "student-parent") {
            return (
                <section aria-labelledby="student-parent-heading">
                    <div className="w-full h-auto  py-8">
                        <section className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 gap-8 items-center">
                            <div className="w-full lg:w-1/2 text-stone-700">
                                <h2
                                    id="student-parent-heading"
                                    className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
                                >
                                    Advance School & College Management Software for Students &
                                    Parents
                                </h2>
                                <p className="text-base mb-4">
                                    MyLeading Campus®️ offers an AI school & college management
                                    software app that keeps students and parents connected with
                                    real-time updates. Access attendance, homework, report cards,
                                    class schedules, and circulars — anytime, anywhere, with our
                                    top-rated ERP system for schools and colleges in India.
                                </p>
                                <ul className="list-disc ml-5 mb-4">
                                    <li>Track attendance and academic progress instantly</li>
                                    <li>Receive homework and important notifications</li>
                                    <li>View report cards and exam schedules</li>
                                    <li>
                                        Stay updated with school and college circulars and events
                                    </li>
                                    <li>
                                        Secure and easy access to all information for students and
                                        parents
                                    </li>
                                </ul>
                                <p className="text-base mb-4">
                                    Parents can stay informed about their child's academic progress,
                                    while students can manage their daily activities with ease.
                                    Experience the best and most advanced school & college
                                    management software in India, trusted by leading institutions.
                                </p>
                                {renderDownloadButtons(studentParentAppLinks)}
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/gallery/2.jpg"
                                    width={800} // updated width
                                    height={800} // updated height
                                    alt="Description of the image"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </section>
                    </div>
                </section>
            );
        } else {
            return (
                <section aria-labelledby="teacher-admin-heading">
                    <div className="w-full h-auto  py-8">
                        <section className="flex flex-col lg:flex-row max-w-6xl mx-auto p-6 gap-8 items-center">
                            <div className="w-full lg:w-1/2 text-stone-700">
                                <h2
                                    id="teacher-admin-heading"
                                    className="font-bold text-2xl md:text-3xl lg:text-4xl mb-4"
                                >
                                    Top School & College ERP App for Teachers & Admins
                                </h2>
                                <p className="text-base mb-4">
                                    Simplify academic management and communication with MyLeading
                                    Campus®️, the best school & college management system ERP in
                                    India. Teachers and Admins can track attendance, manage classes,
                                    view student progress, send announcements, and streamline daily
                                    operations—all from a single AI-powered platform trusted by
                                    leading schools & colleges.
                                </p>
                                <ul className="list-disc ml-5 mb-4">
                                    <li>
                                        Automate attendance and grading for schools and colleges
                                    </li>
                                    <li>Manage timetables and class schedules efficiently</li>
                                    <li>Send instant notifications to students and parents</li>
                                    <li>Generate detailed academic and administrative reports</li>
                                    <li>
                                        Boost efficiency with the most advanced ERP for schools &
                                        colleges in India
                                    </li>
                                </ul>
                                <p className="text-base mb-4">
                                    Our AI school & college management software is trusted by 100+
                                    institutes across India. Boost efficiency and communication with
                                    MyLeading Campus®️, the top choice for school and college ERP
                                    solutions.
                                </p>
                                {renderDownloadButtons(teacherAdminAppLinks)}
                            </div>
                            <div className="w-full lg:w-1/2">
                                <Image
                                    src="/gallery/1.jpg"
                                    width={800} // updated width
                                    height={800} // updated height
                                    alt="Description of the image"
                                    style={{ objectFit: "cover" }}
                                />
                            </div>
                        </section>
                    </div>
                </section>
            );
        }
    };

    return (
        <div className="p-6 space-y-8">
            {seoIntro}
            <div className="flex space-x-8  pb-4 justify-center">
                <button
                    className={`flex flex-col items-center px-4 py-2 font-medium focus:outline-none cursor-pointer ${
                        activeTab === "student-parent"
                            ? "text-blue-600 border-b-4 border-blue-600"
                            : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("student-parent")}
                >
                    <FaUserGraduate className="text-3xl" />
                    <span className="mt-1 text-sm">Student / Parent</span>
                </button>

                <button
                    className={`flex flex-col items-center px-4 py-2 font-medium focus:outline-none cursor-pointer ${
                        activeTab === "teacher-admin"
                            ? "text-blue-600 border-b-4 border-blue-600"
                            : "text-gray-600"
                    }`}
                    onClick={() => setActiveTab("teacher-admin")}
                >
                    <FaChalkboardTeacher className="text-3xl" />
                    <span className="mt-1 text-sm">Teacher / Admin</span>
                </button>
            </div>
            {/* Render selected table */}
            {renderTable()}
        </div>
    );
}

export default OurProduct;
