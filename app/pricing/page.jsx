"use client";

import { useState } from "react";
import { FaWhatsapp } from "react-icons/fa";

// Pricing data with monthly and yearly options
const pricingData = {
  basic: {
    type: "Basic",
    monthly: {
      price: "₹0",
      perMonth: "₹0 / month",
      subscription: "month (forever free)",
    },
    yearly: {
      price: "₹0",
      perMonth: "₹0 / month",
      subscription: "year (forever free)",
    },
    description: "Perfect for small institutions or testing.",
    features: [
      "✓ Student Management",
      "✓ Fees Management",
      "✓ Attendance Management",
      "✓ Progress Report",
      "✓ Certificates",
      "✓ User Management",
      "✓ Assignment Management",
      "✓ Notice & Syllabus Uploads (10/day)",
      "✓ Basic Employee Management",
      "✓ Max Students: 100",
      "✓ Users: 1",
      "✓ Mobile Apps for Students, Teachers, Parents",
      "✓ Reports: Basic",
      "✓ Training: Self-guided Video Tutorials",
      "✓ API & Integrations: Not available",
    ],
  },
  standard: {
    type: "Standard",
    monthly: {
      price: "₹1,000",
      perMonth: "₹1,000 / month",
      subscription: "/ month",
      strike: "₹1,500",
    },
    yearly: {
      price: "₹10,000",
      perMonth: "₹834 / month",
      subscription: "/ year",
      strike: "₹16,000",
    },
    description: "Ideal for growing institutions with enhanced needs.",
    features: [
      "✓ Everything in Basic +",
      "✓ Transport Management",
      "✓ Biometric Attendance",
      "✓ GPS Tracking Integration",
      "✓ Online Fees Payment Gateway",
      "✓ Library Management",
      "✓ Canteen & Inventory",
      "✓ Hostel Management",
      "✓ Time Table Management",
      "✓ Leave Management",
      "✓ Enhanced User Management (10 users)",
      "✓ Max Students: 200",
      "✓ Users: Up to 5",
      "✓ Mobile Apps for Students, Teachers, Parents",
      "✓ Reports: Advanced",
      "✓ Training: 2 Virtual Training Sessions",
      "✓ API & Integrations: Limited (Payment, Biometric)",
    ],
  },
  enterprise: {
    type: "Enterprise",
    monthly: {
      price: "₹20",
      perMonth: "/ per month",
      subscription: "/ per student",
    },
    yearly: {
      price: "₹15",
      perMonth: "/ per month",
      subscription: "/ per student",
    },
    description: "Best for large institutions needing advanced features.",
    features: [
      "✓ Everything in Standard +",
      "✓ Online Classes & Video Conferencing Integration",
      "✓ Advanced Accounts & Ledger Management",
      "✓ Class Diary & Parent Communication",
      "✓ WhatsApp Integration (Automated Alerts)",
      "✓ Analytical Progress Report Cards",
      "✓ Enhanced Dashboard with KPIs",
      "✓ Customizable Reports & Data Exports",
      "✓ Dedicated Account Manager",
      "👥 Max Students: Above 500",
      "👤 Users: Unlimited",
      "📱 Mobile Apps for Students, Teachers, Parents",
      "📊 Reports: Advanced + Custom Reports, Predictive Analytics",
      "🎓 Training: 5 Virtual + On-site (extra charges)",
      "🔌 API & Integrations: Full API Access, WhatsApp, ERP",
    ],
  },
};

const List = ({ children }) => (
  <p className="text-base text-gray-700 mb-2">{children}</p>
);

