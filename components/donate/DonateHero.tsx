"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import ContactDialog from "./ContactDialog";

export default function DonateHero() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/Donate/Landing Image.jpg"
          alt="Buraq Space Camp - Inspiring Future Leaders"
          fill
          className="object-cover"
          priority
        />
        {/* Dark overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Hero content - Bottom Left */}
      <div className="absolute bottom-20 left-8 md:left-16 z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className=""
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            Become Part of the Mission
          </h1>

          <ContactDialog>
            <Button
              size="lg"
              className="bg-[#DBB13B] hover:bg-[#c49d2f] text-white border-0 shadow-lg shadow-[#DBB13B]/25 group px-8 py-4 text-lg"
            >
              DONATE NOW
            </Button>
          </ContactDialog>
        </motion.div>
      </div>

      {/* Wave separator
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div> */}
    </div>
  );
}