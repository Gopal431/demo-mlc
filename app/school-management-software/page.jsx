"use client";
import Header from "@/components/services/Header";
import WordSection from "@/components/services/WordSection";
import ERPModules from "@/components/services/ERPModules";
import GraphSection1 from "@/components/services/GraphSection1";
import GraphSection2 from "@/components/services/GraphSection2";
import Section10Home from "@/components/home/Section10Home";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import BenefitsforSchools from "@/components/services/BenefitsforSchools";
import WhyChooseMLC from "@/components/services/WhyChooseMLC ";
import ReadytoMakeYSS from "@/components/services/ReadytoMakeYSS";
import { FaUsers, FaClock, FaShieldAlt } from "react-icons/fa";
import { FaBolt } from "react-icons/fa";
import { PiMoneyWavyThin } from "react-icons/pi";
import { LiaDigitalTachographSolid } from "react-icons/lia";
import { GrAppleAppStore } from "react-icons/gr";
import { MdEmojiTransportation } from "react-icons/md";

function page() {
  const headerContent = {
    title: "School Management Software in India",
    highlight: "MyLeading Campus®",
    clgImg: "/Assts/logo/girl.png",
    description:
      "This ERP is designed to simplify school operations, improve communication, and ensure smooth administration—all in one platform.",
    imageSrc: "/Assts/hero.png",
    imageAlt: "MyLeading Campus Hero Image",
  };
  const featuresData = [
    {
      title: "Digital Admissions",
      desc: "Collect forms, verify documents, and generate merit lists online.",
      icon: HiOutlineCalendarDateRange,
      url: "best-features-online-admission-management",
    },
    {
      title: "Smart Fee Management",
      desc: "Collect fees via UPI, cards, net banking, with automatic receipts.",
      icon: PiMoneyWavyThin,
      url: "fees-management-system",
    },
    {
      title: "Attendance Automation",
      desc: "Biometric, RFID, or mobile app-based attendance with instant parent alerts.",
      icon: HiOutlineCalendarDateRange,
      url: "best-biometric-attendance-system-school-india",
    },
    {
      title: "Exam & Report Cards",
      desc: "Generate marksheets and progress reports instantly.",
      icon: LiaDigitalTachographSolid,
      url: "progress-report-card-management",
    },
    {
      title: "Parent App",
      desc: "Real-time updates on homework, notices, and child performance.",
      icon: GrAppleAppStore,
      url: "best-features-dedicated-mobile-apps",
    },
    {
      title: "Transport & GPS Tracking",
      desc: "Ensure student safety with real-time GPS bus tracking alerts.",
      icon: MdEmojiTransportation,
      url: "best-transport-gps-tracking-school-india",
    },
  ];
  const cardsData = [
    {
      title: "For Schools",
      icon: FaUsers,
      items: [
        "Reduce paperwork by 80%",
        "Save hundreds of admin hours per year",
        "Increase admissions by showcasing modern facilities",
      ],
    },
    {
      title: "For Teachers",
      icon: FaClock,
      items: [
        "Save 10–15 minutes daily with automated attendance",
        "Upload homework, exam marks, and remarks easily",
        "Focus more on teaching, less on paperwork",
      ],
    },
    {
      title: "For Parents",
      icon: FaShieldAlt,
      items: [
        "Get instant notifications on attendance, homework, exams",
        "Pay fees online anytime, anywhere",
        "Track school bus location for safety",
      ],
    },
  ];

  const surveyText =
    "Times of India survey (2024) revealed that 72% of parents prefer schools with a dedicated ERP app for communication.";
  const sectionData = {
    title: "Smart ERP for Modern Schools",
    description:
      "Our ERP is designed to simplify school operations, improve communication, and ensure smooth administration—all in one platform.",
    items: [
      "24/7 WhatsApp support for instant help",
      "On-site engineer visits for Kolkata schools",
      "Highly customizable modules for unique needs",
    ],
    footer:
      "Trusted by reputed schools with 50,000+ daily users and 20,000+ app downloads.",
  };
  const features = [
    {
      icon: "Server",
      title: "24/7 WhatsApp Support",
      desc: "Always available when you need help",
    },
    {
      icon: "Users",
      title: "On-site Engineer Visits",
      desc: "For Kolkata schools",
    },
    {
      icon: "Globe2",
      title: "Highly Customizable ERP",
      desc: "As per institution's unique needs",
    },
  ];

  // Text content data
  const textContent = {
    title: "Why Schools in India Trust MyLeading Campus®",
    description:
      "Our ERP helps schools streamline academic and administrative tasks, enhance communication between teachers, parents, and students, and save valuable time.",
    items: [
      "Real-time reports and customizable dashboards",
      "Dedicated modules for academics, fees, and attendance",
      "Seamless communication through WhatsApp & mobile app",
    ],
    footer:
      "Trusted by reputed schools across Kolkata and beyond, with 50,000+ daily users and 20,000+ app downloads.",
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

  const readySectionData = {
    title: "Ready to Make Your School Smart?",
    subtitle: "Give your school the digital advantage with MyLeading Campus®.",
    description:
      "Save time, reduce costs, improve safety, and build trust with parents.",
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
        desc: "GPS tracking & alerts",
      },
      {
        icon: FaUsers,
        iconColor: "#FEF08A",
        title: "Build Trust",
        desc: "Transparent communication",
      },
    ],
    contact: {
      email: "info@myleadincampus.com",
      whatsappUrl: "https://wa.me/9874344994?text=Hello",
      buttonText: "Request a Free Demo",
    },
  };
  const iconTextColor = "blue";
  return (
    <>
      <Header headerData={headerContent} />
      <WordSection />
      <WhyChooseMLC
        title="Why Choose MyLeading Campus® School Management Software?"
        description="Our ERP is designed for Indian schools. Whether you are a CBSE, ICSE, IB, or State Board institution, MyLeading Campus® adapts to your needs."
        features={featuresData}
        iconsColor={iconTextColor}
      />
      <BenefitsforSchools
        title="Benefits for Schools, Teachers & Parents"
        cards={cardsData}
        surveyText={surveyText}
        iconsColor={iconTextColor}
      />
      <ERPModules iconsColor={iconTextColor} />

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
