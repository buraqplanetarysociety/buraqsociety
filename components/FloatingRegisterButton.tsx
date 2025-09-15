"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

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
        <div className="cursor-pointer bg-red-400 hover:scale-105 transition-transform duration-300 hover:shadow-3xl rounded-lg overflow-hidden">
          <Image
            src="/images/floatingbutton-1.png"
            alt="Register Now"
            width={180}
            height={80}
            className="object-contain"
          />
        </div>
      </Link>
      

    </motion.div>
  );
}