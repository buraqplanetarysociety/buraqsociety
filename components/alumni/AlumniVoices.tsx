"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Quote,
  ChevronLeft,
  ChevronRight,
  Star,
  Heart,
  MessageCircle,
} from "lucide-react";
import Image from "next/image";

const alumniVoices = [
  {
    name: "Zara Malik",
    cohort: "2019",
    quote:
      "Buraq didn't just teach me science; it taught me to think beyond boundaries and dream without limits.",
    role: "Data Scientist at Google",
    rating: 5,
    avatar: "/images/Alumni and Legacy/uni image.png",
    location: "San Francisco, USA",
    achievement: "Published 15+ research papers",
  },
  {
    name: "Hassan Ali",
    cohort: "2020",
    quote:
      "The connections I made at Buraq became my global network of innovators and changemakers.",
    role: "Startup Founder",
    rating: 5,
    avatar: "/images/Alumni and Legacy/uni image(1).png",
    location: "London, UK",
    achievement: "Raised $2M in funding",
  },
  {
    name: "Ayesha Siddiqui",
    cohort: "2018",
    quote:
      "Buraq transformed my perspective on what's possible when passion meets purpose.",
    role: "Medical Researcher",
    rating: 5,
    avatar: "/images/Alumni and Legacy/uni image(2).png",
    location: "Toronto, Canada",
    achievement: "Breakthrough in cancer research",
  },
];

export default function AlumniVoices() {
  const [currentVoice, setCurrentVoice] = useState(0);
  const [isLiked, setIsLiked] = useState(false);

  const nextVoice = () => {
    setCurrentVoice((prev) => (prev + 1) % alumniVoices.length);
    setIsLiked(false);
  };

  const prevVoice = () => {
    setCurrentVoice(
      (prev) => (prev - 1 + alumniVoices.length) % alumniVoices.length
    );
    setIsLiked(false);
  };

  return (
    <section className="py-20 bg-[#040149] text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,197,253,0.08),transparent_50%)]" />

        {/* Floating Quote Marks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-blue-400/10 text-6xl font-serif"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            &quot;
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-2 mb-6"
          >
            <MessageCircle className="w-4 h-4 text-[#DBB13B]" />
            <span className="text-sm text-blue-200">What Our Alumni Say</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Alumni Voices
          </h2>
          <p className="text-xl text-blue-200 max-w-3xl mx-auto">
            Hear from our alumni about how Buraq shaped their journey and
            continues to inspire their achievements.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <Button
              variant="outline"
              size="icon"
              onClick={prevVoice}
              className="bg-blue-500/10 border-blue-400/30 hover:bg-blue-500/20 text-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            <div className="flex-1 mx-4 sm:mx-8">
  <AnimatePresence mode="wait">
    <motion.div
      key={currentVoice}
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.9 }}
      transition={{ duration: 0.6, type: "spring", bounce: 0.3 }}
    >
      <Card className="bg-blue-500/10 border-blue-400/30 backdrop-blur-sm hover:bg-blue-500/15 transition-all duration-500 shadow-2xl">
        <CardContent className="p-4 sm:p-8">
          {/* Header with Avatar and Info */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-6">
            <motion.div
              className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-[#DBB13B] mx-auto sm:mx-0"
              whileHover={{ scale: 1.1 }}
            >
              <Image
                src={alumniVoices[currentVoice].avatar}
                alt={alumniVoices[currentVoice].name}
                fill
                className="object-cover"
              />
            </motion.div>

            <div className="flex-1 min-w-0 text-center sm:text-left">
              <h4 className="font-bold text-lg sm:text-xl text-white mb-1">
                {alumniVoices[currentVoice].name}
              </h4>
              <p className="text-[#DBB13B] font-medium text-sm sm:text-base mb-1">
                {alumniVoices[currentVoice].role}
              </p>
              <p className="text-blue-200 text-xs sm:text-sm">
                {alumniVoices[currentVoice].location} • Cohort{" "}
                {alumniVoices[currentVoice].cohort}
              </p>
            </div>

            {/* <motion.div
              className="text-right sm:min-w-[120px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <div className="flex justify-center sm:justify-end space-x-1 mb-2">
                {[...Array(alumniVoices[currentVoice].rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <Star className="w-4 h-4 text-[#DBB13B] fill-current" />
                  </motion.div>
                ))}
              </div>
              <p className="text-xs text-blue-300 text-center sm:text-right">
                {alumniVoices[currentVoice].achievement}
              </p>
            </motion.div> */}
          </div>

          {/* Quote Section */}
          <div className="relative">
            <Quote className="w-6 sm:w-8 h-6 sm:h-8 text-[#DBB13B] mb-4 opacity-60" />
            <motion.p
              className="text-base sm:text-lg italic leading-relaxed text-blue-100 pl-4 border-l-2 border-[#DBB13B]/30"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              &quot;{alumniVoices[currentVoice].quote}&quot;
            </motion.p>
          </div>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-blue-400/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              {/* <motion.button
                className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-300 text-sm ${
                  isLiked
                    ? "bg-red-500/20 text-red-400 border border-red-400/30"
                    : "bg-blue-500/10 text-blue-300 border border-blue-400/30 hover:bg-blue-500/20"
                }`}
                onClick={() => setIsLiked(!isLiked)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Heart
                  className={`w-4 h-4 ${isLiked ? "fill-current" : ""}`}
                />
                <span>{isLiked ? "Liked" : "Like"}</span>
              </motion.button> */}

              {/* <div className="text-sm text-blue-300 text-center sm:text-left">
                {Math.floor(Math.random() * 50) + 20} people found this inspiring
              </div> */}
            </div>

            <div className="text-xs text-blue-400 text-center sm:text-right">
              {currentVoice + 1} of {alumniVoices.length}
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  </AnimatePresence>
</div>

            <Button
              variant="outline"
              size="icon"
              onClick={nextVoice}
              className="bg-blue-500/10 border-blue-400/30 hover:bg-blue-500/20 text-white hover:scale-110 transition-all duration-300 backdrop-blur-sm"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>

          {/* Enhanced Pagination */}
          <div className="flex justify-center items-center space-x-4">
            {alumniVoices.map((voice, index) => (
              <motion.button
                key={index}
                className={`relative transition-all duration-300 ${
                  index === currentVoice ? "scale-125" : "hover:scale-110"
                }`}
                onClick={() => setCurrentVoice(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <div
                  className={`w-12 h-12 rounded-full border-2 overflow-hidden transition-all duration-300 ${
                    index === currentVoice
                      ? "border-[#DBB13B] shadow-lg shadow-[#DBB13B]/30"
                      : "border-blue-400/30 hover:border-blue-400/60"
                  }`}
                >
                  <Image
                    src={voice.avatar}
                    alt={voice.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                {index === currentVoice && (
                  <motion.div
                    className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-[#DBB13B] rounded-full"
                    layoutId="activeIndicator"
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
