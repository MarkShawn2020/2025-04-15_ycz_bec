import Link from 'next/link';
import Image from 'next/image';
import { Facebook, Instagram, Youtube, Linkedin, Video } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-sya-blue text-white">
      {/* Keep Exploring Section */}
      <div className="bg-sya-light-blue bg-opacity-30 py-6">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h3 className="text-2xl font-bebas text-sya-blue mb-4 md:mb-0">Keep Exploring SYA</h3>
            <div className="flex space-x-4">
              <Link
                href="https://share.hsforms.com/1KfafBdDyT5uZFQXAt72KIQ3eef"
                className="bg-white text-sya-blue px-6 py-2 text-sm font-semibold rounded border border-sya-blue hover:bg-sya-blue hover:text-white transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                INQUIRE
              </Link>
              <Link
                href="/apply-now"
                className="bg-white text-sya-blue px-6 py-2 text-sm font-semibold rounded border border-sya-blue hover:bg-sya-blue hover:text-white transition-colors"
              >
                APPLY
              </Link>
              <Link
                href="/alumni-friends/make-a-gift"
                className="bg-white text-sya-blue px-6 py-2 text-sm font-semibold rounded border border-sya-blue hover:bg-sya-blue hover:text-white transition-colors"
              >
                GIVE
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="container mx-auto px-4 py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Address */}
          <div className="col-span-1">
            <Link href="/" className="block mb-4">
              <Image
                src="https://ext.same-assets.com/2981809292/3108881295.svg"
                alt="BEC Logo"
                width={120}
                height={48}
                className="h-12 w-auto"
              />
            </Link>
            <address className="not-italic text-sm mb-4">
              120 Water Street, Suite 310,<br />
              North Andover, MA 01845<br />
              <a href="tel:978.725.6828" className="hover:underline">978.725.6828</a>
            </address>
          </div>

          {/* Links */}
          <div className="col-span-3">
            <div className="flex flex-col md:flex-row justify-between">
              <div>
                <Link href="/about/contact" className="text-sm hover:underline block mb-2">Contact Us</Link>
                <Link href="/site-map" className="text-sm hover:underline block mb-2">Site Map</Link>
                <Link href="/privacy-policy" className="text-sm hover:underline block mb-2">Privacy Policy</Link>
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
