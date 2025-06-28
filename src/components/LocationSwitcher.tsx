'use client';
import { useState, useEffect, useRef } from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { LOCATIONS } from '@/utils/constants';
import { useLocation } from '@/utils/LocationContext';

export default function LocationSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const { currentLocation, setCurrentLocation } = useLocation();

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

  const handleLocationChange = (location: typeof LOCATIONS[0]) => {
    setCurrentLocation(location);
    setIsOpen(false);
    
    // Scroll to top of page when location changes
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

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
        <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-md shadow-lg p-2 z-50">
          <div className="py-1">
            {LOCATIONS.map((location, index) => (
              <div key={index} className="px-3 py-2">
                {location.id === currentLocation.id ? (
                  <div className="flex flex-col bg-gray-100 rounded p-2">
                    <span className="font-medium text-black">{location.shortName}</span>
                    <span className="text-xs text-gray-500">{location.address}</span>
                    <span className="text-xs text-gray-500">{location.city}</span>
                    <span className="text-xs mt-1 text-green-600 font-medium">Current Location</span>
                  </div>
                ) : (
                  <button 
                    onClick={() => handleLocationChange(location)}
                    className="flex flex-col hover:bg-gray-50 rounded p-2 w-full text-left transition-colors"
                  >
                    <span className="font-medium text-gray-700">{location.shortName}</span>
                    <span className="text-xs text-gray-500">{location.address}</span>
                    <span className="text-xs text-gray-500">{location.city}</span>
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 