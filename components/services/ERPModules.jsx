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

const modules = [
  {
    title: "Assignment & Notices",
    desc: "E-learning is basically online learning, which takes place through electronic media over the internet.",
    icon: BookOpen,
  },
  {
    title: "Student Management",
    desc: "The Student Management is one of the key modules of our ERP that helps you maintain records.",
    icon: Users,
  },
  {
    title: "Attendance Management",
    desc: "Attendance of any and every member directly associated with the school is of highest importance.",
    icon: CalendarCheck,
  },
  {
    title: "Online Classes",
    desc: "What has to be taught during the academic session is pivotal to be determined and tracked.",
    icon: ClipboardList,
  },
  {
    title: "Transport Management",
    desc: "Helps students, parents, staff and management with transport tracking and planning.",
    icon: Bus,
  },
  {
    title: "Library Management",
    desc: "Helps in operating the library with an automated system.",
    icon: Library,
  },
  {
    title: "Time-table Management",
    desc: "Teachers and administrators can generate and alter timetables easily.",
    icon: Calendar,
  },
  {
    title: "Fees Management",
    desc: "This software helps in managing student fee collection records efficiently.",
    icon: Wallet,
  },
  {
    title: "Employee Management",
    desc: "Helps parents to get real-time access to their child’s daily performance.",
    icon: MessageCircle,
  },
];

const ERPModules = ({ iconsColor }) => {
  return (
    <section className="bg-gradient-to-r from-[#7660FB] to-[#28A4D9] text-white relative">
      <div className="mx-auto max-w-screen-xl p-4 py-6 lg:px-10 lg:py-10">
        <h2 className="text-4xl font-bold text-center">ERP Modules</h2>
        <p className="text-center mb-4">
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
                  Read More →
                </a>
              </div>
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
