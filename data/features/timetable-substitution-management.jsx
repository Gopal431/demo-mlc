import { FaCalendarAlt, FaClock, FaCogs, FaExchangeAlt, FaMobileAlt } from "react-icons/fa";

export const timetableSubstitutionManagement = {
  title: "Timetable & Substitution Management",
  img: <FaClock />,
  gradient: "from-pink-500 to-rose-500",
  bgColor: "bg-pink-50",
  desc: "Digital timetable system for schools that prevents chaos, saves admin time, and ensures smooth learning even with absences.",
  why: "Balancing subjects, teachers, and classrooms manually is chaotic. A smart timetable system ensures continuity and efficiency.",
  features: [
    {
      fe: "Automatic Timetable Generation",
      icons: <FaCalendarAlt />,
      description:
        "Generate optimized timetables automatically based on subjects, teacher availability, and classroom capacity.",
    },
    {
      fe: "Instant Substitution Management",
      icons: <FaExchangeAlt />,
      description:
        "Automatically assign substitute teachers in case of absences and notify staff and students instantly.",
    },
    {
      fe: "Mobile App Access for Staff & Students",
      icons: <FaMobileAlt />,
      description:
        "Teachers, students, and parents can view updated timetables anytime on their mobile devices.",
    },
    {
      fe: "Custom Rules for Workload & Priorities",
      icons: <FaCogs />,
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
  cta: ["Contact Us today", "Book a Free Demo"],
};
