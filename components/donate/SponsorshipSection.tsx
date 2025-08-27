"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Target, Lightbulb } from "lucide-react";

export default function SponsorshipSection() {
  const stats = [
    { icon: Users, number: "700+", label: "Students Impacted" },
    { icon: Target, number: "18", label: "Successful Camps" },
    { icon: Lightbulb, number: "30+", label: "Years of Innovation" },
  ];

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background pattern */}
      {/* <div className="absolute inset-0 opacity-5"> */}
        {/* <div className="absolute top-10 left-10 w-32 h-32 border-2 border-[#040149] rounded-full"></div> */}
        {/* <div className="absolute bottom-20 right-20 w-24 h-24 border-2 border-[#DBB13B] rounded-full"></div> */}
        {/* <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-[#304B78] rounded-full"></div> */}
      {/* </div> */}

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
           <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
                Sponsorship
              </h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-8">
                Buraq Space Camp is a non-profit initiative that runs entirely on the generosity of our sponsors and alumni.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Thanks to their support, 700+ students have already experienced this life-changing journey. Their contributions help us continue hosting future camps and expanding access to quality STEM education across Pakistan.
              </p>
            </div>

            {/* Stats grid */}
            {/* <div className="grid grid-cols-3 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    className="text-center p-4 rounded-xl bg-gradient-to-br from-[#040149]/5 to-[#DBB13B]/5 border border-[#DBB13B]/20"
                  >
                    <IconComponent className="w-8 h-8 text-[#DBB13B] mx-auto mb-2" />
                    <p className="text-2xl font-bold text-[#040149]">{stat.number}</p>
                    <p className="text-sm text-gray-600">{stat.label}</p>
                  </motion.div>
                );
              })}
            </div> */}
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[400px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Donate/SPONSORSHIP IMAGE.jpg"
                alt="Sponsorship Impact"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040149]/60 to-transparent" />
            </div>
          </motion.div>

         
        </div>
      </div>
    </section>
  );
}