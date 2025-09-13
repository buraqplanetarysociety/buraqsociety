"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { UserPlus } from "lucide-react";
import Link from "next/link";

export default function FloatingRegisterButton() {
  return (
    <motion.div
      className="fixed bottom-6 left-6 z-50"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 1 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Link href="/register">
        <Button
          className="bg-[#040149] border-2 border-white text-white hover:bg-white hover:text-[#040149] px-6 py-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300 group flex items-center space-x-2 text-lg font-semibold"
          size="lg"
        >
          <UserPlus className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
          <span className="hidden sm:inline">Register Now</span>
          <span className="sm:hidden">Register</span>
        </Button>
      </Link>
      

    </motion.div>
  );
}