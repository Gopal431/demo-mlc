import {
  BookOpen,
  Users,
  CalendarCheck,
  ClipboardList,
  Bus,
  Library,
  Calendar,
  Wallet,
  MessageCircle,
} from "lucide-react";
import Link from "next/link";

const modules = [
  {
    title: "Assignment & Notices",
    desc: "E-learning is basically online learning, which takes place through electronic media over the internet.",
    icon: BookOpen,
      url: "best-features-online-admission-management",
  },
  {
    title: "Student Management",
    desc: "The Student Management is one of the key modules of our ERP that helps you maintain records.",
    icon: Users,
      url: "best-features-online-admission-management",
  },
  {
    title: "Attendance Management",
    desc: "Attendance of any and every member directly associated with the school is of highest importance.",
    icon: CalendarCheck,
      url: "best-biometric-attendance-system-school-india",
  },
  {
    title: "Online Classes",
    desc: "What has to be taught during the academic session is pivotal to be determined and tracked.",
    icon: ClipboardList,
      url: "best-features-online-classes",
  },
  {
    title: "Transport Management",
    desc: "Helps students, parents, staff and management with transport tracking and planning.",
    icon: Bus,
      url: "best-transport-gps-tracking-school-india",
  },
  {
    title: "Library Management",
    desc: "Helps in operating the library with an automated system.",
    icon: Library,
      url: "best-features-library-inventory-tracking",
  },
  {
    title: "Time-table Management",
    desc: "Teachers and administrators can generate and alter timetables easily.",
    icon: Calendar,
      url: "best-biometric-attendance-system-school-india",
  },
  {
    title: "Fees Management",
    desc: "This software helps in managing student fee collection records efficiently.",
    icon: Wallet,
      url: "best-fees-management-system-india",
  },
  {
    title: "Employee Management",
    desc: "Helps parents to get real-time access to their child’s daily performance.",
    icon: MessageCircle,
      url: "best-employee-payroll-management-india",
  },
];

const ERPModules = ({ iconsColor }) => {
  return (
    <section className="bg-gradient-to-r from-[#7660FB] to-[#28A4D9] text-white relative">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:px-10 lg:py-10">
        <h2 className="text-4xl font-bold md:text-center text-left">ERP Modules</h2>
        <p className="md:text-center text-left mb-4">
          A comprehensive ERP Module with user-friendly dashboards, easy
          navigation, and well-structured reports.
        </p>

        {/* Cards */}
        <div
          className="
            flex overflow-x-auto snap-x snap-mandatory space-x-4 pb-6
            md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8 md:space-x-0 md:overflow-visible
          "
        >
          {modules.map((mod, idx) => {
            const Icon = mod.icon;
            return (
             <Link href={`/features/${mod.url}`}>
              <div
                key={idx}
                className="
                  w-full flex-shrink-0 snap-center
                  bg-white text-gray-800 rounded-2xl shadow-lg p-6
                  hover:shadow-xl transition flex flex-col items-center text-center
                "
              >
                <div
                  className={`bg-${iconsColor}-500 p-3 rounded-xl mb-4 text-white`}
                >
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold mb-2 first-letter:capitalize">
                  {mod.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600">{mod.desc}</p>
                <a
                  href="#"
                  className="text-blue-600 font-medium hover:underline mt-auto"
                >
                  Read More kk →
                </a>
              </div>
             </Link>
            );
          })}
        </div>

        {/* Dots Indicator (static for mobile) */}
        <div className="flex justify-center mt-2 md:hidden">
          {modules.map((_, idx) => (
            <span
              key={idx}
              className="mx-1 h-2 w-2 rounded-full bg-gray-400"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ERPModules;
