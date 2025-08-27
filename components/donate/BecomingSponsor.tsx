"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Mail, Award, Users, Megaphone } from "lucide-react";

export default function BecomingSponsor() {

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-10 w-40 h-40 border-2 border-[#DBB13B] rounded-full"></div>
        <div className="absolute bottom-10 left-10 w-28 h-28 bg-[#304B78] rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
                Becoming a <span className="text-[#DBB13B]">Sponsor</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  At Buraq Space Camp, we&apos;re always looking to grow and that means expanding access, improving the experience, and reaching more bright young minds across Pakistan. None of this is possible without the support of our sponsors.
                </p>
                <p>
                  By sponsoring Buraq Space Camp, you&apos;re not just funding a program, you&apos;re helping shape the future of STEM in the country. Your support gives students a once-in-a-lifetime opportunity to learn from leading voices in academia and industry. In return, your organization will be featured across our social media platforms and traditional media coverage as a key partner in this movement.
                </p>
                <p>
                  We welcome CSR initiatives from companies and are always looking for industry partners and donors to join us. We&apos;d love for you to be part of this journey. If you&apos;re interested in supporting the next generation of innovators, reach out to <strong>anushay@buraqsociety.org</strong> — we&apos;d love to hear from you.
                </p>

              </div>
            </div>


          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/Donate/BECOMING A SPONSOR IMAGE.jpg"
                alt="Becoming a Sponsor"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#040149]/40 to-transparent" />

              {/* Floating contact card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm rounded-xl p-6 border border-[#DBB13B]/20"
              >
                <p className="text-[#040149] font-semibold mb-2">
                  Ready to make an impact?
                </p>
                <p className="text-gray-600 text-sm mb-3">
                  Reach out to discuss sponsorship opportunities
                </p>
                <p className="text-[#DBB13B] font-medium text-sm">
                  anushay@buraqsociety.org
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
