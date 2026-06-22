import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
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
      size: "large"
    },
    {
      id: 2,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/04166296c_4A834112-AA0F-461D-AA23-26C6EF55DAAF_L0_001-7_27_20253_05_27PM.jpg",
      category: "Portrait",
      title: "Quiet Light",
      size: "large"
    },
    {
      id: 3,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/bbf81d8a5__MG_0313-2.jpg",
      category: "Nature",
      title: "Cherry Blossom",
      size: "small"
    },
    {
      id: 4,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/91362395f_5CF54954-0AC4-4C4B-AAE2-5672B92A32FB_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "The Satchel",
      size: "medium"
    },
    {
      id: 5,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/71ddfe5a2_C94CE655-24EA-4BD9-83B8-E4060707B2AA_L0_001-4_28_20258_57_27PM.jpg",
      category: "Nature",
      title: "Quince Bloom",
      size: "medium"
    },
    {
      id: 6,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/d1ed17e82_ChapterOpenedWandReadyLettheMagicUnfold.jpg",
      category: "Still Life",
      title: "Chapter Opened",
      size: "large"
    },
    {
      id: 7,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/27b29bd74__MG_0321-2.jpg",
      category: "Nature",
      title: "Magnolia",
      size: "small"
    },
    {
      id: 8,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/8837587ce__MG_0301-2.jpg",
      category: "Nature",
      title: "Crimson Branch",
      size: "small"
    },
    {
      id: 9,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/5906171d9_039551D5-2D90-4FA7-8631-83D4C14F3096_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "Reflection",
      size: "small"
    },
    {
      id: 10,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/eeb68f1da__MG_0321-3.jpg",
      category: "Nature",
      title: "Petals",
      size: "medium"
    },
    {
      id: 11,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/f2ea35e3d_DE73AA4E-9C65-4138-BC4C-BA43C6CE1265_1_105_c.jpg",
      category: "Street",
      title: "Harbor Story",
      size: "small"
    },
    {
      id: 12,
      src: "https://media.base44.com/images/public/6a398250071013524ae383a2/dea8cc827_35E1E874-002B-4D79-9A31-4B7BB98D7CE4_1_105_c.jpg",
      category: "Nature",
      title: "First Bloom",
      size: "small"
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

      {/* Masonry Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div 
          layout
          className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="break-inside-avoid"
              >
                <div
                  onClick={() => setSelectedImage(image)}
                  className={`group cursor-pointer overflow-hidden bg-[#e8e5df] ${
                    image.size === "large" 
                      ? "aspect-[3/4]" 
                      : image.size === "medium"
                      ? "aspect-square"
                      : "aspect-[4/3]"
                  }`}
                >
                  <div className="relative w-full h-full">
                    <img
                      src={image.src}
                      alt={image.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-[#1a1a1a]/0 group-hover:bg-[#1a1a1a]/40 transition-colors duration-500" />
                    <div className="absolute inset-0 flex flex-col justify-end p-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <p className="text-white/70 text-xs tracking-widest uppercase mb-1">
                        {image.category}
                      </p>
                      <h3 className="font-serif text-xl text-white">
                        {image.title}
                      </h3>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
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
                <h3 className="font-serif text-2xl text-white">
                  {selectedImage.title}
                </h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}