'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ChevronRight } from 'lucide-react';

const stories = [
  {
    id: 1,
    name: 'Hannah',
    program: 'FR\'22',
    school: 'Georgetown Day School',
    hometown: 'Silver Spring, MD',
    interests: 'Art history, yoga, travel',
    image: 'https://ext.same-assets.com/3112071852/1605701951.jpeg',
    link: '/life-at-sya/meet-sya-students/hannah'
  },
  {
    id: 2,
    name: 'Annabel',
    program: 'ES\'22',
    school: 'Packer Collegiate Institute',
    hometown: 'New York, NY',
    interests: 'Travel, French culture, art history',
    image: 'https://ext.same-assets.com/3112071852/3610284668.jpeg',
    link: '/life-at-sya/meet-sya-students/annabel'
  },
  {
    id: 3,
    name: 'Isabel',
    program: 'IT\'22',
    school: 'Chadwick High School',
    hometown: 'Manhattan Beach, CA',
    interests: 'Soccer, ceramics, Italian',
    image: 'https://ext.same-assets.com/3112071852/642773290.jpeg',
    link: '/life-at-sya/meet-sya-students/isabel'
  }
];

const sessions = [
  {
    id: 1,
    title: 'SYA Virtual Info Session',
    date: 'August 15, 2023',
    time: '7:00 PM EDT',
    description: 'Learn more about our programs from admissions officers',
    link: '#'
  },
  {
    id: 2,
    title: 'Meet Our Students Webinar',
    date: 'September 5, 2023',
    time: '6:30 PM EDT',
    description: 'Hear from current and past SYA students about their experiences',
    link: '#'
  }
];

const news = [
  {
    id: 1,
    title: 'SYA Celebrates 60 Years of Global Education',
    date: 'June 1, 2023',
    excerpt: 'BEC marks six decades of providing life-changing experiences to high school students.',
    link: '#'
  },
  {
    id: 2,
    title: 'Alumni Spotlight: Where Are They Now?',
    date: 'May 15, 2023',
    excerpt: 'Catch up with SYA alumni and learn how their study abroad experience shaped their careers and lives.',
    link: '#'
  }
];

export default function Stories() {
  const [activeTab, setActiveTab] = useState("stories");

  return (
    <div className="bg-slate-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bebas text-sya-blue mb-8 text-center">STORIES</h2>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="stories" className="text-xl">SYA Stories</TabsTrigger>
            <TabsTrigger value="sessions" className="text-xl">SYA Info Sessions</TabsTrigger>
            <TabsTrigger value="news" className="text-xl">SYA News</TabsTrigger>
          </TabsList>

          {/* Stories Tab */}
          <TabsContent value="stories" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stories.map((story) => (
                <div key={story.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="relative h-64">
                    <Image
                      src={story.image}
                      alt={`Portrait of ${story.name}`}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-0 left-0 right-0 bg-sya-red p-3">
                      <h3 className="text-white text-xl font-semibold">
                        MEET {story.name.toUpperCase()} {story.program}
                      </h3>
                    </div>
                  </div>
                  <div className="p-4">
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><strong>Attended:</strong> SYA {story.program.split("'")[0]} as a Junior</li>
                      <li><strong>Home School:</strong> {story.school}</li>
                      <li><strong>Hometown:</strong> {story.hometown}</li>
                      <li><strong>Interests:</strong> {story.interests}</li>
                    </ul>
                    <Link
                      href={story.link}
                      className="mt-4 inline-block text-sya-red font-semibold hover:text-sya-blue transition-colors"
                    >
                      Get to know {story.name}
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* Info Sessions Tab */}
          <TabsContent value="sessions" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {sessions.map((session) => (
                <div key={session.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-sya-blue mb-2">{session.title}</h3>
                  <p className="text-gray-700 mb-1">{session.date} | {session.time}</p>
                  <p className="text-gray-600 mb-4">{session.description}</p>
                  <Link
                    href={session.link}
                    className="inline-flex items-center text-sya-red font-semibold hover:text-sya-blue transition-colors"
                  >
                    Register now <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>

          {/* News Tab */}
          <TabsContent value="news" className="mt-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {news.map((item) => (
                <div key={item.id} className="bg-white rounded-lg shadow-md p-6">
                  <h3 className="text-xl font-semibold text-sya-blue mb-2">{item.title}</h3>
                  <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                  <p className="text-gray-700 mb-4">{item.excerpt}</p>
                  <Link
                    href={item.link}
                    className="inline-flex items-center text-sya-red font-semibold hover:text-sya-blue transition-colors"
                  >
                    Read more <ChevronRight className="ml-1 h-4 w-4" />
                  </Link>
                </div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
