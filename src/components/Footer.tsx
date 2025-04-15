"use client";

import React from 'react';
import Link from 'next/link';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
  FaTiktok
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      {/* Call-to-action section */}
      <div className="bg-sya-iceBlue py-8 text-center">
        <div className="container mx-auto px-4">
          <h3 className="uppercase tracking-wide text-2xl mb-4 font-bebas">Keep exploring SYA</h3>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/inquire" className="bg-white text-sya-blue hover:bg-sya-navy hover:text-white transition duration-300 py-2 px-8 inline-block uppercase">
              Inquire
            </Link>
            <Link href="/apply" className="bg-white text-sya-blue hover:bg-sya-navy hover:text-white transition duration-300 py-2 px-8 inline-block uppercase">
              Apply
            </Link>
            <Link href="/give" className="bg-white text-sya-blue hover:bg-sya-navy hover:text-white transition duration-300 py-2 px-8 inline-block uppercase">
              Give
            </Link>
          </div>
        </div>
      </div>

      {/* Main footer */}
      <div className="bg-sya-navy text-white py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-6">
            {/* Logo */}
            <div className="mb-6 md:mb-0">
              <Link href="/" className="block">
                <img
                  src="https://ext.same-assets.com/3108881295.svg"
                  alt="School Year Abroad"
                  className="h-12"
                />
              </Link>
            </div>

            {/* Address */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <p className="mb-1">120 Water Street, Suite 310,</p>
              <p className="mb-1">North Andover, MA 01845</p>
              <p><a href="tel:9787256828" className="hover:underline">978.725.6828</a></p>
            </div>

            {/* Links */}
            <div className="text-center md:text-left mb-6 md:mb-0">
              <ul className="space-y-1">
                <li><Link href="/about/contact" className="hover:underline">Contact Us</Link></li>
                <li><Link href="/site-map" className="hover:underline">Site Map</Link></li>
                <li><Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link></li>
              </ul>
            </div>

            {/* Social Media */}
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/sya.org/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="bg-white text-sya-navy p-2 rounded-full hover:bg-gray-200 transition duration-300">
                <FaFacebook className="w-5 h-5" />
              </a>
              <a href="https://www.instagram.com/schoolyearabroad/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="bg-white text-sya-navy p-2 rounded-full hover:bg-gray-200 transition duration-300">
                <FaInstagram className="w-5 h-5" />
              </a>
              <a href="http://www.youtube.com/user/SchoolYearAbroad" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="bg-white text-sya-navy p-2 rounded-full hover:bg-gray-200 transition duration-300">
                <FaYoutube className="w-5 h-5" />
              </a>
              <a href="https://www.linkedin.com/school/school-year-abroad/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="bg-white text-sya-navy p-2 rounded-full hover:bg-gray-200 transition duration-300">
                <FaLinkedin className="w-5 h-5" />
              </a>
              <a href="https://www.tiktok.com/@schoolyearabroad_" target="_blank" rel="noopener noreferrer" aria-label="TikTok" className="bg-white text-sya-navy p-2 rounded-full hover:bg-gray-200 transition duration-300">
                <FaTiktok className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center pt-4 border-t border-gray-700 text-sm">
            <p>Registered 501(c)(3). EIN: 04-2589375</p>
            <p className="mt-1">
              <a
                href="https://www.finalsite.com/independent-schools"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:underline flex items-center justify-center"
              >
                Powered by Finalsite
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
