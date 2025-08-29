"use client";

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "../contactModal/ContactForm.jsx";

const ContectSec3 = ({ lineColor, dotColor, lineWidth }) => {
  const [loading, setLoading] = useState(false);
  const form = useRef();
  const iframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.675966791005!2d88.41590785541993!3d22.572782000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275adb4374e7b%3A0x595661c358a2371a!2sRDB%20Boulevard%20Building!5e0!3m2!1sen!2sin!4v1726121241567!5m2!1sen!2sin";

  const handleSubmit = (e) => {
    setLoading(true);
    try {
      e.preventDefault();
      // alert('Form Submitted: ' + JSON.stringify(formData));
      emailjs
        .sendForm("service_3whqxas", "template_lkpj0bk", form.current, {
          publicKey: "F8x91dCE0cy34QMg2",
        })
        .then(
          () => {
            alert(
              "Thank you for your message!, We will get back to you shortly."
            );
            console.log("SUCCESS!");
          },
          (error) => {
            console.log("FAILED...", error);
          }
        );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="secbanner my-6 ">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Contact Form */}
          <div className="col-span-1 order-1 md:order-1">
            <h2 className="md:ml-5 ml-0 font-[Helvetica] font-bold text-[20px] sm:text-[36px] leading-[21px] md:leading-[46px] text-left w-[100%] bg-gradient-to-r from-[#3b566e] to-[#00ACCE] bg-clip-text text-transparent">
              Get in touch
            </h2>
            <ContactForm />
          </div>

          {/* Map */}
          <div className="col-span-1 order-2 md:order-2">
            <div>
              <iframe
                src={iframeUrl}
                style={{ border: 0, width: "100%", height: "450px" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>

        <style jsx>{`
          .secbanner h2 {
            position: relative;
          }
          .secbanner h2::before {
            position: absolute;
            content: "";
            top: 60px;
            left: 0;
            right: inherit !important;
            margin: auto;
            width: ${lineWidth || "160px"};
            height: 6px;
            background-color: ${lineColor || "#d8f2f7"};
            border-radius: 8px;
          }
          .secbanner h2::after {
            position: absolute;
            content: "";
            top: 57px;
            left: 0;
            right: inherit !important;
            margin: auto;
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background: ${dotColor ||
            "linear-gradient(to right, #16B2D0, #542DFF, #FF335E)"};
            animation: animate2 8s linear infinite;
          }
          @keyframes animate2 {
            0% {
              left: 0;
            }
            100% {
              left: ${lineWidth ? `calc(${lineWidth} - 10px)` : "26%"};
            }
          }

          .glass-form {
            background: rgba(255, 255, 255, 0.2);
            border-radius: 15px;
            backdrop-filter: blur(10px);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
            border: 1px solid rgba(255, 255, 255, 0.3);
          }

          .glass-input {
            background: rgba(255, 255, 255, 0.2);
            border: none;
            border-bottom: 1px solid #0000ff38;
            backdrop-filter: blur(10px);
            padding: 10px;
            border-radius: 0;
            color: #333;
          }

          .glass-input:focus {
            outline: none;
            border-color: rgba(99, 62, 255, 0.5);
            box-shadow: 0 0 8px rgba(99, 62, 255, 0.3);
          }

          .glass-button {
            background: linear-gradient(to right, #633eff, #00acce);
            border: none;
            cursor: pointer;
            transition: background 0.3s ease;
          }

          .glass-button:hover {
            background: linear-gradient(to right, #542dff, #16b2d0);
          }

          @media (max-width: 991px) {
            .secbanner h2::before {
              top: 42px;
            }
            .secbanner h2::after {
              top: 40px;
            }
          }
        `}</style>
      </div>
    </section>
  );
};

export default ContectSec3;
