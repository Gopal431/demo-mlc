import { FaChartLine, FaEnvelope, FaFileInvoiceDollar, FaFingerprint, FaMoneyCheckAlt, FaUser, FaUserTie } from "react-icons/fa";

export const employeePayrollManagement =  {
    title: "Employee & Payroll Management",
    img: <FaUserTie />,
     gradient: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
    desc: "A complete HR & Payroll solution for schools that automates staff management, attendance, payroll, and compliance.",
    why: "Manual staff & payroll management causes delays, errors, and compliance risks. A digital HR solution saves time and ensures fairness.",
  features: [
  {
    fe: "Digital Employee Profiles",
    icons: <FaUser />, 
    description: "Create centralized digital profiles for all staff including personal details, qualifications, and bank info."
  },
  {
    fe: "Biometric Attendance & Leave Tracking",
    icons: <FaFingerprint />, 
    description: "Monitor staff attendance and leave requests via biometric or app-based tracking, integrated with payroll."
  },
  {
    fe: "Error-Free Payroll Processing",
    icons: <FaMoneyCheckAlt />, 
    description: "Generate salaries with automatic calculations for allowances, deductions, PF, ESI, PT, TDS, and overtime."
  },
  {
    fe: "Built-in Statutory Compliance (PF, ESI, TDS)",
    icons: <FaFileInvoiceDollar />, 
    description: "Ensure compliance with labor laws, with auto-generated reports ready for audits and government filing."
  },
  {
    fe: "Performance & Appraisal Management",
    icons: <FaChartLine />, 
    description: "Track staff achievements, attendance, and appraisals to support promotions and increments."
  },
  {
    fe: "In-App Staff Communication",
    icons: <FaEnvelope />, 
    description: "Send salary slips, announcements, or policy updates directly via app, email, or SMS for transparency."
  },
],

    caseStudy: {
      school: "St. Mary’s High School, Kolkata",
      before: "5+ days monthly for payroll of 120 staff, errors and delays were common.",
      after: [
        "Payroll done in <2 hours",
        "Zero errors in salaries",
        "Staff view payslips online",
      ],
      quote: "Happier staff, better efficiency, and peace of mind for management.",
    },
benefits: [
  {
    title: "Save Time & Paperwork",
    description: "Automate HR and payroll tasks to reduce manual work and focus on core school operations."
  },
  {
    title: "Ensure Accurate Salary & Compliance",
    description: "Generate salaries with automatic calculations and maintain full statutory compliance effortlessly."
  },
  {
    title: "Improve Staff Satisfaction",
    description: "Timely salary processing, easy leave management, and transparent communication boost employee morale."
  },
  {
    title: "Transparent HR Process",
    description: "All staff records, performance appraisals, and communications are centralized and accessible digitally."
  },
  {
    title: "Performance Tracking & Appraisals",
    description: "Monitor staff performance and achievements to support promotions, increments, and professional growth."
  },
  {
    title: "Seamless Communication",
    description: "Send salary slips, announcements, and policy updates directly via app, email, or SMS for instant communication."
  },
]
,
    cta: ["Book a Free Demo", "Contact Us"],
  }