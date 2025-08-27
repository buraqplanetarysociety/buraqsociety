"use client";

import { motion } from "framer-motion";
import { MapPin, Users} from "lucide-react";
import { useState, useEffect } from "react";
import { AlumniWorldMap } from "./AlumniWorldMap";

// const alumniReachData = [
//   { country: "Pakistan", count: 450, flag: "🇵🇰", color: "from-green-500 to-emerald-600", percentage: 100 },
//   { country: "USA", count: 32, flag: "🇺🇸", color: "from-blue-500 to-indigo-600", percentage: 71 },
//   { country: "UK", count: 18, flag: "🇬🇧", color: "from-red-500 to-rose-600", percentage: 40 },
//   { country: "Canada", count: 15, flag: "🇨🇦", color: "from-red-400 to-red-600", percentage: 33 },
//   { country: "UAE", count: 12, flag: "🇦🇪", color: "from-emerald-500 to-teal-600", percentage: 27 },
//   { country: "Germany", count: 8, flag: "🇩🇪", color: "from-gray-700 to-gray-900", percentage: 18 },
//   { country: "Australia", count: 6, flag: "🇦🇺", color: "from-blue-400 to-blue-600", percentage: 13 },
//   { country: "Singapore", count: 4, flag: "🇸🇬", color: "from-red-500 to-pink-600", percentage: 9 },
// ];

export default function AlumniReach() {
  const [hoveredCountry, setHoveredCountry] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <section className="py-32 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                              Alumni <span className="text-[#DBB13B]">Reach</span>
                            </h2>
            
            <p className="text-xl text-gray-300">Loading global presence...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-[#1B3572] text-white relative overflow-hidden">
      {/* Animated Background */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(147,51,234,0.15),transparent_50%)]" />
      </div> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
          >
            <MapPin className="w-5 h-5 text-blue-400" />
            <span className="text-sm font-semibold">Global Presence</span>
          </motion.div> */}

              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                              Alumni <span className="text-[#DBB13B]">Reach</span>
                            </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Our global network spans continents, with alumni making impact in major cities and institutions worldwide.
          </p>
        </motion.div>

        {/* Interactive World Map */}
        <motion.div 
          className="mb-20 relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="">
            <AlumniWorldMap showConnections={true} className="" />
          </div>
        </motion.div>

        {/* Country Cards Grid */}
        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-7xl mx-auto mt-40">
          {alumniReachData.map((country, index) => (
            <motion.div
              key={country.country}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }} // Reduced hover scale
              className="group cursor-pointer"
              onHoverStart={() => setHoveredCountry(country.country)}
              onHoverEnd={() => setHoveredCountry(null)}
            >
              <div className={`bg-white/10 backdrop-blur-md rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-300 hover:bg-white/15 ${
                hoveredCountry === country.country ? 'border-blue-400 bg-white/20' : ''
              }`}>

                <div className="text-center mb-6">
                  <div className="text-6xl mb-4 transition-transform duration-300">
                    {country.flag}
                  </div>
                  <h3 className="font-bold text-white text-lg transition-colors">
                    {country.country}
                  </h3>
                </div>


                <div className="text-center mb-6">
                  <div className={`text-5xl font-bold bg-gradient-to-r ${country.color} bg-clip-text text-transparent mb-2`}>
                    {country.count}
                  </div>
                  <p className="text-gray-300 text-sm font-medium">Alumni</p>
                </div>


                <div className="relative">
                  <div className="h-2 bg-white/20 rounded-full overflow-hidden">
                    <motion.div
                      className={`h-full bg-gradient-to-r ${country.color} rounded-full`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${country.percentage}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <div className="flex justify-between items-center mt-2">
                    <span className="text-xs text-gray-400">Global %</span>
                    <span className="text-xs text-gray-300 font-semibold">{country.percentage}%</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div> */}

        {/* Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">700+</div>
              <div className="text-gray-300">Total Alumni</div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <MapPin className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-300">Countries</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}