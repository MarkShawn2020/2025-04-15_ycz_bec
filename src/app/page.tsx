import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import LocationCards from '@/components/home/LocationCards';
import Stories from '@/components/home/Stories';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bebas text-sya-blue mb-8 text-center">A LIFE-CHANGING STUDY ABROAD EXPERIENCE</h2>
          <p className="text-lg text-center max-w-4xl mx-auto mb-16">
            BEC (SYA) is a nonprofit organization focused on providing immersive study abroad programs to high school students.
            With over 8,500 alumni since 1964, SYA is a school fully accredited by the New England Association of Schools and Colleges (NEASC).
          </p>
        </div>
      </section>
      <LocationCards />
      <Stories />
    </div>
  );
}
