"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CurrentSponsors() {
  const sponsors = [
    { name: "Coffee Bean & Tea Leaf", logo: "/images/Donate/Coffee_Bean_&_Tea_Leaf_logo.svg.png" },
    { name: "Interactive Group", logo: "/images/Donate/Interactive Group Logo.webp" },
    { name: "Eikon 7", logo: "/images/Donate/eikon 7 logo.png" },
    { name: "ProPakistani", logo: "/images/Donate/ProPakistani_Logo.png" },
    { name: "Nutshell", logo: "/images/Donate/nutshell.png" },
    { name: "Aylo", logo: "/images/Donate/Aylo logo.png" },
    { name: "ONE", logo: "/images/Donate/one.png" },
    { name: "The Black Hole", logo: "/images/Donate/the black hole.png" },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#040149]/5 to-[#304B78]/5">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
            Current <span className="text-[#DBB13B]">Sponsors</span>
          </h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto">
            We&apos;re grateful to our amazing sponsors who make Buraq Space Camp possible
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#DBB13B]/20"
            >
              <div className="relative h-20 w-full mb-4">
                <Image
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  fill
                  className="object-contain"
                />
              </div>
              <p className="text-center text-sm font-medium text-[#040149]">
                {sponsor.name}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}