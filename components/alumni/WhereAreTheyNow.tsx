"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState, useEffect } from "react";
import { GraduationCap, Building, Users, Star } from "lucide-react";

const universities = [
  {
    name: "MIT",
    logo: "/images/Alumni and Legacy/mit.png",
    location: "USA",
    students: 12,
    rank: "#1",
    category: "Technology",
  },
  {
    name: "Stanford",
    logo: "/images/Alumni and Legacy/stanford.png",
    location: "USA",
    students: 8,
    rank: "#2",
    category: "Innovation",
  },
  {
    name: "Harvard",
    logo: "/images/Alumni and Legacy/harvard.png",
    location: "USA",
    students: 6,
    rank: "#3",
    category: "Business",
  },
  {
    name: "Cornell",
    logo: "/images/Alumni and Legacy/cornell.png",
    location: "USA",
    students: 5,
    rank: "#4",
    category: "Research",
  },
  {
    name: "Yale",
    logo: "/images/Alumni and Legacy/yale.png",
    location: "USA",
    students: 4,
    rank: "#5",
    category: "Science",
  },
  {
    name: "NYU",
    logo: "/images/Alumni and Legacy/nyu.png",
    location: "USA",
    students: 3,
    rank: "#6",
    category: "Engineering",
  },
  {
    name: "UPenn",
    logo: "/images/Alumni and Legacy/pen.png",
    location: "USA",
    students: 3,
    rank: "#6",
    category: "Engineering",
  },
  {
    name: "Agha Khan",
    logo: "/images/Alumni and Legacy/aghakhan.png",
    location: "Pakistan",
    students: 3,
    rank: "#6",
    category: "Engineering",
  },
  {
    name: "IBA",
    logo: "/images/Alumni and Legacy/iba.png",
    location: "Pakistan",
    students: 2,
    rank: "#7",
    category: "Asia Pacific",
  },
  {
    name: "LUMS",
    logo: "/images/Alumni and Legacy/lums.png",
    location: "Pakistan",
    students: 15,
    rank: "#1",
    category: "Regional",
  },
  {
    name: "University of Leeds",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLgGbgjISimFUyztCcbzYLbahKdF_bish6rw&s",
    location: "UK",
    students: 4,
    rank: "#8",
    category: "Research",
  },
  {
    name: "London School of Economics",
    logo: "/images/Alumni and Legacy/londonschoolofeconomics.png",
    location: "UK",
    students: 3,
    rank: "#9",
    category: "Business",
  },
];

export default function WhereAreTheyNow() {
  // ✅ All useState hooks at the top
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  // Prevent hydration mismatch
  useEffect(() => {
    setIsClient(true);
  }, []);

  const categories = [
    "All",
    "Technology",
    "Innovation",
    "Business",
    "Research",
    "Science",
    "Engineering",
  ];

  const filteredUniversities =
    selectedCategory === "All"
      ? universities
      : universities.filter((uni) => uni.category === selectedCategory);

  // Show loading state during SSR
  if (!isClient) {
    return (
      <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Where Are They Now?
            </h2>
            <p className="text-xl text-gray-600">Loading...</p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-32 bg-gradient-to-br from-white via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          {/* <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-100 to-purple-100 rounded-full px-6 py-3 mb-6"
          >
            <GraduationCap className="w-5 h-5 text-blue-600" />
            <span className="text-sm font-semibold text-gray-700">
              Academic Excellence
            </span>
          </motion.div> */}

          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Where Are 
            <span className="text-[#DBB13B]">
              {" "}
             They Now
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our alumni have gained admission to the world&apos;s most prestigious
            universities, leading companies, and exclusive fellowships,
            continuing their journey of excellence.
          </p>
        </motion.div>

        {/* Category Filter */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-white/80 text-gray-600 hover:bg-white hover:text-gray-900 border border-gray-200 hover:border-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        {/* Universities Grid */}
        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {filteredUniversities.map((uni, index) => (
            <motion.div
              key={uni.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <motion.div
                className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-blue-200 group-hover:-translate-y-3 relative overflow-hidden h-64 flex flex-col justify-between"
                whileHover={{ scale: 1.02 }}
              >
                {/* Rank Badge
                <div className="absolute top-4 right-4 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">
                  {uni.rank}
                </div> */}

                {/* University Logo */}
                <div className="relative w-20 h-20 mx-auto group-hover:scale-110 transition-transform duration-300">
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300" />
                  <Image
                    src={uni.logo}
                    alt={uni.name}
                    fill
                    className="object-contain relative z-10"
                  />
                </div>

                {/* University Info */}
                <div className="text-center flex-1 flex flex-col justify-center">
                  <h3 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {uni.name}
                  </h3>
                  <p className="text-gray-600 text-sm flex items-center justify-center gap-1">
                    <Building className="w-4 h-4" />
                    {uni.location}
                  </p>

                  {/* Category Badge */}
                  {/* <div className="inline-flex items-center gap-1 bg-gradient-to-r from-gray-100 to-blue-100 rounded-full px-3 py-1 mb-4">
                    <Star className="w-3 h-3 text-blue-500" />
                    <span className="text-xs font-medium text-gray-700">
                      {uni.category}
                    </span>
                  </div> */}
                </div>

                {/* Alumni Count - Revealed on Hover
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: hoveredIndex === index ? 1 : 0,
                    height: hoveredIndex === index ? "auto" : 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="overflow-hidden border-t border-gray-200 pt-4 mt-4"
                >
                  <div className="flex items-center justify-center gap-2">
                    <Users className="w-5 h-5 text-blue-500" />
                    <span className="text-2xl font-bold text-blue-600">
                      {uni.students}
                    </span>
                    <span className="text-sm text-gray-600">Alumni</span>
                  </div>
                </motion.div> */}

                {/* Hover Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-500/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-3xl p-8 border border-blue-100 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Academic Achievement Summary
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 justify-between">
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-gray-600 font-medium">
                  Top Universities
                </div>
              </div>
              {/* <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                  95%
                </div>
                <div className="text-gray-600 font-medium">Acceptance Rate</div>
              </div> */}
              <div className="text-center">
                <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-red-600 bg-clip-text text-transparent mb-2">
                  50+
                </div>
                <div className="text-gray-600 font-medium">Countries</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
