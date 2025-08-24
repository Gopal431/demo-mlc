import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  FaGraduationCap,
  FaCalendarAlt,
  FaDollarSign,
  FaBook,
  FaBus,
  FaUserTie,
  FaClipboardList,
  FaShieldAlt,
  FaMobile,
  FaCloud,
  FaStar,
  FaQuoteLeft,
  FaCog,
  FaHome,
  FaFileAlt,
  FaUserGraduate,
  FaBuilding,
  FaBell,
  FaVideo,
  FaBirthdayCake,
  FaEnvelope,
  FaUserShield,
  FaTools,
  FaSearch,
  FaComments,
  FaCreditCard,
} from "react-icons/fa"

export default function FeaturesPage() {
  const coreModules = [
    {
      icon: <FaHome className="w-8 h-8" />,
      title: "Dashboard ",
      description:
        "Comprehensive dashboards with real-time analytics, SMS usage tracking, and detailed reporting for administrators and users.",
      modules: ["Dashboard", "DashboardV2", "Analytics", "SMS Usage"],
    },
    {
      icon: <FaUserGraduate className="w-8 h-8" />,
      title: "Student Management",
      description:
        "Complete student lifecycle management from admission to graduation with bulk operations and detailed tracking.",
      modules: [
        "Add / Edit Student",
        "Bulk Update Students",
        "List Students",
        "Student Dashboard",
        "Passout Management",
      ],
    },
    {
      icon: <FaDollarSign className="w-8 h-8" />,
      title: "Financial Management",
      description:
        "Comprehensive fee management, accounts handling, and financial tracking with multiple payment options.",
      modules: ["Fees Management", "Accounts Management", "Other Charges", "Recharge"],
    },
    {
      icon: <FaUserTie className="w-8 h-8" />,
      title: "Staff  Management",
      description:
        "Complete employee management with attendance tracking, leave management, and performance monitoring.",
      modules: [
        "Employee Management",
        "Manual Attendance",
        "Attendance Management",
        "Leave Management",
        "Apply Leave",
        "Employee Dashboard",
      ],
    },
    {
      icon: <FaBook className="w-8 h-8" />,
      title: "Academic Management",
      description: "Curriculum management, subject handling, progress tracking, and comprehensive reporting systems.",
      modules: ["Subject Management", "Manage Subjects", "Progress Report", "Report Template", "Certificates"],
    },
    {
      icon: <FaClipboardList className="w-8 h-8" />,
      title: "Admission & Enquiry",
      description: "Streamlined admission process with enquiry management and lead tracking for prospective students.",
      modules: ["Admission Management Enquiry", "Admission Management", "Leads Management"],
    },
    {
      icon: <FaBus className="w-8 h-8" />,
      title: "Transport Management",
      description: "Complete transport management with route planning, vehicle tracking, and timetable coordination.",
      modules: ["Transport Management", "Time Table Management"],
    },
    {
      icon: <FaBuilding className="w-8 h-8" />,
      title: "Hostel Management",
      description:
        "Hostel management, house system, canteen operations, and library management for complete campus control.",
      modules: ["Hostel Management", "House Management", "Canteen Management", "Library Management"],
    },
    {
      icon: <FaVideo className="w-8 h-8" />,
      title: "Digital Learning",
      description: "Online classes, digital content management, and modern learning tools integration.",
      modules: ["Online Classes", "Blog"],
    },
  ]

  const additionalModules = [
    { icon: <FaCog className="w-6 h-6" />, name: "Module Management", category: "System" },
    { icon: <FaFileAlt className="w-6 h-6" />, name: "Document Management", category: "Admin" },
    { icon: <FaUserShield className="w-6 h-6" />, name: "User Management", category: "Security" },
    { icon: <FaTools className="w-6 h-6" />, name: "Setup Management", category: "Configuration" },
    { icon: <FaBell className="w-6 h-6" />, name: "App Notifications", category: "Communication" },
    { icon: <FaCalendarAlt className="w-6 h-6" />, name: "Calendar", category: "Scheduling" },
    { icon: <FaBirthdayCake className="w-6 h-6" />, name: "Birthday", category: "Events" },
    { icon: <FaSearch className="w-6 h-6" />, name: "Diagnosis Management", category: "Health" },
    { icon: <FaComments className="w-6 h-6" />, name: "Feedback Report", category: "Quality" },
    { icon: <FaCreditCard className="w-6 h-6" />, name: "Subscription", category: "Billing" },
    { icon: <FaEnvelope className="w-6 h-6" />, name: "WhatsApp Messages", category: "Communication" },
    { icon: <FaShieldAlt className="w-6 h-6" />, name: "Reset Password", category: "Security" },
  ]

  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      position: "Principal, Greenwood High School",
      content:
        "MyLeading Campus has transformed how we manage our institution. The comprehensive features and user-friendly interface have improved our efficiency by 40%.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      position: "IT Director, Riverside Academy",
      content:
        "The integration capabilities and robust reporting features make MyLeading Campus an essential tool for modern educational management.",
      rating: 5,
    },
    {
      name: "Emma Rodriguez",
      position: "Administrator, Oakville Elementary",
      content:
        "From student enrollment to fee management, everything is seamlessly integrated. Our staff loves how intuitive the system is.",
      rating: 5,
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Core Modules Grid */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              <span className="text-gradient-primary">Complete School Management</span> Modules
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Everything you need to manage your educational institution efficiently, organized into comprehensive
              modules.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {coreModules.map((module, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader>
                  <div className="text-primary mb-4">{module.icon}</div>
                  <CardTitle className="text-xl">{module.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-4">{module.description}</CardDescription>
                  <div className="flex flex-wrap gap-2">
                    {module.modules.slice(0, 3).map((subModule, idx) => (
                      <button key={idx} variant="secondary" className="text-xs">
                        {subModule}
                      </button>
                    ))}
                    {module.modules.length > 3 && (
                      <button variant="outline" className="text-xs">
                        +{module.modules.length - 3} more
                      </button>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Modules */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Additional Modules & Features</h2>
            <p className="text-lg text-muted-foreground">
              Extended functionality to support every aspect of your educational institution
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {additionalModules.map((module, index) => (
              <Card key={index} className="hover:shadow-md transition-shadow duration-300">
                <CardContent className="p-4">
                  <div className="flex items-center gap-3">
                    <div className="text-accent">{module.icon}</div>
                    <div>
                      <CardTitle className="text-sm font-medium">{module.name}</CardTitle>
                      <CardDescription className="text-xs">{module.category}</CardDescription>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Highlights */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Built for Modern Education</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <FaMobile className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Mobile Ready</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Access your school management system anywhere, anytime with our responsive mobile application.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FaCloud className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Cloud-Based</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Secure cloud infrastructure ensures your data is always safe, backed up, and accessible.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <FaShieldAlt className="w-12 h-12 text-accent mx-auto mb-4" />
                <CardTitle>Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Bank-level security with role-based access control and compliance with educational data standards.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 bg-muted">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted by Educational Leaders</h2>
            <p className="text-lg text-muted-foreground">See what educators are saying about MyLeading Campus</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardHeader>
                  <FaQuoteLeft className="w-6 h-6 text-accent mb-4" />
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <FaStar key={i} className="w-4 h-4 text-accent" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed mb-6">"{testimonial.content}"</CardDescription>
                  <div>
                    <CardTitle className="text-sm">{testimonial.name}</CardTitle>
                    <CardDescription className="text-sm">{testimonial.position}</CardDescription>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

    
    </div>
  )
}
