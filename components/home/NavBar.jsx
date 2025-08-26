"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Dropdown } from "antd";
import { DownOutlined, MenuOutlined, CloseOutlined } from "@ant-design/icons";
import { FaPhoneAlt } from "react-icons/fa";
import mlc from "../../public/mlc.jpg";

const NavBar = () => {
  const [navbarBg, setNavbarBg] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path) =>
    pathname === path
      ? "text-[#743DFF] underline underline-offset-4"
      : "text-black";

  const changeBackground = () => {
    setNavbarBg(window.scrollY >= 80);
  };

  useEffect(() => {
    window.addEventListener("scroll", changeBackground);
    return () => window.removeEventListener("scroll", changeBackground);
  }, []);

  const menuItems = [
    {
      key: "1",
      label: (
        <Link href="/clients" className={isActive("/clients") + " block"}>
          Clients
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/testimonials"
          className={isActive("/testimonials") + " block"}
        >
          Testimonials
        </Link>
      ),
    },
  ];

  const servicesItems = [
    {
      key: "1",
      label: (
        <Link
          href="/school-management-software"
          className={isActive("/school-management-software") + " block"}
        >
          School Management Software
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/college-management-software"
          className={isActive("/college-management-software") + " block"}
        >
          College Management Software
        </Link>
      ),
    },
    {
      key: "3",
      label: (
        <Link href="/school-erp" className={isActive("/school-erp") + " block"}>
          School ERP
        </Link>
      ),
    },
  ];
  const aboutUs = [
    {
      key: "1",
      label: (
        <Link href="/aboutus" className={isActive("/clients") + " block"}>
          About Us
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link
          href="/blog-listing"
          className={isActive("/testimonials") + " block"}
        >
          Blogs
        </Link>
      ),
    },
  ];

  return (
    <header
      className={`sticky w-full top-0 left-0 z-50 transition-all duration-300 border-b border-gray-200 bg-white ${
        navbarBg ? "shadow-md" : ""
      } p-3`}
    >
      <nav>
        <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <Image
              src={mlc}
              alt="Logo"
              width={40}
              height={40}
              className="rounded-md"
            />
            <div className="hidden md:flex flex-col leading-tight">
              <span className="text-sm font-bold text-[#743DFF] tracking-tight">
                MYLEADING
              </span>
              <span className="text-sm font-bold text-[#743DFF] tracking-wider">
                CAMPUS <sup className="text-xxs font-bold">®</sup>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <ul className="hidden xl:flex space-x-10 text-[16px] font-medium">
            <li>
              <Link href="/" className={isActive("/")}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/features" className={isActive("/features")}>
                Features
              </Link>
            </li>
            <li>
              <Dropdown menu={{ items: menuItems }} trigger={["hover"]}>
                <span className="cursor-pointer flex items-center space-x-1 hover:text-[#743DFF]">
                  <span
                    className={
                      pathname === "/clients" || pathname === "/testimonials"
                        ? "text-[#743DFF] underline underline-offset-4"
                        : "text-black"
                    }
                  >
                    Testimonials
                  </span>
                  <DownOutlined className="text-xs" />
                </span>
              </Dropdown>
            </li>
            <li>
              <Dropdown menu={{ items: servicesItems }} trigger={["hover"]}>
                <span className="cursor-pointer flex items-center space-x-1 hover:text-[#743DFF]">
                  <span
                    className={
                      pathname === "/clients" || pathname === "/testimonials"
                        ? "text-[#743DFF] underline underline-offset-4"
                        : "text-black"
                    }
                  >
                    Service
                  </span>
                  <DownOutlined className="text-xs" />
                </span>
              </Dropdown>
            </li>
            <li>
              <Link href="/pricing" className={isActive("/pricing")}>
                Pricing
              </Link>
            </li>
            <li>
              <Dropdown menu={{ items: aboutUs }} trigger={["hover"]}>
                <span className="cursor-pointer flex items-center space-x-1 hover:text-[#743DFF]">
                  <span
                    className={
                      pathname === "/clients" || pathname === "/testimonials"
                        ? "text-[#743DFF] underline underline-offset-4"
                        : "text-black"
                    }
                  >
                    About Us
                  </span>
                  <DownOutlined className="text-xs" />
                </span>
              </Dropdown>
            </li>
          </ul>

          {/* CTA Button (Desktop only) */}
          <div className="hidden xl:block text-white">
            <a
              target="_blank"
              href="https://www.school.myleadingcampus.com/?view=signup"
              className="px-6 py-2 bg-gradient-to-r from-[#622BFF] to-[#16B2D0] !text-white font-semibold text-sm rounded-full shadow-sm hover:opacity-90 transition"
            >
              GET STARTED FOR FREE
            </a>
          </div>

          {/* Mobile Call Button */}
          <div className="xl:hidden flex items-center space-x-4 ">
            <div className="xl:hidden text-[12px] py-[3px] px-[8px]">
              <a
                href="tel:9874344994"
                className="flex items-center space-x-2 border-2 text-[1rem] border-gradient bg-transparent text-purple-600 py-1 px-3 rounded-lg"
              >
                <FaPhoneAlt className="w-4 h-4" />
                <span>Call Now</span>
              </a>
            </div>

            {/* Hamburger Icon */}
            <button
              className="block xl:hidden text-black text-2xl"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            >
              {isMobileMenuOpen ? <CloseOutlined /> : <MenuOutlined />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="xl:hidden bg-white px-6 pt-4 pb-6 space-y-4 text-sm font-medium shadow-md">
            <Link href="/" className={isActive("/") + " block"} onClick={() => setIsMobileMenuOpen(false)} >
              Home
            </Link>
            <Link href="/features" className={isActive("/features") + " block"} onClick={() => setIsMobileMenuOpen(false)} >
              Features
            </Link>
            <Link href="/clients" className={isActive("/clients") + " block"} onClick={() => setIsMobileMenuOpen(false)} >
              Clients
            </Link>
            <Link
              href="/blog-listing"
              className={isActive("/testimonials") + " block"}
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              Blogs
            </Link>
         
              <Dropdown menu={{ items: servicesItems }} trigger={["hover"]}>
                <span className="cursor-pointer flex items-center space-x-1 hover:text-[#743DFF]">
                  <span
                   className={isActive("/testimonials") + " block"}
                  >
                    Service
                  </span>
                  <DownOutlined className="text-xs" />
                </span>
              </Dropdown>
          
           
           
            <Link
              href="/testimonials"
              className={isActive("/testimonials") + " block"}
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              Testimonials
            </Link>
            <Link href="/pricing" className={isActive("/pricing") + " block"} onClick={() => setIsMobileMenuOpen(false)} >
              Pricing
            </Link>
            <Link href="/aboutus" className={isActive("/aboutus") + " block"} onClick={() => setIsMobileMenuOpen(false)} >
              About Us
            </Link>
            <a
              target="_blank"
              href="https://www.school.myleadingcampus.com/?view=signup"
              className="block !text-white w-full text-center px-6 py-2 bg-gradient-to-r from-[#622BFF] to-[#16B2D0]  font-semibold text-sm rounded-full shadow-sm hover:opacity-90 transition"
              onClick={() => setIsMobileMenuOpen(false)} 
            >
              GET STARTED FOR FREE
            </a>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;
