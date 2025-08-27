"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { MapPin, Award, Calendar, Lightbulb } from 'lucide-react';

interface WhereItAllBeganProps {
  variant?: "light" | "dark";
}

export default function WhereItAllBegan({ variant = "light" }: WhereItAllBeganProps) {
  const isDark = variant === "dark";
  
  return (
    <section className={`py-20 ${isDark ? "bg-[#040149]" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-6`}>
            Where It All{' '}
            <span className="text-[#DBB13B]">
              Began
            </span>
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
            <div className="flex items-center gap-3 mb-6">
              <Lightbulb className="w-8 h-8 text-[#DBB13B]" />
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#040149]"}`}>The Vision</h3>
            </div>
            
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              In 1993, Dr. Shahid Mahmud returned from a visit to a space camp in Uzbekistan with a vision. He had seen firsthand how powerful and inspiring such an experience could be for young minds. He came back to Pakistan with a simple but bold idea: to create a platform where students could explore the wonders of space and science in a hands-on, meaningful way.
            </p>
            
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              He shared this vision with Mr. Sameer Qureshi, and together they began shaping what would eventually become the Buraq Planetary Society. Drawing from the model they had observed, they carefully adapted it to fit the needs and aspirations of Pakistani students.
            </p>

            <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#304B78]/20" : "bg-[#304B78]/10"} rounded-lg`}>
              <Calendar className="w-6 h-6 text-[#304B78]" />
              <div>
                <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>1993</p>
                <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>The vision was born</p>
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
                src="/images/about-3.jpg"
                alt="Early days of Buraq Space Camp"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-xl shadow-[#040149]/10">
              <Image
                src="/images/about-4.jpg"
                alt="International recognition and growth"
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
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-8 h-8 text-[#DBB13B]" />
              <h3 className={`text-2xl font-bold ${isDark ? "text-white" : "text-[#040149]"}`}>The Beginning</h3>
            </div>
            
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              In 1994, the first Buraq Space Camp was held in Murree. That same year, three of Buraq&apos;s earliest cadets were selected to attend the Uzbekistan Space Camp, earning the program international recognition right from the start. It was a proud and defining moment.
            </p>
            
            <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed`}>
              Since then, Buraq has held 18 successful camps, each one built on the same founding spirit of curiosity, discipline, and exploration. What began as a small initiative is now a growing community of ambitious individuals inspired to learn, lead, and reach for something greater.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#DBB13B]/20" : "bg-[#DBB13B]/10"} rounded-lg`}>
                <MapPin className="w-6 h-6 text-[#DBB13B]" />
                <div>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>Murree</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>First camp location</p>
                </div>
              </div>
              <div className={`flex items-center gap-3 p-4 ${isDark ? "bg-[#304B78]/20" : "bg-[#304B78]/10"} rounded-lg`}>
                <Award className="w-6 h-6 text-[#304B78]" />
                <div>
                  <p className={`font-semibold ${isDark ? "text-white" : "text-[#040149]"}`}>1994</p>
                  <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>International recognition</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}