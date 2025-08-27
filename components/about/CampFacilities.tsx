"use client";

import { motion } from "framer-motion";
import { 
  Tent, 
  Shield, 
  Utensils, 
  DollarSign, 
  Users,
  Shirt,
} from "lucide-react";

interface CampFacilitiesProps {
  variant?: "light" | "dark";
}

export default function CampFacilities({ variant = "light" }: CampFacilitiesProps) {
  const isDark = variant === "dark";
  const facilities = [
    {
      title: "Outdoor Living Setup",
      icon: Tent,
      color: "bg-[#DBB13B]",
      items: [
        "Grouped in 4, cadets reside in durable, all-weather waterproof tents",
        "Enhanced camaraderie and safety through shared living",
        "Separate tents and restroom facilities for boys and girls"
      ]
    },
    {
      title: "Essential Gear Provided",
      icon: Shirt,
      color: "bg-[#304B78]",
      items: [
        "Custom-designed Buraq jacket (mandatory attire for camp duration)",
        "Insulated sleeping bag suitable for outdoor temperatures",
        "Comfortable pillow for quality rest"
      ]
    },
    {
      title: "In-Camp Essentials",
      icon: Utensils,
      color: "bg-[#040149]",
      items: [
        "Three nutritious meals per day (breakfast, lunch, dinner)",
        "Snacks available for purchase at in-camp tuck shop",
        "Drinking water and hygiene stations readily accessible",
        "Designated prayer breaks scheduled throughout the day"
      ]
    },
    {
      title: "Free of Cost",
      icon: DollarSign,
      color: "bg-[#DBB13B]",
      items: [
        "All boarding, lodging, field activities, and instruction provided at no cost",
        "Only optional snack purchases at tuck shop are paid by cadets",
        "Transport to/from camp site arranged by families"
      ]
    },
    {
      title: "Health & Safety",
      icon: Shield,
      color: "bg-[#304B78]",
      items: [
        "Fully-stocked first aid kit and basic medical support always on-site",
        "24/7 security presence with guarded campsite perimeter",
        "Strict confidentiality and consent protocols for emergency parent contact"
      ]
    },
    {
      title: "Supervision & Structure",
      icon: Users,
      color: "bg-[#040149]",
      items: [
        "Daily schedule includes physical activities, study sessions, team missions, and rest",
        "Strict discipline, respect for peers/superiors, and Buraq values expected",
        "Field trips and simulations conducted under close supervision",
      ]
    }
  ];

  return (
    <section className={`py-20 ${isDark ? "bg-[#040149]" : "bg-gray-50"}`}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-[#040149]"} mb-6`}>
            Camp <span className="text-[#DBB13B]">Facilities</span>
          </h2>
          <p className={`text-lg ${isDark ? "text-gray-400" : "text-gray-600"} max-w-3xl mx-auto`}>
            Everything you need for an exceptional week-long experience, provided with care and attention to detail.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {facilities.map((facility, index) => {
            const IconComponent = facility.icon;
            return (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`${isDark ? "bg-gray-800 border-gray-700" : "bg-white border-gray-100"} rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border`}
              >
                <div className="flex items-center mb-6">
                  <div className={`w-12 h-12 ${facility.color} rounded-xl flex items-center justify-center mr-4`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <h3 className={`text-xl font-bold ${isDark ? "text-white" : "text-[#040149]"}`}>
                    {facility.title}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {facility.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-[#DBB13B] rounded-full mt-2 flex-shrink-0"></div>
                      <p className={`${isDark ? "text-gray-300" : "text-gray-700"} leading-relaxed text-sm`}>
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}