'use client';
import Link from 'next/link';
import Image from 'next/image';
import { FaPhone } from 'react-icons/fa';
import { useLocation } from '@/utils/LocationContext';

const Hero = () => {
  const { currentLocation, isWharncliffe } = useLocation();

  return (
    <div className="relative">
      <section className="relative bg-gray-900 h-[90vh] min-h-[600px] flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/Team-photo.jpeg"
            alt="TopCrew Barbershop Team"
            fill
            priority
            className="object-cover"
            style={{ objectPosition: 'center 30%' }}
            sizes="100vw"
          />
          {/* Enhanced top-down shadow gradient - darker overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/70 via-black/50 to-black/30"></div>
        </div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col items-center justify-center">
          <div className="flex flex-col sm:flex-row items-center justify-center w-full">
            <div className="hidden sm:block px-4 py-1 sm:px-6 sm:py-2 bg-white text-gray-900 rounded-md mb-4 sm:mb-0 text-sm sm:text-base">
              <span className="font-semibold">SINCE</span>
            </div>
            
            <div className="text-center mx-2 sm:mx-8">
              <h2 className="text-[32px] sm:text-[40px] md:text-[49px] uppercase font-bold text-white mb-1 sm:mb-2">WELCOME TO</h2>
              <h1 className="text-[60px] sm:text-[80px] md:text-[140px] lg:text-[195px] font-bold text-white leading-none">TOP CREW</h1>
              <p className="text-[16px] sm:text-[18px] md:text-[20px] text-gray-100 mt-2 sm:mt-4 max-w-xs sm:max-w-none mx-auto">
                Experience the best haircuts, beard trims, and grooming services in London, Ontario.
              </p>
            </div>
            
            <div className="hidden sm:block px-4 py-1 sm:px-6 sm:py-2 bg-white text-gray-900 rounded-md mt-4 sm:mb-0 text-sm sm:text-base">
              <span className="font-semibold">2014</span>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mt-6 sm:mt-8 w-full px-4 sm:px-0">
            {isWharncliffe ? (
              // Wharncliffe location - Call us CTA
              <a
                href={currentLocation.callUrl}
                className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 text-center flex items-center justify-center"
              >
                <FaPhone className="mr-2" />
                Call Us
              </a>
            ) : (
              // Commissioners location - Book appointment CTA
              <a
                href={currentLocation.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 rounded-md font-semibold hover:bg-gray-100 transition-colors duration-300 text-center"
              >
                Book An Appointment
              </a>
            )}
            <Link
              href="/#services"
              className="w-full sm:w-auto px-6 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white/10 transition-colors duration-300 text-center shadow-lg"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;