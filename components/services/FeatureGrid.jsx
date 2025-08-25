import { Server, Users, Globe2, ShoppingCart } from "lucide-react";

export default function FeatureGrid({iconsColor}) {
   const features = [
  {
    icon: Server,
    count: "50+",
    color: "blue",
    title: "Schools",
    desc: "Reputed schools across Kolkata and beyond",
  },
  {
    icon: Users,
    count: "50,000+",
    color: "green",
    title: "Users",
    desc: "Daily active users",
  },
  {
    icon: Globe2,
    count: "20,000+",
    color: "purple",
    title: "Downloads",
    desc: "App downloads on Android & iOS",
  },
  {
    icon: ShoppingCart,
    count: "4.5★",
    color: "yellow",
    title: "Ratings",
    desc: "Rated in Play Store & App Store",
  },
];


    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 ">
            {features.map((feat, idx) => {
                const Icon = feat.icon;
                return (
                    <div
                        key={idx}
                        className="bg-gradient-to-br from-white via-blue-50 to-gray-100  rounded-2xl shadow-md p-6 hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center space-x-3">
                            <div className={`bg-${iconsColor}-100 p-3 w-fit rounded-full mb-4 flex`}>
                            <Icon className={`w-5 h-5 text-${iconsColor}-600`} />
                           
                        </div>
                        <h3 className="text-lg font-semibold mb-2">{feat.title}</h3>
                            </div>
                        <p className="text-gray-600 text-sm">{feat.desc}</p>
                    </div>
                );
            })}
        </div>
    );
}
