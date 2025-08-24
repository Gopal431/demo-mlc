"use client"

import React from 'react';
import CountUp from 'react-countup';

const data = [
    {
        end: 50000,
        label: 'Active Students'
    },
    {
        end: 1000,
        label: 'Active Teachers'
    },
    {
        end: 50,
        label: 'Happy Clients'
    },
    {
        end: 4,
        label: 'Years Of Experience'
    },
];

const AboutSec3 = () => {
    return (
        <section className='bg-gradient-to-r from-[#622BFF] to-[#16B2D0] py-12 p-10'>
            <div className="container">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {data.map((item, index) => (
                        <div key={index} className='flex flex-col items-center text-center text-white'>
                            <h2 className='flex'>
                                <span className="text-5xl font-extrabold mb-2">
                                    <CountUp end={item.end} duration={2.5} />
                                </span>
                                <span className="inline-flex bg-clip-text text-transparent bg-gradient-to-r from-[#fff] to-indigo-300 mb-2 text-5xl font-extrabold">
                                    +
                                </span>
                            </h2>
                            <p className='text-2xl font-semibold'>{item.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default AboutSec3;
