import React from "react";
import AboutHero from "@/components/about/AboutHero";
import WhatIsBuraq from "@/components/about/WhatIsBuraq";
import MissionValues from "@/components/about/MissionValues";
import WhereItAllBegan from "@/components/about/WhereItAllBegan";
import CampFacilities from "@/components/about/CampFacilities";
import ParentsGuardians from "@/components/about/ParentsGuardians";
import Timeline from "@/components/about/Timeline";
import FacesOfBuraqPage from "@/components/about/FacesOfBuraq";

export default function page() {
  return (
    <>
      <div className="w-full flex flex-col">
        <AboutHero />
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
