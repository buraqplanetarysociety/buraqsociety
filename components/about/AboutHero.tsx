"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronRight, Users, Calendar } from "lucide-react";

export default function AboutHero() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#040149]">
      {/* Background pattern */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#DBB13B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#304B78]/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 pt-32 pb-20 md:pt-40 md:pb-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            {/* <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-white/10 backdrop-blur-sm border border-white/20"
            >
              <Users className="w-4 h-4 text-[#DBB13B]" />
              <span className="text-white/90 text-sm font-medium">
                700+ Alumni Network
              </span>
            </motion.div> */}

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight font-heading">
              About <span className="text-[#DBB13B]">Buraq</span> Society
            </h1>

            <p className="text-xl text-white/80 mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Discover the story behind Pakistan&apos;s premier space camp that
              has been inspiring young minds for over three decades.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-6 justify-center lg:justify-start">
              <Button
                asChild
                size="lg"
                className="bg-[#DBB13B] hover:bg-[#c49d2f] text-white border-0 shadow-lg shadow-[#DBB13B]/25 group"
              >
                <Link href="/register">
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                  Join Our Camp
                  <ChevronRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-[#DBB13B]/50 text-[#DBB13B]"
              >
                <Link href="/gallery">View Gallery</Link>
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, x: 50 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="relative h-[500px] md:h-[600px] w-full">
              {/* Main hero image */}
              <div className="relative h-full w-full rounded-2xl overflow-hidden shadow-2xl shadow-[#040149]/20">
                <Image
                  src="/images/about.JPG"
                  alt="Buraq Space Camp participants"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 " />
              </div>

              {/* Stats overlay */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -bottom-8 left-5 md:left-[25%] transform -translate-x-1/2 w-[90%] max-w-md bg-white/10 backdrop-blur-lg rounded-xl border border-[#DBB13B]/20 p-6 shadow-xl"
              >
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <p className="text-3xl font-bold text-[#DBB13B]">18</p>
                    <p className="text-xs text-white/70 mt-1">
                      Successful Camps
                    </p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#DBB13B]">700+</p>
                    <p className="text-xs text-white/70 mt-1">Alumni</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-[#DBB13B]">30+</p>
                    <p className="text-xs text-white/70 mt-1">Years Legacy</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave separator */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,288L48,272C96,256,192,224,288,213.3C384,203,480,213,576,229.3C672,245,768,267,864,261.3C960,256,1056,224,1152,202.7C1248,181,1344,171,1392,165.3L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}
