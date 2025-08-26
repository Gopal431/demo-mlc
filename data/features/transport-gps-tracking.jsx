import { FaBell, FaBus, FaGasPump, FaUserCheck, FaUserTie } from "react-icons/fa";

export const transportGpsTracking = {
    title: "Transport & GPS Tracking",
     img: <FaBus />,
     gradient: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
    desc: "A safe, transparent, and efficient school transport system with live GPS tracking for parents and smart tools for admins.",
    why: "Parents worry about student safety during travel. Smart transport management ensures safety, transparency, and cost savings.",
 features: [
  {
    fe: "Live GPS Bus Tracking",
    icons: <FaBus />, 
    description: "Parents can track school buses in real-time through the mobile app, ensuring student safety."
  },
  {
    fe: "Bus Arrival & Delay Alerts",
    icons: <FaBell />, 
    description: "Send instant notifications to parents and staff about bus arrivals, delays, or route changes."
  },
  {
    fe: "Student Attendance in Bus",
    icons: <FaUserCheck />, 
    description: "Keep track of which students are on board to prevent absentee issues and ensure safety."
  },
  {
    fe: "Driver & Vehicle Monitoring",
    icons: <FaUserTie />, 
    description: "Maintain driver records, monitor driving behavior, and track vehicle health for compliance."
  },
  {
    fe: "Fuel & Maintenance Tracking",
    icons: <FaGasPump />, 
    description: "Monitor fuel usage, schedule maintenance, and track renewals to optimize transport operations."
  },
],

    caseStudy: {
      school: "School in Kolkata with 1,200 students",
      before: "Frequent late buses, poor communication, and rising fuel costs.",
      after: [
        "100% parent trust via live tracking",
        "30% reduced fuel costs",
        "No missed renewals for vehicles",
      ],
    },
  benefits: [
  {
    title: "Real-Time Safety Visibility",
    description: "Track school buses live via GPS to ensure students’ safety and keep parents informed."
  },
  {
    title: "Lower Transport Costs",
    description: "Optimize bus routes and fuel usage to reduce operational expenses for the school."
  },
  {
    title: "Better Parent Communication",
    description: "Send instant notifications for bus arrivals, delays, or route changes, keeping parents informed."
  },
  {
    title: "Accurate Student Attendance",
    description: "Monitor which students are on board, reducing absentee issues and improving accountability."
  },
  {
    title: "Efficient Driver & Vehicle Management",
    description: "Keep detailed records of drivers, vehicles, and maintenance schedules for smooth operations."
  },
  {
    title: "Hassle-Free Administration",
    description: "Centralize all transport data in one dashboard, saving time and avoiding manual errors."
  },
]
,
    cta: ["Request a Demo", "Contact Us"],
  }