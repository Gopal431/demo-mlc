import { MessageCircle, Wrench, Settings2, Settings } from "lucide-react";

export default function DashboardGrid({ iconsColor }) {
  const erpCards = [
    {
      icon: MessageCircle,
      title: "24/7 WhatsApp Support",
      description: "Always available when you need help",
    },
    {
      icon: Wrench,
      title: "On-site Engineer Visits",
      description: "For Kolkata schools",
    },
    {
      icon: Settings2,
      title: "Highly Customizable ERP",
      description: "As per institution's unique needs",
    },
    {
      icon: Settings,
      title: "Secure & Reliable",
      description: "Data protection and uptime guaranteed",
    },
  ];

  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-2 gap-6">
      {erpCards.map((card, idx) => {
        const Icon = card.icon;
        return (
          <div
            key={idx}
            className="bg-gradient-to-br from-white via-blue-50 to-gray-100 p-6 rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300"
          >
            <div className="flex items-center gap-3 mb-2">
              <Icon
                className={`w-6 h-6 text-${iconsColor}-600 flex-shrink-0 `}
              />
              <h3 className="text-lg font-semibold text-gray-800">
                {card.title}
              </h3>
            </div>
            <p className="text-gray-600 text-sm">{card.description}</p>
          </div>
        );
      })}
    </div>
  );
}
