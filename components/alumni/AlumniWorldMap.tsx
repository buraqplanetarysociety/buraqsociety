"use client";

import { WorldMap } from "@/components/ui/world-map";

interface AlumniWorldMapProps {
  showConnections?: boolean;
  className?: string;
}

// Every arc starts from Islamabad, where the camp is held.
const ISLAMABAD = { lat: 33.6844, lng: 73.0479, label: "Pakistan" };

// Countries with alumni presence. Each pin sits on the capital or the main
// city for that country; the map is too coarse to distinguish further.
const ALUMNI_DESTINATIONS = [
  { lat: 40.7128, lng: -74.006, label: "United States" }, // New York
  { lat: 43.6532, lng: -79.3832, label: "Canada" }, // Toronto
  { lat: 25.2854, lng: 51.531, label: "Qatar" }, // Doha
  { lat: 52.52, lng: 13.405, label: "Germany" }, // Berlin
  { lat: 22.3193, lng: 114.1694, label: "Hong Kong" },
  { lat: 51.5074, lng: -0.1278, label: "United Kingdom" }, // London
  { lat: 37.5665, lng: 126.978, label: "South Korea" }, // Seoul
  { lat: 24.7136, lng: 46.6753, label: "Saudi Arabia" }, // Riyadh
  { lat: 25.2048, lng: 55.2708, label: "United Arab Emirates" }, // Dubai
  { lat: -33.8688, lng: 151.2093, label: "Australia" }, // Sydney
  { lat: 41.0082, lng: 28.9784, label: "Turkey" }, // Istanbul
  { lat: 52.3676, lng: 4.9041, label: "Netherlands" }, // Amsterdam
  { lat: 35.6762, lng: 139.6503, label: "Japan" }, // Tokyo
  { lat: 10.4806, lng: -66.9036, label: "Venezuela" }, // Caracas
  { lat: 33.5138, lng: 36.2765, label: "Syria" }, // Damascus
  { lat: 41.2995, lng: 69.2401, label: "Uzbekistan" }, // Tashkent
  { lat: 39.9042, lng: 116.4074, label: "China" }, // Beijing
  { lat: 3.139, lng: 101.6869, label: "Malaysia" }, // Kuala Lumpur
  { lat: 26.2285, lng: 50.586, label: "Bahrain" }, // Manama
];

const dots = ALUMNI_DESTINATIONS.map((end) => ({ start: ISLAMABAD, end }));

export function AlumniWorldMap({ showConnections = false, className = "" }: AlumniWorldMapProps) {
  return (
    <div className={`w-full ${className}`}>
      <WorldMap
        dots={showConnections ? dots : []}
        lineColor="#DBB13B"
      />
    </div>
  );
}
