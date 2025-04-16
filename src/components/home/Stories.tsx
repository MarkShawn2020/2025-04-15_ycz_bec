'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
  type CarouselApi
} from "@/components/ui/carousel";

// Story images from the public/stories folder
const pastEventsImages = [
  '/stories/图片3.jpeg',
  '/stories/图片4.jpeg',
  '/stories/图片5.jpeg',
  '/stories/图片6.jpeg',
  '/stories/图片7.jpeg',
  '/stories/图片8.jpeg'
];

// Story content to match with images
const pastEvents = [
  {
    title: 'Student Experience',
    description: 'Discover the transformative journey of our students abroad'
  },
  {
    title: 'Cultural Immersion',
    description: 'Explore how our students engage with local communities'
  },
  {
    title: 'Host Family Experience',
    description: 'Experience the unique connections formed with host families'
  },
  {
    title: 'Global Perspectives',
    description: 'Learn how BEC broadens horizons and builds global citizens'
  },
  {
    title: 'Academic Excellence',
    description: 'See how our students excel in international classroom settings'
  },
  {
    title: 'Travel Adventures',
    description: 'Follow our students as they explore new destinations'
  }
];

export default function PastEvents() {
  const [api, setApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);

  // Update current index when the carousel slides
  const onSelect = () => {
    if (!api) return;
    setCurrentIndex(api.selectedScrollSnap());
  };

  // Set up event listeners for the carousel
  const handleApiChange = (newApi: CarouselApi) => {
    if (!newApi) return;
    setApi(newApi);
    newApi.on("select", onSelect);
  };

  return (
    <div id='past-events' className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bebas text-sya-blue mb-8 text-center">Past Events</h2>
        
        <div className="relative">
          <Carousel
            opts={{
              loop: true,
              align: "center",
            }}
            className="w-full"
            setApi={handleApiChange}
          >
            <CarouselContent>
              {pastEventsImages.map((image, index) => (
                <CarouselItem key={index} className="md:basis-2/3 lg:basis-1/2">
                  <div className="relative aspect-video overflow-hidden rounded-xl">
                    <Image
                      src={image}
                      alt={`SYA Story ${index + 1}`}
                      fill
                      className="object-cover transition-all hover:scale-105"
                      priority={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                      <h3 className="text-2xl font-bold">{pastEvents[index].title}</h3>
                      <p className="text-sm mt-2 max-w-md">{pastEvents[index].description}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              {pastEventsImages.map((_, index) => (
                <div
                  key={index}
                  className={`h-2 w-2 rounded-full mx-1 cursor-pointer ${
                    currentIndex === index ? 'bg-sya-red' : 'bg-gray-300'
                  }`}
                  onClick={() => api?.scrollTo(index)}
                />
              ))}
            </div>
            <CarouselPrevious className="left-4 bg-white/80 hover:bg-white" />
            <CarouselNext className="right-4 bg-white/80 hover:bg-white" />
          </Carousel>
        </div>
      </div>
    </div>
  );
}
