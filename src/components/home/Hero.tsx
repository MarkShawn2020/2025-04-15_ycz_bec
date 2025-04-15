'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

type HeroSlide = {
  id: number;
  country: string;
  title: string;
  imageSrc: string;
  altText: string;
};

const slides: HeroSlide[] = [
  {
    id: 1,
    country: "FRANCE",
    title: "A LIFE-CHANGING STUDY ABROAD EXPERIENCE",
    imageSrc: "/france-hero.jpeg",
    altText: "Aerial view of Rennes, France"
  },
  {
    id: 2,
    country: "ITALY",
    title: "A LIFE-CHANGING STUDY ABROAD EXPERIENCE",
    imageSrc: "/italy-hero.jpeg",
    altText: "View of Viterbo, Italy"
  },
  {
    id: 3,
    country: "SPAIN",
    title: "A LIFE-CHANGING STUDY ABROAD EXPERIENCE",
    imageSrc: "/spain-hero.jpeg",
    altText: "View of Zaragoza, Spain"
  }
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto rotate slides every 6 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[600px] md:h-[700px] overflow-hidden">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          <Image
            src={slide.imageSrc}
            alt={slide.altText}
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-20"></div>
          <div className="absolute inset-0 flex flex-col justify-center items-center text-center z-20">
            <h1 className="hero-text mb-4">{slide.country}</h1>
            <p className="text-white text-xl md:text-2xl max-w-3xl mx-auto px-4">{slide.title}</p>
          </div>
        </div>
      ))}

      {/* Navigation controls */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex justify-center space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full ${
              currentSlide === index ? 'bg-white' : 'bg-white bg-opacity-50'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>

      {/* Previous/Next buttons */}
      <button
        className="absolute left-5 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
        onClick={goToPrevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button
        className="absolute right-5 top-1/2 transform -translate-y-1/2 z-30 p-2 rounded-full bg-black bg-opacity-50 text-white hover:bg-opacity-75 transition-all"
        onClick={goToNextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}
