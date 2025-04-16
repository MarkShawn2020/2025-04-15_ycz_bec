import Link from 'next/link';
import Image from 'next/image';
import { Mail, MapPin, ExternalLink } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-sya-blue text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/logo-white.png"
              alt="BEC Logo"
              width={120}
              height={48}
              className="h-10 w-auto"
            />
          </Link>
          
          {/* Address and Contact */}
          <div className="flex items-center gap-4 text-sm text-gray-200">
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4 text-sya-red flex-shrink-0" />
              <span>105 Ridge Lane, Waltham, MA, 02452</span>
            </div>
            {/* <div className="flex items-center gap-1">
              <Mail className="h-4 w-4 text-sya-red flex-shrink-0" />
              <Link href="mailto:linasong@alum.mit.edu" className="hover:text-white transition-colors">
                linasong@alum.mit.edu
              </Link>
            </div> */}
          </div>
          
          {/* Quick Links and Copyright */}
          <div className="flex items-center gap-4 text-sm">
            <Link href="mailto:linasong@alum.mit.edu" className="group inline-flex items-center text-gray-200 hover:text-white transition-colors">
              Contact Us
              <ExternalLink className="ml-1 h-3 w-3 opacity-70 group-hover:opacity-100 transition-opacity" />
            </Link>
            <span className="text-gray-300">© {currentYear} BEC</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
