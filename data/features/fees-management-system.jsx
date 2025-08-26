import { FaBus } from "react-icons/fa";
import { PiBookmarkLight, PiRocketLaunchLight } from "react-icons/pi";
import { CiSquareQuestion, CiVideoOn } from "react-icons/ci";
export const feesManagementSystem = {
  title: "Fees Management System",
  img: <FaBus />,
  gradient: "from-cyan-400 to-cyan-600",
  bgColor: "bg-cyan-50",
  desc: "A smart and transparent fee collection system for schools and colleges that eliminates errors, reduces delays, and builds parent trust.",
  why: "Managing fees in schools and colleges is not just about collecting money. It’s about accuracy, transparency, and trust. Manual registers or outdated software often lead to errors, delays, and parent dissatisfaction.",
  features: [
    {
      fe: "Automatic fee collection and receipt generation",
      icons: <PiRocketLaunchLight />,
      description:
        "Streamline the process by automatically generating receipts and recording payments in real time.",
    },
    {
      fe: "Online payment gateway integration (UPI, net banking, cards, wallets)",
      icons: <PiBookmarkLight />,
      description:
        "Offer multiple secure payment options to parents and students for convenient transactions.",
    },
    {
      fe: "SMS/WhatsApp reminders for due dates",
      icons: <CiVideoOn />,
      description:
        "Send automated reminders to reduce missed payments and ensure timely fee submission.",
    },
    {
      fe: "Customizable fee structures (CBSE, ICSE, IB, State Board)",
      icons: <CiSquareQuestion />,
      description:
        "Easily configure fee plans based on different boards, classes, and student categories.",
    },
  ],

  caseStudy: {
    school: "St. Joseph’s School, Kolkata",
    before:
      "Manual fee records, long queues, missing receipts, and delayed updates.",
    after: [
      "80% parents paid online within 3 months",
      "Reduced late fees by 60% with reminders",
      "Zero missing receipt complaints",
    ],
    quote:
      "Parents are happy, and our accounts team finally has peace of mind.",
  },
  benefits: [
    {
      title: "Increase sales",
      description:
        "Consectetur pariatur irure exercitation sit amet id consectetur consecteturmagna et Lorem labore qui velit.",
    },
    {
      title: "Enterprise-ready",
      description:
        "Labore duis pariatur est exercitation laboris cupidatat amet cillum. Amet nisi ullamco.",
    },
    {
      title: "Unlimited growth",
      description:
        "Elit deserunt nisi esse duis cupidatat proident sit minim mollit officia pariatur incididunt in tempor.",
    },
    {
      title: "Recommended by experts",
      description:
        "Velit sit tempor pariatur quis pariatur incididunt culpa dolor voluptate officia incididunt velit dolore.",
    },
    {
      title: "Modern platform",
      description:
        "Laboris elit consectetur sint nisi eu mollit proident sit magna velit adipisicing consequat amet reprehenderit.",
    },
    {
      title: "Integrations",
      description:
        "Nostrud excepteur incididunt proident sit nulla ipsum sunt nostrud est esse adipisicing irure officia consectetur.",
    },
  ],
  cta: ["Contact Us today", "Get a Free Demo"],
};
