import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Clock, Sparkles } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Services() {
  const services = [
    {
      name: "Portrait Sessions",
      description: "Personal, brand, or editorial portraits shot on location or in-studio. Natural light, authentic moments.",
      duration: "90 min",
      price: "$350",
      popular: true
    },
    {
      name: "Wedding Photography",
      description: "Full-day coverage of your celebration — from the quiet morning prep to the last dance. Two photographers included.",
      duration: "8 hours",
      price: "$2,800",
      popular: true
    },
    {
      name: "Travel & Adventure",
      description: "Expedition and outdoor photography for brands, tourism boards, and publications. I go where the story is.",
      duration: "Custom",
      price: "From $1,500",
      popular: false
    },
    {
      name: "Event Coverage",
      description: "Galleries, launches, conferences, and private events. Candid, documentary-style storytelling.",
      duration: "4 hours",
      price: "$900",
      popular: false
    },
    {
      name: "Fine Art Prints",
      description: "Limited-edition archival prints from my travel portfolio. Hand-signed, museum-quality, made to order.",
      duration: "Made to order",
      price: "From $180",
      popular: false
    }
  ];

  const addOns = [
    { name: "Additional Hour of Coverage", price: "$250" },
    { name: "Rush Edit (48-hour delivery)", price: "$300" },
    { name: "Online Gallery & Sharing", price: "Complimentary" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-end">
          <FadeIn>
            <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
              The Services
            </p>
            <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
              Capture<br />Your Story
            </h1>
          </FadeIn>
          
          <FadeIn delay={0.2}>
            <p className="text-[#3D2B1F]/70 leading-relaxed lg:pb-2">
              From intimate portraits to full-day weddings, every session is 
              approached with the same care — an eye for light, a feel for 
              the moment, and a commitment to images that last.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <FadeIn key={service.name} delay={index * 0.1}>
              <div className="group relative bg-white p-8 lg:p-10 h-full flex flex-col border border-[#e8e5df] hover:border-[#B08D57]/30 transition-colors duration-500">
                {service.popular && (
                  <div className="absolute top-6 right-6">
                    <Sparkles className="w-4 h-4 text-[#B08D57]" />
                  </div>
                )}
                
                <div className="flex-1">
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                    {service.name}
                  </h3>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="border-t border-[#e8e5df] pt-6 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[#B08D57]">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{service.duration}</span>
                  </div>
                  <span className="font-serif text-2xl text-[#1a1a1a]">
                    {service.price}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Add-Ons Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="bg-[#1a1a1a] p-10 lg:p-16">
          <FadeIn>
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
                  Enhancements
                </p>
                <h2 className="font-serif text-3xl md:text-4xl text-white mb-4">
                  Add-On Services
                </h2>
                <p className="text-white/60 leading-relaxed">
                  Tailor your package with these optional enhancements. 
                  Everything is flexible — tell me what you need.
                </p>
              </div>

              <div className="space-y-4">
                {addOns.map((addon, index) => (
                  <div 
                    key={addon.name}
                    className="flex items-center justify-between py-4 border-b border-white/10"
                  >
                    <span className="text-white">{addon.name}</span>
                    <span className="text-[#B08D57] font-serif text-lg">
                      {addon.price}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Policies */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Booking Policy
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                A 30% retainer secures your date. The balance is due on the 
                day of the shoot. Travel fees may apply for remote locations.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Cancellations
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Please give 72 hours notice for rescheduling. Retainers are 
                non-refundable within 14 days of the shoot date.
              </p>
            </div>
            <div className="p-6">
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-3">
                Delivery
              </h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Edited galleries are delivered within 2–3 weeks via a private 
                online gallery, ready for download and print ordering.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Ready to Book?
          </h2>
          <p className="text-[#3D2B1F]/70 mb-10 max-w-md mx-auto">
            Tell me about your project and let's create something worth keeping.
          </p>
          <Link
            to={createPageUrl("Booking")}
            className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors"
          >
            Book a Session
            <ArrowRight className="w-4 h-4" />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
}