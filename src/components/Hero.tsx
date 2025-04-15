"use client";

import type React from 'react';
import { useState, useEffect } from 'react';

interface CountryImage {
  country: 'france' | 'italy' | 'spain';
  imageUrl: string;
}

const Hero: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const countryImages: CountryImage[] = [
    {
      country: 'france',
      imageUrl: 'https://ext.same-assets.com/3112071852/3816309943.jpeg'
    },
    {
      country: 'italy',
      imageUrl: 'https://ext.same-assets.com/3112071852/3659810650.jpeg'
    },
    {
      country: 'spain',
      imageUrl: 'https://ext.same-assets.com/3112071852/1991947025.jpeg'
    }
  ];

  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % countryImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused, countryImages.length]);

  const goToSlide = (index: number) => {
    setActiveIndex(index);
  };

  const togglePause = () => {
    setIsPaused(!isPaused);
  };

  const currentImage = countryImages[activeIndex];

  return (
    <div className="relative h-[70vh] min-h-[500px] bg-gray-800 overflow-hidden">
      {/* Background Images */}
      {countryImages.map((image, index) => (
        <div
          key={image.country}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${activeIndex === index ? 'opacity-100' : 'opacity-0'}`}
          style={{ backgroundImage: `url(${image.imageUrl})` }}
        >
          {/* Subtle overlay for better text readability */}
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>
      ))}

      {/* Country name overlay */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-white text-[150px] md:text-[200px] lg:text-[250px] font-bebas tracking-wide uppercase">
          {currentImage.country}
        </h1>
      </div>

      {/* Navigation dots */}
      <div className="absolute bottom-10 left-0 right-0 flex justify-center space-x-3">
        {countryImages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-colors ${activeIndex === index ? 'bg-white' : 'bg-white bg-opacity-50'}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
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
