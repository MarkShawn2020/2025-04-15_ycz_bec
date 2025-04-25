'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Search, Menu, X } from 'lucide-react';
import { EmailLink } from '@/components/EmailLink';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="relative z-50">
      {/* Skip to content button for accessibility */}
      <a href="#main-content" className="sr-only focus:not-sr-only">
        Skip To Main Content
      </a>


      {/* Main Header */}
      <div className="bg-white py-3 shadow-sm">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="block">
              <Image
                src="/BEC.png"
                alt="Logo"
                width={150}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
          <Link href="#desc" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  About BEC
                </Link>
                <Link href="#us-program" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  US Program
                </Link>
                <Link href="#china-program" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  China Program
                </Link>
                <Link href="#past-events" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  Past Events
                </Link>
                <EmailLink 
                  variant="flat" 
                  className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red cursor-pointer" 
                />

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
            <Link href="#desc" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  About BEC
                </Link>
                <Link href="#us-program" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  US Program
                </Link>
                <Link href="#china-program" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  China Program
                </Link>
                <Link href="#past-events" className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red">
                  Past Events
                </Link>
                <EmailLink 
                  variant="flat" 
                  className="hover:text-sya-red border-b-2 border-transparent hover:border-sya-red cursor-pointer" 
                />
            </nav>


          </div>
        </div>
      )}
    </header>
  );
}
