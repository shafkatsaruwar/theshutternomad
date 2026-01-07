import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  const featuredWorks = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      title: "Pearl Essence",
      category: "Editorial"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80",
      title: "Midnight Garden",
      category: "Bridal"
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1607779097040-26e80aa78e66?w=800&q=80",
      title: "Chrome Dreams",
      category: "Avant-Garde"
    },
    {
      id: 4,
      image: "https://images.unsplash.com/photo-1604654894610-df63bc536371?w=800&q=80",
      title: "Blush Hour",
      category: "Classic"
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="h-screen relative flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1604654894610-df63bc536371?w=1920&q=80')"
            }}
          />
          <div className="absolute inset-0 bg-[#1a1a1a]/40" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white/80 text-sm tracking-[0.3em] uppercase mb-6"
          >
            Luxury Nail Artistry
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-serif text-6xl md:text-8xl lg:text-9xl text-white mb-8"
          >
            Aurelia
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-white/70 text-lg md:text-xl max-w-md mx-auto mb-12 font-light"
          >
            Where artistry meets elegance. Bespoke nail designs for the extraordinary.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link
              to={createPageUrl("Booking")}
              className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-4 text-sm tracking-widest uppercase hover:bg-white hover:text-[#1a1a1a] transition-all duration-500"
            >
              Book Your Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-white/60" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
                  Selected Works
                </p>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a]">
                  The Portfolio
                </h2>
              </div>
              <Link
                to={createPageUrl("Gallery")}
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-[#1a1a1a] hover:text-[#9C8B7A] transition-colors mt-6 md:mt-0"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredWorks.map((work, index) => (
              <FadeIn key={work.id} delay={index * 0.1}>
                <Link
                  to={createPageUrl("Gallery")}
                  className="group relative aspect-[4/5] overflow-hidden bg-[#e8e5df]"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-white/70 text-xs tracking-widest uppercase mb-2">
                      {work.category}
                    </p>
                    <h3 className="font-serif text-2xl text-white">
                      {work.title}
                    </h3>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Statement Section */}
      <section className="py-24 lg:py-32 bg-[#1a1a1a]">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[#D4A5A5] text-sm tracking-[0.3em] uppercase mb-8">
              The Philosophy
            </p>
            <blockquote className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-12">
              "Every nail is a canvas. Every design, a statement of 
              <span className="italic text-[#D4A5A5]"> refined elegance</span>."
            </blockquote>
            <p className="text-white/50 text-sm tracking-wider">
              — AURELIA CHEN, FOUNDER & ARTIST
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1632345031435-8727f6897d53?w=800&q=80"
                  alt="Luxury nail service"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="lg:pl-12">
                <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-4">
                  The Experience
                </p>
                <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a] mb-6">
                  Bespoke Artistry
                </h2>
                <p className="text-[#3D2B1F]/70 leading-relaxed mb-8">
                  Each session at Aurelia is a curated experience. From the initial consultation 
                  to the final design, every detail is thoughtfully considered to bring your 
                  vision to life.
                </p>
                <p className="text-[#3D2B1F]/70 leading-relaxed mb-10">
                  Our signature services blend traditional techniques with contemporary artistry, 
                  creating designs that are as unique as you are.
                </p>
                <Link
                  to={createPageUrl("Services")}
                  className="inline-flex items-center gap-3 border-b-2 border-[#1a1a1a] pb-2 text-sm tracking-widest uppercase hover:border-[#9C8B7A] hover:text-[#9C8B7A] transition-colors"
                >
                  Explore Services
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-[#e8e5df]">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <p className="text-[#9C8B7A] text-sm tracking-[0.3em] uppercase mb-6">
              Begin Your Journey
            </p>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-[#1a1a1a] mb-8">
              Ready to Create?
            </h2>
            <p className="text-[#3D2B1F]/70 leading-relaxed mb-12 max-w-lg mx-auto">
              Book your private consultation and discover the art of 
              bespoke nail design.
            </p>
            <Link
              to={createPageUrl("Booking")}
              className="inline-flex items-center gap-3 bg-[#1a1a1a] text-white px-10 py-5 text-sm tracking-widest uppercase hover:bg-[#3D2B1F] transition-colors"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}