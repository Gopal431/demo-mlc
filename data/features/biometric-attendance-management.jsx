import {
  FaRegCalendarCheck,
  FaFingerprint,
  FaMobileAlt,
  FaRegFileAlt,
  FaMoneyCheckAlt,
  FaUserCheck,
} from "react-icons/fa";
export const biometricAttendanceManagement = {
  title: "Biometric Attendance Management",
  img: <FaRegCalendarCheck />,
  gradient: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  desc: "Automated attendance for students, teachers, and staff using biometrics for accuracy, security, and transparency.",
  why: "Manual attendance wastes time, leads to errors, and can be manipulated. With biometric attendance, you ensure accuracy, security, and real-time updates.",
  features: [
    {
      fe: "Fingerprint / RFID / Face Recognition integration",
      icons: <FaFingerprint />,
      description:
        "Mark attendance accurately using biometric methods like fingerprint, RFID cards, or facial recognition.",
    },
    {
      fe: "Real-time sync with mobile apps",
      icons: <FaMobileAlt />,
      description:
        "Attendance data is instantly updated on mobile apps for parents, teachers, and admin staff.",
    },
    {
      fe: "Automatic reports for latecomers and absentees",
      icons: <FaRegFileAlt />,
      description:
        "Generate detailed attendance reports automatically to identify late arrivals and absentees.",
    },
    {
      fe: "Integration with payroll for staff",
      icons: <FaMoneyCheckAlt />,
      description:
        "Seamlessly sync attendance with payroll to calculate salaries accurately without manual input.",
    },
    {
      fe: "Zero chance of proxy attendance",
      icons: <FaUserCheck />,
      description:
        "Prevent fraudulent attendance marking with secure biometric verification methods.",
    },
  ],
  caseStudy: {
    school: "Sunrise Public School, Delhi",
    before:
      "Teachers spent 10–15 minutes daily marking attendance, wasting class hours.",
    after: [
      "Attendance marked in seconds",
      "Parents notified instantly on entry",
      "Payroll synced automatically",
    ],
    quote:
      "We saved almost 50 hours a month that now goes into teaching, not paperwork.",
  },
  benefits: [
    {
      title: "Quick & Accurate Attendance",
      description:
        "Mark student and staff attendance instantly with biometric verification, saving time and reducing errors.",
    },
    {
      title: "Parents Stay Informed in Real Time",
      description:
        "Send instant notifications to parents about attendance, late arrivals, or absences for transparency and peace of mind.",
    },
    {
      title: "Less Paperwork, More Teaching Time",
      description:
        "Automate attendance tracking and reporting so teachers can focus on teaching rather than administrative tasks.",
    },
    {
      title: "Seamless Payroll Integration",
      description:
        "Sync attendance data automatically with payroll, ensuring accurate salary calculations and saving HR time.",
    },
    {
      title: "Eliminate Proxy Attendance",
      description:
        "Secure biometric verification prevents students from marking attendance on behalf of others.",
    },
    {
      title: "Detailed Reports for Administration",
      description:
        "Generate real-time attendance reports for students, classes, or entire school to track trends and performance.",
    },
  ],
  cta: ["Contact Us for details", "Book a Free Demo"],
};
