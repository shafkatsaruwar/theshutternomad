import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import FadeIn from "@/components/ui/FadeIn";

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const categories = ["All", "Landscape", "Portrait", "Street", "Travel", "Architecture"];

  const galleryImages = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800&q=80",
      category: "Landscape",
      title: "Highland Light",
      size: "large"
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      category: "Portrait",
      title: "The Wanderer",
      size: "small"
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1480714378408-67cf0d3bc1b?w=800&q=80",
      category: "Street",
      title: "City Pulse",
      size: "small"
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1488646959791-4331f9d1b9b1?w=800&q=80",
      category: "Travel",
      title: "Distant Shores",
      size: "medium"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1444723121867-7b8cd1b0a3c0?w=800&q=80",
      category: "Architecture",
      title: "Concrete Symphony",
      size: "small"
    },
    {
      id: 6,
      src: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&q=80",
      category: "Landscape",
      title: "Forest Cathedral",
      size: "large"
    },
    {
      id: 7,
      src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&q=80",
      category: "Portrait",
      title: "Quiet Confidence",
      size: "medium"
    },
    {
      id: 8,
      src: "https://images.unsplash.com/photo-1530521953877-e0bd5c3c9b5b?w=800&q=80",
      category: "Travel",
      title: "Wandering Souls",
      size: "small"
    },
    {
      id: 9,
      src: "https://images.unsplash.com/photo-1447752875215-b2761acb3c5d?w=800&q=80",
      category: "Landscape",
      title: "Morning Mist",
      size: "small"
    },
    {
      id: 10,
      src: "https://images.unsplash.com/photo-1502920917128-9530e40e5c5a?w=800&q=80",
      category: "Travel",
      title: "The Gear",
      size: "medium"
    },
    {
      id: 11,
      src: "https://images.unsplash.com/photo-1554188248-986adbb73be4?w=800&q=80",
      category: "Street",
      title: "Rain & Neon",
      size: "small"
    },
    {
      id: 12,
      src: "https://images.unsplash.com/photo-1486325212946-7d0abcfd9b22?w=800&q=80",
      category: "Travel",
      title: "Coastal Drift",
      size: "large"
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