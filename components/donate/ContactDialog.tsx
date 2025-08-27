"use client";

import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Phone, Mail, Copy, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useToast } from "@/hooks/use-toast";

interface ContactDialogProps {
  children: React.ReactNode;
}

export default function ContactDialog({ children }: ContactDialogProps) {
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [copiedEmail, setCopiedEmail] = useState(false);
  const { toast } = useToast();

  const phoneNumber = "+92 307 8728727";
  const email = "anushay@buraqsociety.org";

  const copyToClipboard = async (text: string, type: 'phone' | 'email') => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === 'phone') {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      } else {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      }
      toast({
        title: "Copied!",
        description: `${type === 'phone' ? 'Phone number' : 'Email address'} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Error",
        description: "Failed to copy to clipboard",
        variant: "destructive",
      });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-center text-2xl font-bold text-[#040149] mb-4">
            Contact Us for Donations
          </DialogTitle>
        </DialogHeader>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <p className="text-center text-gray-600 mb-6">
            Thank you for your interest in supporting our mission! Please contact us using the details below to make your donation.
          </p>
          
          {/* Phone Number */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center space-x-3">
              <Phone className="w-5 h-5 text-[#DBB13B]" />
              <div>
                <p className="text-sm text-gray-500">Phone</p>
                <p className="font-semibold text-[#040149]">{phoneNumber}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(phoneNumber, 'phone')}
              className="border-[#DBB13B] text-[#DBB13B] hover:bg-[#DBB13B] hover:text-white"
            >
              {copiedPhone ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          
          {/* Email */}
          <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg border">
            <div className="flex items-center space-x-3">
              <Mail className="w-5 h-5 text-[#DBB13B]" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold text-[#040149]">{email}</p>
              </div>
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(email, 'email')}
              className="border-[#DBB13B] text-[#DBB13B] hover:bg-[#DBB13B] hover:text-white"
            >
              {copiedEmail ? (
                <CheckCircle className="w-4 h-4" />
              ) : (
                <Copy className="w-4 h-4" />
              )}
            </Button>
          </div>
          
          <div className="text-center pt-4">
            <p className="text-sm text-gray-500">
              Our team will be happy to assist you with your donation process.
            </p>
          </div>
        </motion.div>
      </DialogContent>
    </Dialog>
  );
}