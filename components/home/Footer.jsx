"use client";

import React, { useState, useEffect } from "react";
import { GrLinkedin } from "react-icons/gr";
import { FaInstagram, FaSquareFacebook, FaArrowUp } from "react-icons/fa6";
import Link from "next/link";
import ContactModal from "../contactModal/ContactModal";
import { Button } from "antd";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [openModal, setOpenModal] = useState(false);

  const iframeUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.675966791005!2d88.41590785541993!3d22.572782000000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275adb4374e7b%3A0x595661c358a2371a!2sRDB%20Boulevard%20Building!5e0!3m2!1sen!2sin!4v1726121241567!5m2!1sen!2sin";

  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      setIsVisible(window.scrollY > 250);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <ContactModal openModal={openModal} setOpenModal={setOpenModal} />

      <footer className="bg-gradient-to-r from-[#7660FB] to-[#28A4D9] px-6 py-12 text-white relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
            {/* Company Info */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold">
                MYLEADING CAMPUS<sup>®</sup>
              </h3>

              <button
                onClick={() => setOpenModal(true)}
                className="bg-white text-blue-600 font-semibold mt-6 px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition hidden md:block"
              >
                Get Demo
              </button>
              <button
                onClick={() => setOpenModal(true)}
                className="bg-white text-blue-600 font-semibold mt-4 w-full px-6 py-2 rounded-lg shadow hover:bg-gray-200 transition md:hidden"
              >
                Request a Demo
              </button>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-sm">
                {/* <li><Link href="/">API & Developers</Link></li> */}
                {/* <li>
                  <button onClick={() => { setOpenModal(true); scrollTop(); }} className="text-left">Support</button>
                </li> */}
                <li>
                  <Link href="/blog-listing">Blog</Link>
                </li>
                 <li>
                  <Link href="/school-management-software"> School Management Software</Link>
                </li>
                 <li>
                  <Link href="/college-management-software"> College Management Software</Link>
                </li>
                 <li>
                  <Link href="/school-erp">School ERP</Link>
                </li>
                 <li>
                  <Link href="/contact">Contact Us</Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/aboutus">About Us</Link>
                </li>
                {/* <li><Link href="/">Careers</Link></li> */}
              
                 <li>
                  <Link href="/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/refund">Refund Policy</Link>
                </li>
                <li>
                  <Link href="/data-deletion">Data Deletion Policy</Link>
                </li>
              </ul>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
              <div className="flex space-x-4 md:flex-col md:space-x-0 md:space-y-3">
                <a
                  href="https://www.facebook.com/myleadingcampus.ERP/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FaSquareFacebook className="mr-2" />{" "}
                  <span className="hidden md:inline">Facebook</span>
                </a>
                <a
                  href="https://www.instagram.com/myleadingcampus/"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <FaInstagram className="mr-2" />{" "}
                  <span className="hidden md:inline">Instagram</span>
                </a>
                <a
                  href="https://www.linkedin.com/company/myleading-campus"
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center"
                >
                  <GrLinkedin className="mr-2" />{" "}
                  <span className="hidden md:inline">LinkedIn</span>
                </a>
              </div>
            </div>
          </div>

          {/* Google Maps */}
          {/* <div className="mt-10 rounded-lg overflow-hidden shadow-lg">
            <iframe
              src={iframeUrl}
              style={{ border: 0, width: "100%", height: "350px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Company Location"
            />
          </div> */}

          {/* Sub-footer */}
          <div className="mt-6 flex flex-col md:flex-row md:justify-between text-sm text-white text-opacity-80">
            <p>
              By subscribing, you agree to our{" "}
              <Link href="/privacy" className="underline">
                Privacy Policy
              </Link>{" "}
              and consent to receive updates.
            </p>
            <p className="mt-3 md:mt-0">
              © 2025 MyLeading Campus<sup>®</sup> – Managed by Snowball
              Innovations
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {isVisible && (
        <Button
          icon={<FaArrowUp />}
          className="fixed bottom-10 right-10 z-50 bg-white rounded-full shadow-lg p-3 hover:scale-105 transition-transform duration-300"
          onClick={scrollTop}
        />
      )}

      {/* Support Button */}
     
    </>
  );
};

export default Footer;
