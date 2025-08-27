import { FaBus, FaMapMarkedAlt, FaMobileAlt, FaChartLine, FaShieldAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { SiMaterialdesign } from "react-icons/si";
import { IoMdTimer } from "react-icons/io";

export const transportGpsTracking = {
  title: "Free GPS Tracking & Transport Management for Schools",
  title2:
    "Benefits of GPS Tracking & Transport Management System for Schools, Parents & Students",
  img: <FaBus />,
  gradient: "from-yellow-500 to-orange-500",
  bgColor: "bg-yellow-50",
  desc: "Our GPS Tracking & Transport Management System ensures every school journey is monitored in real time, keeping students safe and parents informed.",
  why: "School transport is more than just travel — it’s about safety, trust, and peace of mind. Without proper monitoring, delays, miscommunication, and risks can compromise student safety.",

  herosection: {
    title: "Why Student Safety Matters in School Transport",
    dec: "Parents want to know their child is safe, and schools must ensure buses follow safe routes with punctuality. The right system builds trust, reduces risks, and makes transport organized and reliable.",
  },

  features: [
    {
      fe: "Real-Time Bus Tracking",
      icons: FaMapMarkedAlt,
      description:
        "Parents can track the bus live on mobile apps, while admins get a dashboard view of all buses in motion.",
    },
    {
      fe: "Route Planning & Optimization",
      icons: FaChartLine,
      description:
        "Plan the shortest and safest routes for each bus, reducing fuel costs and travel time.",
    },
    {
      fe: "Driver & Helper Assignment",
      icons: FaMobileAlt,
      description:
        "Assign drivers and helpers to buses and monitor their performance in real-time.",
    },
    {
      fe: "Trip Performance Monitoring",
      icons: MdDashboardCustomize,
      description:
        "Keep track of bus trips, fuel usage, and journey efficiency for optimized operations.",
    },
    {
      fe: "Digital Driver & Vehicle Records",
      icons: RiStackFill,
      description:
        "Maintain records of all drivers and vehicles digitally for easy management and compliance.",
    },
  ],

  caseStudy: {
    school: "Sunrise Public School, Delhi",
    before:
      "Manual route tracking and student drop notifications created delays, confusion, and stress for parents.",
    after: [
      "Live GPS tracking implemented for all buses",
      "Parents receive real-time arrival alerts",
      "Admin dashboards monitor trips and driver performance efficiently",
    ],
    quote:
      "Our transport system is now fully transparent and safe, giving parents peace of mind.",
  },

  benefits: [
    {
      title: "For Schools",
      description:
        "Better control over transport operations, optimized routes, and reduced costs.",
    },
    {
      title: "For Parents",
      description:
        "Peace of mind with real-time updates on their child’s journey and alerts for bus arrivals.",
    },
    {
      title: "For Students",
      description:
        "Safer, punctual, and hassle-free transport every day.",
    },
    {
      title: "Improved Safety",
      description:
        "Continuous GPS monitoring ensures any breakdown or delay is addressed immediately.",
    },
    {
      title: "Digital Record Keeping",
      description:
        "Driver and vehicle records, trip logs, and route history stored securely for compliance and reporting.",
    },
    {
      title: "Reduced Operational Stress",
      description:
        "Admins and school staff spend less time coordinating transport manually, improving efficiency.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Check our frequently asked questions to learn more about GPS Transport Management for Schools",
    faqs: [
      {
        id: 1,
        question: "How does GPS tracking work for school buses?",
        answer:
          "Each bus has a GPS device (or mobile-based solution) that sends live location data to parents and admins in real time.",
      },
      {
        id: 2,
        question: "Can parents get alerts when the bus is near?",
        answer:
          "Yes. Parents receive instant notifications when the bus is approaching their child’s stop.",
      },
      {
        id: 3,
        question: "What happens if a bus breaks down?",
        answer:
          "Admins are alerted immediately and can arrange backup transport while informing parents instantly.",
      },
      {
        id: 4,
        question: "Is the system costly for schools?",
        answer:
          "No. It is affordable and often reduces fuel costs and manual coordination, saving money in the long run.",
      },
      {
        id: 5,
        question: "Do we need extra hardware to use this?",
        answer:
          "No physical GPS device is required — the system is cloud-based and works with mobile integration.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How GPS Transport Management Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-yellow-600",
        title: "Seamless Integration",
        description:
          "Integrates with school ERP and mobile apps for real-time tracking and notifications.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud-Based Monitoring",
        iconColour: "text-orange-500",
        description:
          "All bus locations and trip logs are stored securely in the cloud and accessible anytime.",
      },
      {
        id: 3,
        icon: MdDashboardCustomize,
        title: "Admin Dashboard",
        iconColour: "text-amber-500",
        description:
          "View all buses, trips, and driver assignments from a single intuitive dashboard.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Key Features on Mobile",
    features: [
      {
        id: 1,
        icon: FaMobileAlt,
        title: "Live Bus Tracking",
        description:
          "Parents can track buses in real-time, reducing uncertainty and wait times at stops.",
      },
      {
        id: 2,
        icon: IoMdTimer,
        title: "Real-Time Alerts",
        description:
          "Receive instant notifications for arrivals, delays, and any transport incidents.",
      },
    ],
  },

  cta: ["Start Free Today", "Book a Demo", "Get Started Free"],
};
