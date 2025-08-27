import { FaCalendarAlt, FaClock, FaCogs, FaExchangeAlt, FaMobileAlt } from "react-icons/fa";
import { IoMdTimer } from "react-icons/io";
import { MdDashboardCustomize, MdOutlineDashboardCustomize, MdOutlineFingerprint } from "react-icons/md";
import { RiStackFill, RiStackOverflowFill, RiStackshareFill } from "react-icons/ri";
import { SiMaterialdesign, SiMaterialdesignicons } from "react-icons/si";

export const timetableSubstitutionManagement = {
  title: "Best Timetable & Substitution Management Software – AI Integrated",
    title2:"Benefits of Top AI-Powered Timetable & Substitution Management Software for Schools & Faculty",

  img: <FaClock />,
  gradient: "from-pink-500 to-rose-500",
  bgColor: "bg-pink-50",
  desc: "Digital timetable system for schools that prevents chaos, saves admin time, and ensures smooth learning even with absences.",
  why: "Creating and maintaining a timetable for schools and colleges is no small task. Balancing subjects, faculty availability, classrooms, and sudden changes often takes hours of manual work. Our AI-Integrated Timetable & Substitution Management Software removes the stress by automating schedules and instantly managing substitutions.",
  herosection:{
    title:"Problems of Manual Timetable Scheduling",
    dec:"Schools that depend on manual timetable preparation face common difficulties"
  },
  features: [
    {
      fe: "Automatic Timetable Generation",
      icons: FaCalendarAlt ,
      description:
        "Generate optimized timetables automatically based on subjects, teacher availability, and classroom capacity.",
    },
    {
      fe: "Instant Substitution Management",
      icons: FaExchangeAlt ,
      description:
        "Automatically assign substitute teachers in case of absences and notify staff and students instantly.",
    },
    {
      fe: "Mobile App Access for Staff & Students",
      icons: FaMobileAlt,
      description:
        "Teachers, students, and parents can view updated timetables anytime on their mobile devices.",
    },
    {
      fe: "Custom Rules for Workload & Priorities",
      icons: FaCogs ,
      description:
        "Set custom rules such as maximum classes per teacher, priority subjects, and free periods to balance workloads.",
    },
  ],

  caseStudy: {
    school: "CBSE School in Delhi (1,500 students)",
    before:
      "Teacher absences left classes unattended, and timetables were chaotic.",
    after: [
      "90% faster timetable updates",
      "No class left unattended",
      "Balanced teacher workloads",
    ],
  },
  benefits: [
    {
      title: "Save Admin Time with Automation",
      description:
        "Automate timetable creation and substitution management to reduce manual work and errors.",
    },
    {
      title: "Ensure Continuous Learning",
      description:
        "Instant substitution notifications prevent classes from being left unattended, ensuring uninterrupted learning.",
    },
    {
      title: "Increase Teacher & Student Satisfaction",
      description:
        "Balanced workloads and clear schedules improve teacher productivity and student experience.",
    },
    {
      title: "Real-Time Updates",
      description:
        "Teachers, students, and parents get immediate notifications on timetable changes and substitutions.",
    },
    {
      title: "Customizable Scheduling Rules",
      description:
        "Set priorities for subjects, teacher limits, and free periods to optimize teaching and learning.",
    },
    {
      title: "Transparent Communication",
      description:
        "All timetable and substitution updates are visible to staff and students, reducing confusion and miscommunication.",
    },
  ], 
 faqSectionData: {
  title: "Got Questions? We've Got Answers!",
  subtitle:
    "Dive into our frequently asked questions to learn more about MyLeading Campus®",
  faqs: [
    {
      id: 1,
      question: "How much time does it take to generate a timetable?",
      answer:
        "Most schools can generate a complete timetable within minutes once preferences are set.",
    },
    {
      id: 2,
      question: "Can we make changes after the timetable is generated?",
      answer:
        "Yes. The system allows manual edits while still keeping balance and accuracy intact.",
    },
    {
      id: 3,
      question: "How do teachers get substitution alerts?",
      answer:
        "Teachers receive instant notifications on their mobile app or web portal whenever they are assigned a substitution.",
    },
    {
      id: 4,
      question: "Does it support multiple campuses or branches?",
      answer:
        "Yes, schools with multiple branches can manage all timetables from one centralized system.",
    },
    {
      id: 5,
      question: "Is training required to use this software?",
      answer:
        "No heavy training needed. It’s user-friendly, and most staff members can start using it on day one.",
    },
  ],
},
FeaturesDataOfLaptop : {
  title: "AI-Powered Timetable Generation – Automated and Simple",
  features: [
    {
      id: 1,
      icon: SiMaterialdesignicons, 
      title: "Smart Timetable Creation",
      description:
        "Our software uses advanced rules to generate a balanced and accurate timetable in just a few clicks. It considers subject load, teacher preferences, classroom availability, and school policies, ensuring the most efficient schedule possible.",
    },
    {
      id: 2,
      icon: RiStackOverflowFill, 
      title: "Ready-to-Use & Editable",
      description:
        "What you get is a ready-to-use timetable that’s accurate, transparent, and easy to edit if required. No stress, no wasted hours.",
    },
    {
      id: 3,
      icon: MdOutlineDashboardCustomize,
      title: "Free Trial",
      description:
        "Get Started with a 30-Day Free Trial and experience hassle-free timetable management.",
    },
  ],
},

FeaturesDataMobile :{
  title: "Automatic Substitution Alerts for Teachers – Real-Time Notifications",
  features: [
    {
      id: 1,
      icon: MdOutlineFingerprint, 
      title: "Instant Substitution Allocation",
      description:
        "When a teacher is absent, the system instantly identifies free faculty and allocates them for substitution.",
    },
    {
      id: 2,
      icon: IoMdTimer, 
      title: "Real-Time Alerts",
      description:
        "Teachers receive real-time alerts via mobile app or web dashboard, ensuring they are always informed before stepping into class.",
    },
    {
      id: 3,
      icon: RiStackshareFill, 
      title: "Efficient Management",
      description:
        "No rushing between staff rooms, no confusion — just smooth and efficient management that saves everyone’s time.",
    },
  ],
},

  cta: ["Contact Us today", "Book a Free Demo"],
};
