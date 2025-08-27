"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { campYears } from "@/data/campData";
import GalleryCard from "@/components/gallery/GalleryCard";
import { useRouter } from "next/navigation";

export default function GalleryPage() {
  const router = useRouter();

  const handleYearSelect = (yearId: string) => {
    router.push(`/gallery/${yearId}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header */}
      <div className="relative h-[500px] bg-gradient-to-br from-[#040149] via-[#304B78] to-[#040149] overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <Image
            src="/images/background-1.JPG"
            alt="Gallery Background"
            fill
            className="object-cover mix-blend-overlay opacity-40"
          />
        </div>

        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-[#DBB13B]/10 rounded-full blur-xl animate-pulse" />
          <div className="absolute bottom-20 right-10 w-48 h-48 bg-white/5 rounded-full blur-2xl animate-pulse" />
          <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-[#DBB13B]/5 rounded-full blur-lg animate-pulse" />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-6xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              Gallery
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl md:text-2xl text-white/90 leading-relaxed"
            >
              Explore decades of memories, achievements, and transformative
              moments from Buraq Space Camp
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="mt-8 flex gap-4"
            >
              <div className="bg-[#DBB13B] text-[#040149] px-6 py-2 rounded-full font-semibold text-sm">
                {campYears.length} Years of Excellence
              </div>
              <div className="bg-white/20 backdrop-blur-sm text-white px-6 py-2 rounded-full font-semibold text-sm">
                Countless Memories
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Gallery grid view */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-20"
      >
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#040149] mb-4">
            Choose Your Journey
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Each year tells a unique story of growth, discovery, and
            transformation. Click on any year to dive into the memories.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {campYears.map((year, index) => (
            <GalleryCard
              key={year.id}
              year={year}
              index={index}
              onSelect={() => handleYearSelect(year.id)}
            />
          ))}
        </div>
      </motion.div>
    </div>
  );
}
