"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CampYear } from '@/data/campData';

interface GalleryCardProps {
  year: CampYear;
  index: number;
  onSelect: () => void; // Updated to just call the function
}

export default function GalleryCard({ year, index, onSelect }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group cursor-pointer"
      onClick={onSelect} // Direct function call
    >
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-lg group-hover:shadow-2xl transition-all duration-500">
        <Image
          src={year.coverImage}
          alt={`Camp ${year.title}`}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#040149]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Year badge */}
        <div className="absolute top-4 left-4">
          <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full">
            <span className="text-[#040149] font-bold text-lg">{year.title}</span>
          </div>
        </div>
        
        {/* Hover content */}
        <div className="absolute bottom-6 left-6 right-6 text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0">
          <h3 className="text-2xl font-bold mb-2">{year.aboutCamp.heading}</h3>
          <p className="text-white/90 text-sm line-clamp-2 mb-4">{year.aboutCamp.paragraph}</p>
          <div className="flex flex-wrap gap-2">
            {year.values.slice(0, 2).map((value, idx) => (
              <span key={idx} className="bg-[#DBB13B] text-[#040149] px-3 py-1 rounded-full text-xs font-semibold">
                {value}
              </span>
            ))}
          </div>
        </div>
        
        {/* Click indicator */}
        <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
      
      {/* Card footer */}
      <div className="text-center px-2">
        <h3 className="text-xl font-bold text-[#040149] mb-2">{year.title}</h3>
        {/* <p className="text-gray-600 text-sm">{year.highlight}</p> */}
      </div>
    </motion.div>
  );
}