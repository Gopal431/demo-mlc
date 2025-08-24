"use client";

import React from 'react';
import Link from "next/link";
import Image from 'next/image';

const SectionWithBackground = ({ title, breadcrumbs, backgroundImage }) => {
  return (
    <section className="relative text-center pt-[80px]">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Glass black overlay */}
        <div className="absolute inset-0 bg-black/40 backdrop-blur-xm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 py-[80px] pt-[60px]">
        <h2 className="text-white text-4xl font-bold">{title}</h2>
        <ul className="flex justify-center space-x-2 text-white mt-4">
          {breadcrumbs.map((breadcrumb, index) => (
            <ul key={index} className="flex">
              {breadcrumb.link ? (
                <li className="pr-3">
                  <Link href={breadcrumb.link} className="hover:underline">
                    {breadcrumb.label}
                  </Link>
                </li>
              ) : (
                <li>{breadcrumb.label}</li>
              )}
              {index < breadcrumbs.length - 1 && <li>/</li>}
            </ul>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default SectionWithBackground;
