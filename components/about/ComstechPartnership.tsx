import React from "react";
import Image from "next/image";

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
          {/* COMSTECH Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/comstech_logo.png"
              alt="COMSTECH Logo"
              width={120}
              height={100}
              className="object-contain"
            />
          </div>
          
          <h2 className={`text-3xl md:text-4xl font-bold mb-6`}>
  <span className="text-[#040149]">
    OIC COMSTECH Patronage: {" "}
  </span>
  {/* Line break visible only on mobile */}
  <br className="block md:hidden" />
  <span className="text-[#DBB13B]">
    A New Chapter for Buraq
  </span>
</h2>

          

          
         <div className="max-w-5xl mx-auto">
  <p className={`text-lg leading-relaxed text-justify ${subtextColor}`}>
    We are excited to announce that, since 2025, the Buraq Planetary Society has come under the patronage of OIC COMSTECH, an organisation which was created in 1981 under the Organization of Islamic Cooperation (OIC), an intergovernmental body representing 57 member states.
  </p>
  <p className={`text-lg leading-relaxed text-justify ${subtextColor} mt-4`}>
    OIC COMSTECH is a multilateral organisation and serves as the OIC&apos;s principal platform for science, technology, and innovation in the Islamic member states. For two running years now, OIC COMSTECH has recognized and encouraged Buraq Society&apos;s mission to inspire and empower young innovators. Moreover, the Buraq Planetary Society is honoured to announce that the 20th Buraq Space Camp will also be hosted and championed by COMSTECH, reflecting their commitment to advancing STEM education and nurturing the next generation of scientists and engineers.
  </p>
  <p className={`text-lg leading-relaxed text-justify ${subtextColor} mt-4`}>
    This high-level endorsement marks a pivotal moment in our mission. Under OIC COMSTECH&apos;s patronage, Buraq will be encouraged and supported to extend its transformative, hands-on space education experience to youth from OIC nations. This move marks a powerful validation of Buraq&apos;s mission, opening the door for international expansion, deeper STEM collaboration, and the transformation of Buraq Space Camp into a model for youth scientific engagement across the Muslim world.
  </p>
  <p className={`text-lg leading-relaxed text-justify ${subtextColor} mt-4`}>
    We are deeply grateful to OIC COMSTECH for this incredible opportunity and are committed to upholding the trust they have placed in us. Together, we will work to ignite a passion for space and science in a new, international generation of innovators.
  </p>
</div>

        </div>
      </div>
    </section>
  );
}