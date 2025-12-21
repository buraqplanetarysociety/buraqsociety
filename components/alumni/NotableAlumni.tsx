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
    id: "taqi-jafri",
    name: "Taqi Jafri",
    achievement: "Senior Director",
    batch: "1995",
    photo: "/images/NotableAlumni/taqi-jafri.png",
    bio: "He is a Buraq alumnus with a Stanford foundation and product leadership experience at Microsoft, specializing in scaling transformative technologies. His approach integrates deep technical expertise with a strategic mindset honed early through Buraq's problem-solving focus. \nHe now drives innovation in AI and automation as Senior Director of Product Management at UiPath. This role leverages his ability to lead in complex environments, moving beyond pure product execution to deliver tangible impact at an organizational scale.",
    icon: Briefcase,
    category: "Technology",
    company: "UiPath",
  },
  {
    id: "ali-farid-khwaja",
    name: "Ali Farid Khwaja",
    achievement: "CEO / Co-founder",
    batch: "1996",
    photo: "/images/NotableAlumni/ali-farid-khawaja.png",
    bio: "He is a Buraq alumnus and Oxford-educated global finance leader with extensive experience building and scaling financial platforms across emerging markets. His strategic vision, shaped early by Buraq's systems-thinking approach, is focused on translating complex ideas into executable market leadership.\nHe currently serves as the CEO of Oxford Frontier Capital and Co-founder Chairman of KTrade, Pakistan's leading mobile stock trading app. This work reflects his ability to navigate diverse global markets and apply a broad, internationally-informed perspective to drive growth in financial innovation.",
    icon: Briefcase,
    category: "Finance",
    company: "Oxford Frontier Capital & KTrade",
  },
  {
    id: "khurram-taji",
    name: "Khurram Taji",
    achievement: "Group CMO",
    batch: "1996",
    photo: "/images/NotableAlumni/khurran-taji.jpg",
    bio: "Khurram is a Buraq alumnus with 17+ years of Go-To-Market leadership experience, building and scaling high-performing commercial organizations across global markets. Inspired early by Buraq's emphasis on systems thinking and problem-solving, he has consistently translated strategy into execution at scale.\nHe has led significant growth initiatives, including scaling LinkedIn's EMEA revenue from $30M to $300M+. As a Buraqian, Khurram represents the program's emphasis on analytical thinking, leadership, and real-world application-values reflected in his work across global expansion, organizational scaling, and complex operational environments",
    icon: Briefcase,
    category: "Technology",
    company: "RingCentral",
  },
  {
    id: "ali-jehangir-siddiqui",
    name: "Ali Jehangir Siddiqui",
    achievement: "Diplomat/ Entrepreneur / Global Economic Strategist",
    batch: "1993",
    photo: "/images/NotableAlumni/ali-jehangir-siddiqui.jpg",
    bio: "Ali Jehangir Siddiqui's early experience at Buraq shaped his worldview, introducing him to systems thinking, leadership under uncertainty, and purpose-driven impact. A Cornell University graduate, he began his career as an entrepreneur, founding JS Bank by acquiring and transforming American Express Bank's Pakistan operations into a nationally significant financial institution. His work in private equity and service on multinational and policy boards positioned him as a bridge between global capital and emerging markets.\nHe later served as Special Assistant to the Prime Minister with Minister of State status and as Ambassador of Pakistan to the United States during a challenging phase in bilateral relations, focusing on economic diplomacy and strategic engagement. He also served as Ambassador-at-Large for Foreign Investment. A World Economic Forum Young Global Leader and contributor to platforms such as the Atlantic Council, Ali reflects Buraq's emphasis on clarity of vision, systems-level thinking, and leadership with real-world impact.",
    icon: Globe,
    category: "Diplomacy",
    company: "Former Ambassador of Pakistan to the United States | Special Assistant to the Prime Minister (Minister of State) | Ambassador-at-Large for Foreign Investment",
  }
];

