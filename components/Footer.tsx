"use client";

import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  ArrowRight,
  Send,
  MessageCircle,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

export default function Footer() {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email via API
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
         // Success - reset form and close dialog
         setFormData({ name: "", contact: "", message: "" });
         setIsDialogOpen(false);
         
         toast({
           title: "Message Sent!",
           description: "Your message has been sent successfully. We'll get back to you soon!",
         });
       } else {
         const errorData = await response.json();
         throw new Error(errorData.error || 'Failed to send message');
       }
     } catch (error) {
       console.error("Error submitting form:", error);
       toast({
         title: "Error",
         description: "Failed to send message. Please try again or contact us directly.",
         variant: "destructive",
       });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: Facebook,
      href: "https://www.facebook.com/buraqsociety",
      label: "Facebook",
      color: "hover:text-blue-400",
    },
    {
      icon: Instagram,
      href: "https://www.instagram.com/buraqcamps/",
      label: "Instagram - Buraq Camps",
      color: "hover:text-pink-400",
    },
    // {
    //   icon: Instagram,
    //   href: "https://www.instagram.com/cadetsofburaq/",
    //   label: "Instagram - Cadets of Buraq",
    //   color: "hover:text-purple-400",
    // },
    {
      icon: Youtube,
      href: "https://www.youtube.com/@buraqcamps",
      label: "YouTube",
      color: "hover:text-red-400",
    },
    {
      icon: Linkedin,
      href: "http://linkedin.com/company/buraqsociety",
      label: "LinkedIn",
      color: "hover:text-blue-500",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Alumni", href: "/alumni" },
    { label: "Gallery", href: "/gallery" },
    { label: "FAQ", href: "/faq" },
    { label: "Donate", href: "/donate" },
  ];

  return (
    <footer
      id="contact"
      className="relative bg-[#040149] text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #DBB13B 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, #DBB13B 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full blur-xl"
          animate={{
            y: [0, -20, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-xl"
          animate={{
            y: [0, 20, 0],
            scale: [1, 0.9, 1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />
      </div>

      <div className="container mx-auto px-4 py-10 relative">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16">
          {/* Company Info */}
          <motion.div
            className="lg:col-span-2 space-y-20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center space-x-3">
              <div className="relative w-auto h-24 rounded-xl">
                <Image
                  src="/images/logo_new_white.png"
                  alt="Buraq Logo"
                  width={32}
                  height={32}
                  className="object-contain w-full h-full"
                />
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed text-lg max-w-xl">
              Pakistan&apos;s premier space education program, transforming young
              minds into future leaders through innovation, collaboration, and
              transformative learning.
            </p>

            {/* Newsletter Signup - Desktop Only */}
            <div className="space-y-4 hidden lg:block">
              <h3 className="text-xl font-semibold text-white">
                Stay Connected
              </h3>
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                <Input
                  placeholder="Enter your email"
                  className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm focus:bg-white/20 transition-all duration-300 flex-1 min-w-0"
                />
                <Button className="bg-gradient-to-r from-[#DBB13B] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#DBB13B] text-black font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>

 
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white border-b border-[#DBB13B]/30 pb-2 ml-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.label}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-[#DBB13B] transition-all duration-300 flex items-center group"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {link.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <br/>
            <br/>
                       {/* Social Media */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-white">Follow Us</h3>
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <motion.div
                      key={social.label}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Button
                        variant="ghost"
                        size="icon"
                        className={`bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 ${social.color} group`}
                        asChild
                      >
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                        >
                          <IconComponent className="h-5 w-5 group-hover:scale-110 transition-transform duration-300" />
                        </a>
                      </Button>
                    </motion.div>
                  );
                })}
                {/* TikTok */}
                <motion.div
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button
                    variant="ghost"
                    size="icon"
                    className="bg-white/10 hover:bg-white/20 border border-white/20 backdrop-blur-sm transition-all duration-300 hover:text-pink-400 group"
                    asChild
                  >
                    <a
                      href="https://www.tiktok.com/@buraqsociety?is_from_webapp=1&sender_device=pc"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="TikTok"
                    >
                      <svg
                        className="h-5 w-5 group-hover:scale-110 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                      </svg>
                    </a>
                  </Button>
                </motion.div> 
              </div>
            </div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <h3 className="text-xl font-semibold text-white border-b border-[#DBB13B]/30 pb-2">
              Contact Us
            </h3>
            <div className="space-y-4">
              

              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Phone className="h-5 w-5 text-[#DBB13B] flex-shrink-0" />
                <p className="text-gray-300 text-sm">+92 307 8728727</p>
              </motion.div>

              <motion.div
                className="flex items-center space-x-3 p-3 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-all duration-300"
                whileHover={{ scale: 1.02 }}
              >
                <Mail className="h-5 w-5 text-[#DBB13B] flex-shrink-0" />
                <p className="text-gray-300 text-sm break-all overflow-hidden">anushay@buraqsociety.org</p>
              </motion.div>
                      {/* Have a Question Button */}
        <motion.div
          className=" mb-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
            <DialogTrigger asChild>
              <Button className="mt-10 bg-gradient-to-r from-[#DBB13B] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#DBB13B] text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center space-x-2">
                <MessageCircle className="w-5 h-5" />
                <span>Have a Question?</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-center text-xl font-bold text-[#040149]">
                  Ask Us Anything
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                    Name *
                  </label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your full name"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                    Contact Number/Email *
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    type="text"
                    required
                    value={formData.contact}
                    onChange={handleInputChange}
                    placeholder="Your phone number or email"
                    className="w-full"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message *
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="What would you like to know?"
                    className="w-full min-h-[100px]"
                  />
                </div>
                <div className="flex space-x-3 pt-4">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => setIsDialogOpen(false)}
                    className="flex-1"
                  >
                    Cancel
                  </Button>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="flex-1 bg-gradient-to-r from-[#DBB13B] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#DBB13B] text-black font-semibold"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </form>
            </DialogContent>
          </Dialog>
        </motion.div>

            </div>
          </motion.div>
        </div>

        {/* Stay Connected - Mobile and Tablet */}
        <motion.div
          className="lg:hidden mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-white">
              Stay Connected
            </h3>
            <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2 max-w-md">
              <Input
                placeholder="Enter your email"
                className="bg-white/10 border-white/20 text-white placeholder:text-gray-400 backdrop-blur-sm focus:bg-white/20 transition-all duration-300 flex-1 min-w-0"
              />
              <Button className="bg-gradient-to-r from-[#DBB13B] to-[#f4d03f] hover:from-[#f4d03f] hover:to-[#DBB13B] text-black font-semibold px-6 shadow-lg hover:shadow-xl transition-all duration-300 flex-shrink-0">
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Bottom bar */}
        <motion.div
          className="pt-8 border-t border-white/20 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © 2024 Buraq Space Camp. All rights reserved.
          </p>
          {/* <div className="flex space-x-6">
            {["Terms of Service", "Privacy Policy", "Support"].map((item) => (
              <motion.a
                key={item}
                href="#"
                className="text-gray-400 hover:text-[#DBB13B] text-sm transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                {item}
              </motion.a>
            ))}
          </div> */}
        </motion.div>
      </div>
    </footer>
  );
}
