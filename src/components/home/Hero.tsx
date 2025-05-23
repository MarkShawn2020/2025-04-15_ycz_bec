"use client";

import type React from 'react';
import { useState, useEffect, useRef } from 'react';
import { EmailLink } from '@/components/EmailLink';

interface CountryVideo {
  country: string
  videoUrl: string;
}

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  const countryVideos: CountryVideo[] = [
    {
      country: 'NEW YORK',
      videoUrl: '/video01.mp4'
    },
    {
      country: 'BOSTON',
      videoUrl: '/video02.mp4'
    },
    {
      country: 'BEI JING',
      videoUrl: '/video03.mp4'
    },
    {
      country: 'SHANG HAI',
      videoUrl: '/video04.mp4'
    },

  ];

  useEffect(() => {
    // Play the active video and pause others
    videoRefs.current.forEach((video, index) => {
      if (!video) return;
      
      if (index === activeIndex) {
        if (!isPaused) {
          video.play().catch(err => console.log('Video play error:', err));
        } else {
          video.pause();
        }
      } else {
        video.pause();
        // video.currentTime = 0;
      }
    });
  }, [activeIndex, isPaused]);

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % countryVideos.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, countryVideos.length]);


  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const currentVideo = countryVideos[activeIndex];

  return (
    <div className="relative h-[70vh] min-h-[500px] bg-gray-800 overflow-hidden">
      {/* Background Videos */}
      {countryVideos.map((video, index) => (
        <div
          key={video.country}
          className={`absolute inset-0 transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
        >
          <video
            ref={el => { videoRefs.current[index] = el; }}
            className="absolute inset-0 w-full h-full object-cover"
            src={video.videoUrl}
            muted
            loop
            playsInline
          />
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      {/* Country name overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[150px] md:text-[200px] lg:text-[250px] font-bebas tracking-wide uppercase">
          {currentVideo.country}
        </h1>
      </div>

      {/* Consultation Button - NEW ADDITION */}
      <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2 z-10">
        <EmailLink variant="prominent" />
      </div>

      {/* Controls */}
      <div className="absolute bottom-4 right-4 flex space-x-2">
        <button
          onClick={togglePause}
          aria-label={isPaused ? "Play slideshow" : "Pause slideshow"}
          className="bg-white bg-opacity-30 text-white p-2 rounded-full hover:bg-opacity-50 transition"
        >
          <span className="sr-only">{isPaused ? "Play" : "Pause"}</span>
          {isPaused ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default Hero;
