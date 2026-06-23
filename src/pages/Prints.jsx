import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Check, ShoppingBag, Loader2, Frame, Truck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { base44 } from "@/api/base44Client";
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
  const [loadingId, setLoadingId] = useState(null);
  const [status, setStatus] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get("status")) setStatus(params.get("status"));
  }, []);

  const handleOrder = async (priceId) => {
    if (window.self !== window.top) {
      alert("Checkout works only from a published app. Please open the app in a new tab to complete your purchase.");
      return;
    }

    setLoadingId(priceId);
    try {
      const response = await base44.functions.invoke("create-print-checkout", {
        price_id: priceId,
        quantity: 1,
      });
      if (response.data?.url) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      alert("Something went wrong starting checkout. Please try again.");
    } finally {
      setLoadingId(null);
    }
  };

  if (status === "success") {
    return (
      <div className="min-h-screen pt-32 pb-24 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-center px-6"
        >
          <div className="w-20 h-20 mx-auto mb-8 flex items-center justify-center bg-[#B08D57]/10 rounded-full">
            <Check className="w-10 h-10 text-[#B08D57]" />
          </div>
          <h1 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-4">
            Order Confirmed
          </h1>
          <p className="text-[#3D2B1F]/70 max-w-md mx-auto mb-8">
            Thank you for your order. A confirmation has been sent to your email,
            and your print will be crafted and shipped with care.
          </p>
          <p className="text-[#B08D57] text-sm tracking-widest uppercase">
            Made with light &amp; wanderlust
          </p>
        </motion.div>
      </div>
    );
  }

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
                    onClick={() => handleOrder(print.priceId)}
                    disabled={loadingId === print.priceId}
                    className="w-full py-5 bg-[#1a1a1a] text-white text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors rounded-none"
                  >
                    {loadingId === print.priceId ? (
                      <>
                        <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                        Preparing...
                      </>
                    ) : (
                      <>
                        <ShoppingBag className="w-4 h-4 mr-2" />
                        Order Print
                      </>
                    )}
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