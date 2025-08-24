"use client";

import React from 'react';
import Link from "next/link";

// Data for Privacy Policy sections
const privacySections = [
    {
        title: 'Introduction',
        content: (
            <>
                Welcome to <b>MyLeading Campus<sup>®</sup></b>, a cloud-based integrated school management software platform ("Platform") provided by Snowball Innovations and its affiliates ("Company"). At <b>MyLeading Campus®</b>, we are committed to protecting your privacy. This Privacy Policy explains how we collect, use, and safeguard your personal data when you use our services.
            </>
        ),
    },
    {
        title: 'Information Collection and Use',
        content: (
            <>
                We may collect and process various types of data for the purposes outlined in this policy. The types of data we collect include but are not limited to: Personal Information: This may include your name, email address, contact information, and other identifying details. School Data: Information related to schools, colleges, or universities that use our Platform, including academic records and administrative data. Usage Data: Information about your interactions with our Platform, including log files, device information, IP addresses, and browsing history.
            </>
        ),
    },
    {
        title: 'Purpose for Collection and Use of Data',
        content: (
            <>
                We collect and use your data for various purposes, including but not limited to: Providing and improving our Platform's functionality and services. Communicating with you regarding your use of the Platform. Complying with legal obligations and resolving disputes. Protecting the security and integrity of our Platform.
            </>
        ),
    },
    {
        title: 'Retention of Data',
        content: (
            <>
                We will retain your data only for as long as necessary to fulfill the purposes for which it was collected and to comply with legal obligations.
            </>
        ),
    },
    {
        title: 'Withdrawal of Consent',
        content: (
            <>
                You have the right to withdraw your consent for the collection and processing of your data at any time. Please note that withdrawal of consent may affect your ability to use certain features of our Platform.
            </>
        ),
    },
    {
        title: 'Disclosure of Data',
        content: (
            <>
                We may disclose your data to third parties in the following circumstances: To provide support and maintenance services. In response to legal requests or obligations. To protect our rights, privacy, safety, or property. In connection with a merger, acquisition, or sale of all or part of our business.
            </>
        ),
    },
    {
        title: 'Service Use Terms',
        content: (
            <>
                Please review our Service Use Terms for information regarding the terms and conditions governing your use of the <b>MyLeading Campus®</b> Platform. We reserve the right to use or disclose your Personal Data in response to any statutory or legal requirements. We will use and disclose your Personal Data if we believe you will harm the property or our rights or right of the other Users of our Platform. Finally, we will use or disclose your Personal Data if we believe it is necessary to share information in order to investigate, prevent, or take action regarding illegal activities, suspected fraud, situations involving potential threats to the physical safety of any person or property, violations of the Platform’s other policies, or as otherwise required by law when responding to subpoenas, court orders and other legal processes. We reserve the right to use or disclose your Personal Data and other information if we believe that disclosure is necessary or appropriate to protect rights, property and safety of the Company, its users, customers, Service Providers, officers and shareholders. We may also in good faith share information with other organizations and entities for the purposes of fraud protection and credit risk reduction.
            </>
        ),
    },
    {
        title: 'Business Transaction',
        content: (
            <>
                If we or our subsidiaries are involved in a merger, acquisition or asset sale, and/or in the event the ownership or control of our Platform changes, we may transfer your information to the new owner.
            </>
        ),
    },
    {
        title: 'Other Disclosures',
        content: (
            <>
                If we or our subsidiaries are involved in a merger, acquisition or asset sale, and/or in the event the ownership or control of our Platform changes, we may transfer your information to the new owner.
                <ol className="list-[lower-alpha] ml-7 marker:text-blue-600 odd:marker:text-green-500 even:marker:text-red-500 text-[1.125rem] mt-2 text-[#4e4e4e] leading-[36px] marker:font-semibold">
                    <li>To our subsidiaries and affiliates;</li>
                    <li>To contractors, service providers, and other third parties we use to support our business in compliance with the provisions of this Privacy Policy;</li>
                    <li>To fulfill the purpose for which you provide it;</li>
                    <li>For the purpose of including your institution/company’s logo on our website;</li>
                    <li>For any other purpose disclosed by us when you provide the information; and With your consent in any other cases.</li>
                </ol>
            </>
        ),
    },
    {
        title: 'Data Security Practice and Procedure',
        content: (
            <>
                We implement security measures to protect your data, but no method of transmission over the internet or electronic storage is entirely secure. While we strive to protect your data, we cannot guarantee its absolute security.
            </>
        ),
    },
    {
        title: 'Transfer of Data',
        content: (
            <>
                The information, including Personal Data we obtain from or about you may be maintained, processed, and stored by us on the systems situated in the territory of Republic of India. However, subject to applicable laws, your information, including Personal Data, may be transferred to – and maintained on – computers located in countries other than India where the data protection laws may differ from those of the Data Protection Rules applicable in India. If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. The Company will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place including the security of your data and other Personal Information. We comply with generally accepted industry standard regulations regarding the collection, use, and retention of data under the Information Technology Act, 2000 and Data Protection Rules. By using the Platform and/or Services, you consent to the collection, transfer, use, storage and disclosure of your information as described in this Privacy Policy, including to the transfer of your information outside of your country of residence.
            </>
        ),
    },
     {
    title: "Data Deletion Policy",
    content: (
      <>
        The information, including Personal Data we obtain from or about you, may be maintained, processed, and stored by us on the systems situated in the territory of the Republic of India. However, subject to applicable laws, your information, including Personal Data, may be transferred to – and maintained on – computers located in countries other than India where the data protection laws may differ from those of the Data Protection Rules applicable in India. If you are located outside India and choose to provide information to us, please note that we transfer the data, including Personal Data, to India and process it there. Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer. The Company will take all the steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and that no transfer of your Personal Data will take place to an organisation or a country unless there are adequate controls in place, including the security of your data and other Personal Information. We comply with generally accepted industry standard regulations regarding the collection, use, and retention of data under the Information Technology Act, 2000 and Data Protection Rules. By using the Platform and/or Services, you consent to the collection, transfer, use, storage, and disclosure of your information as described in this Privacy Policy, including the transfer of your information outside of your country of residence.
        <br /><br />
        To request deletion of your data, please visit &nbsp;
        <Link href="/data-deletion" className="text-blue-600 underline hover:text-blue-800">
          Data Deletion Page
        </Link>
        
      </>
    ),
},
    {
        title: 'Copyright, Trademark, and Other Intellectual Property Protection',
        content: (
            <>
                All content on the <b>MyLeading Campus®</b> website, including text, graphics, logos, and software, is the property of Snowball Innovations or its affiliates and is protected by copyright, trademark, and other intellectual property laws.
            </>
        ),
    },
    {
        title: 'Contact Us',
        content: (
            <>
                If you have any questions or concerns about this Privacy Policy, please contact us at <a href="mailto:hello@myleadingcampus.com"><b>hello@myleadingcampus.com</b></a>.
            </>
        ),
    },
];

const page = () => {
    return (
        <section className='mt-[90px] h-auto mb-[40px] flex space-x-4 ps-10 pe-0 me-0'>
            <div className="container">
                <h2 className='text-[40px] font-semibold text-center pb-10 bg-gradient-to-r from-[#633EFF] from-10% via-[#FF335E] via-30% to-[#00ACCE] to-50% bg-clip-text text-transparent mt-5'>
                    Privacy Policy
                </h2>
                {privacySections.map((section, index) => (
                    <div key={index} className="mb-5">
                        <h3 className="text-2xl relative pl-[25px] text-black mb-[15px] mt-[20px]">
                            <span className="absolute top-[33%] left-[0] w-[10px] h-[10px] rounded-full bg-gradient-to-r from-[#ff335e] from-[20%] via-[#633eff] via-[20%] to-[#00acce] to-[40%] animate-transformY"></span>
                            {section.title}
                        </h3>
                        <div className='text-lg text-[#494949] text-justify leading-[28px]'>
                            {section.content}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default page;