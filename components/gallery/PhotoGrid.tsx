"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CampYear } from "@/data/campData";
import { useState, useMemo } from "react";

interface PhotoGridProps {
  year: CampYear;
  onImageClick: (src: string) => void;
}

export default function PhotoGrid({ year, onImageClick }: PhotoGridProps) {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null);

  // Remove duplicates and filter out banner images
  const uniquePhotos = useMemo(() => {
    const photos = year.photos.filter((photo) => photo.size !== "banner");
    const seen = new Set();
    return photos.filter((photo) => {
      if (seen.has(photo.src)) {
        return false;
      }
      seen.add(photo.src);
      return true;
    });
  }, [year.photos]);



  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="mb-20"
    >
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-5xl font-light text-slate-800 mb-4 tracking-tight">
          Gallery
        </h2>
        <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mb-6"></div>
        <p className="text-slate-600 text-lg font-light max-w-2xl mx-auto leading-relaxed">
          Capturing the essence of {year.title} through moments that matter
        </p>
      </motion.div>

      {/* Uniform Grid Layout for All Screen Sizes */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto"
      >
        {uniquePhotos.map((photo, index) => {
          const isHovered = hoveredImage === photo.id;

          return (
            <motion.div
              key={photo.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4 + index * 0.05 }}
              className="relative aspect-square rounded-xl overflow-hidden cursor-pointer group shadow-lg hover:shadow-2xl transition-all duration-300"
              onClick={() => onImageClick(photo.src)}
              onMouseEnter={() => setHoveredImage(photo.id)}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                className={`object-cover transition-transform duration-500 ${
                  isHovered ? "scale-110" : "scale-100"
                }`}
                loading="lazy"
              />

              {/* Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 transition-opacity duration-300 ${
                  isHovered ? "opacity-100" : "opacity-0"
                }`}
              />

              {/* Hover Border Effect */}
              <div
                className={`absolute inset-0 border-2 transition-colors duration-300 rounded-xl ${
                  isHovered ? "border-white/20" : "border-white/0"
                }`}
              />
            </motion.div>
          );
        })}
      </motion.div>
    </motion.div>
  );
}
