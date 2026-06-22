import React from "react";
import { Link } from "react-router-dom";
import { createPageUrl } from "@/utils";
import { ArrowRight, Camera, Compass, Heart } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function About() {
  const values = [
    {
      icon: Camera,
      title: "Craft",
      description: "Every frame is composed with intention. I treat the camera like a brush and light like paint."
    },
    {
      icon: Compass,
      title: "Curiosity",
      description: "The best photographs are found, not forced. I follow my curiosity wherever it leads."
    },
    {
      icon: Heart,
      title: "Connection",
      description: "Behind every great image is a moment of trust — with a place, a person, or a feeling."
    }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <FadeIn direction="left">
            <div className="aspect-[3/4] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a398250071013524ae383a2/2728928e0_1500D7A9-F52A-46D1-98B7-B7337C4B5F46_4_5005_c.jpg"
                alt="The Shutter Nomad"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn direction="right">
            <div>
              <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
                The Photographer
              </p>
              <h1 className="font-serif text-5xl md:text-6xl text-[#1a1a1a] mb-6">
                Mohammed
              </h1>
              <div className="space-y-6 text-[#3D2B1F]/70 leading-relaxed">
                <p>
                  I'm Mohammed. I have a full-time life, but my real 
                  joy is traveling and taking photos. What started as 
                  a camera in hand on weekend trips has grown into a 
                  quiet obsession with collecting light from the 
                  world's most beautiful corners.
                </p>
                <p>
                  I'm not a professional photographer — I just love 
                  the craft. I love the way light falls differently 
                  in every place, the way a single frame can hold the 
                  feeling of a whole journey. This is where I share 
                  the images that stayed with me.
                </p>
                <p>
                  "I believe a photograph should make you feel something — 
                  the cold of a morning, the warmth of a stranger's smile, 
                  the ache of a place you've never been but suddenly miss."
                </p>
              </div>
              
              <div className="mt-10 pt-10 border-t border-[#e8e5df]">
                <div className="grid grid-cols-3 gap-8">
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">1</p>
                    <p className="text-[#B08D57] text-sm mt-1">Year Shooting</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">7+</p>
                    <p className="text-[#B08D57] text-sm mt-1">States Visited</p>
                  </div>
                  <div>
                    <p className="font-serif text-3xl text-[#1a1a1a]">∞</p>
                    <p className="text-[#B08D57] text-sm mt-1">Moments Kept</p>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>

      {/* Philosophy */}
      <div className="bg-[#1a1a1a] py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <FadeIn>
            <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-8">
              The Philosophy
            </p>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white leading-relaxed mb-8">
              I don't just photograph places.
              <br />
              I chase the <span className="italic text-[#B08D57]">feeling of being there</span>.
            </h2>
            <p className="text-white/60 max-w-2xl mx-auto leading-relaxed">
              The best images aren't planned — they're noticed. A shift in 
              light, a glance between strangers, the way dust hangs in a 
              doorway. I just try to be present enough to catch them.
            </p>
          </FadeIn>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <FadeIn>
            <div className="text-center mb-16">
              <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
                What Guides Me
              </p>
              <h2 className="font-serif text-4xl md:text-5xl text-[#1a1a1a]">
                My Values
              </h2>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <FadeIn key={value.title} delay={index * 0.1}>
                <div className="text-center p-8">
                  <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border border-[#B08D57]/30 rounded-full">
                    <value.icon className="w-6 h-6 text-[#B08D57]" />
                  </div>
                  <h3 className="font-serif text-2xl text-[#1a1a1a] mb-3">
                    {value.title}
                  </h3>
                  <p className="text-[#3D2B1F]/60 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>

      {/* Gear Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-24">
        <div className="grid lg:grid-cols-2 gap-8">
          <FadeIn direction="left">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://media.base44.com/images/public/6a398250071013524ae383a2/9901e96e0_IMG_0149_1.jpg"
                alt="The gear"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn direction="right" delay={0.1}>
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1452780212940-6f5c0d14d848?w=800&q=80"
                alt="On the road"
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
        
        <FadeIn>
          <div className="mt-12 text-center">
            <h3 className="font-serif text-3xl text-[#1a1a1a] mb-4">
              The Kit
            </h3>
            <p className="text-[#3D2B1F]/70 max-w-2xl mx-auto leading-relaxed">
              I shoot on a Canon EOS RP with a couple of prime lenses — 
              an 85mm for portraits and a wider one for the landscapes. 
              The rest is patience, timing, and a willingness to wake up 
              before the sun. Less gear means more presence, and presence 
              is what makes a photograph breathe.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* CTA */}
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <FadeIn>
          <h2 className="font-serif text-3xl md:text-4xl text-[#1a1a1a] mb-6">
            Let's Create Together
          </h2>
          <p className="text-[#3D2B1F]/70 mb-10 max-w-md mx-auto">
            Have a project, a place, or a moment worth capturing? I'd love to hear about it.
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