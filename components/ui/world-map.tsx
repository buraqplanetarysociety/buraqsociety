"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import DottedMap from "dotted-map";

import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Coordinate space of the overlay <svg> the arcs and pins are drawn in.
const VIEW_WIDTH = 800;
const VIEW_HEIGHT = 400;

// Seconds over which arc draw-in animations are staggered.
const ARC_STAGGER_WINDOW = 3.5;

// dotted-map draws its dots in Web Mercator, cropped to this window (its
// DEFAULT_WORLD_REGION). Pins must use the same projection to land on the
// right country; a flat lat/lng mapping puts them several degrees too far
// north, increasingly so away from the equator.
const MAP_REGION = { lat: { min: -56, max: 71 }, lng: { min: -179, max: 179 } };

const mercatorY = (lat: number) =>
  Math.log(Math.tan(Math.PI / 4 + (lat * Math.PI) / 360));

export function WorldMap({
  dots = [],
  lineColor = "#0ea5e9",
}: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const map = new DottedMap({ height: 100, grid: "diagonal" });

  const { theme } = useTheme();

  const svgMap = map.getSVG({
    radius: 0.22,
    color: "#ffffff",
    shape: "circle",
    backgroundColor: "#1B3572",
  });

  // The map image is not 2:1 (it is 210x100), so inside the 2:1 container it
  // is letterboxed. Mirror that fit so pins sit on the dots actually drawn.
  const [, mapWidth, mapHeight] = (
    svgMap.match(/viewBox="0 0 ([\d.]+) ([\d.]+)"/) ?? ["", "210", "100"]
  ).map(Number);
  const fitScale = Math.min(VIEW_WIDTH / mapWidth, VIEW_HEIGHT / mapHeight);
  const offsetX = (VIEW_WIDTH - mapWidth * fitScale) / 2;
  const offsetY = (VIEW_HEIGHT - mapHeight * fitScale) / 2;
  const mercatorTop = mercatorY(MAP_REGION.lat.max);
  const mercatorSpan = mercatorTop - mercatorY(MAP_REGION.lat.min);

  const projectPoint = (lat: number, lng: number) => {
    const mapX =
      (mapWidth * (lng - MAP_REGION.lng.min)) /
      (MAP_REGION.lng.max - MAP_REGION.lng.min);
    const mapY = (mapHeight * (mercatorTop - mercatorY(lat))) / mercatorSpan;
    return { x: offsetX + mapX * fitScale, y: offsetY + mapY * fitScale };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  return (
    <div className="w-full aspect-[2/1]  rounded-lg  relative font-sans">
      <img
        src={`data:image/svg+xml;utf8,${encodeURIComponent(svgMap)}`}
        className="h-full w-full  pointer-events-none select-none"
        alt="world map"
        height="495"
        width="1056"
        draggable={false}
      />
      <svg
        ref={svgRef}
        viewBox={`0 0 ${VIEW_WIDTH} ${VIEW_HEIGHT}`}
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  // Spread the draw-in over a fixed window so adding
                  // destinations doesn't make the last arc start ages later.
                  delay: (ARC_STAGGER_WINDOW * i) / dots.length,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              ></motion.path>
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}
