"use client";

import { WorldMap } from "@/components/ui/world-map";

interface AlumniWorldMapProps {
  showConnections?: boolean;
  className?: string;
}

export function AlumniWorldMap({ showConnections = false, className = "" }: AlumniWorldMapProps) {
const dots = [
  // {
  //   start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
  //   end: { lat: 40.7128, lng: -74.0060, label: "USA" }, // New York
  // },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: 51.5074, lng: -0.1278, label: "UK" }, // London
  },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: 25.2048, lng: 55.2708, label: "UAE" }, // Dubai
  },
  // {
  //   start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
  //   end: { lat: 43.6532, lng: -79.3832, label: "Canada" }, // Toronto
  // },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: -12.0464, lng: -77.0428, label: "Peru" }, // Lima
  },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: -34.6118, lng: -58.3960, label: "Argentina" }, // Buenos Aires
  },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: 57.981267, lng: -110.618678, label: "Canada" }, // Additional Canada location
  },
  {
    start: { lat: 33.6844, lng: 73.0479, label: "Pakistan" }, // Islamabad
    end: { lat: 40.988587, lng: -100.946462, label: "USA" }, // Additional USA location
  },
];


  return (
    <div className={`w-full ${className}`}>
      <WorldMap
        dots={showConnections ? dots : []}
        lineColor="#DBB13B"
      />
    </div>
  );
}