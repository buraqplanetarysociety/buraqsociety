"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Play, ExternalLink } from 'lucide-react';
import { CampYear } from '@/data/campData';

interface VideoSectionProps {
  year: CampYear;
}

export default function VideoSection({ year }: VideoSectionProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);

  // Don't render the component if there's no video
  if (!year.videoLink) {
    return null;
  }

  // Extract video ID from YouTube embed URL
  const getVideoId = (url: string) => {
    const match = url.match(/\/embed\/([^?]+)/);
    return match ? match[1] : null;
  };

  // Get YouTube video ID
  const videoId = getVideoId(year.videoLink);
  
  // Generate YouTube thumbnail URL
  const thumbnailUrl = videoId 
    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
    : year.coverImage;

  // Generate YouTube watch URL
  const youtubeWatchUrl = videoId 
    ? `https://www.youtube.com/watch?v=${videoId}`
    : '#';

  return (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4 }}
      className="mb-16"
    >
      <h2 className="text-2xl font-bold text-[#040149] mb-6 text-center">Camp Highlights Video</h2>
      <div className="relative aspect-video rounded-2xl overflow-hidden bg-gray-900 shadow-2xl">
        {!isVideoPlaying ? (
          <div 
            className="absolute inset-0 flex items-center justify-center cursor-pointer group"
            onClick={() => setIsVideoPlaying(true)}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-black/40 group-hover:from-black/70 group-hover:to-black/50 transition-all duration-300" />
            <div className="relative z-10 flex items-center justify-center">
              <motion.div 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-24 h-24 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border-2 border-white/30 group-hover:bg-white/30 transition-all duration-300"
              >
                <Play className="w-10 h-10 text-white fill-white ml-1" />
              </motion.div>
            </div>
            <Image
              src={thumbnailUrl}
              alt="Video thumbnail"
              fill
              className="object-cover"
              onError={(e) => {
                // Fallback to cover image if YouTube thumbnail fails
                const target = e.target as HTMLImageElement;
                target.src = year.coverImage;
              }}
            />
          </div>
        ) : (
          <iframe
            src={year.videoLink}
            className="absolute inset-0 w-full h-full"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
      <div className="mt-4 flex justify-end">
        <a 
          href={youtubeWatchUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-[#040149] hover:text-[#304B78] flex items-center gap-2 text-sm font-medium transition-colors duration-200"
        >
          Watch on YouTube <ExternalLink className="w-4 h-4" />
        </a>
      </div>
    </motion.div>
  );
}