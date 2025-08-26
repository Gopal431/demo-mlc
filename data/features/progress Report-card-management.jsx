import { FaBook, FaCalculator, FaChartBar, FaFileInvoice, FaGraduationCap, FaMobileAlt } from "react-icons/fa";

export const progressReportCardManagement =  {
    title: "Progress Report Card Management",
     gradient: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
    img: <FaGraduationCap />,
    desc: "Smarter, digital, and customizable report cards for schools to save teacher time and give parents clear insights.",
    why: "Traditional report cards are slow, error-prone, and hard to customize. Our system makes the process fast, accurate, and professional.",
    features:  [
  {
    fe: "Customizable for CBSE, ICSE, IB, State boards",
    icons: <FaBook />, 
    description: "Easily configure report cards according to different education boards and grading systems."
  },
  {
    fe: "Auto-Calculation of Grades & Percentages",
    icons: <FaCalculator />, 
    description: "Automatically compute grades, percentages, and overall performance without manual effort."
  },
  {
    fe: "Digital Report Cards Accessible via App",
    icons: <FaMobileAlt />, 
    description: "Parents and students can view report cards anytime through the mobile app, enhancing accessibility."
  },
  {
    fe: "Graphical Insights on Performance",
    icons: <FaChartBar />, 
    description: "Visualize student performance trends with graphs for easier understanding and analysis."
  },
  {
    fe: "Bulk Generation for All Classes",
    icons: <FaFileInvoice />, 
    description: "Generate report cards for entire classes or grades at once, saving time and effort for teachers."
  },
],
    caseStudy: {
      school: "Green Valley High School, Bangalore",
      before: "Teachers spent weeks finalizing report cards; mistakes caused frustration.",
      after: [
        "Report cards generated in 3 days instead of 3 weeks",
        "Parents appreciated mobile-friendly cards",
        "Teachers spent more time guiding students",
      ],
      quote: "This feature is a game-changer during exam season.",
    },
benefits: [
  {
    title: "Save Weeks of Teacher Effort",
    description: "Automate report card generation to reduce weeks of manual work, allowing teachers to focus on teaching."
  },
  {
    title: "Give Parents Clear & Digital Cards",
    description: "Provide parents with easy-to-read, mobile-friendly digital report cards for full transparency."
  },
  {
    title: "Improve Student Learning with Insights",
    description: "Graphical analysis and performance trends help teachers guide students effectively."
  },
  {
    title: "Error-Free Calculations",
    description: "Automatically compute grades and percentages, eliminating mistakes in report cards."
  },
  {
    title: "Bulk Report Generation",
    description: "Generate report cards for all classes or grades in a single click, saving administrative time."
  },
  {
    title: "Accessible Anytime, Anywhere",
    description: "Digital report cards can be accessed by parents and students anytime through the app."
  },
]
,
    cta: ["Contact Us today", "Request a Free Demo"],
  }