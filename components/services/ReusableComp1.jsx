// components/FeatureSection.js
import { CheckCircle2 } from "lucide-react";

export default function ReusableComp1({ title, description, items, footer ,iconsColor}) {
    return (
        <div className="max-w-xl">
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-gray-600 mb-6">{description}</p>
            <ul className="space-y-4 mb-6">
                {items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className={`text-${iconsColor}-600 w-5 h-5 mt-1 flex-shrink-0`}/>
                        <span className="text-gray-800 font-medium">
                            {item}
                        </span>
                    </li>
                ))}
            </ul>
            {footer && <p className="text-gray-600">{footer}</p>}
        </div>
    );
}
