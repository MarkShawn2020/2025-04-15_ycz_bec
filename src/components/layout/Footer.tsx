import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sya-blue text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Logo and Address */}
          <div className="space-y-6">
            <Link href="/" className="block">
              <Image
                src="/BEC.png"
                alt="BEC Logo"
                width={150}
                height={60}
                className="h-14 w-auto"
              />
            </Link>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 mt-0.5 text-sya-red flex-shrink-0" />
                <address className="not-italic text-gray-200">
                  105 Ridge Lane<br />
                  Waltham, MA, 02452
                </address>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-sya-red flex-shrink-0" />
                <Link 
                  href="mailto:linasong@alum.mit.edu" 
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  linasong@alum.mit.edu
                </Link>
              </div>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col md:items-end justify-between">
            <div className="grid grid-cols-1 gap-2">
              <Link 
                href="/contact" 
                className="group inline-flex items-center text-gray-200 hover:text-white transition-colors"
              >
                Contact Us
                <ExternalLink className="ml-1 h-3.5 w-3.5 opacity-70 group-hover:opacity-100 transition-opacity" />
              </Link>
            </div>
            
            {/* Copyright */}
            <div className="mt-8 md:mt-0 text-sm text-gray-300">
              © {currentYear} BEC. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
