"use client"
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ExternalLink, Calendar, Clock } from "lucide-react";
import Image from "next/image";

interface TimeLeft {
  months: number;
  days: number;
  hours: number;
  minutes: number;
}

export default function RegisterPage() {
  // Deadline configuration - easily changeable
  const DEADLINE_DATE = '2025-10-30T23:59:59';
  const CAMP_DATE = '2025-12-28T23:59:59';
  
  const [timeLeft, setTimeLeft] = useState<TimeLeft>({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0
  });
  const [isDeadlinePassed, setIsDeadlinePassed] = useState(false);

  useEffect(() => {
    const deadline = new Date(DEADLINE_DATE);
    const campDate = new Date(CAMP_DATE);
    
    const calculateTimeLeft = () => {
      const now = new Date();
      const deadlineDifference = deadline.getTime() - now.getTime();
      const campDifference = campDate.getTime() - now.getTime();
      
      if (deadlineDifference > 0) {
        // Use camp date for countdown display
        const months = Math.floor(campDifference / (1000 * 60 * 60 * 24 * 30));
        const days = Math.floor((campDifference % (1000 * 60 * 60 * 24 * 30)) / (1000 * 60 * 60 * 24));
        const hours = Math.floor((campDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((campDifference % (1000 * 60 * 60)) / (1000 * 60));
        
        setTimeLeft({ months, days, hours, minutes });
        setIsDeadlinePassed(false);
      } else {
        setIsDeadlinePassed(true);
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  return (
    <main className="min-h-screen mt-10">
      {/* Hero Section with Background */}
      <section 
        className="relative min-h-[120vh] flex items-center justify-center bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/images/apply_now_cover.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center top'
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
        
        {/* Content */}
        <div className="relative z-10 text-center text-[#040149] mt-10 px-4 max-w-4xl mx-auto">
          {!isDeadlinePassed ? (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-5xl md:text-7xl font-bold mb-6 text-shadow-lg"
              >
                Applications Open!
              </motion.h1>
              
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-2xl md:text-3xl font-semibold mb-4"
              >
                Applications are open for this year camp
              </motion.h2>
              
              <motion.h3
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl md:text-2xl font-medium mb-8 text-yellow-300"
              >
                Deadline for registration is 30 October 2025
              </motion.h3>
              
              {/* Countdown Timer */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto"
              >
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                      {timeLeft.months}
                    </div>
                    <div className="text-sm md:text-base text-white/80">Months</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                      {timeLeft.days}
                    </div>
                    <div className="text-sm md:text-base text-white/80">Days</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                      {timeLeft.hours}
                    </div>
                    <div className="text-sm md:text-base text-white/80">Hours</div>
                  </CardContent>
                </Card>
                
                <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-4 text-center">
                    <div className="text-3xl md:text-4xl font-bold text-yellow-300">
                      {timeLeft.minutes}
                    </div>
                    <div className="text-sm md:text-base text-white/80">Minutes</div>
                  </CardContent>
                </Card>
              </motion.div>
              
              {/* Camp countdown label */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-xl md:text-2xl font-medium text-white mt-6"
              >
                Until Buraq Space Camp 2025
              </motion.p>
            </>
          ) : (
            <>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="text-6xl md:text-7xl font-bold mb-6 text-shadow-lg text-red-400"
              >
                Applications Closed!
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center max-w-3xl mx-auto"
              >
                <p className="text-2xl md:text-3xl font-semibold mb-4">
                  Applications have ended for this year&apos;s camp. Thank you for your interest.
                </p>
                <p className="text-xl md:text-2xl font-medium text-yellow-300">
                  Registration for the next camp starts in August-September.
                </p>
              </motion.div>
            </>
          )}
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
            Candidates aged 14 to 17, as of December 27, are encouraged to apply for this prestigious opportunity to become part of our esteemed society. To submit your application, you may complete the form below, but for the best experience, please{" "}
            <a 
              href="https://forms.gle/4n4emLJt8cRiteEs6" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 underline font-semibold"
            >
              click here
            </a>
            .
          </motion.p>
          

        </div>
      </section>

      {/* Embedded Google Form Section - Only show if deadline hasn't passed */}
      {!isDeadlinePassed && (
        <section className="py-16 bg-white">
          <div className="max-w-6xl mx-auto px-4">
    
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="bg-gray-50 rounded-2xl p-4 shadow-lg"
            >
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLScfnKniMwktax6MaPvdI6ZMeJfOP15u0yhznxiODS5wOjGDqw/viewform?embedded=true"
                width="100%"
                height="800"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                className="rounded-xl"
                title="Buraq Society Application Form"
              >
                Loading…
              </iframe>
              
    
            </motion.div>
          </div>
        </section>
      )}
    </main>
  );
}