"use client";

import { useState, useEffect } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";
import { campYears, CampYear } from "@/data/campData";
import AboutCampSection from "@/components/gallery/AboutCampSection";
import PhotoGrid from "@/components/gallery/PhotoGrid";
import VideoSection from "@/components/gallery/VideoSection";
import ValuesSection from "@/components/gallery/ValuesSection";
import { notFound } from "next/navigation";

export default function YearGalleryPage() {
  const params = useParams();
  const router = useRouter();
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [year, setYear] = useState<CampYear | null>(null);

  useEffect(() => {
    const yearId = params.id as string;
    const foundYear = campYears.find((y) => y.id === yearId);
    
    if (!foundYear) {
      notFound();
      return;
    }
    
    setYear(foundYear);
    // Scroll to top when page loads
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [params.id]);

  const handleBackToGallery = () => {
    router.push("/gallery");
  };

  if (!year) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-[#040149] mx-auto mb-4"></div>
          <p className="text-gray-600">Loading gallery...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      {/* Enhanced Header */}
      <div className="relative h-[400px] bg-gradient-to-br from-[#040149] via-[#304B78] to-[#040149] overflow-hidden">
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute inset-0">
          <Image
            src="/images/background-1.JPG"
            alt="Gallery Background"
            fill
            className="object-cover opacity-40"
          />
        </div>

        <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
          <div className="text-white max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
            >
              {year.title}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-xl text-white/90"
            >
              {year.highlight}
            </motion.p>
          </div>
        </div>
      </div>

      <div className="bg-white min-h-screen">
        <div className="container mx-auto px-4 py-8">
          {/* Enhanced back button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <Button
              variant="ghost"
              className="gap-2 hover:bg-[#040149]/5 transition-colors duration-200"
              onClick={handleBackToGallery}
            >
              <ChevronLeft className="w-4 h-4" />
              Back to Gallery
            </Button>
          </motion.div>

          {/* Components */}
          <AboutCampSection year={year} />
          <PhotoGrid year={year} onImageClick={setSelectedImage} />
          <VideoSection year={year} />
          <ValuesSection year={year} />
        </div>
      </div>

      {/* Enhanced Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-h-[90vh] max-w-[90vw]"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute -top-12 right-0 text-white hover:text-[#DBB13B] transition-colors text-lg font-medium"
                onClick={() => setSelectedImage(null)}
              >
                Close ✕
              </button>
              <Image
                src={selectedImage}
                alt="Enlarged gallery image"
                width={1200}
                height={800}
                className="object-contain max-h-[80vh] rounded-lg shadow-2xl"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}