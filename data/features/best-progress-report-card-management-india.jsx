import { FaClipboardList, FaRegComments, FaShareSquare, FaCalculator, FaChartBar } from "react-icons/fa";
import { 
  MdOutlineAssessment, 
  MdOutlineSchool, 
  MdOutlineRateReview   
} from "react-icons/md";
import { RiFilePaper2Line, RiDashboardLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";

export const progressReportCardManagement =  {
  title: "Number #1 Progress Report Card Management System for Schools & Colleges",
  title2: "Benefits of Digital Progress Report Card Management for Schools, Teachers & Parents",
  img: <FaClipboardList />,
  gradient: "from-indigo-500 to-purple-500",
  bgColor: "bg-purple-50",
  desc: "Generate, share, and analyze student report cards digitally. Ensure accuracy, transparency, and instant parent communication with our Report Card Management System.",
  why: "Manual report card preparation is time-consuming, error-prone, and stressful during exams. Our digital solution simplifies marks entry, automates calculations, and enables instant sharing with parents.",

  herosection: {
    title: "Why Schools Need Digital Report Card Management",
    dec: "Report cards are more than just marks — they reflect progress, feedback, and learning. With our system, schools can save time, avoid errors, and improve communication with parents instantly.",
  },

  features: [
    {
      fe: "Easy Marks Entry",
      icons: FaCalculator,
      description:
        "Teachers can enter marks quickly via web or mobile with automated calculations for totals and percentages.",
    },
    {
      fe: "Automated Result Generation",
      icons: MdOutlineAssessment,
      description:
        "Grades, percentages, and subject weightage are calculated instantly, ensuring 100% accuracy.",
    },
    {
      fe: "Custom Grading Patterns",
      icons: MdOutlineSchool,
      description:
        "Supports percentages, grades, or custom evaluation formats as per school policy.",
    },
    {
      fe: "Teacher Remarks",
      icons: MdOutlineRateReview,
      description:
        "Add subject-wise or overall teacher feedback to highlight student strengths and improvement areas.",
    },
    {
      fe: "Digital Sharing",
      icons: FaShareSquare,
      description:
        "Send report cards instantly via mobile apps, email, or web — no need to wait for PTMs or printing.",
    },
  ],

  caseStudy: {
    school: "Springfield International School",
    before:
      "Preparing report cards manually took weeks, with frequent errors and delays in sharing results with parents.",
    after: [
      "Report cards generated within hours instead of weeks",
      "Automated grades and calculations with zero errors",
      "Parents receive instant digital access via mobile",
    ],
    quote:
      "Digital report cards have transformed our exam process — parents are happier and teachers can focus on teaching instead of paperwork.",
  },

  benefits: [
    {
      title: "For Schools",
      description:
        "Faster, error-free report generation with easy digital record storage.",
    },
    {
      title: "For Teachers",
      description:
        "Less paperwork, automatic calculations, and more time for teaching.",
    },
    {
      title: "For Parents & Students",
      description:
        "Instant access to progress reports with detailed subject-wise feedback.",
    },
    {
      title: "Customizable Formats",
      description:
        "Supports percentage, grades, or custom evaluation systems as required.",
    },
    {
      title: "Motivational Feedback",
      description:
        "Teacher remarks ensure students feel guided and motivated, not just graded.",
    },
    {
      title: "Digital & Paper Options",
      description:
        "Share digitally with parents or print standardized/custom formats when needed.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Learn more about how our Digital Report Card Management System simplifies exams for schools, teachers, and parents.",
    faqs: [
      {
        id: 1,
        question: "Can we customize grading systems?",
        answer:
          "Yes. The system supports percentage, grades, or custom evaluation formats.",
      },
      {
        id: 2,
        question: "Are remarks and feedback included?",
        answer:
          "Yes. Teachers can add subject-wise or overall remarks easily.",
      },
      {
        id: 3,
        question: "Can parents view old report cards?",
        answer:
          "Yes. All records are stored digitally and can be accessed anytime.",
      },
      {
        id: 4,
        question: "Is it suitable for both schools and colleges?",
        answer:
          "Absolutely. It works for any exam structure or evaluation system.",
      },
      {
        id: 5,
        question: "Can report cards be printed if needed?",
        answer:
          "Yes. Schools can print standardized or customized report card formats.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How Digital Report Cards Work",
    features: [
      {
        id: 1,
        icon: RiDashboardLine,
        iconColour: "text-indigo-600",
        title: "Centralized Dashboard",
        description:
          "Admins and teachers manage marks, grades, and reports in one place.",
      },
      {
        id: 2,
        icon: FaChartBar,
        title: "Performance Analytics",
        iconColour: "text-purple-500",
        description:
          "Track student progress with subject-wise performance and trends.",
      },
      {
        id: 3,
        icon: RiFilePaper2Line,
        title: "Digital Records",
        iconColour: "text-indigo-400",
        description:
          "Store and retrieve report cards securely without bulky files.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Report Cards on Mobile",
     imgUrl:"/image/Progress report card.png",
    features: [
      {
        id: 1,
        icon: FaRegComments,
        title: "Teacher Feedback",
        description:
          "Parents can read detailed teacher remarks directly on their phone.",
      },
      {
        id: 2,
        icon: IoMdTime,
        title: "Instant Access",
        description:
          "Report cards are shared immediately after publishing — no waiting for PTMs.",
      },
    ],
  },

  cta: ["Start Free Today", "Book a Free Demo", "Request Your Free Trial", "Get Started Free Today"],
};