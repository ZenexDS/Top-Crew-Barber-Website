'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { LOCATIONS } from '@/utils/constants';

export default function LocationPicker() {
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    // Check if user has already selected a location in this session
    const hasSelectedLocation = sessionStorage.getItem('locationSelected');
    
    if (!hasSelectedLocation) {
      // Show the modal on initial page load
      setIsOpen(true);
      sessionStorage.setItem('locationSelected', 'true');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-xs sm:max-w-3xl max-h-[90vh] overflow-auto">
        <div className="p-4 sm:p-6">
          <h2 className="text-xl sm:text-2xl font-bold text-center mb-4 sm:mb-6 text-black">Select Your Location</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
            {LOCATIONS.map((location, index) => (
              <div key={index} className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                <div className="h-36 sm:h-48 relative">
                  <Image 
                    src={location.image} 
                    alt={location.name}
                    fill
                    style={{objectFit: "cover"}}
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  {/* Darkening overlay */}
                  <div className="absolute inset-0 bg-black/40"></div>
                  
                  {/* Address overlay */}
                  <div className="absolute bottom-0 left-0 right-0 p-2 text-white">
                    <p className="font-medium text-sm">{location.address}</p>
                    <p className="text-xs">{location.city}</p>
                  </div>
                </div>
                <div className="p-3 sm:p-4">
                  <h3 className="font-semibold text-base sm:text-lg text-black">{location.name}</h3>
                  <p className="text-gray-600 text-sm sm:text-base">{location.address}</p>
                  <p className="text-gray-600 text-sm sm:text-base mb-3 sm:mb-4">{location.city}</p>
                  
                  {location.current ? (
                    <button 
                      onClick={() => setIsOpen(false)}
                      className="w-full bg-black text-white py-2 rounded hover:bg-gray-800 transition-colors text-sm sm:text-base"
                    >
                      Select This Location
                    </button>
                  ) : (
                    <Link 
                      href={location.url || '#'}
                      className="block text-center w-full bg-gray-200 text-gray-800 py-2 rounded hover:bg-gray-300 transition-colors text-sm sm:text-base"
                    >
                      Go To This Location
                    </Link>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 