"use client";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FaEnvelope } from "react-icons/fa";

export default function ReadyToMakeYSS({ sectionData }) {
  const { title, subtitle, description, cards, contact } = sectionData;

  const handleWhatsAppRedirect = () => {
    window.open(contact.whatsappUrl, "_blank");
  };

  return (
    <section className="py-16 bg-gradient-to-br from-blue-600 to-purple-700 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">{title}</h2>
          <p className="text-xl text-blue-100 mb-4 max-w-3xl mx-auto">{subtitle}</p>
          <p className="text-lg text-blue-100 mb-10">{description}</p>
        </div>
      <div>
  {/* Mobile Slider */}
  <div className="flex gap-4 overflow-x-auto md:hidden px-2 pb-4">
    {cards.map((card, index) => (
      <Card
        key={index}
        className="min-w-[250px] flex-shrink-0 bg-white/20 border-white/30 text-white"
      >
        <CardContent className="p-6 text-center">
          <card.icon
            className="w-8 h-8 mx-auto mb-3"
            style={{ color: card.iconColor }}
          />
          <h3 className="font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-blue-100">{card.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>

  {/* Desktop Grid */}
  <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
    {cards.map((card, index) => (
      <Card
        key={index}
        className="bg-white/20 border-white/30 text-white"
      >
        <CardContent className="p-6 text-center">
          <card.icon
            className="w-8 h-8 mx-auto mb-3"
            style={{ color: card.iconColor }}
          />
          <h3 className="font-semibold mb-2">{card.title}</h3>
          <p className="text-sm text-blue-100">{card.desc}</p>
        </CardContent>
      </Card>
    ))}
  </div>
</div>

        <div className="text-center">
          <div className="bg-white/20 rounded-lg p-8 mb-8 max-w-2xl mx-auto"> 
            <div className="flex items-center justify-center gap-4 mb-6">
              <FaEnvelope className="w-6 h-6 text-blue-200" />
              <span className="text-lg">{contact.email}</span>
            </div>
            <Button
              onClick={handleWhatsAppRedirect}
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 px-8 py-3 text-lg font-semibold"
            >
              {contact.buttonText}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
