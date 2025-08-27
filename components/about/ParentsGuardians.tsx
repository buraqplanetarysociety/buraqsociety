'use client';

import { motion } from 'framer-motion';
import { Clock, Shield, Phone } from 'lucide-react';

interface ParentsGuardiansProps {
  variant?: "light" | "dark";
}

const ParentsGuardians = ({ variant = "light" }: ParentsGuardiansProps) => {
  const isDark = variant === "dark";
  const policies = [
    {
      title: "Full-Time Stay",
      description: "For maximum immersion and continuity, cadets remain on campus for the entire duration of the camp.",
      icon: Clock,
      color: "bg-[#040149]"
    },
    {
      title: "Monitored Communication",
      description: "Cadets are given their phones at night time, after which they are collected, securely held, and charged by the camp staff.",
      icon: Phone,
      color: "bg-[#DBB13B]"
    },
    {
      title: "Strict Supervision and Safety Protocols",
      description: "Comprehensive safety measures ensure a secure environment for all cadets.",
      icon: Shield,
      color: "bg-[#304B78]",
      details: [
        "Dedicated male and female staff available round-the-clock",
        "Gender-sensitive accommodations and supervision",
        "Camp conducted in secure, enclosed areas, inaccessible to unauthorized persons",
        "Emergency contact points will be shared with parents in advance"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
            For Parents<span className="text-[#DBB13B]"> & Guardians</span>
          </h2>
          <div className="w-24 h-1 bg-[#DBB13B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Your peace of mind is our priority. Here&apos;s how we ensure a safe, structured, and enriching experience for your cadet.
          </p>
        </motion.div>

        {/* Policies Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 max-w-6xl mx-auto mb-8 sm:mb-12">
          {policies.slice(0, 2).map((policy, index) => {
            const IconComponent = policy.icon;
            return (
              <motion.div
                key={policy.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
              >
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
                  <div className={`w-14 h-14 sm:w-16 sm:h-16 ${policy.color} rounded-2xl flex items-center justify-center flex-shrink-0 mb-3 sm:mb-0`}>
                    <IconComponent className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-[#040149] mb-4">
                      {policy.title}
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-lg">
                      {policy.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Safety Protocols - Full Width */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl p-10 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 max-w-6xl mx-auto"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-8">
            <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 bg-[#304B78] rounded-2xl flex items-center justify-center flex-shrink-0">
              <Shield className="w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-white" />
            </div>
            <div className="flex-1">
              <h3 className="text-3xl font-bold text-[#040149] mb-6">
                Strict Supervision and Safety Protocols
              </h3>
              <p className="text-gray-700 leading-relaxed text-lg mb-8">
                Comprehensive safety measures ensure a secure environment for all cadets.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                {policies[2].details?.map((detail, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl"
                  >
                    <div className="w-3 h-3 bg-[#DBB13B] rounded-full mt-2 flex-shrink-0"></div>
                    <p className="text-gray-700 leading-relaxed">
                      {detail}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ParentsGuardians;