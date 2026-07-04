import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MapPin, Calendar } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Architecture", "Nature", "Portrait", "Still Life", "Street"];

  const galleryImages = [
    {
      id: 1,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/1c313548b_IMG_0852.jpg",
      category: "Architecture",
      title: "Glass & Sky",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 2,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/04166296c_4A834112-AA0F-461D-AA23-26C6EF55DAAF_L0_001-7_27_20253_05_27PM.jpg",
      category: "Portrait",
      title: "Quiet Light",
      size: "large",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 3,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/bbf81d8a5__MG_0313-2.jpg",
      category: "Nature",
      title: "Cherry Blossom",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 4,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/91362395f_5CF54954-0AC4-4C4B-AAE2-5672B92A32FB_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "The Satchel",
      size: "medium",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 5,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/71ddfe5a2_C94CE655-24EA-4BD9-83B8-E4060707B2AA_L0_001-4_28_20258_57_27PM.jpg",
      category: "Nature",
      title: "Quince Bloom",
      size: "medium",
      location: "",
      date: "April 28, 2025"
    },
    {
      id: 6,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/d1ed17e82_ChapterOpenedWandReadyLettheMagicUnfold.jpg",
      category: "Still Life",
      title: "Chapter Opened",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 7,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/27b29bd74__MG_0321-2.jpg",
      category: "Nature",
      title: "Magnolia",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 8,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/8837587ce__MG_0301-2.jpg",
      category: "Nature",
      title: "Crimson Branch",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 9,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/5906171d9_039551D5-2D90-4FA7-8631-83D4C14F3096_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "Reflection",
      size: "small",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 10,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/eeb68f1da__MG_0321-3.jpg",
      category: "Nature",
      title: "Petals",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 11,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/f2ea35e3d_DE73AA4E-9C65-4138-BC4C-BA43C6CE1265_1_105_c.jpg",
      category: "Street",
      title: "Harbor Story",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 12,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/dea8cc827_35E1E874-002B-4D79-9A31-4B7BB98D7CE4_1_105_c.jpg",
      category: "Nature",
      title: "First Bloom",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 13,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/2bbd7c56c_IMG_3782.jpg",
      category: "Architecture",
      title: "Portland Head",
      size: "large",
      location: "Portland, Maine",
      date: ""
    },
    {
      id: 14,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/e202c0133_IMG_3882.jpg",
      category: "Nature",
      title: "Atlantic Calm",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 15,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/41668645e_IMG_4032.jpg",
      category: "Architecture",
      title: "Headland",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 16,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/5320a059d_IMG_4182.jpg",
      category: "Nature",
      title: "Sea Foam",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 18,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/caa62965f_NewHavenConnecticut__MG_0156.jpg",
      category: "Still Life",
      title: "Arranged Bloom",
      size: "medium",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 19,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/287e4f486_NewHavenConnecticut__MG_0272.jpg",
      category: "Nature",
      title: "Weeping Cherry",
      size: "medium",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 20,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/8cad393c3_NewHavenConnecticut__MG_0273.jpg",
      category: "Nature",
      title: "Petal Drift",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 21,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/688a445ff_NewHavenConnecticut__MG_0279.jpg",
      category: "Nature",
      title: "Hanging Blossom",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 22,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/39cb93ca0_NewHavenConnecticut__MG_0301.jpg",
      category: "Nature",
      title: "Crimson Bloom",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 23,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/4e84bc77d_NewHavenConnecticut__MG_0316.jpg",
      category: "Nature",
      title: "Pale Cluster",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 24,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/829448f7f_IMG_3782.jpg",
      category: "Architecture",
      title: "The Keeper's Light",
      size: "large",
      location: "Portland, Maine",
      date: ""
    },
    {
      id: 25,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/a5ec27b78_IMG_3844.jpg",
      category: "Architecture",
      title: "Skyward",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 26,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/106fd043a_IMG_4165.jpg",
      category: "Nature",
      title: "Churning Wake",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 27,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/73240599b_IMG_4032.jpg",
      category: "Architecture",
      title: "Cliffside Sentinel",
      size: "large",
      location: "",
      date: ""
    }
  ];

  const filteredImages = activeFilter === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="min-h-screen pt-32 pb-24">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <FadeIn>
          <p className="text-[#B08D57] text-sm tracking-[0.3em] uppercase mb-4">
            The Collection
          </p>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-[#1a1a1a] mb-8">
            Gallery
          </h1>
          <p className="text-[#3D2B1F]/70 max-w-xl leading-relaxed">
            A curated selection of photographs from journeys near and far. 
            Each frame is a moment frozen — a story waiting to be felt.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-4 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-5 py-2 text-xs tracking-widest uppercase border transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-[#1a1a1a] text-white border-[#1a1a1a]"
                    : "bg-transparent text-[#1a1a1a] border-[#1a1a1a]/20 hover:border-[#1a1a1a]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Cinematic Full-Bleed Gallery */}
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
          >
            {filteredImages.map((image, index) => {
              const isWide = index % 3 === 0;
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
                  className={`group cursor-pointer relative overflow-hidden bg-[#1a1a1a] ${
                    isWide
                      ? "w-full aspect-[16/10] md:aspect-[21/9]"
                      : "w-full aspect-[4/3] md:aspect-[16/9]"
                  }`}
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.title}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.04]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a]/70 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-8 md:p-14 lg:p-20 flex items-end justify-between">
                    <div>
                      <p className="text-white/60 text-xs tracking-[0.3em] uppercase mb-2">
                        {image.category}
                      </p>
                      <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-3">
                        {image.title}
                      </h3>
                      <div className="flex flex-wrap gap-x-5 gap-y-1 text-white/70 text-xs tracking-wider">
                        {image.location && (
                          <span className="inline-flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-[#B08D57]" />
                            {image.location}
                          </span>
                        )}
                        {image.date && (
                          <span className="inline-flex items-center gap-1.5">
                            <Calendar className="w-3.5 h-3.5 text-[#B08D57]" />
                            {image.date}
                          </span>
                        )}
                      </div>
                    </div>
                    <span className="hidden md:block text-white/40 text-sm tracking-widest">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-[#1a1a1a]/95 flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-4xl max-h-[85vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full h-full object-contain"
              />
              <div className="mt-6 text-center">
                <p className="text-white/50 text-xs tracking-widest uppercase mb-2">
                  {selectedImage.category}
                </p>
                <h3 className="font-serif text-2xl text-white mb-3">
                  {selectedImage.title}
                </h3>
                <div className="flex justify-center flex-wrap gap-x-5 gap-y-1 text-white/70 text-sm">
                  {selectedImage.location && (
                    <span className="inline-flex items-center gap-1.5">
                      <MapPin className="w-4 h-4 text-[#B08D57]" />
                      {selectedImage.location}
                    </span>
                  )}
                  {selectedImage.date && (
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar className="w-4 h-4 text-[#B08D57]" />
                      {selectedImage.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}