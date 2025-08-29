import { 
  FaBook, 
  FaUsers, 
  FaRegCheckCircle, 
  FaBoxOpen, 
  FaSearch 
} from "react-icons/fa";
import { MdOutlineAssignment, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { SiMaterialdesign } from "react-icons/si";

export const libraryManagement = {
  title: "Best Library & Inventory Tracking for Schools & Colleges in India",
  title2: "Benefits of Smart Library & Inventory Management System",
  img: <FaBook />,
  gradient: "from-green-500 to-teal-500",
  bgColor: "bg-green-50",
  desc: "Manage books, lab items, uniforms, and sports equipment with one smart system. Save costs, track resources, and make learning smoother.",
  why: "Schools often face hidden challenges with missing books, duplicate purchases, and poor accountability. Our digital library & inventory system ensures resources are tracked, costs are controlled, and students always get what they need.",

  herosection: {
    title: "Why Inventory Tracking Matters for Schools & Colleges",
    dec: "Without proper tracking, schools overspend, misplace resources, and disrupt academics. A smart library & inventory system gives management full visibility of resources, prevents losses, and streamlines operations.",
  },

  features: [
    {
      fe: "Digital Cataloging",
      icons: FaBook,
      description:
        "Maintain a complete digital record of all books and resources.",
    },
    {
      fe: "Borrow & Return Tracking",
      icons: MdOutlineAssignment,
      description:
        "Real-time updates on issued and returned books or items.",
    },
    {
      fe: "Stock Alerts",
      icons: FaBoxOpen,
      description:
        "Get notified when books, lab items, or uniforms run low.",
    },
    {
      fe: "Student-Friendly Search",
      icons: FaSearch,
      description:
        "Students can easily search and request resources online.",
    },
    {
      fe: "Multi-Department Integration",
      icons: FaUsers,
      description:
        "Manage library, labs, sports, and inventory from one platform.",
    },
  ],

  caseStudy: {
    school: "Greenfield International School, Mumbai",
    before:
      "Books went missing, lab items were untracked, and duplicate purchases increased costs.",
    after: [
      "All resources digitized into a central system",
      "Borrow & return records tracked in real time",
      "Stock alerts helped reduce duplicate purchases",
    ],
    quote:
      "Our library and lab management is now seamless. Students access books faster, and management saves money every year.",
  },

  benefits: [
    {
      title: "Quick Book Search",
      description:
        "Students and staff can locate books instantly by title, author, or subject.",
    },
    {
      title: "Better Accountability",
      description:
        "Track who borrowed what and when items are due.",
    },
    {
      title: "Reduced Losses",
      description:
        "Minimize missing or unreturned resources.",
    },
    {
      title: "Smooth Learning Experience",
      description:
        "Students get the right materials on time without delays.",
    },
    {
      title: "Time-Saving for Staff",
      description:
        "Librarians spend less time on registers and more on student support.",
    },
    {
      title: "Cost Efficiency",
      description:
        "Avoid unnecessary purchases with clear stock visibility.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle: "Learn more about our Library & Inventory Tracking System.",
    faqs: [
      {
        id: 1,
        question: "Why switch from manual registers to digital tracking?",
        answer:
          "Digital systems save time, reduce errors, and manage large collections efficiently.",
      },
      {
        id: 2,
        question: "Can students access the library catalog online?",
        answer:
          "Yes. Students can search and request books digitally without waiting in queues.",
      },
      {
        id: 3,
        question: "Is the system suitable for both schools and colleges?",
        answer:
          "Absolutely. It works for small schools as well as large colleges with multiple departments.",
      },
      {
        id: 4,
        question: "How does it reduce costs?",
        answer:
          "By tracking every item, schools avoid unnecessary purchases and losses from missing resources.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How the Library System Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-green-600",
        title: "Digital Catalog",
        description:
          "All books, lab items, and resources are cataloged digitally.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud Storage",
        iconColour: "text-teal-500",
        description:
          "All records and reports are securely stored in the cloud.",
      },
      {
        id: 3,
        icon: MdOutlineDashboardCustomize,
        title: "Admin Dashboard",
        iconColour: "text-emerald-500",
        description:
          "Admins track borrow history, stock alerts, and usage trends.",
      },
    ],
  },

  FeaturesDataMobile: {
    title: "Mobile-First Features",
     imgUrl:"/image/School-ERP.png",
    features: [
      {
        id: 1,
        icon: IoMdTime,
        title: "Quick Access",
        description: "Students and teachers can search and request anytime.",
      },
      {
        id: 2,
        icon: FaRegCheckCircle,
        title: "Real-Time Tracking",
        description:
          "Borrow and return status updated instantly for accuracy.",
      },
    ],
  },

  cta: ["Request a Free Demo", "Start Free Trial", "Book a Live Demo"],
};
