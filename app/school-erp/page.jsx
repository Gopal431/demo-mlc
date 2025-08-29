"use client";

import Header from "@/components/services/Header";
import WordSection from "@/components/services/WordSection";
import ERPModules from "@/components/services/ERPModules";
import GraphSection1 from "@/components/services/GraphSection1";
import GraphSection2 from "@/components/services/GraphSection2";
import Section10Home from "@/components/home/Section10Home";
import WhyChooseMLC from "@/components/services/WhyChooseMLC ";
import BenefitsforSchools from "@/components/services/BenefitsforSchools";
import ReadytoMakeYSS from "@/components/services/ReadytoMakeYSS";
import { FaUsers, FaClock, FaShieldAlt, FaBolt, FaHotel, FaChalkboardTeacher } from "react-icons/fa";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import {
  MdEmojiTransportation,
  MdOutlineCurrencyRupee,
  MdOutlineSchedule,
} from "react-icons/md";
import { GrAppleAppStore } from "react-icons/gr";
import { IoAnalytics } from "react-icons/io5";
import { PiExamLight, PiMoneyWavyThin } from "react-icons/pi";
import { CgAssign } from "react-icons/cg";
import { SiBasicattentiontoken } from "react-icons/si";

function page() {
  const headerContent = {
    title: "School ERP Software in India",
    highlight: "MyLeading Campus®",
    clgImg: "/image/School-ERP-girl.png",
    description:
      "Managing a school is more than just teaching. From admissions to attendance, fees to exams, payroll to transport — administrators deal with hundreds of tasks daily. Doing this manually wastes time, creates errors, and frustrates parents. With MyLeading Campus®, schools can manage everything in one platform — simple, secure, and smart.",
    imageSrc: "/Assts/hero.png",
    imageAlt: "MyLeading Campus School ERP Hero Image",
  };

  const featuresData = [
    {
      title: "Digital Admissions & Enrolment",
      icon: HiOutlineCalendarDateRange,
      desc: "Manage student applications, verification, and enrolment online.",
       url: "best-features-online-admission-management",
    },
    {
      title: "Smart Fee Collection & Reports",
      icon: PiMoneyWavyThin,
      desc: "Collect fees digitally with automated receipts and analytics.",
       url: "fees-management-system",
    },
    {
      title: "HR & Payroll Management",
      icon: MdOutlineCurrencyRupee,
      desc: "Track staff attendance, salary, PF, and performance reports.",
       url: "employee-payroll-management",
    },
    {
      title: "Library & Inventory Tracking",
      icon: MdOutlineCurrencyRupee,
      desc: "Issue, renew, and manage books and resources efficiently.",
          url: "best-features-library-inventory-tracking",
    },
    {
      title: "Attendance via Mobile or Biometric",
      icon: SiBasicattentiontoken,
      desc: "Automate attendance for students and staff with instant updates.",
      url: "best-biometric-attendance-system-school-india",
    },
    {
      title: "Homework & Assignment Uploads",
      icon: CgAssign,
      desc: "Teachers can upload and share homework digitally.",
      url: "progress-report-card-management",
    },
    {
      title: "Marks & Exam Result Management",
      icon: PiExamLight,
      desc: "Generate marksheets, report cards, and progress reports instantly.",
       url: "progress-report-card-management",
    },
    {
      title: "Dedicated Mobile Apps",
      icon: GrAppleAppStore,
      desc: "Keep parents and students updated with real-time notifications and updates.",
            url: "best-biometric-attendance-system-school-india",
    },
    {
      title: "GPS Bus Tracking",
      icon: MdEmojiTransportation,
      desc: "Ensure student safety with live bus tracking.",
       url: "best-transport-gps-tracking-school-india",
    },
    {
    title: "Timetable & Substitution Management",
    icon: MdOutlineSchedule,
    desc: "Smart scheduling with automated timetable and substitution management.",
     url: "best-biometric-attendance-system-school-india",
  },
  {
    title: "Hostel Management",
    icon: FaHotel,
    desc: "Simplify hostel operations with room allocation, and daily management.",
     url: "best-hostel-management-software-school-india",
  },
  {
    title: "Online Classes",
    icon: FaChalkboardTeacher,
    desc: "Conduct interactive online classes with live streaming and recordings.",
    url: "best-features-online-admission-management",
  },
  ];

  const cardsData = [
    {
      title: "For Schools",
      icon: FaUsers,
      items: [
        "Automates manual tasks like attendance and fees",
        "Cuts down paperwork by 80%",
        "Reduces operational costs significantly",
      ],
    },
    {
      title: "For Teachers",
      icon: FaClock,
      items: [
        "Spend more time teaching, less on admin",
        "Upload lectures, assignments, and marks online",
        "Analyze student performance efficiently",
      ],
    },
    {
      title: "For Parents & Students",
      icon: FaShieldAlt,
      items: [
        "Stay updated with attendance, exams, and events",
        "Pay fees digitally anytime with receipts",
        "Track school bus location for safety",
      ],
    },
  ];

  const surveyText =
    "Times of India (2024), 72% of parents in metro cities prefer schools with ERP systems, citing better communication and transparency.";

  const sectionData = {
    title: "Smart ERP for Modern Schools",
    description:
      "MyLeading Campus® helps schools streamline academic and administrative tasks, improve communication, and save valuable time.",
    items: [
      "24/7 WhatsApp & call support",
      "Customizable ERP tailored for each institution",
      "AWS Cloud Hosting for secure data storage",
    ],
    footer:
      "Trusted by 50+ leading schools, with 50,000+ daily users and 20,000+ app downloads with 4.5★ rating.",
  };

  const features = [
    {
      icon: "Server",
      title: "24/7 WhatsApp Support",
      desc: "Always available when you need help",
    },
    {
      icon: "Users",
      title: "Customizable ERP",
      desc: "Tailored to each institution's unique workflows",
    },
    {
      icon: "Globe2",
      title: "Secure Cloud Hosting",
      desc: "AWS-backed infrastructure for data safety",
    },
  ];

  const textContent = {
    title: "Why Schools in India Trust MyLeading Campus®",
    description:
      "We don’t just sell software — we become your long-term technology partner, providing scalable, secure, and efficient ERP solutions.",
    items: [
      "End-to-end school management in one platform",
      "Dedicated modules for academics, fees, attendance, HR, and transport",
      "Seamless communication through mobile apps and WhatsApp",
    ],
    footer:
      "Rated 4.5★ in Play Store & App Store, trusted by leading schools across India.",
  };

  const faqSectionData = {
    title: "Frequently Asked Questions (FAQ)",
    subtitle: "Learn more about MyLeading Campus® School ERP",
    faqs: [
      {
        id: 1,
        question:
          "How is School ERP different from simple school management software?",
        answer:
          "School ERP is a complete system that integrates academics, fees, HR, communication, transport, and more into one solution, whereas basic management software usually handles only limited functions.",
      },
      {
        id: 2,
        question: "How much does MyLeading Campus® School ERP cost?",
        answer:
          "Our ERP starts at ₹150 per student per year — the best industry rate in India.",
      },
      {
        id: 3,
        question: "Can we use School ERP on mobile?",
        answer:
          "Yes! We provide dedicated apps for teachers, students, and parents.",
      },
      {
        id: 4,
        question: "Is ERP difficult for staff to learn?",
        answer:
          "Not at all. Our ERP is designed to be user-friendly, with training and support included.",
      },
      {
        id: 5,
        question: "How fast can it be implemented?",
        answer:
          "Most schools go live in just 7–10 days, with our onboarding support team.",
      },
    ],
  };

  const readySectionData = {
    title: "Upgrade Your School with MyLeading Campus®",
    subtitle: "The future of education is digital, safe, and efficient.",
    description: "Give your school the ERP advantage today.",
    cards: [
      {
        icon: FaClock,
        iconColor: "#BFDBFE",
        title: "Save Time",
        desc: "Automate daily tasks",
      },
      {
        icon: FaBolt,
        iconColor: "#BBF7D0",
        title: "Reduce Costs",
        desc: "Minimize paperwork",
      },
      {
        icon: FaShieldAlt,
        iconColor: "#DDD6FE",
        title: "Improve Safety",
        desc: "Attendance, exams & transport tracking",
      },
      {
        icon: FaUsers,
        iconColor: "#FEF08A",
        title: "Enhance Communication",
        desc: "Transparent updates to parents & students",
      },
    ],
    contact: {
      email: "info@myleadincampus.com",
      whatsappUrl: "https://wa.me/9874344994?text=Hello",
      buttonText: "Request a Free Demo",
    },
  };
  const iconTextColor = "purple";
  return (
    <>
      <Header headerData={headerContent} />
      <WordSection />
      <WhyChooseMLC
        title="Why Choose MyLeading Campus® School ERP?"
        description="School ERP integrates academics, fees, HR, communication, transport, and more into one smart platform."
        features={featuresData}
        iconsColor={iconTextColor}
      />
      <BenefitsforSchools
        title="Benefits for Schools, Teachers & Students"
        cards={cardsData}
        surveyText={surveyText}
        iconsColor={iconTextColor}
      />
      <ERPModules iconsColor={"blue"} />
      <GraphSection1
        title={sectionData.title}
        description={sectionData.description}
        items={sectionData.items}
        footer={sectionData.footer}
        iconsColor={iconTextColor}
      />
      <GraphSection2
        featureData={features}
        textData={textContent}
        iconsColor={iconTextColor}
      />
      <Section10Home sectionData={faqSectionData} />
      <ReadytoMakeYSS sectionData={readySectionData} />
    </>
  );
}

export default page;
