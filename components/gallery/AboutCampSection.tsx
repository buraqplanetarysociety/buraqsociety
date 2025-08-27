"use client";

import { motion } from "framer-motion";
import { CampYear } from "@/data/campData";
import Image from "next/image";

interface AboutCampSectionProps {
  year: CampYear;
}

// Function to get the correct cover photo filename from cover-photos folder
const getCoverPhotoFilename = (year: string) => {
  const yearMappings: { [key: string]: string } = {
    '1994': '1st Buraq Space Camp - 1994.png',
    '1995': '2nd Buraq Space Camp-1995 .png',
    '1996': '3rd Buraq Space Camp-1996.png',
    '1997': '4th Buraq Space Camp-1997.png',
    '1999': '5th Buraq Space Camp-1999.png',
    '2001': '6th Buraq Space Camp-2001.png',
    '2002': '7th Buraq Space Camp-2002.png',
    '2003': '8th Buraq Space Camp-2003.png',
    '2012': '9th Buraq Space Camp-2012.png',
    '2013': '10th Buraq Space Camp-2013.png',
    '2014': '11th Buraq Space Camp-2014.png',
    '2015': '12th Buraq Space Camp-2015.png',
    '2016': '13th Buraq Space Camp-2016.png',
    '2017': '14th Buraq Space Camp-2017.png',
    '2018': '15th Buraq Space Camp-2018.png',
    '2019': '16th Buraq Space Camp-2019.png',
    '2023': '17th Buraq Space Camp-2023.png',
    '2024': '18th Buraq Space Camp-2025.png', // Note: 2024 maps to 2025 filename
  };
  return yearMappings[year] || `${year}-cover.png`; // fallback
};

export default function AboutCampSection({ year }: AboutCampSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="mb-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        {/* Hero/Banner Image - Removed click functionality */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="relative aspect-[16/9] rounded-2xl overflow-hidden mb-16 shadow-xl"
        >
          <Image
            src={`/images/gallery/cover-photos/${getCoverPhotoFilename(
              year.year
            )}`}
            alt={`Buraq Camp ${year.year} Cover Photo`}
            fill
            className="object-cover"
            priority
          />
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold text-[#040149] mb-6"
        >
          {year.aboutCamp.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-gray-700 leading-relaxed"
        >
          {year.aboutCamp.paragraph}
        </motion.p>
      </div>
    </motion.div>
  );
}
