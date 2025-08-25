import { FaCheckCircle } from "react-icons/fa"

export default function WhyChooseMLC({ title, description, features ,iconsColor}) {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
          <p className="text-lg text-gray-900 max-w-3xl ">{description}</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, idx) => (
            <div key={idx} className={`bg-${iconsColor}-50 p-6 rounded-lg`}>
             <div className="flex items-center space-x-4">
               <feat.icon className={`w-8 h-8 text-${iconsColor}-600 mb-4`} />
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feat.title}</h3>
              </div>
              <p className="text-gray-900">{feat.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
