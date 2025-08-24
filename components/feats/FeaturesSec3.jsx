"use client"

import React, { useState, useEffect } from 'react';
import tabIcon from '../../public/Assts/icon-22.png';
import tabimg from '../../public/Assts/Latest technology.png';
import tabimg2 from '../../public/Assts/biometric attendance.png';
import tabigm3 from '../../public/Assts/customer support.png';
import tabimg4 from '../../public/Assts/security.png';
import Image from 'next/image';

const tabData = [
    {
        id: 'profile',
        title: 'Latest Technology',
        imageSrc: tabimg,
        icon: 'fas fa-microchip',
        description: `
            We are committed to using the latest technology in our school management software to provide the most efficient and effective solution for schools. 
            Our software is built on a modern technology stack, utilizing cloud computing and artificial intelligence to improve the speed and accuracy of data processing. 
            We also incorporate advanced data analytics capabilities, which provide schools with real-time insights into student performance, attendance patterns, and overall school operations. 
            Additionally, our software is designed to be mobile-responsive, allowing users to access it from any device, including smartphones and tablets. 
            We are constantly researching and implementing new technologies to improve our software and provide the best possible solution for schools. By using our software, schools can stay ahead of the curve and benefit from the latest technology innovations in the education industry.
        `,
    },
    {
        id: 'dashboard',
        title: 'Easy to Use',
        imageSrc: tabimg,
        icon: 'fas fa-cogs',
        description: `
            Our school management software is designed to be user-friendly and easy to use. We understand that schools may have staff members with varying levels of technical expertise, 
            and we have created a software interface that is intuitive and easy to navigate. Our software features a clean and organized dashboard that provides access to all the necessary functions and tools, 
            such as attendance tracking, grade management, and student information management. Additionally, we provide user guides and tutorials to help users get started with the software quickly and easily. 
            Our goal is to provide a software solution that is simple to use, saves time, and reduces the workload on teachers and administrators. By using our software, schools can streamline their administrative processes and focus on providing quality education to their students.
        `,
    },
    {
        id: 'settings',
        title: 'Biometric Attendance',
        imageSrc: tabimg2,
        icon: 'fas fa-fingerprint',
        description: `
            The biometric attendance feature in our school management software provides a quick and easy way to track attendance. This feature works by using biometric data, such as fingerprints or facial recognition, to identify and authenticate each student or staff member. 
            Once the biometric data is captured and stored in the software, the attendance process becomes seamless. When students arrive at school or class, they simply need to scan their biometric data, and the software will automatically register their attendance. 
            The benefits of using this feature are numerous. Firstly, it eliminates the possibility of fraudulent attendance as biometric data is unique to each individual. Secondly, it saves time and resources as there is no need for manual attendance taking. 
            Thirdly, it improves accuracy as it eliminates the possibility of human error. Finally, it provides real-time attendance data, which can be used to generate reports and facilitate better decision-making. 
            Overall, the biometric attendance feature provides a secure, reliable, and efficient way to track attendance, saving time and resources for schools and improving the accuracy of attendance data.
        `,
    },
    {
        id: 'contacts',
        title: 'Customer Support',
        imageSrc: tabigm3,
        icon: 'fas fa-headset',
        description: `
            At MyLeading Campus®, we understand the importance of providing excellent customer support. Our dedicated support team is available to help customers with any questions or issues they may have. 
            We offer multiple support channels, including phone, email, and live chat, so that customers can choose the most convenient option for them. Our support staff is knowledgeable and responsive, 
            and we strive to resolve issues as quickly and efficiently as possible. Additionally, we regularly update our software and provide user guides and tutorials to help clients maximize their use of the software. 
            Our goal is to ensure that our clients have a positive experience using our software and can quickly and easily resolve any issues they may encounter.
        `,
    },
    {
        id: 'security',
        title: 'Security',
        imageSrc: tabimg4,
        icon: 'fas fa-lock',
        description: `
            Ensuring the security of data is a top priority for us. We implement a variety of security measures to protect sensitive data from unauthorized access, theft, or misuse. 
            Our software uses encryption technology to secure data in transit and at rest, and we have implemented strong access controls to limit access to data to authorized personnel only. 
            Our servers are located in highly secure data centers with 24/7 monitoring, and we perform regular backups to prevent data loss in case of hardware failure or other unexpected events. 
            We also regularly conduct security audits and assessments to identify and address any vulnerabilities or threats. By using our software, schools can be assured that their data is being kept secure and confidential.
        `,
    },
];

const FeaturesSec3 = () => {
    const [activeTab, setActiveTab] = useState('profile');

    useEffect(() => {
        const storedTab = localStorage.getItem('activeTab');
        if (storedTab) {
            setActiveTab(storedTab);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem('activeTab', activeTab);
    }, [activeTab]);

    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
    };

    return (
        <section className='secbanner p-10'>
            <div className="container">
                <h2 className='font-[Helvetica] font-bold text-[20px] sm:text-[40px] leading-[21px] md:leading-[46px] capitalize text-center bg-gradient-to-r from-[#633EFF] from-[30%] via-[#FF335E] via-[10%] to-[#00ACCE] to-[40%] bg-clip-text text-transparent w-[68%] mx-auto mb-6'>
                    Take a quick overview
                </h2>
                <p className='text-[16px] sm:text-[20px] w-full md:w-[58%] md:leading-[26px] text-[#615f5f] block m-auto mb-8 font-normal text-center md:mt-[2.5rem] mt-[5rem]'>
                    We offer a customizable and scalable solution that can be tailored to meet the specific needs of your school.
                </p>
                <div className='pl-[0] pr-[0] md:pl-[100px] md:pr-[100px]'>
                    <div className="mb-4 border-b border-gray-200 dark:border-gray-900">
                        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="default-tab" role="tablist">
                            {tabData.map(tab => (
                                <li key={tab.id} className="me-6 text-lg" role="presentation">
                                    <button className={`inline-block p-4 border-b-2 rounded-t-lg sm:flex items-center gap-2 ${activeTab === tab.id ? 'border-blue-500 text-blue-500' : 'text-gray-300 dark:text-gray-400'}`}
                                        onClick={() => handleTabChange(tab.id)} role="tab">
                                        <i className={tab.icon}></i>
                                        {tab.title}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="px-4">
                        {tabData.map(tab => (
                            activeTab === tab.id && (
                                <div key={tab.id} className="p-4 flex gap-8">
                                    <div className="w-[100%] md:w-[30%]">
                                        <Image src={tab.imageSrc} alt={tab.title} className="w-full h-[400px] object-cover" />
                                    </div>
                                    <div className="w-[100%] md:w-[70%]">
                                        <Image src={tabIcon} alt="" className='w-[60] h-[auto]' />
                                        <h3 className='text-[20px] text-black md:text-[26px] mt-4 mb-4'>{tab.title}</h3>
                                        <p className="text-lg text-gray-800 dark:text-gray-600 text-justify">
                                            {tab.description}
                                        </p>
                                    </div>
                                </div>
                            )
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FeaturesSec3;
