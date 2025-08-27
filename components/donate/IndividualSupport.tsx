"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import ContactDialog from "./ContactDialog";

export default function IndividualSupport() {


  return (
    <section className="py-20 bg-gradient-to-br from-[#040149] via-[#304B78] to-[#040149] relative overflow-hidden">
      {/* Background animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#DBB13B]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            SUPPORT US AS AN <span className="text-[#DBB13B]">INDIVIDUAL</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto leading-relaxed mb-8">
            If you&apos;d like to help us inspire the next generation of space leaders and give more students the chance to attend Buraq Space Camp, consider making an individual donation.
          </p>
          <p className="text-lg text-white/70 max-w-2xl mx-auto">
            Every contribution counts. Your support directly helps us improve the camp experience and reach more young minds across Pakistan.
          </p>
        </motion.div>


        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <ContactDialog>
            <Button
              size="lg"
              className="bg-[#DBB13B] hover:bg-[#c49d2f] text-white border-0 shadow-lg shadow-[#DBB13B]/25 group px-12 py-6 text-xl"
            >
              {/* <Heart className="mr-2 h-5 w-5 group-hover:animate-pulse" /> */}
              DONATE NOW
            </Button>
          </ContactDialog>

        </motion.div>
      </div>
    </section>
  );
}