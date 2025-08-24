'use client';

import React from 'react';
import Link from 'next/link';
import { cn } from './Utils/cs';

const ButtonReuse = ({
  type,
  title,
  className,
  onClick,
  disabled = false,
  extra,
  to // <--- add this prop for navigation
}) => {
  const buttonClasses = cn(
    "text-white focus:ring-0 focus:outline-none text-sm sm:px-2 sm:py-2 text-center dark:focus:ring-blue-800 py-[8px] px-[35px] rounded-[25px] text-[16px] font-semibold bg-gradient-to-r from-[#622BFF] to-[#16B2D0] uppercase",
    className
  );

  return (
    <div className='block md:inline-block text-center md:text-start w-full md:w-auto'>
      {to ? (
        <Link href={to} className={buttonClasses}>
          {extra}
          {title}
        </Link>
      ) : (
        <button
          disabled={disabled}
          type={type || "button"}
          onClick={onClick || (() => {})}
          className={buttonClasses}
        >
          {extra}
          {title}
        </button>
      )}
    </div>
  );
};

export default ButtonReuse;