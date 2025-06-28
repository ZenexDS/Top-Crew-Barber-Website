'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaPhone } from 'react-icons/fa';
import LocationSwitcher from './LocationSwitcher';
import { useLocation } from '@/utils/LocationContext';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const { currentLocation, isWharncliffe } = useLocation();

  // Add scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen && 
        menuRef.current && 
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current && 
        !buttonRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    // Close menu when Escape key is pressed
    const handleEscape = (e: KeyboardEvent) => {
      if (isOpen && e.key === 'Escape') setIsOpen(false);
    };

    if (isOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling when menu is open
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('keydown', handleEscape);
    }
    
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'Services', href: '/#services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Reviews', href: '/reviews' },
    { name: 'Team', href: '/#team' },
    { name: 'Contact', href: '/#contact' },
  ];

  // Filter out Team menu item for Wharncliffe location
  const filteredMenuItems = isWharncliffe 
    ? menuItems.filter(item => item.name !== 'Team')
    : menuItems;

  return (
    <>
      {/* Mobile background overlay - positioned below the navbar */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/50 z-40"
          style={{ top: '64px' }} // Position below navbar
          onClick={() => setIsOpen(false)}
        />
      )}

      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md' : 'bg-white shadow-sm'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <Link href="/" className="block">
                <h1 className="text-2xl font-bold text-black">TOP CREW</h1>
              </Link>
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                {filteredMenuItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-gray-700 hover:text-black transition-colors duration-300"
                  >
                    {item.name}
                  </Link>
                ))}
                <LocationSwitcher />
                {isWharncliffe ? (
                <a
                    href={currentLocation.callUrl}
                    className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300 flex items-center"
                  >
                    <FaPhone className="mr-2" />
                    Call Us
                  </a>
                ) : (
                  <a
                    href={currentLocation.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-black text-white px-6 py-2 rounded-md hover:bg-gray-800 transition-colors duration-300"
                >
                  Book Now
                </a>
                )}
              </div>
            </div>

            {/* Mobile menu elements */}
            <div className="md:hidden flex items-center">
              {/* Mobile Location Switcher */}
              <div className="mr-8">
                <LocationSwitcher />
              </div>
              
              {/* Mobile menu button */}
              <button
                ref={buttonRef}
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-700 hover:text-black p-2"
                aria-label="Toggle menu"
              >
                {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu - Dropdown Style */}
        <div 
          ref={menuRef}
          className={`absolute top-16 left-0 right-0 bg-white shadow-lg md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[80vh] opacity-100 z-50' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="px-4 py-4 max-h-[80vh] overflow-y-auto">
            {/* Centered menu items */}
            <div className="flex flex-col items-center text-center gap-1 py-3">
              {filteredMenuItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex justify-center w-full py-3 px-3 text-base font-medium text-gray-800 hover:bg-gray-100 rounded-lg transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
            
            <div className="mt-5 pt-3 border-t border-gray-100">
              {/* Call Us / Book Now button */}
              <div className="mb-8">
                {isWharncliffe ? (
                <a
                    href={currentLocation.callUrl}
                    className="flex items-center justify-center w-full py-3 px-4 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-800 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    <FaPhone className="mr-2" />
                    Call Us
                  </a>
                ) : (
                  <a
                    href={currentLocation.bookingUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full py-3 px-4 bg-black text-white text-center rounded-lg font-medium hover:bg-gray-800 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  Book Now
                </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar; 