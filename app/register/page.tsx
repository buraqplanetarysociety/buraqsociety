"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function RegisterPage() {
  return (
    <main className="min-h-screen mt-10">
      {/* Hero Section with Background */}
      <section
        className="relative min-h-[120vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/images/apply_now_cover.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-[#040149] mt-10 px-4 max-w-4xl mx-auto">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold mb-6 text-shadow-lg text-white"
          >
            Applications for the 20th Buraq Space Camp have now closed.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl font-medium text-yellow-300"
          >
            Registration for the next camp starts in August-September 2027.
          </motion.p>
        </div>
      </section>

      {/* Logo and Description Section */}
      <section className="py-16 bg-gradient-to-br from-blue-50 via-white to-indigo-50">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="/images/logo_new_image.png"
              alt="Buraq Society Logo"
              width={200}
              height={200}
              className="mx-auto mb-8"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg md:text-xl text-[#040149] leading-relaxed mb-8"
          >
            Thank you to everyone who applied. Applications are currently under
            review, and shortlisted candidates will be contacted through their
            registered email.
          </motion.p>
        </div>
      </section>
    </main>
  );
}
