"use client";

import React, { useState } from "react";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaPaperPlane } from "react-icons/fa";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    last_name: "",
    email: "",
    phone: "",
    subject: "",
    description: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    setStatus(result.message);
    if (response.ok) {
      setFormData({
        last_name: "",
        email: "",
        phone: "",
        subject: "",
        description: "",
      });
    }
  } catch (error) {
    console.error(error);
    setStatus("⚠️ Error submitting form.");
  }
};


  return (
    <section className="contact-section">
      <div className="container mx-auto px-4 py-6">
        <div className="grid md:grid-cols-2 gap-6 bg-white rounded-lg shadow-md overflow-hidden">
          
          {/* Left Contact Info */}
          <div className="p-6 bg-gray-800 text-white">
            <h2 className="text-xl text-blue-400 mb-6 relative pb-2">
              Contact Information
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h2>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h3 className="text-md mb-1">Our Location</h3>
                <p className="text-gray-300 leading-relaxed">Lucknow</p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                <FaPhoneAlt />
              </div>
              <div>
                <h3 className="text-md mb-1">Phone Numbers</h3>
                <p className="text-gray-300 leading-relaxed">
                  <a href="tel:+978589658" className="hover:text-blue-400">
                    +91 748598658
                  </a>
                  <br />
                  <a href="tel:+748596255" className="hover:text-blue-400">
                    +91 789456123
                  </a>
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-500 flex items-center justify-center rounded-full text-lg">
                <FaEnvelope />
              </div>
              <div>
                <h3 className="text-md mb-1">Email Address</h3>
                <p className="text-gray-300 leading-relaxed">
                  <a
                    href="mailto:kuldeepprajapati2111@gmail.com"
                    className="hover:text-blue-400"
                  >
                    kuldeepprajapati2111@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-500"
              >
                <FaFacebookF />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-pink-500"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-400"
              >
                <FaTwitter />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-gray-700 flex items-center justify-center rounded-full text-white transition duration-300 hover:bg-blue-700"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="p-6">
            <h2 className="text-xl text-blue-500 mb-6 relative pb-2">
              Send Us a Message
              <span className="absolute bottom-0 left-0 w-12 h-0.5 bg-blue-500"></span>
            </h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="last_name" className="block mb-1 font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  id="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block mb-1 font-medium">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="phone" className="block mb-1 font-medium">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block mb-1 font-medium">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                />
              </div>

              <div>
                <label htmlFor="description" className="block mb-1 font-medium">
                  Your Message
                </label>
                <textarea
                  id="description"
                  value={formData.description}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded-md min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                className="flex items-center justify-center gap-2 bg-gradient-to-br from-blue-500 to-blue-400 text-white font-semibold py-2 px-5 rounded-full hover:scale-105 hover:shadow-md transition duration-300"
              >
                <FaPaperPlane /> Send Message
              </button>
            </form>

            {status && (
              <p
                className={`mt-4 text-center font-medium ${
                  status.startsWith("✅")
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
