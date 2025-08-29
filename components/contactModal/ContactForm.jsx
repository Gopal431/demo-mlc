"use client";

import React, { useState } from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaLinkedinIn,
  FaPaperPlane,
} from "react-icons/fa";
// import emailjs from '@emailjs/browser';
// import ButtonReuse from './ButtonReuse';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import toast from 'react-hot-toast';

const ContactForm = ({ formResetTrigger, lineWidth, lineColor, dotColor }) => {
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
    <>
      {/* {loading && <LoadingOverlay />} */}
      <div className="p-6">
        <form onSubmit={handleSubmit} className="space-y-2">
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
            <label htmlFor="description" className="block mb-1 font-medium">
              Your Message
            </label>
            <textarea
              id="description"
              value={formData.description}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 rounded-md min-h-[100px] resize-y focus:outline-none focus:ring-2 focus:ring-blue-300 transition box-border"
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
              status.startsWith("✅") ? "text-green-600" : "text-red-600"
            }`}
          >
            {status}
          </p>
        )}
      </div>
    </>
  );
};

export default ContactForm;
