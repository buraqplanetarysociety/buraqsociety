"use client"

import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'
import logo from "@/public/images/logo_text_blue.png"
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const navItems = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Alumni', href: '/alumni' },
    { label: 'Gallery', href: '/gallery' },
    { label: 'FAQ', href: '/faq' },
    { label: 'Donate', href: '/donate' },
  ]

  return (
    <motion.header 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100"
    >
      {/* Elegant top border */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-[#304b78] via-[#dbb13b] to-[#304b78]" />
      
      <div className="container mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo Section */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.2 }}
          >
            <Link href="/">
              <div className="relative">
                <Image 
                  src={logo} 
                  alt="BURAQ Logo" 
                  width={0} 
                  height={0} 
                  className='w-auto h-12 transition-all duration-300' 
                />
                {/* Subtle glow effect */}
                <div className="absolute inset-0 bg-[#dbb13b]/10 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <motion.div
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Link
                  href={item.href}
                  className="relative px-4 py-2 rounded-lg font-medium text-md tracking-wide transition-all duration-300 group text-gray-700 hover:text-[#304b78] block"
                >
                  <span className="relative z-10 font-bold">{item.label}</span>
                  {/* Hover background */}
                  <div className="absolute inset-0 rounded-lg transition-all duration-300 opacity-0 group-hover:opacity-100 bg-gray-50" />
                  {/* Active indicator */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-[#dbb13b] transition-all duration-300 group-hover:w-3/4" />
                </Link>
              </motion.div>
            ))}
            
            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8, duration: 0.5 }}
              className="ml-6"
            >
              <Link href="/register">
                <Button 
                  className="relative bg-[#040149] hover:bg-[#dbb13b] text-white px-8 py-3 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 transform hover:scale-105 hover:shadow-xl overflow-hidden group"
                >
                  <span className="relative z-10">Apply Now</span>
                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                </Button>
              </Link>
            </motion.div>
          </nav>

          {/* Mobile Menu Button */}
          <motion.button
            whileTap={{ scale: 0.95 }}
            className="lg:hidden relative p-3 rounded-xl transition-all duration-300 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <AnimatePresence mode="wait">
              {isMenuOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="h-6 w-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="h-6 w-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-6 border-t border-gray-200">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      <Link
                        href={item.href}
                        className="text-left px-4 py-3 rounded-xl font-medium transition-all duration-300 text-gray-700 hover:bg-gray-50 hover:text-[#304b78] block"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.3 }}
                    className="pt-4"
                  >
                    <Link href="/register">
                      <Button 
                        className="w-full bg-[#304b78] hover:bg-[#dbb13b] text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Apply Now
                      </Button>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  )
}