"use client";

import React from "react";
import MLC from "../../public/MyLeading_Campus.png";

const page = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="relative min-h-screen">
                {/* Header with Image Background */}
                <div
                    className="relative text-center"
                    style={{
                        backgroundImage: `url(${MLC})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        backgroundRepeat: "no-repeat",
                        height: "300px",
                    }}
                >
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#8757F3] to-[#3CB7E5] opacity-70"></div>

                    {/* TERMS AND CONDITIONS Text */}
                    <div className="relative flex items-center justify-center h-full">
                        <h1
                            className="text-5xl font-bold text-white drop-shadow-lg"
                            style={{ fontFamily: "Helvetica, Poppins" }}
                        >
                            TERMS AND CONDITIONS
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-6xl mx-auto -mt-16 mb-12 opacity-95">
                    {/* 1. Introduction */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">1. Introduction</h2>
                    <p className="text-gray-700 mb-6">
                        Welcome to MyLeading Campus®, a product of Snowball Innovations. By
                        accessing or using our website, services, or software, you agree to
                        comply with and be bound by the following terms and conditions. If
                        you do not agree to these terms, please refrain from using our
                        services.
                    </p>

                    <hr className="mb-6" />

                    {/* 2. Definitions */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">2. Definitions</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>
                            <strong>“Company”</strong>: Refers to Snowball Innovations, the
                            owner of MyLeading Campus®.
                        </li>
                        <li>
                            <strong>“User”</strong>: Any individual or entity accessing or
                            using the website or services.
                        </li>
                        <li>
                            <strong>“Services”</strong>: Include MyLeading Campus® software,
                            website, and related support services.
                        </li>
                        <li>
                            <strong>“Agreement”</strong>: Refers to these Terms and Conditions.
                        </li>
                    </ul>

                    <hr className="mb-6" />

                    {/* 3. Eligibility */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">3. Eligibility</h2>
                    <p className="text-gray-700 mb-6">
                        Users must be at least 18 years old to use our services. By using
                        our services, you confirm that you meet this requirement.
                    </p>

                    <hr className="mb-6" />

                    {/* 4. Use of Services */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">4. Use of Services</h2>
                    <h3 className="text-xl font-medium mb-2 text-gray-800">4.1. License</h3>
                    <p className="text-gray-700 mb-3">
                        The company grants a limited, non-exclusive, non-transferable
                        license to use the software and services for the duration of the
                        subscription.
                    </p>

                    <h3 className="text-xl font-medium mb-2 text-gray-800">4.2. Restrictions</h3>
                    <ul className="list-disc list-inside text-gray-700 mb-3">
                        <li>Reverse-engineer, copy, or modify the software.</li>
                        <li>Use the services for illegal purposes.</li>
                        <li>Share login credentials with unauthorized persons.</li>
                    </ul>

                    <h3 className="text-xl font-medium mb-2 text-gray-800">4.3. Compliance</h3>
                    <p className="text-gray-700 mb-6">
                        Users must comply with all applicable laws while using the services.
                    </p>

                    <hr className="mb-6" />

                    {/* 5. User Responsibilities */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">5. User Responsibilities</h2>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Provide accurate and up-to-date information during registration.</li>
                        <li>Maintain the confidentiality of account credentials.</li>
                        <li>Notify the company immediately of any unauthorized account access.</li>
                    </ul>

                    <hr className="mb-6" />

                    {/* 6. Payments and Subscriptions */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">6. Payments and Subscriptions</h2>
                    <p className="text-gray-700 mb-4">
                        <strong>6.1. Pricing:</strong> Services are charged at Rs 250 per
                        student per year, subject to periodic updates.
                    </p>
                    <p className="text-gray-700 mb-4">
                        <strong>6.2. Payment Terms:</strong> Payments must be made upfront as
                        per the agreed subscription plan.
                    </p>
                    <p className="text-gray-700 mb-6">
                        <strong>6.3. Late Payments:</strong> The company reserves the right
                        to suspend or terminate services for non-payment.
                    </p>

                    <hr className="mb-6" />

                    {/* 7. Contact Us */}
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">14. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        For questions or concerns, contact us at:
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:support@myleadingcampus.com"
                            className="text-blue-500 underline"
                        >
                            support@myleadingcampus.com
                        </a>
                        <br />
                        <strong>Phone:</strong> +91-8981663638
                    </p>
                </div>
            </div>
        </>
    );
};

export default page;