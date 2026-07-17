import React from "react";
import { Check, Mail, Frame, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/ui/FadeIn";

const prints = [
  {
    name: "Small",
    size: "8\" × 10\"",
    price: "$180",
    priceId: "price_1TlZrzEB2MiLFL2qEIS7c27m",
    description: "Perfect for shelves, desks, and intimate gallery walls.",
  },
  {
    name: "Medium",
    size: "16\" × 20\"",
    price: "$350",
    priceId: "price_1TlZrzEB2MiLFL2qt7UlAkJh",
    description: "The statement piece — ideal above a sofa or console.",
    popular: true,
  },
  {
    name: "Large",
    size: "24\" × 36\"",
    price: "$600",
    priceId: "price_1TlZrzEB2MiLFL2qn1JxUMwb",
    description: "Bold and immersive — a centerpiece for any room.",
  },
];

export default function Prints() {
  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <FadeIn>
          <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
            The Shop
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-6">
            Fine Art Prints
          </h1>
          <p className="text-[#3D2B1F]/70 leading-relaxed max-w-xl">
            Limited-edition archival prints from my travel portfolio. Each one is
            hand-signed, museum-quality, and made to order. Bring a piece of the
            journey home.
          </p>
        </FadeIn>
      </div>

      {/* Print Options */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid md:grid-cols-3 gap-6">
          {prints.map((print, index) => (
            <FadeIn key={print.name} delay={index * 0.1}>
              <div className="group relative bg-white p-8 lg:p-10 h-full flex flex-col border border-[#e8e5df] hover:border-[#B08D57]/30 transition-colors duration-500">
                {print.popular && (
                  <div className="absolute top-6 right-6">
                    <span className="text-[10px] tracking-widest uppercase text-[#B08D57] border border-[#B08D57]/30 px-3 py-1">
                      Popular
                    </span>
                  </div>
                )}

                <div className="flex-1">
                  <div className="w-12 h-12 flex items-center justify-center border border-[#B08D57]/30 rounded-full mb-6">
                    <Frame className="w-5 h-5 text-[#B08D57]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-1">
                    {print.name}
                  </h3>
                  <p className="text-[#B08D57] text-sm tracking-wider mb-4">
                    {print.size}
                  </p>
                  <p className="text-[#3D2B1F]/60 text-sm leading-relaxed mb-6">
                    {print.description}
                  </p>
                </div>

                <div className="border-t border-[#e8e5df] pt-6">
                  <p className="font-serif text-3xl text-[#1a1a1a] mb-6">
                    {print.price}
                  </p>
                  <Button
                    asChild
                    className="w-full py-5 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors rounded-none"
                  >
                    <a
                      href={`mailto:theshutternomad@outlook.com?subject=Print%20Inquiry%20-%20${encodeURIComponent(print.name)}&body=Hi%20Mohammed,%0A%0AI%27m%20interested%20in%20the%20${encodeURIComponent(print.name)}%20${encodeURIComponent(print.size)}%20print.%20Can%20you%20send%20me%20the%20available%20photo%20options%20and%20next%20steps%3F`}
                    >
                      <Mail className="w-4 h-4 mr-2" />
                      Inquire About Print
                    </a>
                  </Button>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Guarantees */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <FadeIn>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#B08D57]/30 rounded-full">
                <ShieldCheck className="w-5 h-5 text-[#B08D57]" />
              </div>
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">Archival Quality</h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Museum-grade paper and inks rated to last over 100 years without fading.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#B08D57]/30 rounded-full">
                <Check className="w-5 h-5 text-[#B08D57]" />
              </div>
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">Hand-Signed</h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Every print is signed and numbered, part of a strictly limited edition.
              </p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center border border-[#B08D57]/30 rounded-full">
                <Truck className="w-5 h-5 text-[#B08D57]" />
              </div>
              <h4 className="font-serif text-xl text-[#1a1a1a] mb-2">Carefully Shipped</h4>
              <p className="text-[#3D2B1F]/60 text-sm leading-relaxed">
                Made to order and shipped in protective packaging within 2–3 weeks.
              </p>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
