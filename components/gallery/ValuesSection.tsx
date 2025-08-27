"use client";

import { motion } from 'framer-motion';
import { CampYear } from '@/data/campData';

interface ValuesSectionProps {
  year: CampYear;
}

export default function ValuesSection({ year }: ValuesSectionProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-16 bg-gradient-to-br from-[#040149]/5 to-[#DBB13B]/10 rounded-2xl p-8 md:p-12"
    >
      <div className="max-w-4xl mx-auto text-center">
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl md:text-3xl font-bold text-[#040149] mb-6"
        >
          What Our Cadets Learned in {year.year}
        </motion.h3>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-8 text-lg"
        >
          These core values and attributes were developed throughout the camp experience:
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4"
        >
          {year.values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8, rotateY: 90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ 
                delay: 0.6 + index * 0.1,
                duration: 0.5,
                type: "spring",
                stiffness: 100
              }}
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 10px 30px rgba(4, 1, 73, 0.3)"
              }}
              className="relative bg-gradient-to-r from-[#DBB13B] to-[#DBB13B]/90 text-[#040149] px-8 py-4 rounded-full font-bold text-base uppercase tracking-wide shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-[#040149]/10"
            >
              <div className="absolute inset-0 bg-white/20 rounded-full opacity-0 hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{value}</span>
              
              {/* Decorative elements */}
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-[#040149] rounded-full opacity-20" />
              <div className="absolute -bottom-1 -left-1 w-2 h-2 bg-[#040149] rounded-full opacity-30" />
            </motion.div>
          ))}
        </motion.div>
        
        {/* Decorative bottom element */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mt-8 flex justify-center"
        >
          <div className="w-16 h-1 bg-gradient-to-r from-[#DBB13B] to-[#040149] rounded-full" />
        </motion.div>
      </div>
    </motion.div>
  );
}