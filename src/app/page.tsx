import React from 'react';
import Hero from '@/components/home/Hero';
import Stats from '@/components/home/Stats';
import LocationCards from '@/components/home/LocationCards';
import PastEvents from '@/components/home/Stories';
import { ContactDialog } from '@/components/ContactDialog';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <section id='desc' className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bebas text-sya-blue mb-8 text-center">About Boston Education Consulting (BEC)
          </h2>
          <p className="text-lg text-center max-w-6xl mx-auto mb-16">
          Boston Education Consulting (BEC) is a college access organization providing educational support for high school and middle school students. 
          
          Each year, we bring groups of highly selective domestic and international students to visit Boston or China for a rigorous 2-week summer program or 1-week winter program. 
          
          All programs are STEM focused with introductory engineering courses, hands-on classes,  experimental labs, and team-based projects. 
          
          The program is designed for students to explore the world of engineering, gain experience of college life, and take on a culture adventure.
          </p>
          <div className="flex justify-center">
            <ContactDialog />
          </div>
        </div>
      </section>
      <LocationCards />
      <PastEvents />
      
      {/* 底部咨询区 */}
      <section className="py-16 bg-sya-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bebas mb-4">Ready to Join Our Program?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us now to learn more about our educational programs and how they can help shape your future.
          </p>
          <ContactDialog variant="prominent" className="bg-white text-sya-blue hover:bg-white/90" />
        </div>
      </section>
    </div>
  );
}
