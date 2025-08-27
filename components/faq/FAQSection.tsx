"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type FAQ = {
  question: string;
  answer: string;
};

type FAQSectionProps = {
  title: string;
  faqs: FAQ[];
};

export default function FAQSection({ title, faqs }: FAQSectionProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="pb-8"
    >
      <h2 className="text-2xl md:text-3xl font-bold text-[#040149] mb-6 pb-2 border-b border-gray-200">
        {title}
      </h2>
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq, index) => (
          <AccordionItem 
            key={index} 
            value={`${title}-item-${index}`}
            className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <AccordionTrigger className="px-6 py-4 text-left font-medium text-[#304b78] hover:text-[#1e3a5f] hover:no-underline">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="px-6 py-4 text-gray-700 bg-gray-50">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </motion.div>
  );
}