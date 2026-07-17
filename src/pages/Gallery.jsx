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
      src: "/images/portfolio/05-1c313548b_IMG_0852.jpg",
      category: "Architecture",
      title: "Glass & Sky",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 2,
      src: "/images/portfolio/06-04166296c_4A834112-AA0F-461D-AA23-26C6EF55DAAF_L0_001-7_27_20253_05_27PM.jpg",
      category: "Portrait",
      title: "Quiet Light",
      size: "large",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 3,
      src: "/images/portfolio/07-bbf81d8a5__MG_0313-2.jpg",
      category: "Nature",
      title: "Cherry Blossom",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 28,
      src: "/images/portfolio/08-3a79f0ac7_IMG_4926.jpg",
      category: "Portrait",
      title: "Golden Years",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 4,
      src: "/images/portfolio/09-91362395f_5CF54954-0AC4-4C4B-AAE2-5672B92A32FB_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "The Satchel",
      size: "medium",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 5,
      src: "/images/portfolio/10-71ddfe5a2_C94CE655-24EA-4BD9-83B8-E4060707B2AA_L0_001-4_28_20258_57_27PM.jpg",
      category: "Nature",
      title: "Quince Bloom",
      size: "medium",
      location: "",
      date: "April 28, 2025"
    },
    {
      id: 33,
      src: "/images/portfolio/11-96da981f2_IMG_3994.jpg",
      category: "Portrait",
      title: "Coastal Gaze",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 6,
      src: "/images/portfolio/12-d1ed17e82_ChapterOpenedWandReadyLettheMagicUnfold.jpg",
      category: "Still Life",
      title: "Chapter Opened",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 7,
      src: "/images/portfolio/13-27b29bd74__MG_0321-2.jpg",
      category: "Nature",
      title: "Magnolia",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 29,
      src: "/images/portfolio/14-bee0242ff_IMG_4801.jpg",
      category: "Portrait",
      title: "Soft Afternoon",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 8,
      src: "/images/portfolio/15-8837587ce__MG_0301-2.jpg",
      category: "Nature",
      title: "Crimson Branch",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 9,
      src: "/images/portfolio/16-5906171d9_039551D5-2D90-4FA7-8631-83D4C14F3096_L0_001-7_27_20254_45_49PM.jpg",
      category: "Still Life",
      title: "Reflection",
      size: "small",
      location: "",
      date: "July 27, 2025"
    },
    {
      id: 30,
      src: "/images/portfolio/17-34317c6ef_IMG_4741.jpg",
      category: "Portrait",
      title: "The Wanderer",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 10,
      src: "/images/portfolio/18-eeb68f1da__MG_0321-3.jpg",
      category: "Nature",
      title: "Petals",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 11,
      src: "/images/portfolio/19-f2ea35e3d_DE73AA4E-9C65-4138-BC4C-BA43C6CE1265_1_105_c.jpg",
      category: "Street",
      title: "Harbor Story",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 34,
      src: "/images/portfolio/20-77530015e_IMG_3987.jpg",
      category: "Portrait",
      title: "Seaside Smile",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 12,
      src: "/images/portfolio/21-dea8cc827_35E1E874-002B-4D79-9A31-4B7BB98D7CE4_1_105_c.jpg",
      category: "Nature",
      title: "First Bloom",
      size: "small",
      location: "",
      date: ""
    },
    {
      id: 13,
      src: "/images/portfolio/22-2bbd7c56c_IMG_3782.jpg",
      category: "Architecture",
      title: "Portland Head",
      size: "large",
      location: "Portland, Maine",
      date: ""
    },
    {
      id: 31,
      src: "/images/portfolio/23-9f1fe0e55_IMG_4720.jpg",
      category: "Portrait",
      title: "Together",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 14,
      src: "/images/portfolio/24-e202c0133_IMG_3882.jpg",
      category: "Nature",
      title: "Atlantic Calm",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 15,
      src: "/images/portfolio/25-41668645e_IMG_4032.jpg",
      category: "Architecture",
      title: "Headland",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 32,
      src: "/images/portfolio/26-648edce9e_IMG_4604.jpg",
      category: "Portrait",
      title: "Two of a Kind",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 16,
      src: "/images/portfolio/27-5320a059d_IMG_4182.jpg",
      category: "Nature",
      title: "Sea Foam",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 18,
      src: "/images/portfolio/28-caa62965f_NewHavenConnecticut__MG_0156.jpg",
      category: "Still Life",
      title: "Arranged Bloom",
      size: "medium",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 35,
      src: "/images/portfolio/29-b30ad9b2a_IMG_2619.jpg",
      category: "Portrait",
      title: "Hearthside",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 19,
      src: "/images/portfolio/02-287e4f486_NewHavenConnecticut__MG_0272.jpg",
      category: "Nature",
      title: "Weeping Cherry",
      size: "medium",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 20,
      src: "/images/portfolio/30-8cad393c3_NewHavenConnecticut__MG_0273.jpg",
      category: "Nature",
      title: "Petal Drift",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 36,
      src: "/images/portfolio/31-8bd224388_IMG_1708.jpg",
      category: "Portrait",
      title: "Celebration",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 21,
      src: "/images/portfolio/32-688a445ff_NewHavenConnecticut__MG_0279.jpg",
      category: "Nature",
      title: "Hanging Blossom",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 24,
      src: "/images/portfolio/01-829448f7f_IMG_3782.jpg",
      category: "Architecture",
      title: "The Keeper's Light",
      size: "large",
      location: "Portland, Maine",
      date: ""
    },
    {
      id: 22,
      src: "/images/portfolio/33-39cb93ca0_NewHavenConnecticut__MG_0301.jpg",
      category: "Nature",
      title: "Crimson Bloom",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 25,
      src: "/images/portfolio/34-a5ec27b78_IMG_3844.jpg",
      category: "Architecture",
      title: "Skyward",
      size: "large",
      location: "",
      date: ""
    },
    {
      id: 26,
      src: "/images/portfolio/35-106fd043a_IMG_4165.jpg",
      category: "Nature",
      title: "Churning Wake",
      size: "medium",
      location: "",
      date: ""
    },
    {
      id: 23,
      src: "/images/portfolio/36-4e84bc77d_NewHavenConnecticut__MG_0316.jpg",
      category: "Nature",
      title: "Pale Cluster",
      size: "small",
      location: "New Haven, Connecticut",
      date: ""
    },
    {
      id: 27,
      src: "/images/portfolio/37-73240599b_IMG_4032.jpg",
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
    <div className="min-h-screen pt-32 pb-24 bg-white">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 mb-16">
        <FadeIn>
          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl text-black mb-6">
            Gallery
          </h1>
          <p className="text-gray-600 max-w-2xl leading-relaxed text-lg mb-12">
            A curated collection of portraits, weddings, and moments from celebrations.
            Each image represents authentic storytelling and professional artistry.
          </p>
        </FadeIn>

        {/* Filters */}
        <FadeIn delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveFilter(category)}
                className={`px-6 py-2 text-sm tracking-wider uppercase transition-all duration-300 ${
                  activeFilter === category
                    ? "bg-black text-white"
                    : "bg-gray-100 text-black hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FadeIn>
      </div>

      {/* Grid Gallery */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image, index) => (
              <motion.div
                key={image.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                className="group cursor-pointer relative overflow-hidden aspect-square bg-gray-200"
                onClick={() => setSelectedImage(image)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="text-white/80 text-xs tracking-widest uppercase mb-1">
                    {image.category}
                  </p>
                  <h3 className="font-serif text-xl text-white">
                    {image.title}
                  </h3>
                  {image.date && (
                    <p className="text-white/60 text-xs mt-2">
                      {image.date}
                    </p>
                  )}
                </div>
              </motion.div>
            ))}
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