const PricingCard = ({
  plan,
  isYearly,
  buttonText = "Choose Plan",
  active = false,
}) => {
  const [expanded, setExpanded] = useState(false);
  const [visibleCount] = useState(5);
  const pricing = isYearly ? plan.yearly : plan.monthly;

  const visibleItems = expanded
    ? plan.features
    : plan.features.slice(0, visibleCount);
  const hasMoreItems = plan.features.length > visibleCount;

  return (
    <div className="w-full px-4 md:w-1/2 lg:w-1/3 text-[#000]">
      <div
        className={`relative z-10 mb-10 overflow-hidden rounded-[10px] border-2 
          ${plan.type === "Standard" ? "border-green-600" : "border-gray-200"} 
          bg-white px-6 py-10 shadow-lg sm:p-12 lg:px-6 lg:py-10 xl:p-[50px] 
          flex flex-col h-full transition-all duration-300 hover:shadow-xl`}
      >
        <span
          className={`mb-2 block text-lg font-semibold ${
            plan.type === "Standard" ? "text-green-600" : "text-gray-700"
          }`}
        >
          {plan.type}
        </span>

        {plan.type === "Standard" && (
          <div className="absolute top-5 -right-12 w-48 rotate-45 bg-green-600 font-mono text-white text-center text-xs font-bold py-2 shadow-md z-20">
            Recommended
          </div>
        )}

        <div className="mb-4">
          {pricing.strike && (
            <h2 className="text-lg font-medium text-gray-500 line-through">
              {pricing.strike}
            </h2>
          )}
          <h2 className="text-[42px] font-bold text-gray-900">
            {pricing.price}
            <span className="text-base font-medium text-gray-500">
              {" "}
              {pricing.subscription}
            </span>
          </h2>
          {pricing.perMonth && (
            <span className="text-base font-medium text-gray-500">
              {pricing.perMonth}
            </span>
          )}
        </div>

        <p className="mb-8 border-b border-gray-200 pb-8 text-base text-gray-600">
          {plan.description}
        </p>

        <div className="mb-9 flex flex-col gap-[14px] flex-grow">
          {visibleItems.map((feature, index) => (
            <List key={index}>{feature}</List>
          ))}
          {hasMoreItems && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-600 text-sm font-medium mt-4 hover:underline focus:outline-none transition-all"
            >
              {expanded ? "View less" : "View more"}
            </button>
          )}
        </div>

        <a
          target="_blank"
          href="https://www.school.myleadingcampus.com/?view=signup"
          className={`block w-full rounded-md border p-3 text-center text-base font-medium transition-all duration-300 
            ${
              active || plan.type === "Standard"
                ? "border-green-600 bg-green-600 text-white hover:bg-green-700"
                : "border-gray-300 bg-blue-600 text-white hover:bg-blue-700"
            }`}
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

const Page = () => {
  const [isYearly, setIsYearly] = useState(true);

  return (
    <section className="text-black">
      <div className="container mx-auto px-4 py-16">
        <div className="mx-auto my-12 max-w-[510px] text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl md:text-[40px]">
            Our Pricing Plan
          </h2>

          {/* Toggle Switch */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <span
              className={`text-base ${
                !isYearly ? "font-medium text-blue-600" : "text-gray-600"
              }`}
            >
              Monthly
            </span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                checked={isYearly}
                onChange={(e) => setIsYearly(e.target.checked)}
                className="sr-only peer"
              />
              <div className="w-11 h-6 bg-gray-300 peer-focus:outline-none peer-focus:ring-2 peer-focus:ring-blue-500 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>
            <span
              className={`text-base ${
                isYearly ? "font-medium text-blue-600" : "text-gray-600"
              }`}
            >
              Yearly{" "}
              <span className="text-xs text-green-600 font-medium ml-1">
                Save up to 20%
              </span>
            </span>
          </div>
        </div>

        <div className="flex flex-wrap justify-center">
          <PricingCard
            plan={pricingData.basic}
            isYearly={isYearly}
            buttonText="Get Started Free"
          />
          <PricingCard
            plan={pricingData.standard}
            isYearly={isYearly}
            buttonText="Choose Standard"
            active={true}
          />
          <PricingCard
            plan={pricingData.enterprise}
            isYearly={isYearly}
            buttonText="Contact Sales"
          />
        </div>
      </div>

      {/* Contact section */}
      <div className="container mx-auto px-4 py-16 text-center">
        <h3 className="text-2xl font-bold text-gray-900 mb-4">
          Need a custom plan?
        </h3>
        <p className="text-gray-900 mb-8 max-w-2xl mx-auto">
          We understand that every institution has unique requirements. Contact
          our sales team for a customized solution that fits your specific
          needs.
        </p>
        <button
          onClick={() => window.open("https://wa.me/919874344994", "_blank")}
          className="inline-flex items-center justify-center gap-2 rounded-md bg-green-600 px-6 py-3 text-base font-medium text-white transition-colors hover:bg-green-700 focus:outline-none  cursor-pointer"
        >
          <FaWhatsapp className="text-xl" />
          Contact Sales
        </button>
      </div>
    </section>
  );
};

export default Page;
