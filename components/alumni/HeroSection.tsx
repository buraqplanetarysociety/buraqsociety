"use client";

import { motion } from "framer-motion";
import { Sparkles, ArrowDown, Users, Globe, Award } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#040149] text-white overflow-hidden">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,197,253,0.1),transparent_50%)]" />
        
        {/* Floating Dots */}
        <div className="absolute top-0 left-0 w-full h-full">
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-40"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.4, 0.8, 0.4],
                scale: [1, 1.2, 1],
              }}
              transition={{
                duration: 4 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Geometric Shapes */}
      <motion.div
        className="absolute top-20 left-20 w-32 h-32 border-2 border-blue-400/30 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-20 right-20 w-24 h-24 bg-blue-500/20 rounded-full backdrop-blur-sm"
        animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-16 h-16 bg-blue-300/20 rounded-lg rotate-45"
        animate={{ y: [0, -15, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/4 w-20 h-20 border border-blue-300/40 rounded-lg"
        animate={{ rotate: [0, 180, 360] }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />

      <div className="container py-20 mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center max-w-5xl mx-auto"
        >
          {/* <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-full px-6 py-3 mb-8"
          >
            <Sparkles className="w-5 h-5 text-[#DBB13B]" />
            <span className="text-sm font-medium text-blue-100">Celebrating Excellence Since 2010</span>
          </motion.div> */}

          <motion.h1
            className="pt-10 text-6xl md:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <span className="text-white drop-shadow-lg">
              Alumni {" "}
            </span>
            <span className="text-[#DBB13B] drop-shadow-lg">
              & Legacy
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-blue-100 leading-relaxed mb-6 max-w-3xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Beyond Buraq: Where Dreams Take Flight
          </motion.p>

          <motion.p
            className="text-lg text-blue-200/80 max-w-2xl mx-auto mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            Discover how our alumni are reshaping the world, one innovation at a time. From Silicon Valley to space missions, our graduates are writing the future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-4xl">
              <motion.div
                className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:bg-blue-500/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 }}
              >
                <Users className="w-8 h-8 text-[#DBB13B] mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">700+</div>
                <div className="text-sm text-blue-200">Global Alumni</div>
              </motion.div>
              
              <motion.div
                className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:bg-blue-500/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4 }}
              >
                <Globe className="w-8 h-8 text-[#DBB13B] mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">50+</div>
                <div className="text-sm text-blue-200">Countries</div>
              </motion.div>
              
              <motion.div
                className="bg-blue-500/10 backdrop-blur-sm border border-blue-400/30 rounded-2xl p-6 hover:bg-blue-500/15 transition-all duration-300"
                whileHover={{ scale: 1.05, y: -5 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.6 }}
              >
                <Award className="w-8 h-8 text-[#DBB13B] mx-auto mb-3" />
                <div className="text-4xl font-bold text-white mb-2">100+</div>
                <div className="text-sm text-blue-200">Top Universities</div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      {/* <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2 text-blue-200/60">
          <span className="text-sm">Scroll to explore</span>
          <ArrowDown className="w-5 h-5" />
        </div>
      </motion.div> */}
    </section>
  );
}