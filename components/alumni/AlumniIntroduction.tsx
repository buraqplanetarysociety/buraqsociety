"use client";

import { motion } from "framer-motion";
import { Users, Globe, Award, TrendingUp } from "lucide-react";

const stats = [
  { icon: Users, value: "700+", label: "Alumni Worldwide", color: "from-blue-500 to-cyan-500" },
  { icon: Globe, value: "50+", label: "Countries", color: "from-purple-500 to-pink-500" },
  { icon: Award, value: "100+", label: "Top Universities", color: "from-green-500 to-emerald-500" },
  // { icon: TrendingUp, value: "95%", label: "Success Rate", color: "from-orange-500 to-red-500" },
];

export default function AlumniIntroduction() {
  return (
    <section className="py-32 bg-gradient-to-br from-gray-50 via-white to-blue-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #8b5cf6 2px, transparent 2px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Header */}
          {/* <div className="text-center mb-20">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6"
            >
              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-gray-700">Our Global Community</span>
            </motion.div>

            <motion.h2
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Alumni
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Network</span>
            </motion.h2>

            <motion.p
              className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              A thriving ecosystem of innovators, leaders, and changemakers spanning the globe
            </motion.p>
          </div> */}

          {/* Stats Grid */}
          {/* <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-20">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 group-hover:border-gray-200 group-hover:-translate-y-2">
                    <div className={`w-16 h-16 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className={`text-4xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 font-medium">{stat.label}</div>
                  </div>
                </motion.div>
              );
            })}
          </div> */}

          {/* Content Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 group-hover:border-blue-200 transition-all duration-500 group-hover:shadow-xl  ">
                <div className="w-12 h-12 bg-[#040149]  rounded-xl flex items-center justify-center mb-6">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Global Impact</h3>
                <p className="text-gray-700 leading-relaxed">
                  The Buraq alumni network represents a diverse community of over <span className="font-bold text-[#040149] ">700 graduates</span> who have transformed their camp experience into remarkable achievements across the globe. From groundbreaking research to innovative startups, our alumni are making their mark in every field imaginable.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-3xl p-8 border border-blue-100 group-hover:border-blue-200 transition-all duration-500 group-hover:shadow-xl">
                <div className="w-12 h-12 bg-[#040149] rounded-xl flex items-center justify-center mb-6">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Legacy of Excellence</h3>
                <p className="text-gray-700 leading-relaxed">
                  They carry forward the legacy of <span className="font-bold text-[#040149] ">critical thinking, leadership, and innovation</span> that defines the Buraq experience. Each alumnus represents not just personal success, but a commitment to creating positive change in their communities and beyond.
                </p>
                <br/>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}