"use client";

import HeroSection from './HeroSection';
import AlumniIntroduction from './AlumniIntroduction';
import AlumniReach from './AlumniReach';
import WhereAreTheyNow from './WhereAreTheyNow';
import NotableAlumni from './NotableAlumni';
import AlumniVoices from './AlumniVoices';

export default function AlumniLegacy() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white">
      <HeroSection />
      <AlumniIntroduction />
      <AlumniReach />
      <WhereAreTheyNow />
      <NotableAlumni />
      <AlumniVoices />
    </div>
  );
}