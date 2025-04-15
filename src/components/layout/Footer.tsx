import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sya-blue text-white">


      {/* Main Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="/logo.png"
                alt="BEC Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <address className="not-italic text-sm mb-4">
            105 Ridge Lane  <br />
            Waltham, MA, 02452
            
              <a href="tel:978.725.6828" className="hover:underline">978.725.6828</a>
            </address>
          </div>

          {/* Links */}
          <div className="col-span-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <Link href="mailto:linasong@alum.mit.edu" className="text-sm hover:underline block mb-2">Contact Us</Link>
                {/* <Link href="/site-map" className="text-sm hover:underline block mb-2">Site Map</Link> */}
                {/* <Link href="/privacy-policy" className="text-sm hover:underline block mb-2">Privacy Policy</Link> */}
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 mt-4 md:mt-0">
                <a href="https://www.facebook.com/sya.org/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-white hover:text-sya-light-blue">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/schoolyearabroad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-white hover:text-sya-light-blue">
                  <Instagram size={20} />
                </a>
                <a href="http://www.youtube.com/user/SchoolYearAbroad" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="text-white hover:text-sya-light-blue">
                  <Youtube size={20} />
                </a>
                <a href="https://www.linkedin.com/school/school-year-abroad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-white hover:text-sya-light-blue">
                  <Linkedin size={20} />
                </a>
                <a href="https://www.tiktok.com/@schoolyearabroad_" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="text-white hover:text-sya-light-blue">
                  <Video size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-sm mt-6 text-center md:text-right">
          <p>Registered 501(c)(3). EIN: 04-2589375</p>
          <p className="text-gray-400 text-xs mt-2">Powered by Finalsite</p>
        </div>
      </div>
    </footer>
  );
}
