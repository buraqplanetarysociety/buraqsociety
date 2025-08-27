"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from "next/image";
import { useState } from "react";
import { Award, Briefcase, GraduationCap, Globe, ExternalLink, Star } from "lucide-react";
 
const notableAlumni = [
  {
    name: "Dr. Sarah Ahmed",
    achievement: "NASA Scientist",
    cohort: "2015",
    photo: "/images/Alumni and Legacy/uni image.png",
    bio: "Leading groundbreaking research in space exploration and planetary sciences at NASA's Jet Propulsion Laboratory. Her work on Mars rover missions has revolutionized our understanding of the Red Planet.",
    icon: Award,
    category: "Science",
    company: "NASA JPL",
    rating: 5,
    achievements: ["Mars Mission Lead", "Published 50+ Papers", "NASA Excellence Award"]
  },
  {
    name: "Ahmed Hassan",
    achievement: "Tech Entrepreneur",
    cohort: "2017",
    photo: "/images/Alumni and Legacy/uni image(1).png",
    bio: "Founded a revolutionary AI startup focused on healthcare diagnostics that was acquired by Google for $50M. Now leading AI initiatives at Google Health, impacting millions of lives globally.",
    icon: Briefcase,
    category: "Technology",
    company: "Google",
    rating: 5,
    achievements: ["$50M Exit", "Forbes 30 Under 30", "AI Healthcare Pioneer"]
  },
  {
    name: "Fatima Khan",
    achievement: "Medical Researcher",
    cohort: "2016",
    photo: "/images/Alumni and Legacy/uni image(2).png",
    bio: "Breakthrough research in cancer treatment at Johns Hopkins University. Her innovative immunotherapy approach has shown remarkable results in clinical trials, offering new hope to patients worldwide.",
    icon: GraduationCap,
    category: "Medicine",
    company: "Johns Hopkins",
    rating: 5,
    achievements: ["Cancer Breakthrough", "Clinical Trials Success", "Medical Innovation Award"]
  },
  {
    name: "Ali Raza",
    achievement: "Climate Scientist",
    cohort: "2018",
    photo: "/images/Alumni and Legacy/uni image(3).png",
    bio: "Leading climate change research and policy development at the United Nations. His work on sustainable development goals has influenced global climate policies and environmental protection strategies.",
    icon: Globe,
    category: "Environment",
    company: "United Nations",
    rating: 5,
    achievements: ["UN Climate Lead", "Policy Influencer", "Environmental Champion"]
  }
];

