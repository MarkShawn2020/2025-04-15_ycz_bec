"use client";

import type React from 'react';
import Link from 'next/link';

interface LocationProps {
  country: string;
  city: string;
  description: string;
  imageUrl: string;
  href: string;
}

const Location: React.FC<LocationProps> = ({ country, city, description, imageUrl, href }) => {
  return (
    <div className="flex flex-col items-center text-center mb-8">
      <Link href={href} className="block mb-4 group transition-transform hover:scale-105">
        <div className="relative w-60 h-60 rounded-full overflow-hidden border-4 border-white shadow-lg">
          <img
            src={imageUrl}
            alt={`${city}, ${country}`}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-sya-navy opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <h3 className="text-white text-4xl font-bebas tracking-wide">{country}</h3>
          </div>
          <div className="absolute bottom-6 left-0 right-0 text-center">
            <p className="text-white text-lg font-medium">{city}</p>
          </div>
        </div>
      </Link>
      <p className="text-sya-blue max-w-xs">{description}</p>
      <Link
        href={href}
        className="mt-4 text-sya-navy hover:text-sya-red font-medium"
      >
        Learn more
      </Link>
    </div>
  );
};

const LocationsSection: React.FC = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl text-center font-bebas text-sya-blue mb-10">
          Learn more about our programs!
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Location
            country="FRANCE"
            city="Rennes"
            description="Rennes, the capital of Brittany, allows you to experience the distinct Breton culture as you simultaneously master the French language and discover France's place in the world."
            imageUrl="https://ext.same-assets.com/1066817093.jpeg"
            href="/france"
          />

          <Location
            country="SPAIN"
            city="Zaragoza"
            description="Zaragoza is Spain's fifth-largest city and is located halfway between Madrid and Barcelona. Relatively unspoiled by tourism, it is an ideal location for immersing yourself in the local community."
            imageUrl="https://ext.same-assets.com/2396203979.jpeg"
            href="/spain"
          />

          <Location
            country="ITALY"
            city="Viterbo"
            description="Viterbo provides the ideal launching point - big enough to offer an exciting day-to-day life, small enough to feel like home and only a 90-minute train ride from Rome."
            imageUrl="https://ext.same-assets.com/3583678926.jpeg"
            href="/italy"
          />
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;
