"use client";

import type React from 'react';
import Link from 'next/link';

interface StoryProps {
  name: string;
  program: string;
  year: string;
  school: string;
  hometown: string;
  interests: string[];
  imageUrl: string;
  profileUrl: string;
}

const Story: React.FC<StoryProps> = ({
  name,
  program,
  year,
  school,
  hometown,
  interests,
  imageUrl,
  profileUrl
}) => {
  return (
    <div className="bg-white shadow-md">
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={imageUrl}
          alt={`${name} - ${program} ${year}`}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6 bg-sya-red text-white">
        <h3 className="text-xl font-bebas mb-4 tracking-wide">MEET {name.toUpperCase()} {program.toUpperCase()}&#39;{year}</h3>
        <ul className="space-y-2 text-sm mb-5">
          <li><strong>Attended:</strong> {program} as a {year}</li>
          <li><strong>Home School:</strong> {school}</li>
          <li><strong>Hometown:</strong> {hometown}</li>
          <li><strong>Interests:</strong> {interests.join(', ')}</li>
        </ul>
        <Link
          href={profileUrl}
          className="block w-full text-center bg-white text-sya-red py-2 px-4 font-medium hover:bg-opacity-90 transition duration-300"
        >
          GET TO KNOW {name.toUpperCase()}
        </Link>
      </div>
    </div>
  );
};

const StoriesSection: React.FC = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <p className="text-sya-blue text-lg mb-2">
            High school is the perfect time to study abroad for the year. If you need more convincing,
            read some of our <Link href="/student-posts" className="text-sya-red font-medium hover:underline">student posts</Link> or
            get to know a couple of alumni!
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Story
            name="Hannah"
            program="FR"
            year="22"
            school="Georgetown Day School"
            hometown="Silver Spring, MD"
            interests={["Art history", "yoga", "travel"]}
            imageUrl="https://ext.same-assets.com/3844025844.jpeg"
            profileUrl="/life-at-sya/meet-sya-students/hannah"
          />

          <Story
            name="Annabel"
            program="ES"
            year="22"
            school="Packer Collegiate Institute"
            hometown="New York, NY"
            interests={["Travel", "French culture", "art history"]}
            imageUrl="https://ext.same-assets.com/2435780283.jpeg"
            profileUrl="/life-at-sya/meet-sya-students/annabel"
          />

          <Story
            name="Isabel"
            program="IT"
            year="22"
            school="Chadwick High School"
            hometown="Manhattan Beach, CA"
            interests={["Soccer", "ceramics", "Italian"]}
            imageUrl="https://ext.same-assets.com/2596341275.jpeg"
            profileUrl="/life-at-sya/meet-sya-students/isabel"
          />
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <a
            href="https://share.hsforms.com/1KfafBdDyT5uZFQXAt72KIQ3eef"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-white border border-sya-blue text-sya-blue py-3 font-medium hover:bg-sya-blue hover:text-white transition duration-300"
          >
            GET MORE INFO!
          </a>

          <Link
            href="/life-at-sya/meet-sya-students"
            className="block text-center bg-white border border-sya-blue text-sya-blue py-3 font-medium hover:bg-sya-blue hover:text-white transition duration-300"
          >
            MEET SYA STUDENTS
          </Link>

          <a
            href="https://www.youtube.com/@SchoolYearAbroad"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-center bg-white border border-sya-blue text-sya-blue py-3 font-medium hover:bg-sya-blue hover:text-white transition duration-300"
          >
            SYA ON YOUTUBE
          </a>
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
