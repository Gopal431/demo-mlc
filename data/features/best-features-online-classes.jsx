import { 
  FaChalkboardTeacher, 
  FaVideo, 
  FaRegCalendarAlt, 
  FaUsers, 
  FaMobileAlt, 
  FaRegFileVideo, 
  FaUserCheck 
} from "react-icons/fa";
import { MdOutlineScreenShare, MdOutlineSchedule, MdDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { SiMaterialdesign } from "react-icons/si";

export const onlineClassesManagement = {
  title: "Best AI-Enabled Online Classes Management System for Schools & Colleges",
  title2: "Benefits of Online Classes Management System for Schools, Teachers & Parents",
  img: <FaChalkboardTeacher />,
  gradient: "from-green-500 to-emerald-500",
  bgColor: "bg-green-50",
  desc: "Seamlessly conduct, monitor, and analyze online classes with built-in AI-powered tools. No third-party apps required.",
  why: "Ensure uninterrupted learning with a secure, all-in-one online class solution. Teachers, students, and parents stay connected through one integrated system.",
  
  herosection: {
    title: "Why Online Classes Matter",
    dec: "Learning should never stop — whether students are in the classroom or at home. Our online class system ensures continuity, flexibility, and zero disruption in learning.",
  },

  features: [
    {
      fe: "Built-in Live Class System",
      icons: FaVideo,
      description:
        "Conduct classes without depending on Zoom, Google Meet, or other apps.",
    },
    {
      fe: "Screen Share & Live Chat",
      icons: MdOutlineScreenShare,
      description:
        "Teachers can share screens, chat, and interact with students in real time.",
    },
    {
      fe: "Automatic Attendance",
      icons: FaUserCheck,
      description:
        "Attendance is marked automatically as soon as students join.",
    },
    {
      fe: "Recorded Sessions",
      icons: FaRegFileVideo,
      description:
        "Every class is auto-recorded for students to revisit anytime.",
    },
    {
      fe: "Cross-Device Access",
      icons: FaMobileAlt,
      description:
        "Students and teachers can join seamlessly via mobile or desktop.",
    },
  ],

  caseStudy: {
    school: "Greenfield Academy, Bangalore",
    before:
      "Teachers struggled to manage online classes using third-party apps, causing disruptions and loss of attendance records.",
    after: [
      "All classes conducted directly via school ERP",
      "Students and teachers joined smoothly from mobile",
      "Recorded sessions available for revision",
    ],
    quote:
      "Our online classes are now smooth and well-organized. Parents love the transparency, and teachers save hours every week.",
  },

  benefits: [
    {
      title: "Seamless Integration",
      description:
        "Classes are managed directly from ERP, no external tools required.",
    },
    {
      title: "Easy for Teachers",
      description:
        "Schedule, start, and manage classes in a few clicks with built-in tools.",
    },
    {
      title: "Parental Transparency",
      description:
        "Parents can track attendance and class participation anytime.",
    },
    {
      title: "Recorded Learning",
      description:
        "Students can replay recorded sessions to revise concepts anytime.",
    },
    {
      title: "Attendance & Reports",
      description:
        "Daily and monthly attendance reports are auto-generated.",
    },
    {
      title: "Engagement Analytics",
      description:
        "AI-powered insights track participation and highlight weak areas.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle: "Learn more about how our Online Classes Management System works.",
    faqs: [
      {
        id: 1,
        question: "Do students need to download extra apps?",
        answer:
          "No. Students join directly through the ERP system or mobile app — no Zoom, Google Meet, or external apps needed.",
      },
      {
        id: 2,
        question: "Can parents see attendance?",
        answer:
          "Yes. Attendance is marked automatically and parents can access attendance reports anytime.",
      },
      {
        id: 3,
        question: "Are the classes recorded?",
        answer:
          "Yes. Every session is auto-recorded and available for future reference.",
      },
      {
        id: 4,
        question: "Is it easy for teachers?",
        answer:
          "Absolutely. Teachers can schedule and start classes in just a few clicks with built-in screen share and chat.",
      },
      {
        id: 5,
        question: "Will it work on mobile?",
        answer:
          "Yes. The system is optimized for both desktop and mobile for uninterrupted learning anywhere.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How Online Classes Work",
    features: [
      {
        id: 1,
        icon: MdOutlineSchedule,
        iconColour: "text-green-600",
        title: "Teacher Scheduling",
        description:
          "Teachers can create and manage classes directly via the ERP system.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Auto Cloud Storage",
        iconColour: "text-indigo-500",
        description:
          "All classes are auto-recorded and stored securely in the cloud.",
      },
      {
        id: 3,
        icon: MdDashboardCustomize,
        title: "Analytics Dashboard",
        iconColour: "text-emerald-500",
        description:
          "Admins monitor attendance, participation, and engagement trends in real time.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Online Classes on Mobile",
     imgUrl:"/image/School-ERP.png",
    features: [
      {
        id: 1,
        icon: FaUsers,
        title: "One-Tap Access",
        description:
          "Students can join classes instantly from the mobile app.",
      },
      {
        id: 2,
        icon: IoMdTime,
        title: "Instant Notifications",
        description:
          "Parents and students get reminders and attendance alerts instantly.",
      },
    ],
  },

  cta: ["Request a Free Demo", "Book a Live Session", "Start Free Today"],
};
