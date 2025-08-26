import { FaBuilding, FaChartLine, FaMoneyBillWave, FaRegCalendarCheck } from "react-icons/fa";

export const insightfulReports = {
    title: "Insightful Reports",
    img: <FaChartLine />,
     gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
    desc: "Turn scattered school data into meaningful insights with automated reports for better decision-making.",
    why: "Schools generate a mountain of data, but manual reporting wastes time. Insightful reports provide instant, clear dashboards.",
   features: [
  {
    fe: "Student Progress Reports",
    icons: <FaChartLine />, 
    description: "Track student performance trends over time, subject-wise analysis, and overall academic growth."
  },
  {
    fe: "Fee & Finance Summaries",
    icons: <FaMoneyBillWave />, 
    description: "Get instant insights into fee collections, pending dues, and school expenses without manual calculations."
  },
  {
    fe: "Attendance Overviews",
    icons: <FaRegCalendarCheck />, 
    description: "Monitor daily, weekly, or monthly attendance for students and staff with automated reports."
  },
  {
    fe: "Operational Insights (Transport, Hostel, Canteen)",
    icons: <FaBuilding />, 
    description: "Analyze school operations like bus usage, hostel occupancy, and canteen sales to improve efficiency."
  },
],

    caseStudy: {
      school: "Partner school in Delhi",
      before: "Took 4–5 days to compile fee and exam data manually.",
      after: [
        "Reports ready in minutes",
        "Automatic defaulter flags",
        "Management spends time planning, not calculating",
      ],
    },
  benefits: [
  {
    title: "Save Hundreds of Admin Hours",
    description: "Automate report generation to drastically reduce manual work for teachers and administrators."
  },
  {
    title: "Enable Quick, Confident Decisions",
    description: "Get instant insights from real-time reports to make informed decisions efficiently."
  },
  {
    title: "Build Accountability Culture",
    description: "Transparent data and automated tracking promote responsibility among staff and management."
  },
  {
    title: "Comprehensive Student Insights",
    description: "Track student performance, attendance, and progress trends to improve learning outcomes."
  },
  {
    title: "Financial Clarity",
    description: "Easily monitor fees, expenses, and operational costs to maintain financial transparency."
  },
  {
    title: "Operational Efficiency",
    description: "Analyze transport, hostel, and canteen operations to optimize school resources and processes."
  },
]
,
    cta: ["Request a Free Demo", "Contact Us"],
  }