export default function NotableAlumni() {
  const [selectedAlumni, setSelectedAlumni] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Science", "Technology", "Medicine", "Environment"];
  const filteredAlumni = filter === "All" ? notableAlumni : notableAlumni.filter(alumni => alumni.category === filter);

  return (
    <section className="py-32 bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900 text-white relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.15),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_50%)]" />
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
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
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-6 py-3 mb-6"
          >
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-sm font-semibold">Hall of Fame</span>
          </motion.div> */}

          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-white">
              Notable
            </span>
            <span className="text-[#DBB13B]"> {" "}
              Alumni
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Meet our distinguished alumni who are making extraordinary contributions to their fields and shaping the future of humanity.
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
              onClick={() => setFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                filter === category
                  ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg scale-105"
                  : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white border border-white/20 hover:border-white/40"
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div> */}

        {/* Desktop Alumni Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <AnimatePresence>
            {filteredAlumni.map((alumni, index) => {
              const IconComponent = alumni.icon;
              return (
                <motion.div
                  key={alumni.name}
                  layout
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -30, rotateY: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card
                    className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer group hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3"
                    onClick={() => setSelectedAlumni(selectedAlumni === index ? null : index)}
                  >
                    <CardContent className="p-6 relative overflow-hidden">
                      {/* Background Gradient */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                      {/* Profile Section */}
                      <div className="relative z-10">
                        <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                          <Image
                            src={alumni.photo}
                            alt={alumni.name}
                            fill
                            className="object-cover rounded-full border-4 border-white/20 relative z-10"
                          />
                          <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                            <IconComponent className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        <h3 className="font-bold text-gray-100 text-center mb-2 group-hover:text-blue-300 transition-colors">
                          {alumni.name}
                        </h3>
                        <p className="text-blue-300 font-semibold text-center mb-2">
                          {alumni.achievement}
                        </p>
                        <p className="text-gray-400 text-sm text-center mb-4">
                          {alumni.company}
                        </p>

                        {/* Badges */}
                        <div className="flex justify-center gap-2 mb-4">
                          <Badge className="bg-white/20 text-white border-white/30">
                            Cohort {alumni.cohort}
                          </Badge>
                          {/* <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                            {alumni.category}
                          </Badge> */}
                        </div>

                        {/* Remove the Rating section completely */}
                        {/* <div className="flex justify-center space-x-1 mb-4">
                          {[...Array(alumni.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div> */}

                        {/* Expandable Content */}
                        <AnimatePresence>
                          {selectedAlumni === index && (
                            <motion.div
                              initial={{ opacity: 0, height: 0 }}
                              animate={{ opacity: 1, height: "auto" }}
                              exit={{ opacity: 0, height: 0 }}
                              transition={{ duration: 0.3 }}
                              className="overflow-hidden"
                            >
                              <div className="border-t border-white/20 pt-4 mt-4">
                                <p className="text-sm text-gray-300 text-center leading-relaxed mb-4">
                                  {alumni.bio}
                                </p>
                                
                                <div className="space-y-2">
                                  <h4 className="text-sm font-semibold text-white text-center mb-2">Key Achievements</h4>
                                  {alumni.achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-center justify-center gap-2">
                                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                                      <span className="text-xs text-gray-300">{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                                
                                <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                                  <span>Learn More</span>
                                  <ExternalLink className="w-3 h-3" />
                                </button>
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Mobile Alumni Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-sm mx-auto"
          >
            <CarouselContent>
              {filteredAlumni.map((alumni, index) => {
                const IconComponent = alumni.icon;
                return (
                  <CarouselItem key={alumni.name}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                    >
                      <Card
                        className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 cursor-pointer group hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3"
                        onClick={() => setSelectedAlumni(selectedAlumni === index ? null : index)}
                      >
                        <CardContent className="p-6 relative overflow-hidden">
                          {/* Background Gradient */}
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                          {/* Profile Section */}
                          <div className="relative z-10">
                            <div className="relative w-24 h-24 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
                              <Image
                                src={alumni.photo}
                                alt={alumni.name}
                                fill
                                className="object-cover rounded-full border-4 border-white/20 relative z-10"
                              />
                              <div className="absolute -bottom-2 -right-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-2">
                                <IconComponent className="w-4 h-4 text-white" />
                              </div>
                            </div>

                            <h3 className="font-bold text-gray-100 text-center mb-2 group-hover:text-blue-300 transition-colors">
                              {alumni.name}
                            </h3>
                            <p className="text-blue-300 font-semibold text-center mb-2">
                              {alumni.achievement}
                            </p>
                            <p className="text-gray-400 text-sm text-center mb-4">
                              {alumni.company}
                            </p>

                            {/* Badges */}
                            <div className="flex justify-center gap-2 mb-4">
                              <Badge className="bg-white/20 text-white border-white/30">
                                Cohort {alumni.cohort}
                              </Badge>
                              {/* <Badge className="bg-gradient-to-r from-blue-500 to-purple-500 text-white border-0">
                                {alumni.category}
                              </Badge> */}
                            </div>

                            {/* Expandable Content */}
                            <AnimatePresence>
                              {selectedAlumni === index && (
                                <motion.div
                                  initial={{ opacity: 0, height: 0 }}
                                  animate={{ opacity: 1, height: "auto" }}
                                  exit={{ opacity: 0, height: 0 }}
                                  transition={{ duration: 0.3 }}
                                  className="overflow-hidden"
                                >
                                  <div className="border-t border-white/20 pt-4 mt-4">
                                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                                      {alumni.bio}
                                    </p>
                                    
                                    <div className="space-y-2 mb-4">
                                      <h4 className="text-white font-semibold text-sm">Key Achievements:</h4>
                                      <ul className="space-y-1">
                                        {alumni.achievements.map((achievement, i) => (
                                          <li key={i} className="text-gray-300 text-xs flex items-center gap-2">
                                            <div className="w-1 h-1 bg-blue-400 rounded-full" />
                                            {achievement}
                                          </li>
                                        ))}
                                      </ul>
                                    </div>

                                    <button className="mt-4 w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-4 rounded-lg text-sm font-medium hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center justify-center gap-2">
                                      <span>Learn More</span>
                                      <ExternalLink className="w-3 h-3" />
                                    </button>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            
            {/* Navigation Buttons Below Carousel */}
            <div className="flex justify-center gap-4 mt-6">
              <CarouselPrevious className="relative left-0 top-0 translate-y-0 bg-white/30 border-white/40 hover:bg-white/50 text-white shadow-lg backdrop-blur-sm h-10 w-10" />
              <CarouselNext className="relative right-0 top-0 translate-y-0 bg-white/30 border-white/40 hover:bg-white/50 text-white shadow-lg backdrop-blur-sm h-10 w-10" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
}