export default function NotableAlumni() {
  const [selectedAlumniMobile, setSelectedAlumniMobile] = useState<string | null>(null);
  const [selectedAlumniDesktop, setSelectedAlumniDesktop] = useState<string | null>(null);
  const [filter, setFilter] = useState<string>("All");

  const categories = ["All", "Technology", "Finance", "Diplomacy"];
  const filteredAlumni = filter === "All" ? notableAlumni : notableAlumni.filter(alumni => alumni.category === filter);

  const handleMobileClick = (alumniId: string) => {
    setSelectedAlumniMobile(selectedAlumniMobile === alumniId ? null : alumniId);
  };

  const handleDesktopClick = (alumniId: string) => {
    setSelectedAlumniDesktop(alumniId);
  };

  const closeDesktopModal = () => {
    setSelectedAlumniDesktop(null);
  };

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
                  key={alumni.id}
                  layout
                  initial={{ opacity: 0, y: 30, rotateY: -15 }}
                  animate={{ opacity: 1, y: 0, rotateY: 0 }}
                  exit={{ opacity: 0, y: -30, rotateY: 15 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  onClick={() => handleDesktopClick(alumni.id)}
                  className="cursor-pointer"
                >
                  <Card
                    className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 group hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3"
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
                        <p className="text-gray-400 text-xs text-center mb-4">
                          {alumni.company}
                        </p>

                        {/* Badges */}
                        <div className="flex justify-center gap-2 mb-4">
                          <Badge className="bg-white/20 text-white border-white/30">
                            Batch {alumni.batch}
                          </Badge>
                        </div>

                        {/* Bio Preview */}
                        <p className="text-gray-300 text-xs text-center mb-3 line-clamp-3">
                          {alumni.bio.substring(0, 120)}...
                        </p>

                        {/* Click to read more */}
                        <div className="text-center">
                          <span className="text-xs text-blue-400 font-medium hover:underline">
                            Click to read more
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </div>

        {/* Desktop Modal */}
        <AnimatePresence>
          {selectedAlumniDesktop && (
            <>
              {/* Backdrop */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={closeDesktopModal}
              />
              
              {/* Modal Content */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="fixed inset-0 flex items-center justify-center z-50 p-8"
              >
                <div className="bg-white rounded-lg shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                  {(() => {
                    const alumni = notableAlumni.find(a => a.id === selectedAlumniDesktop);
                    if (!alumni) return null;
                    const IconComponent = alumni.icon;
                    
                    return (
                      <div className="p-8">
                        <div className="flex items-start mb-6">
                          <div className="relative w-24 h-24 mr-6 flex-shrink-0">
                            <Image
                              src={alumni.photo}
                              alt={alumni.name}
                              fill
                              className="rounded-full object-cover shadow-lg"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-2">
                              {alumni.name}
                            </h3>
                            <p className="text-lg text-[#DBB13B] font-medium mb-2">
                              {alumni.achievement}
                            </p>
                            <p className="text-xs text-gray-600 mb-2">
                              {alumni.company}
                            </p>
                            <Badge className="bg-blue-100 text-blue-800 border-blue-300">
                              Batch {alumni.batch}
                            </Badge>
                          </div>
                          <button
                            onClick={closeDesktopModal}
                            className="text-gray-500 hover:text-gray-700 text-3xl font-bold ml-4"
                          >
                            ×
                          </button>
                        </div>
                        <div className="border-t pt-6">
                          <p className="text-gray-700 leading-relaxed text-justify whitespace-pre-line">
                            {alumni.bio}
                          </p>
                        </div>
                      </div>
                    );
                  })()
                  }
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

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
                  <CarouselItem key={alumni.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: index * 0.1 }}
                      onClick={() => handleMobileClick(alumni.id)}
                      className="cursor-pointer"
                    >
                      <Card
                        className="h-full bg-white/10 backdrop-blur-md border-white/20 hover:border-white/40 transition-all duration-500 group hover:bg-white/15 hover:shadow-2xl hover:shadow-blue-500/20 hover:-translate-y-3"
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
                            <p className="text-gray-400 text-xs text-center mb-4">
                              {alumni.company}
                            </p>

                            {/* Badges */}
                            <div className="flex justify-center gap-2 mb-4">
                              <Badge className="bg-white/20 text-white border-white/30">
                                Batch {alumni.batch}
                              </Badge>
                            </div>

                            {/* Bio Preview */}
                            <p className="text-gray-300 text-xs text-center mb-3 line-clamp-3">
                              {alumni.bio.substring(0, 120)}...
                            </p>

                            {/* Click to read more */}
                            <div className="text-center">
                              <span className="text-xs text-blue-400 font-medium hover:underline">
                                Tap to read more
                              </span>
                            </div>
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

          {/* Mobile Modal - Outside Carousel */}
          <AnimatePresence>
            {selectedAlumniMobile && (
              <>
                {/* Backdrop */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-black/50 z-40"
                  onClick={() => setSelectedAlumniMobile(null)}
                />
                
                {/* Modal Content */}
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 50 }}
                  className="fixed left-4 right-4 top-[12vh] bottom-[5vh] bg-white rounded-lg shadow-xl z-50 overflow-y-auto"
                >
                  {(() => {
                    const alumni = notableAlumni.find(a => a.id === selectedAlumniMobile);
                    if (!alumni) return null;
                    
                    return (
                      <div className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="relative w-16 h-16 mr-4 flex-shrink-0">
                            <Image
                              src={alumni.photo}
                              alt={alumni.name}
                              fill
                              className="rounded-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-bold text-gray-900">
                              {alumni.name}
                            </h3>
                            <p className="text-sm text-[#DBB13B] font-medium">
                              {alumni.achievement}
                            </p>
                            <p className="text-xs text-gray-600">
                              {alumni.company}
                            </p>
                          </div>
                          <button
                            onClick={() => setSelectedAlumniMobile(null)}
                            className="ml-auto text-gray-500 hover:text-gray-700 text-2xl font-bold"
                          >
                            ×
                          </button>
                        </div>
                        <Badge className="bg-blue-100 text-blue-800 border-blue-300 mb-4">
                          Batch {alumni.batch}
                        </Badge>
                        <p className="text-gray-700 text-sm leading-relaxed text-justify whitespace-pre-line">
                          {alumni.bio}
                        </p>
                      </div>
                    );
                  })()}
                </motion.div>
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}