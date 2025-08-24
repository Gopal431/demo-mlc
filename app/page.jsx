import Head from "next/head";
import Banner from "@/components/home/SectionBannerHome";
import { InfiniteMovingCardsDemo } from "./componentsForReuse/infiniteMovingCardsComponent";
import AboutSection from "@/components/home/AboutSection";
import AboutSection2 from "@/components/home/AboutSection2";
import AboutSection3 from "@/components/home/AboutSection3";
import Section6Home from "@/components/home/Section6Home";
import Section7Home from "@/components/home/Section7Home";
import Section8Home from "@/components/home/Section8Home";
import TestimonialsGrid from "@/components/home/testimonials";
import Seciton9Home from "@/components/home/Section9Home";
import Section10Home from "@/components/home/Section10Home";
import Section12Home from "@/components/home/Section12Home";
import Section11Home from "@/components/home/Section11Home";
import OurProduct from "@/components/home/OurProduct";

export default function Home({ searchParams }) {
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

    return (
        <div className="bg-white">
            <Banner />
            {/* <OurProduct /> */}
            <InfiniteMovingCardsDemo />
            <AboutSection />
            <AboutSection2 />
            <AboutSection3 />
            <Section6Home />
            <Section7Home />
            <Section8Home />
            <TestimonialsGrid />
            {/* <Seciton9Home /> */}
          <Section10Home sectionData={faqSectionData} />
            <Section11Home searchParams={searchParams} />
            <Section12Home />
        </div>
    );
}
