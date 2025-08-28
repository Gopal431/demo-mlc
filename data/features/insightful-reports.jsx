import { FaChartLine, FaChalkboardTeacher, FaUserGraduate, FaRegComments, FaShareSquare } from "react-icons/fa";
import { MdOutlineAssessment, MdOutlineSchool, MdOutlineDashboard } from "react-icons/md";
import { RiFileList3Line, RiDashboardLine } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";

export const insightfulReports = {
  title: "Top AI Integrated Smart Reports & Analytics for Schools",
  title2: "Benefits of AI Integrated Smart Reports & Analytics for Schools, Teachers & Parents",
  img: <FaChartLine />,
  gradient: "from-green-500 to-teal-500",
  bgColor: "bg-green-50",
  desc: "Turn raw school data into powerful insights. Our AI-powered reporting system helps schools, teachers, and parents make faster, smarter, and data-driven decisions.",
  why: "Schools generate massive amounts of data daily — but without proper analysis, it goes unused. Our AI-Integrated Smart Reports transform data into meaningful insights that boost student performance, financial planning, and overall school growth.",

  herosection: {
    title: "Why Schools Need Smart Reports & Analytics",
    dec: "Reports are more than just numbers. They reveal patterns in performance, attendance, and finances. With AI-powered insights, schools can improve planning, reduce inefficiencies, and help students succeed.",
  },

  features: [
    {
      fe: "Academic Performance Reports",
      icons: MdOutlineAssessment,
      description:
        "Track subject-wise performance, strengths, weaknesses, and long-term academic improvement.",
    },
    {
      fe: "Attendance Analytics",
      icons: MdOutlineSchool,
      description:
        "Monitor attendance trends across classes and terms with actionable insights.",
    },
    {
      fe: "Fee Collection Reports",
      icons: RiFileList3Line,
      description:
        "View clear fee collection status, pending dues, and payment forecasts for better budgeting.",
    },
    {
      fe: "AI-Powered Forecasting",
      icons: FaChartLine,
      description:
        "Predict future performance, finances, and resources using smart AI algorithms.",
    },
    {
      fe: "Custom Dashboards",
      icons: MdOutlineDashboard,
      description:
        "Admins and teachers get personalized dashboards to track KPIs that matter most.",
    },
  ],

  caseStudy: {
    school: "Greenfield Academy",
    before:
      "School leaders struggled to make sense of scattered attendance, fees, and exam data. Reports took weeks to prepare and lacked accuracy.",
    after: [
      "Consolidated reports generated instantly with zero manual effort",
      "AI forecasts improved financial and academic planning",
      "Teachers and parents received transparent insights into student progress",
    ],
    quote:
      "Smart Analytics has completely transformed the way we run our school — decisions are now data-driven, not guesswork.",
  },

  benefits: [
    {
      title: "For Schools/Admins",
      description:
        "Smarter planning with accurate data-driven insights across academics, finance, and operations.",
    },
    {
      title: "For Teachers",
      description:
        "Monitor class performance easily and plan remedial teaching based on real trends.",
    },
    {
      title: "For Parents",
      description:
        "Transparent reports on academic progress, attendance, and overall participation.",
    },
    {
      title: "AI Forecasting",
      description:
        "Plan budgets, resources, and student support with predictive insights.",
    },
    {
      title: "Custom Reports",
      description:
        "Generate academic, attendance, transport, and HR reports tailored to your needs.",
    },
    {
      title: "Anytime Access",
      description:
        "Reports and dashboards accessible via web or mobile for all stakeholders.",
    },
  ],

  faqSectionData: {
    title: "FAQs on Smart Reports & Analytics",
    subtitle:
      "Get answers to common questions about how our AI-Integrated Analytics helps schools grow smarter.",
    faqs: [
      {
        id: 1,
        question: "What types of reports can schools generate?",
        answer:
          "Schools can generate academic, attendance, fee, transport, and HR reports instantly.",
      },
      {
        id: 2,
        question: "Can reports be customized?",
        answer:
          "Yes. Schools can design and filter reports based on their specific requirements.",
      },
      {
        id: 3,
        question: "How do these reports help teachers?",
        answer:
          "Teachers can monitor performance trends and plan remedial teaching effectively.",
      },
      {
        id: 4,
        question: "Are reports accessible to parents?",
        answer:
          "Yes. Parents can view academic and attendance reports directly via mobile or web portal.",
      },
      {
        id: 5,
        question: "Does it support forecasting?",
        answer:
          "Yes. AI-powered analytics provide predictive insights for better planning and growth.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How AI Smart Reports Work",
    features: [
      {
        id: 1,
        icon: RiDashboardLine,
        iconColour: "text-green-600",
        title: "Centralized Dashboard",
        description:
          "View all academic, attendance, and fee reports in a unified dashboard.",
      },
      {
        id: 2,
        icon: FaChartLine,
        title: "AI Insights",
        iconColour: "text-teal-500",
        description:
          "Discover trends and forecasts with AI-powered analytics and predictive models.",
      },
      {
        id: 3,
        icon: RiFileList3Line,
        title: "Custom Report Builder",
        iconColour: "text-green-400",
        description:
          "Generate tailored reports that match your school’s requirements.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Reports Anytime on Mobile",
    features: [
      {
        id: 1,
        icon: FaRegComments,
        title: "Teacher Feedback",
        description:
          "Parents and students can access detailed insights and remarks directly on mobile.",
      },
      {
        id: 2,
        icon: IoMdTime,
        title: "Instant Access",
        description:
          "Reports are available instantly after generation, anytime, anywhere.",
      },
    ],
  },

  cta: [
    "Start Free Today",
    "Book a Free Demo",
    "Request Your Free Trial",
    "Get Started Free Today",
  ],
};
