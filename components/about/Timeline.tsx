'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

interface TimelineProps {
  variant?: "light" | "dark";
}

const Timeline = ({ variant = "light" }: TimelineProps) => {
  const isDark = variant === "dark";
  const timelineEvents = [
    {
      year: "1994",
      title: "First year of buraq",
      description: "Inspired by a visit to Uzbekistan's space camp, Dr. Shahid Mahmud and Mr. Sameer Qureshi launch the first Buraq Space Camp in Murree, adapting the model for Pakistani students. The initiative quickly gains momentum, and by the end of the year, three cadets are selected to attend the Uzbekistan Space Camp — earning Buraq international recognition in its very first year.",
      image: "/images/timeline-1.jpg",
      side: "left"
    },
    {
      year: "2003",
      title: "First break",
      description: "Buraq faced its first major setback. Dr. Shahid Mahmud observed that many students attended merely in pursuit of recommendation letters, with little regard for the values Buraq aimed to instill. The spirit of teamwork had diminished, as the 'Best Buraqian' award fostered individual competition. In response, he chose to pause the program.",
      image: "/images/timeline-2.jpg",
      side: "right"
    },
    {
      year: "2012",
      title: "Resume",
      description: "Buraq was revived by Anushay Mahmud, daughter of Dr. Shahid Mahmud, after alumni shared how the camp had changed their lives. She removed the 'Best Buraqian' award to foster teamwork, introduced hands-on learning, and expanded subjects beyond space and physics. Many former Buraqians offered their time and support to help bring the camp back to life. And so, Buraq was reshaped into the collaborative and transformative experience it is known as today.",
      image: "/images/timeline-3.jpg",
      side: "left"
    },
    {
      year: "2020",
      title: "The COVID break",
      description: "In light of the global pandemic, Buraq made the difficult decision to pause operations for the safety of all involved. While the world adapted to new norms, so did Buraq — using the break to reassess, reflect, and further strengthen its vision for the future. The spirit of Buraq remained alive in its growing alumni community, which continued to stay connected virtually.",
      image: "/images/timeline-4.jpg",
      side: "right"
    },
    {
      year: "2023",
      title: "Back and better",
      description: "After the pandemic-induced break, the Buraq team used this time to reflect and refine the camp experience. Upon resumption in 2023, the structure was significantly enhanced: traditional lecture formats were reduced, making way for more STEM-focused activities, interactive discussions, and hands-on learning. The camp returned with renewed energy — more dynamic, immersive, and aligned with modern learning needs.",
      image: "/images/timeline-5.jpg",
      side: "left"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-10 sm:mb-16 md:mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-[#040149] mb-6">
            Time<span className="text-[#DBB13B]">line</span>
          </h2>
          <div className="w-24 h-1 bg-[#DBB13B] mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A journey through the decades - from humble beginnings to transformative experiences
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative max-w-6xl mx-auto">
          {/* Central Line - Hidden on mobile, visible on tablet and up */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 bg-[#DBB13B] h-full"></div>

          {/* Timeline Events */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: 0, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative flex flex-col md:flex-row md:items-center ${
                  event.side === 'left' 
                    ? 'md:justify-start' 
                    : 'md:justify-end'
                }`}
              >
                {/* Year Circle */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-[#040149] rounded-full flex items-center justify-center z-10 border-4 border-white shadow-lg">
                  <span className="text-white font-bold text-sm">{event.year}</span>
                </div>

                {/* Content Card - Full width on mobile, half width on larger screens */}
                <div className={`w-full md:w-6/12 ${
                  event.side === 'left' 
                    ? 'md:mr-auto md:pr-8' 
                    : 'md:ml-auto md:pl-8'
                }`}>
                  <div className="bg-gray-50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100">
                    {/* Image */}
                    <div className="mb-6 overflow-hidden rounded-xl">
                      <Image
                        src={event.image}
                        alt={`Timeline ${event.year}`}
                        width={400}
                        height={250}
                        className="w-full h-48 sm:h-56 md:h-64 lg:h-72 object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    
                    {/* Content */}
                    <div className="space-y-4">
                      <h3 className="text-2xl font-bold text-[#040149]">
                        {event.title}
                      </h3>
                      <p className="text-gray-700 leading-relaxed">
                        {event.description}
                      </p>
                    </div>
                    
                    {/* Decorative Element */}
                    <div className={`mt-4 sm:mt-6 w-12 h-1 bg-[#304B78] ${
                      event.side === 'left' 
                        ? 'ml-0' 
                        : 'md:ml-auto'
                    }`}></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;