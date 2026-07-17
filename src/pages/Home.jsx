import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown, Camera, Users, Cake } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Home() {
  const services = [
    {
      id: 1,
      title: "Portrait Sessions",
      price: "$250 – $350",
      description: "1-2 hour session with 40-50 edited digital images. Perfect for headshots, families, or personal branding.",
      icon: Camera
    },
    {
      id: 2,
      title: "Weddings",
      price: "$2,000 – $2,500",
      description: "8-10 hours of coverage. 600-800 edited photos, digital files, and USB delivery.",
      icon: Users
    },
    {
      id: 3,
      title: "Birthdays & Events",
      price: "$400 – $500",
      description: "3-4 hours of coverage. 150-200 edited photos perfect for celebrations and milestones.",
      icon: Cake
    }
  ];

  const featuredWorks = [
    {
      id: 1,
      image: "/images/portfolio/01-829448f7f_IMG_3782.jpg",
      title: "The Keeper's Light",
      category: "Architecture"
    },
    {
      id: 2,
      image: "/images/portfolio/02-287e4f486_NewHavenConnecticut__MG_0272.jpg",
      title: "Weeping Cherry",
      category: "Nature"
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
              backgroundImage: "url('/images/portfolio/03-0853e65bd_IMG_4879.jpg')"
            }}
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-2xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-5xl md:text-7xl lg:text-8xl text-white mb-6 leading-tight"
          >
            The Shutter Nomad
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-white/90 text-lg md:text-xl mb-12 font-light"
          >
            Professional photography for portraits, weddings, and celebrations.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to={createPageUrl("Booking")}
              className="inline-flex items-center justify-center gap-2 bg-white text-black px-8 py-4 text-sm tracking-wider uppercase font-semibold hover:bg-white/90 transition-all duration-300"
            >
              Book Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to={createPageUrl("Gallery")}
              className="inline-flex items-center justify-center gap-2 border border-white text-white px-8 py-4 text-sm tracking-wider uppercase hover:bg-white hover:text-black transition-all duration-300"
            >
              View Gallery
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-5 h-5 text-white/70" />
          </motion.div>
        </motion.div>
      </section>

      {/* Featured Works */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
              <div>
                <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black">
                  Recent Work
                </h2>
              </div>
              <Link
                to={createPageUrl("Gallery")}
                className="inline-flex items-center gap-2 text-sm tracking-widest uppercase text-black hover:text-gray-600 transition-colors mt-6 md:mt-0"
              >
                View Full Gallery
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {featuredWorks.map((work, index) => (
              <FadeIn key={work.id} delay={index * 0.1}>
                <Link
                  to={createPageUrl("Gallery")}
                  className="group relative aspect-[4/5] overflow-hidden bg-gray-200"
                >
                  <img
                    src={work.image}
                    alt={work.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
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

      {/* Why Choose Section */}
      <section className="py-24 lg:py-32 bg-black">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-12 leading-relaxed">
              Capturing moments that matter
            </h2>
            <p className="text-white/80 text-lg leading-relaxed max-w-2xl mx-auto">
              Every photograph tells a story. Whether it's an intimate portrait, a wedding day, or a celebration with friends and family, I'm here to preserve those moments with authenticity and artistic vision.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="left">
              <div className="aspect-[3/4] overflow-hidden">
                <img
                  src="/images/portfolio/04-51ace835a_IMG_4526.jpg"
                  alt="The photographer"
                  className="w-full h-full object-cover"
                />
              </div>
            </FadeIn>

            <FadeIn direction="right">
              <div className="lg:pl-12">
                <h2 className="font-serif text-4xl md:text-5xl text-black mb-8">
                  About Me
                </h2>
                <p className="text-gray-700 leading-relaxed mb-6 text-lg">
                  Based in Boston, I specialize in capturing the authentic moments that matter most. Whether you're planning a wedding, a portrait session, or documenting a special celebration, I bring creativity and professionalism to every shoot.
                </p>
                <p className="text-gray-600 leading-relaxed mb-10">
                  My approach combines technical expertise with an artistic eye, ensuring your photos are not just beautiful, but timeless.
                </p>
                <Link
                  to={createPageUrl("About")}
                  className="inline-flex items-center gap-3 text-black hover:text-gray-600 transition-colors text-sm tracking-wider uppercase font-semibold"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-7xl mx-auto">
          <FadeIn>
            <div className="text-center mb-20">
              <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-black mb-6">
                Services & Pricing
              </h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                Transparent pricing for your most important moments
              </p>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <FadeIn key={service.id} delay={index * 0.1}>
                  <div className="h-full flex flex-col border border-gray-200 p-8 hover:border-black transition-colors duration-300">
                    <Icon className="w-10 h-10 text-black mb-6" />
                    <h3 className="font-serif text-2xl text-black mb-2">
                      {service.title}
                    </h3>
                    <p className="text-3xl font-semibold text-black mb-6">
                      {service.price}
                    </p>
                    <p className="text-gray-600 leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>
                    <Link
                      to={createPageUrl("Booking")}
                      className="inline-flex items-center gap-2 text-black hover:text-gray-600 transition-colors text-sm tracking-wider uppercase font-semibold"
                    >
                      Inquire
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 px-6 lg:px-12 bg-gray-900">
        <div className="max-w-3xl mx-auto text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white mb-8">
              Ready to Book?
            </h2>
            <p className="text-white/80 leading-relaxed mb-12 max-w-lg mx-auto text-lg">
              Let's create something beautiful together. Contact me to discuss your vision and get started.
            </p>
            <Link
              to={createPageUrl("Booking")}
              className="inline-flex items-center gap-3 bg-white text-black px-10 py-5 text-sm tracking-wider uppercase font-semibold hover:bg-white/90 transition-colors"
            >
              Start Your Session
              <ArrowRight className="w-4 h-4" />
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
