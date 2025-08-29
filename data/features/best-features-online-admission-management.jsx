import { 
  FaRegFileAlt, 
  FaUsers, 
  FaRegCheckCircle, 
  FaMoneyCheckAlt, 
  FaUserCheck 
} from "react-icons/fa";
import { MdOutlineAssignment, MdOutlineDashboardCustomize } from "react-icons/md";
import { RiStackFill } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { SiMaterialdesign } from "react-icons/si";

export const admissionManagement = {
  title: "Best Online Admission Management for Schools & Colleges",
  title2: "Benefits of Online Admission Management System for Schools & Parents",
  img: <FaRegFileAlt />,
  gradient: "from-blue-500 to-cyan-500",
  bgColor: "bg-blue-50",
  desc: "Simplify admissions with a complete online system. Parents can apply, upload documents, and pay securely — while schools manage everything with ease.",
  why: "Traditional admissions mean long queues, paperwork, and errors. Our online admission system ensures a smooth, digital-first experience for parents and schools.",

  herosection: {
    title: "Why Online Admission Management Matters",
    dec: "Parents today expect a simple, mobile-first admission process. Schools that adopt digital admissions save time, cut errors, and build stronger trust with parents.",
  },

  features: [
    {
      fe: "Online Admission Form",
      icons: MdOutlineAssignment,
      description:
        "Parents can fill and submit admission forms directly from mobile or desktop.",
    },
    {
      fe: "Document Upload",
      icons: FaRegFileAlt,
      description:
        "Upload required certificates and documents instantly online.",
    },
    {
      fe: "Secure Fee Payment",
      icons: FaMoneyCheckAlt,
      description:
        "Admission fees can be paid safely through integrated payment gateways.",
    },
    {
      fe: "Auto Student Profile",
      icons: FaUserCheck,
      description:
        "Student profile is automatically created in the school ERP.",
    },
    {
      fe: "Error-Free Process",
      icons: FaRegCheckCircle,
      description:
        "Schools can allow corrections before submission, reducing errors.",
    },
  ],

  caseStudy: {
    school: "Sunrise Public School, Delhi",
    before:
      "Admission season was chaotic with paperwork, queues, and parents frustrated over delays.",
    after: [
      "Parents applied online from their mobile phones",
      "Admissions processed 3x faster with fewer errors",
      "Fee payments and document verification became seamless",
    ],
    quote:
      "Our admissions are now stress-free. Parents love the transparency, and staff workload has reduced drastically.",
  },

  benefits: [
    {
      title: "End-to-End Digital Process",
      description:
        "No paperwork, no manual entry — everything online.",
    },
    {
      title: "Quick Document Verification",
      description:
        "Check pending, accepted, or rejected documents instantly.",
    },
    {
      title: "Secure Payments",
      description:
        "Integrated with trusted gateways for safe and easy payments.",
    },
    {
      title: "Build Parent Trust",
      description:
        "Transparent admission process improves school reputation.",
    },
    {
      title: "Scalable System",
      description:
        "Works for multiple classes, courses, and higher education.",
    },
    {
      title: "Reduce Staff Workload",
      description:
        "Automates admissions and saves staff time every year.",
    },
  ],

  faqSectionData: {
    title: "Got Questions? We've Got Answers!",
    subtitle: "Learn more about how our Online Admission Management System works.",
    faqs: [
      {
        id: 1,
        question: "Can parents apply from mobile phones?",
        answer:
          "Yes. The system is mobile-first and works on phones, tablets, and desktops.",
      },
      {
        id: 2,
        question: "Is online payment safe?",
        answer:
          "Yes. Payments are processed through secure, trusted gateways.",
      },
      {
        id: 3,
        question: "What if parents make mistakes in the form?",
        answer:
          "Schools can allow corrections before final submission, ensuring accuracy.",
      },
      {
        id: 4,
        question: "Can schools customize the admission form?",
        answer:
          "Absolutely. Schools can design forms as per their requirements.",
      },
      {
        id: 5,
        question: "Does it support multiple courses or streams?",
        answer:
          "Yes. It can handle applications for multiple classes and higher education programs.",
      },
    ],
  },

  FeaturesDataOfLaptop: {
    title: "How the Admission System Works",
    features: [
      {
        id: 1,
        icon: SiMaterialdesign,
        iconColour: "text-blue-600",
        title: "Customizable Forms",
        description:
          "Schools can design admission forms with required fields and uploads.",
      },
      {
        id: 2,
        icon: RiStackFill,
        title: "Cloud Storage",
        iconColour: "text-cyan-500",
        description:
          "All documents and applications are securely stored in the cloud.",
      },
      {
        id: 3,
        icon: MdOutlineDashboardCustomize,
        title: "Admin Dashboard",
        iconColour: "text-emerald-500",
        description:
          "Admins track applications, documents, and payments in real time.",
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
        title: "Apply Anytime",
        description:
          "Parents can fill admission forms anytime, anywhere.",
      },
      {
        id: 2,
        icon: FaUsers,
        title: "Multi-Stream Support",
        description:
          "Supports multiple classes, courses, and streams easily.",
      },
    ],
  },

  cta: ["Request a Free Demo", "Start Your Admission Digitally", "Book a Live Demo"],
};
