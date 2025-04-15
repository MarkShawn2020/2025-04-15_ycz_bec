"use client";

import React from 'react';
import Link from 'next/link';
import { FaSearch, FaBars, FaTimes } from 'react-icons/fa';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa';

const Header = () => {
  return (
    <header className="w-full">
      {/* Skip to main content link for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip To Main Content
      </a>

      {/* Top navigation bar */}
      <div className="bg-sya-navy text-white text-sm">
        <div className="container mx-auto px-4 py-1 flex justify-end items-center">
          <div className="flex items-center space-x-3">
            <div className="relative group">
              <button className="flex items-center space-x-1 py-1">
                <span>France</span>
                <svg className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sya-blue shadow-md z-50 w-48 rounded-sm mt-1">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA France Academics</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tour Rennes</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">France Faculty and Staff</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA France School Calendar</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 py-1">
                <span>Italy</span>
                <svg className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sya-blue shadow-md z-50 w-48 rounded-sm mt-1">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA Italy Academics</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tour Viterbo</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Italy Faculty and Staff</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA Italy School Calendar</a></li>
                </ul>
              </div>
            </div>

            <div className="relative group">
              <button className="flex items-center space-x-1 py-1">
                <span>Spain</span>
                <svg className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute hidden group-hover:block bg-white text-sya-blue shadow-md z-50 w-48 rounded-sm mt-1">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA Spain Academics</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Tour Zaragoza</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Spain Faculty and Staff</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">SYA Spain School Calendar</a></li>
                </ul>
              </div>
            </div>

            <div className="border-l border-gray-400 h-5 mx-1"></div>

            <div className="relative group">
              <button className="flex items-center space-x-1 py-1">
                <span>Quicklinks</span>
                <svg className="w-3 h-3" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white text-sya-blue shadow-md z-50 w-48 rounded-sm mt-1">
                <ul className="py-2">
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Contact</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Apply</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Alumni</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">Give</a></li>
                  <li><a href="#" className="block px-4 py-2 hover:bg-gray-100">mySYA Portal</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main header with logo and navigation */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <img
                  src="https://ext.same-assets.com/3108881295.svg"
                  alt="BEC"
                  className="h-12 md:h-16"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <nav className="space-x-6 text-sya-navy font-bold uppercase text-sm">
                <Link href="/about" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  About BEC
                </Link>
                <Link href="/admission" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  US Program
                </Link>
                <Link href="/programs" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  China Program
                </Link>
                <Link href="/life-at-sya" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  Past Events
                </Link>
                <Link href="/alumni-friends" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  Contact US
                </Link>
              </nav>

              {/* Search */}
              <button aria-label="Search" className="text-sya-navy hover:text-sya-red">
                <FaSearch className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile menu button */}
            <div className="flex lg:hidden">
              <button aria-label="Toggle mobile menu" className="text-sya-navy hover:text-sya-red">
                <FaBars className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu - hidden by default */}
      <div className="hidden bg-white border-b border-gray-200 shadow-lg">
        <div className="container mx-auto p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-bold text-sya-navy">Menu</h3>
            <button className="text-sya-navy hover:text-sya-red">
              <FaTimes className="w-5 h-5" />
            </button>
          </div>

          <nav className="mb-6 space-y-6">
            <div>
              <h4 className="font-bold text-sya-navy mb-2">About BEC</h4>
              <ul className="pl-4 space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Mission</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Contact SYA</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Leadership</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Board of Trustees</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">History</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Academics</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">News & Events</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Member Schools</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Employment</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sya-navy mb-2">Admission</h4>
              <ul className="pl-4 space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Apply to SYA</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">For Parents</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">For Teachers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Colleges and SYA</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Meet the Admissions Team</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Travel & Events</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Tuition & Aid</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sya-navy mb-2">Programs</h4>
              <ul className="pl-4 space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Yearlong</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Semester</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Summer</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sya-navy mb-2">Life at SYA</h4>
              <ul className="pl-4 space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Extracurriculars</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Travel</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Host Family</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Campus Reporters</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Meet SYA Students</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Fieldwork</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">A Day in the Life</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Student Safety</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-sya-navy mb-2">Alumni & Friends</h4>
              <ul className="pl-4 space-y-2">
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Make a Gift</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">SYA Fund</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Kaleidoscope Campaign</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Impact Stories</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Frequent Flyers</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Scholars</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Faculty Chairs</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Ways to Give</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Events</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Alumni Spotlight</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Recognition</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Update. Volunteer. Connect.</a></li>
                <li><a href="#" className="text-gray-700 hover:text-sya-red">Meet the Advancement Team</a></li>
              </ul>
            </div>
          </nav>

          <div className="pt-4 border-t border-gray-200">
            <form className="mb-4">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Search..."
                  className="w-full p-2 pl-10 border border-gray-300 rounded"
                />
                <FaSearch className="absolute left-3 top-3 text-gray-400" />
              </div>
            </form>

            <div className="flex items-center justify-center space-x-4">
              <a href="#" className="text-sya-navy hover:text-sya-red">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-sya-navy hover:text-sya-red">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="#" className="text-sya-navy hover:text-sya-red">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="#" className="text-sya-navy hover:text-sya-red">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-sya-navy hover:text-sya-red">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
