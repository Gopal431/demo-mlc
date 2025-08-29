"use client";

import Header from "@/components/services/Header";
import WordSection from "@/components/services/WordSection";
import ERPModules from "@/components/services/ERPModules";
import GraphSection1 from "@/components/services/GraphSection1";
import GraphSection2 from "@/components/services/GraphSection2";
import Section10Home from "@/components/home/Section10Home";
import BenefitsforSchools from "@/components/services/BenefitsforSchools";
import WhyChooseMLC from "@/components/services/WhyChooseMLC ";
import ReadytoMakeYSS from "@/components/services/ReadytoMakeYSS";
import { FaUsers, FaClock, FaShieldAlt, FaBolt } from "react-icons/fa";
import { HiOutlineCalendarDateRange } from "react-icons/hi2";
import { GiTennisCourt } from "react-icons/gi";
import { PiMoneyWavyThin,PiExamLight } from "react-icons/pi";
import { VscFileSubmodule } from "react-icons/vsc";
import { MdOutlineLocalLibrary ,MdEmojiTransportation, MdOutlineCurrencyRupee} from "react-icons/md";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
// import CMGirlImage from "../../public/Assts/logo/clggirl.png";
function page() {

  const headerContent = {
    title: "College Management Software in India",
    highlight: "MyLeading Campus®",
    clgImg:"/image/college-management-software-girl.png",
    description:
      "Running a college is more challenging than ever. With thousands of students, multiple courses, admissions, examinations, placements, and daily operations, manual processes are no longer enough. MyLeading Campus® provides an all-in-one ERP solution built for Indian colleges and universities.",
    imageSrc: "/Assts/hero.png",
    imageAlt: "MyLeading Campus College ERP Hero Image",
  };


  const featuresData = [
    { title: "Digital Admissions",   url: "best-features-online-admission-management",  icon: HiOutlineCalendarDateRange, desc: "Manage applications, entrance tests, and seat allotment online." },
    { title: "Course & Curriculum Management", url: "best-progress-report-card-management-india", icon: GiTennisCourt, desc: "Handle multiple programs, subjects, and batches with ease." },
    { title: "Fee & Finance Automation", url: "best-fees-management-system-india", icon:PiMoneyWavyThin, desc: "Online fee collection with instant receipts and real-time tracking." },
    { title: "Exams & Results",   url: "best-progress-report-card-management-india", icon:PiExamLight, desc: "Generate hall tickets, automate grading, publish results online." },
    { title: "Placement Module",   url: "best-progress-report-card-management-india", icon:VscFileSubmodule, desc: "Track placement drives, company visits, and student records." },
    { title: "Library Management",   url: "best-features-library-inventory-tracking", icon:MdOutlineLocalLibrary, desc: "Issue, renew, and track books digitally." },
    { title: "Hostel & Transport",    url: "best-transport-gps-tracking-school-india", icon:MdEmojiTransportation, desc: "Manage room allotments, mess, and bus routes with GPS tracking." },
    { title: "HR & Payroll",   url: "best-employee-payroll-management-india", icon:MdOutlineCurrencyRupee, desc: "Staff attendance, salary, PF, and performance reports." },
    { title: "Mobile Apps for Students & Faculty",   url: "best-features-dedicated-mobile-apps", icon:HiOutlineDevicePhoneMobile, desc: "Access everything on the go." },
  ];


  const cardsData = [
    {
      title: "For Colleges",
      icon: FaUsers,
      items: [
        "Handle large student databases without errors",
        "Simplify compliance and reporting for universities & UGC requirements",
        "Save hundreds of admin hours every semester",
      ],
    },
    {
      title: "For Faculty",
      icon: FaClock,
      items: [
        "Upload lecture notes, assignments, and grades online",
        "Track student attendance and academic progress",
        "Focus more on teaching & mentoring, less on paperwork",
      ],
    },
    {
      title: "For Students",
      icon: FaShieldAlt,
      items: [
        "Apply for admission online with hassle-free forms",
        "Pay fees digitally via UPI, net banking, or cards",
        "Download hall tickets, marksheets, and certificates instantly",
      ],
    },
  ];

  const surveyText =
    "The Economic Times (2024), 80% of students prefer colleges with strong digital infrastructure, especially for admissions and placements.";


  const sectionData = {
    title: "Smart ERP for Modern Colleges",
    description:
      "MyLeading Campus® helps colleges streamline academic and administrative tasks, enhance communication, and save valuable time.",
    items: [
      "24/7 WhatsApp support for instant help",
      "On-site engineer visits for Kolkata colleges",
      "Highly customizable modules for unique college workflows",
    ],
    footer:
      "Trusted by 50+ institutions across Kolkata and other cities, with 50,000+ daily users and 20,000+ app downloads.",
  };


  const features = [
    { icon: "Server", title: "24/7 WhatsApp Support", desc: "Always available when you need help" },
    { icon: "Users", title: "On-site Engineer Visits", desc: "For Kolkata colleges" },
    { icon: "Globe2", title: "Highly Customizable ERP", desc: "As per institution's unique workflows" },
  ];

  const textContent = {
    title: "Why Colleges in India Trust MyLeading Campus®",
    description:
      "Serving colleges and universities across India with scalable ERP solutions, end-to-end customization, and round-the-clock support.",
    items: [
      "Real-time reports and customizable dashboards",
      "Dedicated modules for academics, fees, attendance, and placements",
      "Seamless communication through mobile apps and WhatsApp",
    ],
    footer:
      "Rated 4.5★ in Play Store & App Store, trusted by leading institutions across Kolkata and beyond.",
  };


  const faqSectionData = {
    title: "Frequently Asked Questions (FAQ)",
    subtitle: "Learn more about College Management Software",
    faqs: [
      {
        id: 1,
        question: "What is College Management Software?",
        answer:
          "It is an ERP system that automates college operations like admissions, fees, exams, placements, and communication.",
      },
      {
        id: 2,
        question: "How is College ERP different from School ERP?",
        answer:
          "While School ERP focuses on classes 1–12, College ERP supports multi-course, multi-department management, placements, research tracking, and hostel management.",
      },
      {
        id: 3,
        question: "How much does MyLeading Campus® cost?",
        answer:
          "We provide ERP at just ₹150 per student per year, with special packages for colleges and universities.",
      },
      {
        id: 4,
        question: "How long does it take to implement?",
        answer:
          "Most colleges are onboarded within 10–15 days, with full support from our team.",
      },
      {
        id: 5,
        question: "Can students access ERP on mobile?",
        answer: "Yes! Students and faculty get dedicated mobile apps for convenience.",
      },
    ],
  };


  const readySectionData = {
    title: "Give Your College the Digital Advantage",
    subtitle: "Transform your institution with MyLeading Campus® College Management Software.",
    description: "Save time, reduce costs, improve placements, and deliver a world-class student experience.",
    cards: [
      { icon: FaClock, iconColor: "#BFDBFE", title: "Save Time", desc: "Automate daily tasks" },
      { icon: FaBolt, iconColor: "#BBF7D0", title: "Reduce Costs", desc: "Minimize paperwork" },
      { icon: FaShieldAlt, iconColor: "#DDD6FE", title: "Improve Placements", desc: "Track student records & company visits" },
      { icon: FaUsers, iconColor: "#FEF08A", title: "Enhance Student Experience", desc: "Transparent communication & mobile apps" },
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
        title="Why Choose MyLeading Campus® College ERP?"
        description="Our platform is designed to manage end-to-end college operations efficiently. Whether you run an autonomous college, affiliated institution, or professional university, MyLeading Campus® adapts to your needs."
        features={featuresData}
         iconsColor={iconTextColor}
      />
      <BenefitsforSchools
        title="Benefits for Colleges, Faculty & Students"
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
      <GraphSection2 featureData={features} textData={textContent} iconsColor={iconTextColor} />
      <Section10Home sectionData={faqSectionData} />
      <ReadytoMakeYSS sectionData={readySectionData} />
    </>
  );
}

export default page;
