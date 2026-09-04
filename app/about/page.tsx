import React from "react";
import type { Metadata } from "next";
import AboutHero from "@/components/about/AboutHero";
import ComstechPartnership from "@/components/about/ComstechPartnership";
import WhatIsBuraq from "@/components/about/WhatIsBuraq";
import MissionValues from "@/components/about/MissionValues";
import WhereItAllBegan from "@/components/about/WhereItAllBegan";
import CampFacilities from "@/components/about/CampFacilities";
import ParentsGuardians from "@/components/about/ParentsGuardians";
import Timeline from "@/components/about/Timeline";
import FacesOfBuraqPage from "@/components/about/FacesOfBuraq";

export const metadata: Metadata = {
  title: "About",
  description:
    "Buraq Space Camp since 1994 — from a first camp in Murree to the patronage of OIC COMSTECH and a growing international reach.",
};

export default function page() {
  return (
    <>
      <div className="w-full flex flex-col">
        <AboutHero />
        <ComstechPartnership variant="light" />
        <WhatIsBuraq variant="light" />
        <WhereItAllBegan variant="dark" />
        <MissionValues variant="light" />
        <CampFacilities variant="dark" />
        <ParentsGuardians variant="light" />
        <Timeline variant="light" />
        <FacesOfBuraqPage/>
      </div>
    </>
  );
}
