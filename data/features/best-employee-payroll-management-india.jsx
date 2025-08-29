import { FaUserTie, FaMoneyCheckAlt, FaFileInvoiceDollar, FaClipboardCheck, FaRegCalendarCheck } from "react-icons/fa";
import { MdOutlineSecurity, MdOutlineHowToReg, MdOutlineSummarize } from "react-icons/md";
import { RiSecurePaymentLine } from "react-icons/ri";
import { IoMdTimer } from "react-icons/io";
export const employeePayrollManagement ={
  title: "Free Employee & Payroll Management Software for Schools",
  title2: "Benefits of Digital Payroll & Employee Management System for Schools, Staff & Management",
  img: <FaUserTie />,
  gradient: "from-emerald-500 to-green-500",
  bgColor: "bg-green-50",
  desc: "Manage staff records, attendance, payroll, and compliance seamlessly with our HR & Payroll Management System. Ensure accurate salary disbursement, compliance, and staff trust without manual errors.",
  why: "Manual payroll management often leads to incorrect salary calculations, delays in disbursing salaries, compliance mistakes, and staff dissatisfaction. A digital payroll solution makes everything smooth, fast, and transparent.",

  herosection: {
    title: "Why Schools Need Digital Payroll & Employee Management",
    dec: "Payroll is not just salary slips — it’s about staff satisfaction, compliance, and trust. Our system streamlines HR, payroll, and attendance into one secure platform for error-free management.",
  },

  features: [
    {
      fe: "Staff Profiles & Records",
      icons: FaClipboardCheck,
      description:
        "Maintain complete staff profiles with personal details, job history, attendance, and payroll data in one secure place.",
    },
    {
      fe: "Attendance & Leave Integration",
      icons: FaRegCalendarCheck,
      description:
        "Link attendance directly with payroll for accurate salary calculations and real-time leave balance tracking.",
    },
    {
      fe: "Automated Salary Calculations",
      icons: FaMoneyCheckAlt,
      description:
        "Generate salaries automatically with allowances, deductions, PF, ESI, and tax compliance built-in.",
    },
    {
      fe: "Digital Payslips",
      icons: FaFileInvoiceDollar,
      description:
        "Provide employees with digital payslips accessible anytime via mobile or web.",
    },
    {
      fe: "Compliance Management",
      icons: MdOutlineSummarize,
      description:
        "Stay compliant with PF, ESI, TDS, and tax rules through automatic updates and accurate reports.",
    },
  ],

  caseStudy: {
    school: "St. Mary’s School, Delhi",
    before:
      "Payroll was managed manually with spreadsheets, leading to delays, errors in salary calculations, and compliance issues.",
    after: [
      "Salaries processed on time with 100% accuracy",
      "Staff access digital payslips through mobile",
      "PF & TDS compliance automated, reducing admin burden",
    ],
    quote:
      "Our staff payroll went from a week-long manual process to a smooth one-day digital workflow — staff satisfaction has improved tremendously.",
  },

  benefits: [
    {
      title: "For Schools",
      description:
        "Streamlined HR operations, accurate payroll, and effortless compliance reporting.",
    },
    {
      title: "For Staff",
      description:
        "On-time salaries, transparent leave tracking, and instant access to payslips.",
    },
    {
      title: "For Management",
      description:
        "Reduced paperwork, better payroll control, and improved staff trust.",
    },
    {
      title: "Accurate Payroll",
      description:
        "No more errors in salary calculation — attendance and leave are auto-integrated.",
    },
    {
      title: "Easy Compliance",
      description:
        "PF, ESI, and TDS handled automatically, ensuring schools stay compliant with zero effort.",
    },
    {
      title: "Cloud-Based & Secure",
      description:
        "All employee and payroll records stored securely in the cloud with restricted access.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Check our frequently asked questions to learn more about Payroll & Employee Management for Schools",
    faqs: [
      {
        id: 1,
        question: "Can this system handle teaching and non-teaching staff separately?",
        answer:
          "Yes. It manages payroll for all categories of staff with role-based rules.",
      },
      {
        id: 2,
        question: "Does it support compliance like PF and TDS?",
        answer:
          "Yes. The system auto-calculates PF, ESI, TDS, and other statutory deductions.",
      },
      {
        id: 3,
        question: "How are salary slips shared with employees?",
        answer:
          "Salary slips are generated digitally and can be accessed via mobile app or email.",
      },
      {
        id: 4,
        question: "What about staff with different pay structures?",
        answer:
          "The system supports multiple salary structures, allowances, and deductions.",
      },
      {
        id: 5,
        question: "Is data secure?",
        answer:
          "Yes. All employee and payroll data is stored securely in the cloud with restricted access.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How Payroll Management Works",
    features: [
      {
        id: 1,
        icon: MdOutlineHowToReg,
        iconColour: "text-emerald-600",
        title: "HR & Payroll Dashboard",
        description:
          "Admins can manage staff records, attendance, payroll, and compliance from one centralized dashboard.",
      },
      {
        id: 2,
        icon: RiSecurePaymentLine,
        title: "Automated Payments",
        iconColour: "text-green-500",
        description:
          "Salary calculations and disbursements are automated with integrated compliance.",
      },
      {
        id: 3,
        icon: MdOutlineSecurity,
        title: "Data Security",
        iconColour: "text-emerald-400",
        description:
          "Cloud-based, encrypted, and role-based access ensures secure HR data handling.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Payroll Features on Mobile",
     imgUrl:"/image/School-ERP.png",
    features: [
      {
        id: 1,
        icon: FaFileInvoiceDollar,
        title: "Digital Payslips",
        description:
          "Employees can view and download their salary slips instantly on mobile.",
      },
      {
        id: 2,
        icon: IoMdTimer,
        title: "Instant Notifications",
        description:
          "Get real-time alerts for salary credits, leave updates, and compliance reminders.",
      },
    ],
  },

  cta: ["Start Free Today", "Book a Free Demo", "Request Your Free Trial", "Get Started Free Today"],
};