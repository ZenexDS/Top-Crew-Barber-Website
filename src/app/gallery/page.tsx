'use client';

import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa6';
import { SQUARE_APPOINTMENTS_URL } from '@/utils/constants';
import { useEffect } from 'react';
import Script from 'next/script';

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-gray-50 pt-16 md:pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        {/* Back Button */}
        <div className="mb-4 sm:mb-8">
          <Link
            href="/"
            className="inline-flex items-center text-gray-700 hover:text-black transition-colors duration-300 text-sm sm:text-base"
          >
            <FaArrowLeft className="mr-2" />
            <span>Back to Home</span>
          </Link>
        </div>

        {/* Gallery Header */}
        <div className="text-center mb-6 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-2 sm:mb-4">Barber Gallery</h1>
          <p className="text-sm sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Check out the latest styles and cuts from our talented team of barbers
          </p>
        </div>

        {/* SociableKit Instagram Feed - Custom container to ensure mobile responsiveness */}
        <div className="w-full overflow-hidden">
          <div className='sk-instagram-feed' data-embed-id='25560104'></div>
          <Script src='https://widgets.sociablekit.com/instagram-feed/widget.js' strategy="afterInteractive" />
        </div>

        {/* Book Now CTA */}
        <div className="mt-8 sm:mt-16 text-center">
          <a
            href={SQUARE_APPOINTMENTS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
          >
            Book Your Cut
          </a>
        </div>
      </div>
    </main>
  );
} 