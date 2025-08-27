"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Calendar, Shield, Heart } from "lucide-react";

interface WhatIsBuraqProps {
  variant?: "light" | "dark";
}

export default function WhatIsBuraq({ variant = "light" }: WhatIsBuraqProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 ${isDark ? "bg-[#040149]" : "bg-white"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-6`}>
            What is <span className="text-[#DBB13B]">Buraq?</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              Buraq Space Camp is an annual week-long winter camp held in
              Islamabad every December. Focused on science and space, the camp
              gives 40 driven teenagers from across Pakistan a chance to spend
              seven days immersed in exploration, learning, and challenge, all
              within a fast-paced, team-based environment.
            </p>

            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              Cadets are placed in teams of four and follow a packed daily
              schedule of lectures, missions, physical training, quizzes, and
              group tasks. While space and science are at the core, the camp
              also dives into a wide range of subjects including history,
              geography, leadership, and problem-solving, making every day feel
              new.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#304B78]/20" : "bg-[#304B78]/10"} rounded-lg`}>
                <Users className="w-6 h-6 text-[#304B78]" />
                <div>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>40 Cadets</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Per Camp</p>
                </div>
              </div>
              <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#DBB13B]/20" : "bg-[#DBB13B]/10"} rounded-lg`}>
                <Calendar className="w-6 h-6 text-[#DBB13B]" />
                <div>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>7 Days</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>Intensive Program</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl shadow-[#040149]/10">
              <Image
                src="/images/about-1.jpg"
                alt="Buraq Space Camp activities"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl shadow-[#040149]/10">
              <Image
                src="/images/about-2.jpg"
                alt="Camp facilities and accommodation"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6 order-1 lg:order-2"
          >
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              All essentials such as accommodation, gear, and in-camp facilities
              are completely free. Sleeping and restroom areas are separate for
              boys and girls, and the site is secured 24/7.
            </p>

            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              Buraq isn&apos;t just a camp. It&apos;s a week that opens your mind, tests
              your limits, and stays with you long after it ends.
            </p>

            <div className="grid grid-cols-1 gap-4 mt-8">
              <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#DBB13B]/20" : "bg-[#DBB13B]/10"} rounded-lg`}>
                <Shield className="w-6 h-6 text-[#DBB13B]" />
                <div>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>
                    Completely Free
                  </p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
                    All accommodation, gear & facilities included
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className={`text-center  rounded-2xl p-4 lg:p-12`}
        >
          <Heart className="w-12 h-12 text-[#DBB13B] mx-auto mb-6" />
          <h3 className={`text-2xl md:text-3xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-6`}>
            More Than Just a Camp
          </h3>
          <p className="text-lg text-gray-700 max-w-6xl lg:max-w-4xl mx-auto">
            Beyond this camp, Buraq instills a constellation of connections
            bound not just by memory, but by purpose. It&apos;s a society where help
            arrives before it&apos;s asked for, where guidance flows across batches,
            borders, and generations. In a world often fragmented, Buraq&apos;s
            network is an orbit of more than 700 alumni - magnetic and
            dependable in how far it reaches and how deeply it supports.
          </p>
        </motion.div>
      </div>
    </section>
  );
}