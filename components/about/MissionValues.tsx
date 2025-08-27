"use client";

import { motion } from "framer-motion";
import { Target, Users, Eye, Lightbulb, Award, Compass } from "lucide-react";

interface MissionValuesProps {
  variant?: "light" | "dark";
}

export default function MissionValues({ variant = "light" }: MissionValuesProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 ${isDark ? "bg-[#040149]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        {/* Mission Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-8`}>
            Our <span className="text-[#DBB13B]">Mission</span>
          </h2>

          <div className="flex flex-col lg:flex-row container mx-auto gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-[#304B78]/5 rounded-2xl p-8 border-l-4 border-[#304B78] lg:w-1/3 w-full"
            >
              <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"} text-left`}>
                To identify and empower promising youth by fostering an
                environment of learning, teamwork, and mentorship, unlike
                anything a conventional classroom offers. With the carefully
                crafted atmosphere of discipline and shared purpose, cadets are
                challenged out of their comfort zones.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="bg-[#304B78]/5 rounded-2xl p-8 border-l-4 border-[#DBB13B] lg:w-1/3 w-full"
            >
              <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed text-left`}>
                We don&apos;t just prepare future scientists, entrepreneurs, or
                policymakers. We prepare individuals who lead with integrity,
                think with clarity, and serve with purpose.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-[#304B78]/5 rounded-2xl p-8 border-l-4 border-[#040149] lg:w-1/3 w-full"
            >
              <p className={`text-xl ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed text-left`}>
                The intense yet nurturing environment is designed to bring out
                the best in each participant. Through simulations, high stake
                negotiations, collaborative missions, and personal reflection,
                cadets evolve into focused, thoughtful individuals.
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className={`text-3xl md:text-4xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-6`}>
            Values We <span className="text-[#DBB13B]">Instill</span>
          </h3>
          <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}>
            These core principles guide everything we do and shape the character
            of every member in our extraordinary community.
          </p>
        </motion.div>

        {/* Mission Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-6 mt-16 max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className={`relative ${isDark ? "bg-gray-800" : "bg-[#040149]"} rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between`}
          >
            {/* Angled Label */}
            <div className="absolute -top-6 left-6 bg-pink-400 text-black font-bold text-2xl px-8 py-6 rounded-lg transform -rotate-6 shadow-lg">
              DISCIPLINE
            </div>

            <div className="mt-16">
              <p className="text-gray-300 leading-relaxed">
                Practicing consistency and focus in every task. Owning
                responsibilities with accountability and mastering time to lead
                with intent. Building habits that create lasting excellence and personal growth.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className={`relative ${isDark ? "bg-[gray-800]" : "bg-[#040149]"} rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between`}
          >
            {/* Angled Label */}
            <div className="absolute -top-6 left-6 bg-green-400 text-black font-bold text-2xl px-8 py-6 rounded-lg transform -rotate-6 shadow-lg">
              COMRADESHIP
            </div>

            <div className="mt-16">
              <p className="text-gray-300 leading-relaxed">
                Building bonds through shared purpose and mutual integrity.
                Uplifting one another through teamwork, trust, and collective
                growth. Creating lifelong connections that transcend individual achievements.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className={`relative ${isDark ? "bg-gray-800" : "bg-[#040149]"} rounded-2xl p-8 text-white min-h-[300px] flex flex-col justify-between`}
          >
            {/* Angled Label */}
            <div className="absolute -top-6 left-6 bg-cyan-400 text-black font-bold text-2xl px-8 py-6 rounded-lg transform -rotate-6 shadow-lg">
              VISION
            </div>

            <div className="mt-16">
              <p className="text-gray-300 leading-relaxed">
                Thinking beyond limits with clarity and purpose. Pursuing
                long-term goals through foresight, creativity, and direction.
                Developing the ability to see possibilities where others see obstacles.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
