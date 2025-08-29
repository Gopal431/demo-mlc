import React from "react";
import Image from "next/image";
import Link from "next/link";
import {   FaChalkboardTeacher } from "react-icons/fa";
import {
  FaRegCalendarCheck,
  FaBookOpen,
  FaComments,
  FaBell,
  FaClock,
  FaChartLine,
  FaHome,
  FaUserGraduate,
  FaDollarSign,
  FaUserTie,
  FaBook,
  FaClipboardList,
  FaBus,
  FaBuilding,
  FaVideo,
  FaGraduationCap,
  FaFingerprint,
  FaMobileAlt,
  FaRegFileAlt,
  FaMoneyCheckAlt,
  FaUserCheck,
  FaCalendarAlt,
  FaExchangeAlt,
  FaCogs,
  FaFileInvoice,
  FaChartBar,
  FaCalculator,
  FaGasPump,
  FaMoneyBillWave,
  FaUser,
  FaFileInvoiceDollar,
  FaEnvelope,
} from "react-icons/fa";
import { CiSquareQuestion, CiVideoOn } from "react-icons/ci";
import { PiBookmarkLight, PiRocketLaunchLight } from "react-icons/pi";
import { SiMaterialdesign } from "react-icons/si";
import { FaBuildingCircleArrowRight } from "react-icons/fa6";

