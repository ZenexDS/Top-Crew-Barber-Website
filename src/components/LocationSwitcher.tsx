'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LOCATIONS } from '@/utils/constants';

export default function LocationSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  const currentLocation = LOCATIONS.find(loc => loc.current) || LOCATIONS[0];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-center text-gray-700 hover:text-black transition-colors duration-300 text-sm w-full md:w-auto"
      >
        <FaMapMarkerAlt className="mr-1" />
        <span>{currentLocation.shortName}</span>
      </button>

      {isOpen && (
        <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-64 bg-white rounded-md shadow-lg p-2 z-50 md:left-auto md:right-0 md:transform-none">
          <div className="py-1">
            {LOCATIONS.map((location, index) => (
              <div key={index} className="px-3 py-2">
                {location.current ? (
                  <div className="flex flex-col">
                    <span className="font-medium text-black">{location.shortName}</span>
                    <span className="text-xs text-gray-500">{location.address}</span>
                    <span className="text-xs text-gray-500">{location.city}</span>
                    <span className="text-xs mt-1 text-green-600">Current Location</span>
                  </div>
                ) : (
                  <Link 
                    href={location.url || '#'} 
                    className="flex flex-col hover:bg-gray-50 rounded p-1 -ml-1"
                    onClick={() => setIsOpen(false)}
                  >
                    <span className="font-medium">{location.shortName}</span>
                    <span className="text-xs text-gray-500">{location.address}</span>
                    <span className="text-xs text-gray-500">{location.city}</span>
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 