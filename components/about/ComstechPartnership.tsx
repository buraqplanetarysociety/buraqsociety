import React from "react";

interface ComstechPartnershipProps {
  variant?: "light" | "dark";
}

export default function ComstechPartnership({ variant = "light" }: ComstechPartnershipProps) {
  const bgColor = variant === "dark" ? "bg-gray-900" : "bg-white";
  const textColor = variant === "dark" ? "text-white" : "text-gray-900";
  const subtextColor = variant === "dark" ? "text-gray-300" : "text-gray-600";

  return (
    <section className={`py-16 px-4 ${bgColor} ${textColor}`}>
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
           <h2 className={`text-4xl md:text-5xl font-bold text-[#040149] mb-6`}>
            Partnership with <span className="text-[#DBB13B]">COMSTECH</span>
          </h2>
          <div className="max-w-4xl mx-auto">
            <p className={`text-lg leading-relaxed ${subtextColor}`}>
              We are excited to announce our newly formed partnership with COMSTECH, which, created in 1981 under the Organization of Islamic Cooperation, is a Pakistan-based body dedicated to advancing science and technology, fostering collaboration, and building research capacity across Muslim-majority countries. Through this partnership, we anticipate enhanced opportunities for international engagement and collaboration in STEM disciplines across OIC member states, reinforcing our commitment to scientific excellence and transnational innovation. We are committed to deepening our collaborative relationship with COMSTECH in the years ahead.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}