const FeaturesSec2 = () => {
  // const FeaturesItem = [
  //   {
  //     img: <FaRegCalendarCheck />,
  //     title: "Attendance Management",
  //     desc: "Track and manage student attendance effortlessly with advanced biometric and RFID systems, ensuring every entry and exit is accurately recorded. Automated alerts are instantly sent to parents and guardians for absences, late arrivals, or early departures, creating complete transparency and peace of mind. Teachers and administrators can generate daily, weekly, and monthly reports, analyze patterns, and identify irregularities in student attendance. Integration with timetables and school calendars makes attendance tracking streamlined, efficient, and error-free, reducing manual work while improving accountability across the institution.",
  //     gradient: "from-blue-500 to-cyan-500",
  //     bgColor: "bg-blue-50",
  //   },
  //   {
  //     img: <FaBookOpen />,
  //     title: "Gradebook Management",
  //     desc: "Easily record, calculate, and manage grades for assignments, quizzes, tests, and projects in one centralized system. Teachers save time with automated calculations and reduced manual errors, while students and parents enjoy real-time access to academic results. Detailed progress reports help track performance trends, highlight strengths, and identify areas for improvement. The system also supports customizable grading templates, term-wise evaluations, and historical comparisons, giving a holistic view of academic growth throughout the school year.",
  //     gradient: "from-emerald-500 to-teal-500",
  //     bgColor: "bg-emerald-50",
  //   },
  //   {
  //     img: <FaComments />,
  //     title: "Communication Management",
  //     desc: "Enhance communication by delivering instant notifications for important school updates such as announcements, parent-teacher meetings, upcoming events, and assignment deadlines. Parents stay actively informed about their child’s academic performance, attendance, and behavior, strengthening trust and engagement between schools and families. Two-way communication tools allow teachers to share feedback and reminders directly with parents, creating a collaborative environment that supports student success.",
  //     gradient: "from-purple-500 to-indigo-500",
  //     bgColor: "bg-purple-50",
  //   },
  //   {
  //     img: <FaBell />,
  //     title: "Automated Reminders",
  //     desc: "Send timely, automated reminders for assignments, fee payments, school events, and examinations. Parents and students receive instant alerts via multiple channels, reducing the chances of missed deadlines and ensuring smooth academic and financial planning. By minimizing manual follow-ups, schools improve efficiency, reduce workload for staff, and create a more organized academic environment for everyone involved.",
  //     gradient: "from-orange-500 to-red-500",
  //     bgColor: "bg-orange-50",
  //   },
  //   {
  //     img: <FaClock />,
  //     title: "Timetable Management",
  //     desc: "Easily plan and organize timetables for classes, exams, and extracurricular activities with a user-friendly interface. The system prevents scheduling conflicts, optimizes classroom resources, and balances teacher workloads effectively. Parents and students can access updated schedules in real-time, ensuring they are always prepared. Integration with attendance and academic modules makes timetable management more efficient and transparent for all stakeholders.",
  //     gradient: "from-pink-500 to-rose-500",
  //     bgColor: "bg-pink-50",
  //   },
  //   {
  //     img: <FaChartLine />,
  //     title: "Insightful Reports",
  //     desc: "Generate comprehensive reports covering attendance, academic performance, fee payments, and overall student progress. Customizable report templates allow administrators and teachers to tailor insights according to institutional needs. Parents receive clear, easy-to-understand reports that showcase strengths and highlight areas for growth. These reports empower schools to make data-driven decisions, improving both student outcomes and overall school performance.",
  //     gradient: "from-violet-500 to-purple-500",
  //     bgColor: "bg-violet-50",
  //   },
  //   {
  //     img: <FaHome />,
  //     title: "Dashboard",
  //     desc: "Access powerful dashboards that provide real-time analytics, SMS usage tracking, and quick overviews of key school metrics. Administrators gain valuable insights into attendance rates, academic trends, and financial summaries, helping them make faster, more informed decisions. Customizable widgets and visual reports simplify complex data, ensuring that important information is always at your fingertips.",
  //     gradient: "from-blue-400 to-blue-600",
  //     bgColor: "bg-blue-50",
  //   },
  //   {
  //     img: <FaUserGraduate />,
  //     title: "Student Management",
  //     desc: "Manage the complete student lifecycle from admission to graduation. Add, edit, and update student profiles with ease, while bulk operations save time for larger institutions. The system supports detailed academic records, disciplinary history, and extracurricular achievements. Students benefit from personalized dashboards, while administrators and teachers enjoy seamless tracking of student progress and performance throughout their school journey.",
  //     gradient: "from-green-400 to-green-600",
  //     bgColor: "bg-green-50",
  //   },
  //   {
  //     img: <FaDollarSign />,
  //     title: "Financial Management",
  //     desc: "Simplify financial operations with comprehensive fee management, account tracking, and multiple payment options including online gateways. Administrators can set up fee structures, monitor dues, and generate receipts automatically. Parents benefit from transparent, hassle-free payments, while schools ensure timely fee collection and accurate financial reporting. Advanced tools also support account reconciliation and expense management for smooth financial operations.",
  //     gradient: "from-yellow-400 to-yellow-600",
  //     bgColor: "bg-yellow-50",
  //   },
  //   {
  //     img: <FaUserTie />,
  //     title: "Staff Management",
  //     desc: "Streamline staff operations with complete employee lifecycle management. Track attendance, manage leave requests, and monitor staff performance with ease. Employee dashboards provide a clear overview of schedules, attendance, and payroll information. Administrators can generate performance reviews and attendance summaries, ensuring fair evaluation and effective workforce management across the institution.",
  //     gradient: "from-orange-400 to-orange-600",
  //     bgColor: "bg-orange-50",
  //   },
  //   {
  //     img: <FaBook />,
  //     title: "Academic Management",
  //     desc: "Organize and oversee the entire academic process, from curriculum planning to subject assignments and progress tracking. Teachers can efficiently manage lesson plans, track performance across subjects, and generate customizable progress reports. Parents gain visibility into their child’s academic journey, while administrators access institution-wide academic performance data to enhance teaching strategies and improve learning outcomes.",
  //     gradient: "from-purple-400 to-purple-600",
  //     bgColor: "bg-purple-50",
  //   },
  //   {
  //     img: <FaClipboardList />,
  //     title: "Admission & Enquiry",
  //     desc: "Streamline the admission process with powerful enquiry management and lead-tracking features. Schools can capture prospective student data, monitor admission status, and manage applications seamlessly. Automated communication tools keep parents updated about admission timelines and requirements, reducing confusion. By digitizing enquiries and admissions, institutions improve efficiency while offering a smoother onboarding experience for students and families.",
  //     gradient: "from-pink-400 to-pink-600",
  //     bgColor: "bg-pink-50",
  //   },
  //   {
  //     img: <FaBus />,
  //     title: "Transport Management",
  //     desc: "Ensure student safety and punctuality with a complete transport management system. Plan routes, track vehicles in real time, and coordinate schedules with ease. Parents receive timely updates on bus arrivals and departures, while administrators monitor vehicle usage and optimize routes to reduce costs. Integration with student attendance and timetable modules ensures smooth coordination between academic and transport schedules.",
  //     gradient: "from-cyan-400 to-cyan-600",
  //     bgColor: "bg-cyan-50",
  //   },
  //   {
  //     img: <FaBuilding />,
  //     title: "Hostel Management",
  //     desc: "Simplify hostel operations with tools for room allocation, fee collection, and daily management. Schools can track occupancy, manage house systems, and oversee canteen and library services efficiently. Parents gain confidence knowing that hostel facilities are transparent and well-managed, while administrators enjoy real-time insights into hostel operations, improving accountability and student welfare.",
  //     gradient: "from-gray-400 to-gray-600",
  //     bgColor: "bg-gray-50",
  //   },
  //   {
  //     img: <FaVideo />,
  //     title: "Digital Learning",
  //     desc: "Support modern education with online classes, digital content management, and interactive learning tools. Teachers can upload course materials, conduct virtual lessons, and track student participation seamlessly. Students access learning resources anytime, anywhere, while parents stay informed about progress in digital courses. Integration with assessments and gradebook modules ensures that digital learning is both structured and impactful.",
  //     gradient: "from-indigo-400 to-indigo-600",
  //     bgColor: "bg-indigo-50",
  //   },
  // ];
  const FeaturePages = [
    {
      title: "Fees Management System",
      img: <FaBus />,
      gradient: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      desc: "A smart and transparent fee collection system for schools and colleges that eliminates errors, reduces delays, and builds parent trust.",
      url: "best-fees-management-system-india",
    },
    {
      title: "Biometric Attendance Management",
      img: <FaRegCalendarCheck />,
      gradient: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-50",
      desc: "Automated attendance for students, teachers, and staff using biometrics for accuracy, security, and transparency.",
      url: "best-biometric-attendance-system-school-india",
    },
    {
      title: "Progress Report Card Management",
      gradient: "from-pink-400 to-pink-600",
      bgColor: "bg-pink-50",
      img: <FaGraduationCap />,
      desc: "Smarter, digital, and customizable report cards for schools to save teacher time and give parents clear insights.",
      url: "best-progress-report-card-management-india",
    },
    {
      title: "Timetable & Substitution Management",
      img: <FaClock />,
      gradient: "from-pink-500 to-rose-500",
      bgColor: "bg-pink-50",
      desc: "Digital timetable system for schools that prevents chaos, saves admin time, and ensures smooth learning even with absences.",
      url: "best-timetable-substitution-management-school-india",
    },
    {
      title: "Transport & GPS Tracking",
      img: <FaBus />,
      gradient: "from-cyan-400 to-cyan-600",
      bgColor: "bg-cyan-50",
      desc: "A safe, transparent, and efficient school transport system with live GPS tracking for parents and smart tools for admins.",
      url: "best-transport-gps-tracking-school-india",
    },
    {
      title: "Insightful Reports",
      img: <FaChartLine />,
      gradient: "from-violet-500 to-purple-500",
      bgColor: "bg-violet-50",
      desc: "Turn scattered school data into meaningful insights with automated reports for better decision-making.",
      url: "best-insightful-reports-india",
    },
    {
      title: "Employee & Payroll Management",
      img: <FaUserTie />,
      gradient: "from-orange-400 to-orange-600",
      bgColor: "bg-orange-50",
      desc: "A complete HR & Payroll solution for schools that automates staff management, attendance, payroll, and compliance.",
      url: "best-employee-payroll-management-india",
    },
    {
      img: <FaBuilding />,
      title: "Hostel Management",
      desc: "Streamline hostel operations with room allocation, fee tracking, and real-time management for staff and parents.",
      gradient: "from-gray-400 to-gray-600",
      bgColor: "bg-gray-50",
      url: "best-hostel-management-software-school-india",
    },
     {
      img: <FaBuildingCircleArrowRight />,
      title: "Communication Management",
      desc: "Easy School Communication with SMS, WhatsApp ,Email & AppNotification Integration.",
      gradient: "from-teal-400 to-pink-600",
      bgColor: "bg-gray-50",
      url: "best-features/communication-management-school-india",
    },
     {
    img: <FaMobileAlt />,
    title: "Dedicated Mobile Apps",
    desc: "Provide parents, teachers & students with dedicated mobile apps for smooth school operations.",
    gradient: "from-blue-400 to-cyan-600",
    bgColor: "bg-gray-50",
    url: "best-features-dedicated-mobile-apps",
  },
  {
    img: <FaBookOpen />,
    title: "Library & Inventory Tracking",
    desc: "Easily manage library books, stationery, and other inventory with automated tracking.",
    gradient: "from-green-400 to-teal-600",
    bgColor: "bg-gray-50",
    url: "best-features-library-inventory-tracking",
  },
  {
    img: <FaUserGraduate />,
    title: "Online Admission Management",
    desc: "Simplify student admissions online with forms, approvals, and automated notifications.",
    gradient: "from-purple-400 to-pink-600",
    bgColor: "bg-gray-50",
    url: "best-features-online-admission-management",
  },
  {
    img: <FaChalkboardTeacher />,
    title: "Online Classes",
    desc: "Conduct live and recorded online classes seamlessly for students anywhere.",
    gradient: "from-yellow-400 to-orange-500",
    bgColor: "bg-gray-50",
    url: "best-features-online-classes",
  },
  ];

  return (
    <section className="md:py-24 py-10 px-6 md:px-12 bg-gradient-to-br from-slate-50 via-white to-blue-50 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-emerald-100 to-cyan-100 rounded-full blur-3xl opacity-30 -z-10"></div>

      <div className="max-w-7xl mx-auto">
        <div className="md:text-center text-left md:mb-20 mb-10">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent leading-tight">
            Powerful Features for
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Smarter Management
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 lg:gap-10">
          {FeaturePages.map((item, index) => (
            <Link key={index} href={`features/${item?.url}`}>
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 rounded-2xl p-8 flex flex-col text-left overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${item.gradient} 
  opacity-5 md:opacity-0 md:group-hover:opacity-5 
  transition-opacity duration-500 rounded-2xl`}
                ></div>

                <div className="relative z-10 flex items-start gap-6 mb-6">
                  <div
                    className={`relative p-4 ${item.bgColor} rounded-2xl group-hover:scale-110 transition-transform duration-300`}
                  >
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${item.gradient} 
  opacity-10 md:opacity-0 md:group-hover:opacity-20 
  transition-opacity duration-300 rounded-2xl`}
                    ></div>
                    <div className="relative z-10 text-2xl text-[#2b2edc]">
                      {item.img}
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors duration-300 leading-tight">
                      {item.title}
                    </h3>
                  </div>
                </div>

                <p className="relative z-10 text-slate-600 text-base leading-relaxed group-hover:text-slate-700 transition-colors duration-300 line-clamp-4">
                  {item.desc}
                </p>

                <div
                  className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${item.gradient} 
  scale-x-100 md:scale-x-0 md:group-hover:scale-x-100 
  transition-transform duration-500 origin-left`}
                ></div>
              </div>
            </Link>
          ))}
        </div>
        {/* <Link href="/features-list">
          <div className="text-center mt-10">
            <div className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
              <span>Explore All Features</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </div>
          </div>
        </Link> */}
      </div>
    </section>
  );
};

export default FeaturesSec2;
