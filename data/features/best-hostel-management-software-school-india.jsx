import { FaBed, FaUserGraduate, FaRegFileAlt, FaCreditCard, FaClipboardList, FaMobileAlt } from "react-icons/fa";
import { MdDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { SiMaterialdesign } from "react-icons/si";
import { IoMdTimer } from "react-icons/io";
export const hostelManagement = {
  title: "Number #1 Hostel Management System for Schools & Colleges",
  title2:
    "Benefits of Digital Hostel Management System for Schools, Parents & Students",
  img: <FaBed />,
  gradient: "from-purple-500 to-pink-500",
  bgColor: "bg-purple-50",
  desc: "Manage room allocation, student records, mess/canteen, and hostel fees seamlessly with our Digital Hostel Management System. Ensure a safe, organized, and transparent environment for students and parents.",
  why: "Traditional hostel administration faces room allocation confusion, difficulty in tracking student records, manual fee errors, and lack of transparency in mess and canteen management. Digital hostel management solves these problems efficiently.",

  herosection: {
    title: "Why Schools Need Digital Hostel Management",
    dec: "A well-managed hostel ensures student safety, comfort, and trust. Admins can manage rooms, fees, and facilities digitally, avoiding manual errors and parent complaints.",
  },

  features: [
    {
      fe: "Room Allocation & Student Management",
      icons: FaUserGraduate,
      description:
        "Assign rooms based on availability, preferences, or special needs. Keep all student records from check-in to check-out digital and easily accessible.",
    },
    {
      fe: "Mess / Canteen Management",
      icons: FaClipboardList,
      description:
        "Plan meals, monitor attendance, and maintain digital records of mess/canteen usage for transparency and smooth operation.",
    },
    {
      fe: "Hostel Fee Tracking",
      icons: FaCreditCard,
      description:
        "Track hostel fees separately from tuition fees and send automated reminders for pending payments to parents.",
    },
    {
      fe: "Digital Records for Multiple Hostels",
      icons: MdDashboardCustomize,
      description:
        "Manage multiple hostels, wings, or buildings under one centralized platform efficiently.",
    },
    {
      fe: "Automated Notifications & Reminders",
      icons: IoMdTimer,
      description:
        "Send reminders to parents for pending payments, events, or hostel notices, reducing disputes and confusion.",
    },
  ],

  caseStudy: {
    school: "Greenwood International Hostel, Bangalore",
    before:
      "Manual room assignments, fee tracking, and mess management created errors and confusion for students and parents.",
    after: [
      "All room allocations and student records digitalized",
      "Mess/canteen tracking automated and transparent",
      "Hostel fees tracked separately with automated reminders",
    ],
    quote:
      "Hostel operations are now smooth and stress-free, giving parents peace of mind and students a comfortable stay.",
  },

  benefits: [
    {
      title: "For Schools & Colleges",
      description:
        "Streamlined hostel records, easier monitoring, and better resource utilization.",
    },
    {
      title: "For Parents",
      description:
        "Peace of mind knowing their child’s stay, meals, and payments are well-managed.",
    },
    {
      title: "For Students",
      description:
        "Comfortable hostel life with organized facilities, meals, and transparent services.",
    },
    {
      title: "Efficient Room Allocation",
      description:
        "Assign rooms fairly and transparently, reducing conflicts and manual errors.",
    },
    {
      title: "Mess & Canteen Management",
      description:
        "Track meals, attendance, and usage digitally for a smooth and organized dining experience.",
    },
    {
      title: "Automated Fee Management",
      description:
        "Manage hostel fees independently with auto-reminders to ensure timely payments and transparency.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle:
      "Check our frequently asked questions to learn more about Hostel Management for Schools & Colleges",
    faqs: [
      {
        id: 1,
        question: "Can this system handle multiple hostels in one campus?",
        answer:
          "Yes. It supports multiple hostels, wings, and buildings under a single platform.",
      },
      {
        id: 2,
        question: "How does room allocation work?",
        answer:
          "Admins can assign rooms manually or use the system’s suggestions for fair distribution.",
      },
      {
        id: 3,
        question: "Can hostel fees be managed separately from school fees?",
        answer:
          "Yes. Hostel fees are tracked independently, and reminders are automatically sent to parents.",
      },
      {
        id: 4,
        question: "Does it help in managing the hostel mess or canteen?",
        answer:
          "Yes. Schools can plan meals, monitor attendance, and manage records digitally for mess/canteen.",
      },
      {
        id: 5,
        question: "Is it suitable for both schools and colleges?",
        answer:
          "Absolutely. It works for hostels of all sizes, whether for school students or college hostels.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How Digital Hostel Management Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-purple-600",
        title: "Centralized Management",
        description:
          "Manage rooms, student records, and hostel facilities from one central dashboard.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud-Based Records",
        iconColour: "text-pink-500",
        description:
          "All student and hostel records are stored securely in the cloud, accessible anytime.",
      },
      {
        id: 3,
        icon: MdDashboardCustomize,
        title: "Automated Reports",
        iconColour: "text-purple-400",
        description:
          "Generate reports for room allocation, fees, and mess/canteen usage in a single click.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Key Features on Mobile",
    imgUrl:"/image/School-ERP.png",
    features: [
      {
        id: 1,
        icon: FaMobileAlt,
        title: "Mobile Dashboard",
        description:
          "Admins and staff can manage hostel operations and monitor updates directly from mobile apps.",
      },
      {
        id: 2,
        icon: IoMdTimer,
        title: "Real-Time Notifications",
        description:
          "Parents and admins get instant updates on fees, room allocations, and mess schedules.",
      },
    ],
  },

  cta: ["Book a Free Demo", "Get Started Free", "Request Your Demo Now"],
};