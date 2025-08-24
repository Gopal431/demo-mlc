import React from "react";
// import SectionBannerHome from './SectionBannerHome';
import { InfiniteMovingCardsDemo } from "../componentsForReuse/infiniteMovingCardsComponent";
import AboutSection from "../home/AboutSection";
import Banner from "../home/SectionBannerHome";
import AboutSection2 from "../home/AboutSection2";
import AboutSection3 from "../home/AboutSection3";
import Section6Home from "../home/Section6Home";
import Section7Home from "../home/Section7Home";
import Section8Home from "../home/Section8Home";
import Section10Home from "../home/Section10Home";
import Section11Home from "../home/Section11Home";
import Section12Home from "../home/Section12Home";
import Seciton9Home from "../home/Section9Home";
import TestimonialsGrid from "../home/testimonials";
// import Awarded from "../Components/Awarded";

// import Section2Home from './Section2Home';

export const metadata = {
  title: "Best School Management Software in India | MyLeading Campus",
  description:
    "Manage your school with ease using India’s best school ERP – trusted by schools in Tier 2 cities. Admission, fees, attendance – all in one place. Try it free!",
};
 const faqSectionData = {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Dive into our frequently asked questions to learn more about MyLeading Campus®",
    faqs: [
      {
        id: 1,
        question: "What are the benefits of using MyLeading Campus?",
        answer:
          "Experience streamlined workflow, enhanced communication, data-driven decision making, improved student engagement, and empowered parent involvement. Say goodbye to paperwork fatigue and hello to increased efficiency and a thriving school community.",
      },
      {
        id: 2,
        question: "Is MyLeading Campus user-friendly and easy to learn?",
        answer:
          "MyLeading Campus is designed with simplicity in mind, ensuring that users can easily navigate and utilize its features. The intuitive interface allows even those with limited technical knowledge to quickly learn and manage their tasks effectively.",
      },
      {
        id: 3,
        question: "How much does MyLeading Campus cost?",
        answer:
          "The cost of MyLeading Campus varies depending on the features and scale required by your institution. We offer flexible pricing plans to accommodate different needs, ensuring affordability without compromising on functionality.",
      },
      {
        id: 4,
        question: "Is my data safe and secure?",
        answer:
          "Your data’s security is our top priority. MyLeading Campus employs state-of-the-art encryption and security measures to protect your information. We ensure compliance with the latest data protection regulations to safeguard your school’s data.",
      },
    ],
  };
const Home = () => {
  return (
    <>
     

      <InfiniteMovingCardsDemo />

      <AboutSection />

      <AboutSection2 />

      <AboutSection3 />

      <Section6Home />

      <Section7Home />

      <Section8Home />

      <TestimonialsGrid />
      <Seciton9Home />

       <Section10Home sectionData={faqSectionData} />

      <Section12Home />
    </>
  );
};

export default Home;
