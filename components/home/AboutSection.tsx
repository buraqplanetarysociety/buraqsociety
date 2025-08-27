"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar, Award } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const stats = [
  { icon: Users, value: "700+", label: "Alumni" },
  { icon: Calendar, value: "18", label: "Camps" },
];

export default function AboutSection() {
  return (
    <section id="about" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
              Buraq Space Camp
            </h2>

            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Every year, Buraq Space Camp brings together 40 exceptional students aged 14-17 from across Pakistan for an intensive week-long program in Islamabad. Our participants represent the brightest minds from diverse backgrounds, united by their passion for science, technology, and innovation.
              </p>

              <p>
                Through hands-on workshops, expert mentorship, and collaborative projects, campers develop critical thinking skills, leadership qualities, and a deep understanding of STEM fields. Our alumni have gone on to become leaders in technology, research, entrepreneurship, and various other fields, making significant contributions to Pakistan and the global community. The camp doesn&apos;t just teach science; it cultivates the next generation of innovators and problem-solvers who will shape our future.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 mt-8 mb-8">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={stat.label} className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-[#DBB13B] rounded-full flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-[#040149]" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-[#040149]">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                );
              })}
            </div>

            <Button
              asChild
              size="lg"
              className="bg-[#040149] hover:bg-[#040149]/90 text-white group"
            >
              <Link href="/about">
                Learn More About Us
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/homepage_about.jpg" // Changed from about.jpg to about.JPG
                alt="Buraq Space Camp participants"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040149]/60 via-transparent to-transparent" />
            </div>
          </motion.div> 
        </div>
      </div>
    </section>
  );
}
 