import BiometricAttendanceManagement from "@/components/feature-landing-pages/BiometricAttendanceManagement";
import {
  FaRegCalendarCheck,
  FaFingerprint,
  FaMobileAlt,
  FaRegFileAlt,
  FaMoneyCheckAlt,
  FaUserCheck,
} from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdDashboardCustomize, MdOutlineFingerprint } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { SiMaterialdesign } from "react-icons/si";
export const biometricAttendanceManagement = {
  title: "Best Biometric Attendance System for Schools & Colleges",
  title2:"  Benefits of Biometric Attendance System for Schools, Teachers & Parents",
  img: <FaRegCalendarCheck />,
  gradient: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  desc: "Automated attendance for students, teachers, and staff using biometrics for accuracy, security, and transparency.",
  why: "Track student & staff attendance with 100% accuracy using biometric attendance management. Secure, fast & paperless solution for schools & colleges.",
   herosection:{
    title:"Why Schools Need Biometric Attendance",
    dec:"Schools and colleges face daily challenges in marking attendance fairly and quickly. Traditional methods are often manipulated, while manual records can be lost or miscalculated."
  },
  features: [
    {
      fe: "Fingerprint / RFID / Face Recognition integration",
      icons: FaFingerprint,
      description:
        "Mark attendance accurately using biometric methods like fingerprint, RFID cards, or facial recognition.",
    },
    {
      fe: "Real-time sync with mobile apps",
      icons: FaMobileAlt,
      description:
        "Attendance data is instantly updated on mobile apps for parents, teachers, and admin staff.",
    },
    {
      fe: "Automatic reports for latecomers and absentees",
      icons: FaRegFileAlt,
      description:
        "Generate detailed attendance reports automatically to identify late arrivals and absentees.",
    },
    {
      fe: "Integration with payroll for staff",
      icons: FaMoneyCheckAlt,
      description:
        "Seamlessly sync attendance with payroll to calculate salaries accurately without manual input.",
    },
    {
      fe: "Zero chance of proxy attendance",
      icons: FaUserCheck,
      description:
        "Prevent fraudulent attendance marking with secure biometric verification methods.",
    },
  ],
  caseStudy: {
    school: "Sunrise Public School, Delhi",
    before:
      "Teachers spent 10–15 minutes daily marking attendance, wasting class hours.",
    after: [
      "Attendance marked in seconds",
      "Parents notified instantly on entry",
      "Payroll synced automatically",
    ],
    quote:
      "We saved almost 50 hours a month that now goes into teaching, not paperwork.",
  },
  benefits: [
    {
      title: "Quick & Accurate Attendance",
      description:
        "Mark student and staff attendance instantly with biometric verification, saving time and reducing errors.",
    },
    {
      title: "Parents Stay Informed in Real Time",
      description:
        "Send instant notifications to parents about attendance, late arrivals, or absences for transparency and peace of mind.",
    },
    {
      title: "Less Paperwork, More Teaching Time",
      description:
        "Automate attendance tracking and reporting so teachers can focus on teaching rather than administrative tasks.",
    },
    {
      title: "Seamless Payroll Integration",
      description:
        "Sync attendance data automatically with payroll, ensuring accurate salary calculations and saving HR time.",
    },
    {
      title: "Eliminate Proxy Attendance",
      description:
        "Secure biometric verification prevents students from marking attendance on behalf of others.",
    },
    {
      title: "Detailed Reports for Administration",
      description:
        "Generate real-time attendance reports for students, classes, or entire school to track trends and performance.",
    },
  ],
  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Dive into our frequently asked questions to learn more about MyLeading Campus®",
    faqs: [
      {
        id: 1,
        question: "Is biometric attendance safe for children?",
        answer:
          "Yes. Our system uses harmless fingerprint or face scan technology, which is 100% safe and widely used worldwide.",
      },
      {
        id: 2,
        question: "What if a student forgets to mark attendance?",
        answer:
          "The system allows manual override by the admin with proper authorization, ensuring no records are lost.",
      },
      {
        id: 3,
        question: "Can parents see attendance in real time?",
        answer:
          "Absolutely. Parents receive instant updates through the school’s mobile app or SMS/WhatsApp alerts.",
      },
      {
        id: 4,
        question: "Does it work without internet?",
        answer:
          "Yes. Data is stored locally and auto-syncs with the cloud once internet is available.",
      },
      {
        id: 5,
        question: "How long does setup take?",
        answer: "Installation is quick, and most schools go live within a day.",
      },
    ],
  },
   FeaturesDataOfLaptop:{
  title: "How Biometric Attendance Works",
  features: [
    {
      id: 1,
      icon: SiMaterialdesign ,
      iconColour:"text-blue-600",
      title: "Seamless Integration",
      description:
        "Works smoothly with your existing ERP, payroll, and ID system.",
    },
    {
      id: 2,
      icon: RiStackFill ,
      title: "Cloud Storage",
      iconColour: "text-red-500",
      description: "Safe, secure, and accessible anytime, anywhere.",
    },
    {
      id: 3,
      icon: MdDashboardCustomize ,
      title: "Custom Reports",
      iconColour: "text-teal-500",
      description:
        "Generate daily, monthly, or yearly reports in a single click.",
    },
  ],
},
 FeaturesDataMobile :{
  title: "Key Features of Our Biometric System",
  features: [
    {
      id: 1,
      icon: MdOutlineFingerprint  ,
      title: "Fingerprint & Face Recognition",
      description: "Quick, contactless options for all age groups.",
    },
    {
      id: 2,
      icon: IoMdTimer,
      title: "Real-Time Updates",
      description:
        "Attendance data reflects instantly on admin dashboards and mobile apps.",
    },
  ],
},



  cta: ["Contact Us for details", "Book a Free Demo"],
};
