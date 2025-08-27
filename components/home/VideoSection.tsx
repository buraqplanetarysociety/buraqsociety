"use client";

import { useState } from "react";
import { Play, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function VideoSection() {
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  const handleLoadVideo = () => {
    setIsVideoLoaded(true);
  };

  return (
    <section id="experience" className="py-12 bg-[#304b78]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Experience Buraq
          </h2>
          <p className="text-xl text-[#91b1ff] mb-12 max-w-2xl mx-auto">
            Discover what makes our space camp unique through the eyes of our
            participants and industry experts
          </p>

          <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl">
            <div className="aspect-video relative">
              {!isVideoLoaded ? (
                <>
                  <Image
                    src="https://img.youtube.com/vi/9jZSAu2LWvY/maxresdefault.jpg"
                    alt="Buraq Space Camp Experience"
                    width={0}
                    height={0}
                    className="w-full h-full object-cover"
                  />

                  {/* Video overlay */}
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button
                      size="lg"
                      className="bg-[#dbb13b] hover:bg-[#dbb13b]/90 text-[#304b78] rounded-full p-6 transform hover:scale-110 transition-all duration-200"
                      onClick={handleLoadVideo}
                    >
                      <Play className="h-8 w-8 ml-1" />
                    </Button>
                  </div>

                  {/* YouTube branding */}
                  <div className="absolute top-4 right-4">
                    <div className="bg-red-600 text-white px-2 py-1 rounded text-sm font-semibold">
                      YouTube
                    </div>
                  </div>
                </>
              ) : (
                <iframe
                  src="https://www.youtube.com/embed/9jZSAu2LWvY?autoplay=1&rel=0&modestbranding=1"
                  title="Buraq Space Camp Experience"
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>

          {/* Video info and external link */}
          <div className="mt-6 flex justify-center">
            <a
              href="https://www.youtube.com/watch?v=9jZSAu2LWvY"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-[#91b1ff] hover:text-[#dbb13b] transition-colors duration-200"
            >
              <ExternalLink className="h-4 w-4" />
              <span>Watch on YouTube</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
