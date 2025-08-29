import { 
  FaMobileAlt, 
  FaChalkboardTeacher, 
  FaUserGraduate, 
  FaUsers, 
  FaBell, 
  FaUserCheck, 
  FaRegFileAlt, 
  FaMoneyCheckAlt 
} from "react-icons/fa";
import { MdOutlineEvent, MdDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { IoMdNotifications } from "react-icons/io";
import { SiMaterialdesign } from "react-icons/si";

export const mobileAppManagement = {
  title: "Best AI Integrated Dedicated Mobile App for Schools & Colleges",
  title2: "Benefits of Mobile App for Schools, Teachers, Students & Parents",
  img: <FaMobileAlt />,
  gradient: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  desc: "Connect teachers, students, and parents with one powerful mobile app. Share updates, track progress, manage fees, and conduct communication seamlessly.",
  why: "Schools today need instant communication and transparency. Our dedicated mobile app ensures teachers, students, and parents stay connected anytime, anywhere.",

  herosection: {
    title: "Why Mobile Apps are Important for Schools & Colleges",
    dec: "In today’s digital age, schools need more than just a website. Our AI-powered mobile app provides real-time updates, seamless communication, and instant access to information for everyone.",
  },

  features: [
    {
      fe: "Teacher’s App",
      icons: FaChalkboardTeacher,
      description:
        "Helps teachers take attendance, share homework, upload results, and communicate with parents instantly.",
    },
    {
      fe: "Student’s App",
      icons: FaUserGraduate,
      description:
        "Students get timetable, assignments, exam updates, and notices directly on their phone.",
    },
    {
      fe: "Parent’s App",
      icons: FaUsers,
      description:
        "Parents can check fees, results, attendance, and receive updates in real time.",
    },
    {
      fe: "Smart Notifications",
      icons: FaBell,
      description:
        "Important alerts and reminders are sent instantly to all users.",
    },
    {
      fe: "Digital Attendance",
      icons: FaUserCheck,
      description:
        "Teachers can mark student attendance digitally within seconds.",
    },
  ],

  caseStudy: {
    school: "St. Joseph’s International School, Pune",
    before:
      "Parents complained about missed updates, students forgot assignments, and teachers wasted time on paperwork.",
    after: [
      "Teachers share homework and results instantly",
      "Parents receive real-time updates on fees & attendance",
      "Students get reminders for classes & exams on the app",
    ],
    quote:
      "Our school is now completely digital. Communication gaps are gone, and parents trust us more than ever.",
  },

  benefits: [
    {
      title: "Saves Time for Teachers & Staff",
      description:
        "Teachers can manage attendance, homework, and communication with just a few taps.",
    },
    {
      title: "Builds Trust with Parents",
      description:
        "Real-time updates ensure parents stay connected with their child’s progress.",
    },
    {
      title: "Eco-Friendly & Paperless",
      description:
        "Reduces dependency on paper slips and manual records.",
    },
    {
      title: "Instant Access for Students",
      description:
        "Students get assignments, results, and notices on their phone without delays.",
    },
    {
      title: "Secure Fee Payments",
      description:
        "Parents can pay fees securely within the app — no queues, no delays.",
    },
    {
      title: "AI Smart Suggestions",
      description:
        "AI sends alerts for fees, timetable changes, attendance, and student progress.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle: "Learn more about how our AI-powered School Mobile App works.",
    faqs: [
      {
        id: 1,
        question: "Is the app easy for teachers and parents?",
        answer:
          "Yes. The app is designed with a simple and user-friendly interface for all age groups.",
      },
      {
        id: 2,
        question: "Can this app be used for both schools and colleges?",
        answer:
          "Absolutely. The app works seamlessly for both schools and colleges.",
      },
      {
        id: 3,
        question: "Is student data secure?",
        answer:
          "Yes. The app uses secure cloud storage with complete data protection.",
      },
      {
        id: 4,
        question: "Do parents need to pay extra to use the app?",
        answer:
          "No. The app comes as part of the school’s ERP system at no additional cost.",
      },
      {
        id: 5,
        question: "Does the app support fee payments?",
        answer:
          "Yes. Parents can pay fees directly through the app with secure gateways.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How the Mobile App Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-purple-600",
        title: "Seamless Integration",
        description:
          "Integrates with ERP, timetable, exams, and fee management.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud Storage",
        iconColour: "text-pink-500",
        description:
          "All reports, assignments, and results are securely stored in the cloud.",
      },
      {
        id: 3,
        icon: MdDashboardCustomize,
        title: "Admin Dashboard",
        iconColour: "text-emerald-500",
        description:
          "School admins get complete control with real-time analytics.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Mobile-First Features",
      imgUrl:"/image/School-ERP.png",
    features: [
      {
        id: 1,
        icon: FaRegFileAlt,
        title: "Digital Homework & Results",
        description: "Students and parents receive homework and results instantly.",
      },
      {
        id: 2,
        icon: MdOutlineEvent,
        title: "Events & Holidays",
        description:
          "Parents and students get notified of upcoming activities and holidays instantly.",
      },
      {
        id: 3,
        icon: IoMdNotifications,
        title: "Instant Alerts",
        description:
          "Smart AI notifications keep parents and students updated 24/7.",
      },
    ],
  },

  cta: ["Request a Free Demo", "Get Started Today", "Book a Live Demo"],
};
