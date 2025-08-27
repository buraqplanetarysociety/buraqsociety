"use client"

import { motion, useInView } from 'framer-motion'
import { Users, Award, Globe, Rocket } from 'lucide-react'
import { useRef, useEffect, useState } from 'react'

const stats = [
  {
    icon: Users,
    number: 700,
    suffix: '+',
    label: 'Alumni Network',
    description: 'Graduates making impact worldwide',
    color: 'from-blue-400 to-blue-600 dark:from-blue-300 dark:to-blue-500'
  },
  {
    icon: Award,
    number: 18,
    suffix: '',
    label: 'Successful Camps',
    description: 'Years of excellence in education',
    color: 'from-green-400 to-green-600 dark:from-green-300 dark:to-green-500'
  },
  {
    icon: Globe,
    number: 25,
    suffix: '+',
    label: 'Countries Reached',
    description: 'Global alumni presence',
    color: 'from-purple-400 to-purple-600 dark:from-purple-300 dark:to-purple-500'
  },
]

function AnimatedCounter({ target, suffix, inView }: { target: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  useEffect(() => {
    if (!inView || !isClient) return
    
    let start = 0
    const duration = 2000
    const increment = target / (duration / 50) // Reduced frequency
    
    const timer = setInterval(() => {
      start += increment
      if (start >= target) {
        setCount(target)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 50) // Increased interval

    return () => clearInterval(timer)
  }, [target, inView, isClient])

  if (!isClient) {
    return <span>{target}{suffix}</span>
  }

  return <span>{count}{suffix}</span>
}

export default function StatsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true})

  return (
    <section ref={ref} className="py-12 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, #DBB13B 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #DBB13B 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>
      
      <div className="container mx-auto px-4 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <motion.h2 
            className="text-3xl md:text-4xl font-bold text-[#040149] dark:text-white mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Our Impact in Numbers
          </motion.h2>
          <motion.p 
            className="text-lg max-w-2xl mx-auto text-gray-600 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Transforming lives and building futures through innovative space education
          </motion.p>
        </motion.div>

        <div className="flex flex-wrap lg:flex-nowrap justify-center gap-6 max-w-7xl mx-auto">
  {stats.map((stat, index) => {
    const IconComponent = stat.icon;

    return (
      <div
        key={stat.label}
        className="w-full sm:w-[48%] lg:w-1/3 flex"
      >
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.8 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          transition={{
            duration: 0.6,
            delay: index * 0.1,
            type: "spring",
            stiffness: 100
          }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { duration: 0.3 }
          }}
          className="flex flex-col justify-between text-center p-6 bg-white/5 dark:bg-white/10 backdrop-blur-sm rounded-2xl border border-[#040149]/10 dark:border-white/20 transition-all duration-300 group w-full h-full"
        >
          <motion.div
            className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-shadow duration-300`}
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <IconComponent className="w-8 h-8 text-white" />
          </motion.div>

          <motion.div
            className="text-3xl md:text-4xl font-bold mb-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
            viewport={{ once: true }}
          >
            <AnimatedCounter
              target={stat.number}
              suffix={stat.suffix}
              inView={isInView}
            />
          </motion.div>

          <div className="text-[#DBB13B] font-semibold mb-2 text-lg">
            {stat.label}
          </div>
          <div className="text-sm leading-relaxed">
            {stat.description}
          </div>
        </motion.div>
      </div>
    );
  })}
</div>

      </div>
    </section>
  )
}