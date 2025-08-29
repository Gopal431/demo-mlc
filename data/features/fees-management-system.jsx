import {
  FaMoneyBillWave,
  FaMobileAlt,
  FaRegFileAlt,
  FaCreditCard,
  FaChartLine,
} from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { SiMaterialdesign } from "react-icons/si";
import { IoMdTimer } from "react-icons/io";

export const feesManagementSystem = {
  title: "Number #1 Online Fees Management System for Schools & Colleges",
  title2:
    "Benefits of Top Digital Fees Management Software for Schools, Parents & Students",
  img: <FaMoneyBillWave />,
  gradient: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50",
  desc: "Collect, track, and manage all types of school payments in one place with our Online Fees Management System. Transparent, fast, and stress-free for schools, parents, and students.",
  why: "Managing fees should not be a stressful job. Offline fee collection creates queues, errors, delays, and risks. Digital fee management ensures accuracy, transparency, and convenience for everyone.",

  herosection: {
    title: "Why Schools Need Online Fee Collection",
    dec: "Manual fee collection creates long queues, errors in receipts, delays in tracking pending payments, and even risks in cash handling. Digital fee collection solves these issues by automating the entire process.",
  },

  features: [
    {
      fe: "Online Payments Anytime, Anywhere",
      icons: FaMobileAlt,
      description:
        "Parents can pay anytime through mobile apps or web portals with UPI, cards, wallets, and net banking.",
    },
    {
      fe: "Instant Receipt Generation",
      icons: FaRegFileAlt,
      description:
        "Receipts are auto-generated instantly and shared with both parents and school records in real time.",
    },
    {
      fe: "Centralized Fee Tracking",
      icons: FaChartLine,
      description:
        "Manage tuition, transport, uniforms, books, hostel, canteen, and event fees in one dashboard.",
    },
    {
      fe: "Automated Late Fee Calculation",
      icons: IoMdTimer,
      description:
        "Automatically apply late fees as per school policies, eliminating manual effort and errors.",
    },
    {
      fe: "Secure & Transparent Payments",
      icons: FaCreditCard,
      description:
        "All transactions are processed via secure gateways with full compliance and 100% transparency.",
    },
  ],

  caseStudy: {
    school: "Greenfield International School, Mumbai",
    before:
      "Parents queued for hours, receipts often got misplaced, and fee tracking required multiple registers.",
    after: [
      "90% payments shifted online within 2 months",
      "Receipts auto-generated with zero errors",
      "Cash handling issues completely eliminated",
    ],
    quote:
      "Now parents pay with ease, and our accounts department finally works stress-free with accurate records.",
  },

benefits: [
  {
    title: "For Schools & Colleges",
    description:
      "Faster collection, better transparency, and zero errors in financial records.",
  },
  {
    title: "For Parents",
    description:
      "Pay from anywhere with instant receipts, multiple payment options, and reminders.",
  },
  {
    title: "For Students",
    description:
      "No disruptions in learning due to late or unrecorded payments.",
  },
  {
    title: "Centralized Fee Tracking",
    description:
      "Track tuition, transport, hostel, uniform, and other fees in a single dashboard without juggling spreadsheets.",
  },
  {
    title: "Reduced Administrative Burden",
    description:
      "Eliminate manual data entry and receipt management, allowing staff to focus on more impactful work.",
  },
  {
    title: "Secure & Transparent Transactions",
    description:
      "All payments are routed through secure gateways with auto-generated receipts for complete transparency.",
  },
],


  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Explore our frequently asked questions to learn more about our Fees Management System",
    faqs: [
      {
        id: 1,
        question: "Can parents pay through mobile phones?",
        answer:
          "Yes. Parents can pay via the school’s mobile app or web portal with full convenience.",
      },
      {
        id: 2,
        question: "What types of fees can be collected online?",
        answer:
          "All fees including tuition, transport, hostel, canteen, uniforms, books, and activity fees.",
      },
      {
        id: 3,
        question: "How are receipts handled?",
        answer:
          "Receipts are auto-generated instantly and shared with both parents and school records.",
      },
      {
        id: 4,
        question: "What about late fees?",
        answer:
          "The system automatically calculates and applies late fees as per school policies.",
      },
      {
        id: 5,
        question: "Is it safe to use?",
        answer:
          "Yes. All payments are processed through secure gateways with bank-level security.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How Online Fee Management Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-green-600",
        title: "Seamless Integration",
        description:
          "Works smoothly with your school ERP, accounting, and reporting systems.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud-Based",
        iconColour: "text-blue-500",
        description: "All transactions stored securely in the cloud for easy access.",
      },
      {
        id: 3,
        icon: MdDashboardCustomize,
        title: "Powerful Dashboard",
        iconColour: "text-emerald-500",
        description:
          "Admins can view pending, collected, and upcoming payments in a single dashboard.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Fee Tracking Made Easy ",
    imgUrl:"/image/Fees_management.png",
    features: [
      {
        id: 1,
        icon: FaMobileAlt,
        title: "Pay from Anywhere",
        description:
          "School Fee, Transport Fees, Uniform Fees, Books Fee, Hostel, Canteen and Other Fees",
      },
      {
        id: 2,
        icon: IoMdTimer,
        title: "Real-Time Updates",
        description:
          "Payment confirmations, receipts, and reminders are instantly available on mobile.",
      },
    ],
  },

  cta: ["Start Free Today", "Book a Demo Now", "Request Your Free Trial"],
};
