'use client';
import { FaStar } from 'react-icons/fa';
import Script from 'next/script';

export default function ReviewsPage() {
  return (
    <main className="pt-20 pb-16 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Customer Reviews</h1>
          
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} className="text-yellow-400 text-2xl mx-1" />
            ))}
          </div>
          
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            See what our customers have to say about our haircut services
          </p>
        </div>
        
        {/* Google Reviews Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8">
          <div className='sk-ww-google-reviews' data-embed-id='25555637'></div>
          <Script src='https://widgets.sociablekit.com/google-reviews/widget.js' strategy="afterInteractive" />
        </div>
      </div>
    </main>
  );
} 