'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Skip to content button for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip To Main Content
      </a>

      {/* Top Header */}
      <div className="bg-sya-blue text-white py-1">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Campuses links */}
          <div className="flex items-center space-x-4">
            <Link href="/france" className="text-sm hover:underline">France</Link>
            <Link href="/italy" className="text-sm hover:underline">Italy</Link>
            <Link href="/spain" className="text-sm hover:underline">Spain</Link>
          </div>

          {/* Quicklinks */}
          <div className="flex items-center">
            <div className="relative group">
              <button className="text-sm hover:underline flex items-center px-2 py-1">
                Quicklinks
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <div className="absolute right-0 hidden group-hover:block bg-white text-sya-blue shadow-md z-50 w-48 rounded-sm mt-1">
                <ul className="py-2">
                  <li><Link href="/about/contact" className="block px-4 py-2 hover:bg-gray-100">Contact</Link></li>
                  <li><Link href="/apply-now" className="block px-4 py-2 hover:bg-gray-100">Apply</Link></li>
                  <li><Link href="/alumni-friends" className="block px-4 py-2 hover:bg-gray-100">Alumni</Link></li>
                  <li><Link href="/alumni-friends/make-a-gift" className="block px-4 py-2 hover:bg-gray-100">Give</Link></li>
                  <li><Link href="https://sya.myschoolapp.com/app#login" className="block px-4 py-2 hover:bg-gray-100">mySYA Portal</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="https://ext.same-assets.com/2981809292/3108881295.svg"
                alt="School Year Abroad Logo"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/about" className="text-sya-blue hover:text-sya-red transition-colors">
              About School Year Abroad
            </Link>
            <Link href="/admission/admissions" className="text-sya-blue hover:text-sya-red transition-colors">
              Admission
            </Link>
            <Link href="/programs/yearlong" className="text-sya-blue hover:text-sya-red transition-colors">
              Programs
            </Link>
            <Link href="/life-at-sya" className="text-sya-blue hover:text-sya-red transition-colors">
              Life at SYA
            </Link>
            <Link href="/alumni-friends" className="text-sya-blue hover:text-sya-red transition-colors">
              Alumni & Friends
            </Link>

            {/* Search button */}
            <button className="text-sya-blue hover:text-sya-red">
              <Search className="h-5 w-5" />
            </button>
          </nav>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-sya-blue p-2"
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 py-2">
          <div className="container mx-auto px-4">
            <nav className="flex flex-col space-y-4 py-4">
              <Link href="/about" className="text-sya-blue hover:text-sya-red px-4 py-2 border-b border-gray-100">
                About School Year Abroad
              </Link>
              <Link href="/admission/admissions" className="text-sya-blue hover:text-sya-red px-4 py-2 border-b border-gray-100">
                Admission
              </Link>
              <Link href="/programs/yearlong" className="text-sya-blue hover:text-sya-red px-4 py-2 border-b border-gray-100">
                Programs
              </Link>
              <Link href="/life-at-sya" className="text-sya-blue hover:text-sya-red px-4 py-2 border-b border-gray-100">
                Life at SYA
              </Link>
              <Link href="/alumni-friends" className="text-sya-blue hover:text-sya-red px-4 py-2 border-b border-gray-100">
                Alumni & Friends
              </Link>
            </nav>

            <div className="py-4 border-t border-gray-100">
              <div className="flex flex-col space-y-2">
                <h3 className="font-semibold text-sya-blue">Campuses</h3>
                <Link href="/france" className="text-sya-blue hover:text-sya-red px-2 py-1">France</Link>
                <Link href="/italy" className="text-sya-blue hover:text-sya-red px-2 py-1">Italy</Link>
                <Link href="/spain" className="text-sya-blue hover:text-sya-red px-2 py-1">Spain</Link>
              </div>

              <div className="mt-4">
                <h3 className="font-semibold text-sya-blue">Quicklinks</h3>
                <div className="flex flex-col space-y-2 mt-2">
                  <Link href="/about/contact" className="text-sya-blue hover:text-sya-red px-2 py-1">Contact</Link>
                  <Link href="/apply-now" className="text-sya-blue hover:text-sya-red px-2 py-1">Apply</Link>
                  <Link href="/alumni-friends" className="text-sya-blue hover:text-sya-red px-2 py-1">Alumni</Link>
                  <Link href="/alumni-friends/make-a-gift" className="text-sya-blue hover:text-sya-red px-2 py-1">Give</Link>
                  <Link href="https://sya.myschoolapp.com/app#login" className="text-sya-blue hover:text-sya-red px-2 py-1">mySYA Portal</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
