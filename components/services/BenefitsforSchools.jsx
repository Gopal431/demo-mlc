import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function BenefitsforSchools({ title, cards, surveyText ,iconsColor}) {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-left mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{title}</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {cards.map((card, idx) => (
            <Card key={idx} className="text-center">
              <CardHeader>
                <div className={`mx-auto w-16 h-16 bg-${iconsColor}-100 rounded-full flex items-center justify-center mb-4`}>
                  <card.icon className={`w-8 h-8 text-${iconsColor}-600`} />
                </div>
                <CardTitle className="text-xl text-gray-900">{card.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="text-left space-y-2 text-gray-900">
                  {card.items.map((item, i) => (
                    <li key={i}>• {item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="bg-purple-100 text-gray-900 p-8 rounded-lg text-center">
          <p className="text-lg mb-4">{surveyText}</p>
        </div>
      </div>
    </section>
  )
}
