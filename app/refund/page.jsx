import React from "react";
import MLC from "../../public/MyLeading_Campus.png";

const page = () => {
    return (
        <>
            {/* Page Wrapper */}
            <div className="relative min-h-screen ">

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

                    {/* REFUND POLICY Text */}
                    <div className="relative flex items-center justify-center h-full">
                        <h1
                            className="text-5xl font-bold text-white drop-shadow-lg"
                            style={{ fontFamily: "Helvetica, Poppins" }}
                        >
                            REFUND POLICY
                        </h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="relative z-10 bg-white shadow-lg rounded-lg p-6 md:p-12 max-w-6xl mx-auto -mt-16 mb-12 opacity-95">
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">1. Overview</h2>
                    <p className="text-gray-700 mb-6">
                        We strive to ensure complete satisfaction with our services. However, refunds are subject to the terms outlined below.
                    </p>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">2. Eligibility for Refunds</h2>
                    <p className="text-gray-700 mb-4">
                        Refunds are applicable only for annual subscriptions and must be requested within 15 days of the payment date.
                    </p>
                    <p className="text-gray-700 mb-4">Refunds are not applicable for:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Monthly subscription plans.</li>
                        <li>Partially used or expired subscriptions.</li>
                        <li>Customizations, training fees, or additional services.</li>
                    </ul>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">3. Refund Process</h2>
                    <p className="text-gray-700 mb-4">
                        To request a refund, email us at{" "}
                        <strong className="text-gray-800">support@myleadingcampus.com</strong> with the following details:
                    </p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>Invoice or payment receipt.</li>
                        <li>Reason for the refund request.</li>
                    </ul>
                    <p className="text-gray-700 mb-6">
                        Refunds will be processed within 7-10 business days after approval.
                    </p>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">4. Partial Refunds</h2>
                    <p className="text-gray-700 mb-6">
                        If services are terminated mid-term due to non-compliance with the Terms and Conditions, a partial refund may be issued at the company's discretion.
                    </p>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">5. Refund Denial</h2>
                    <p className="text-gray-700 mb-4">The company reserves the right to deny refund requests if:</p>
                    <ul className="list-disc list-inside text-gray-700 mb-6">
                        <li>The user fails to provide valid reasons or proof of dissatisfaction.</li>
                        <li>There is evidence of misuse or violation of the Terms and Conditions.</li>
                    </ul>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">6. Mode of Refund</h2>
                    <p className="text-gray-700 mb-6">
                        Refunds will be issued via the original payment method unless otherwise agreed.
                    </p>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">7. Changes to the Refund Policy</h2>
                    <p className="text-gray-700 mb-6">
                        The company reserves the right to modify this policy at any time. Changes will be communicated via email or updates on our website.
                    </p>

                    <hr className="mb-6" />

                    <h2 className="text-3xl font-semibold mb-4 text-gray-800">8. Contact Us</h2>
                    <p className="text-gray-700 mb-4">
                        For refund-related queries, contact:
                    </p>
                    <p className="text-gray-700">
                        <strong>Email:</strong>{" "}
                        <a href="mailto:support@myleadingcampus.com" className="text-blue-500 underline">
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