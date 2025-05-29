'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { FaInstagram, FaChevronLeft, FaChevronRight } from 'react-icons/fa6';
import { SQUARE_APPOINTMENTS_URL } from '@/utils/constants';

// Instagram gradient style
const instagramGradientStyle = `
  .instagram-gradient {
    background: radial-gradient(circle at 30% 107%, #fdf497 0%, #fdf497 5%, #fd5949 45%, #d6249f 60%, #285AEB 90%);
  }
`;

const barbers = [
  {
    id: 1,
    name: 'Barber Al',
    role: 'Master Barber & Owner',
    image: '/Al.jpeg',
    bio: 'With over three decades of experience, Al brings unparalleled expertise and artistry to every cut.',
    social: {
      instagram: 'https://www.instagram.com/barber_al_/',
    }
  },
  {
    id: 2,
    name: 'Alex',
    role: 'Barber',
    image: '/Alex.jpeg',
    bio: 'Alex is known for his precision cuts and attention to detail, creating perfect styles for every client.',
    social: {
      instagram: 'https://www.instagram.com/_alexdm/',
    }
  },
  {
    id: 3,
    name: 'Erdi',
    role: 'Barber',
    image: '/Erdie.jpeg',
    bio: 'Erdi brings creativity and skill to every haircut, ensuring clients leave with a style that suits them perfectly.',
    social: {
      instagram: 'https://www.instagram.com/erdiblends/',
    }
  },
  {
    id: 4,
    name: 'KJ',
    role: 'Barber',
    image: '/KJ.jpeg',
    bio: 'KJ delivers exceptional cuts with precision and style, specializing in creating the perfect look for each client.',
    social: {
      instagram: '#', // Placeholder, as no Instagram link was provided for KJ
    }
  },
  {
    id: 5,
    name: 'Gramos',
    role: 'Barber',
    image: '/Gramos.jpeg',
    bio: 'Gramos brings fresh energy and contemporary styles to our team, specializing in modern cuts and fades.',
    social: {
      instagram: 'https://www.instagram.com/mozzi_cuts/',
    }
  },
  {
    id: 6,
    name: 'Arnit',
    role: 'Junior Barber',
    image: '/Arnit.jpeg',
    bio: 'Arnit brings enthusiasm and skill to every haircut, creating styles that enhance your natural features.',
    social: {
      instagram: 'https://www.instagram.com/arnitthebarber/',
    }
  },
  {
    id: 7,
    name: 'Ahmad',
    role: 'Junior Barber',
    image: '/Ahmad.jpeg',
    bio: 'Ahmad combines technical skill with a keen eye for detail, ensuring each client gets a personalized experience.',
    social: {
      instagram: 'https://www.instagram.com/br._ahmad/',
    }
  }
];

export default function Team() {
  const [sliderIndex, setSliderIndex] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(3);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const checkWidth = () => {
      if (window.innerWidth < 640) { // Small mobile
        setItemsPerPage(1);
      } else if (window.innerWidth < 1024) { // Tablet
        setItemsPerPage(2);
      } else { // Desktop
        setItemsPerPage(3);
      }
    };

    checkWidth();
    window.addEventListener('resize', checkWidth);
    return () => window.removeEventListener('resize', checkWidth);
  }, []);

  const handleNext = () => {
    // Always move right by the current items per page (or wrap to beginning)
    setSliderIndex(prevIndex => {
      const nextIndex = prevIndex + itemsPerPage;
      // If we'd go past the end, loop back to the beginning
      return nextIndex >= barbers.length ? 0 : nextIndex;
    });
  };

  const handlePrev = () => {
    // Always move left by the current items per page (or wrap to end)
    setSliderIndex(prevIndex => {
      const nextIndex = prevIndex - itemsPerPage;
      // If we'd go before the beginning, loop to the end
      if (nextIndex < 0) {
        const totalPages = Math.ceil(barbers.length / itemsPerPage);
        const lastPageStart = (totalPages - 1) * itemsPerPage;
        // Ensure we don't go past the actual number of barbers
        return Math.min(lastPageStart, barbers.length - itemsPerPage);
      }
      return nextIndex;
    });
  };

  // Handle touch events for swipe functionality
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };
  
  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };
  
  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 100) {
      // Swipe left (next)
      handleNextWithDebounce();
    } else if (touchEnd - touchStart > 100) {
      // Swipe right (prev)
      handlePrevWithDebounce();
    }
  };

  // Add debounce to prevent rapid clicks
  const handleNextWithDebounce = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    handleNext();
    
    // Reset after transition duration
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match the transition duration in the CSS
  };
  
  const handlePrevWithDebounce = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    handlePrev();
    
    // Reset after transition duration
    setTimeout(() => {
      setIsTransitioning(false);
    }, 500); // Match the transition duration in the CSS
  };

  const totalPages = Math.ceil(barbers.length / itemsPerPage);
  const currentPage = Math.floor(sliderIndex / itemsPerPage);

  return (
    <section id="team" className="py-16 sm:py-24 bg-gray-50">
      <style jsx global>{instagramGradientStyle}</style>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Meet Our Team</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Our experienced barbers are dedicated to providing you with the perfect cut and grooming experience.
          </p>
        </div>

        <div className="relative px-2 sm:px-8">
          {/* Navigation Arrows - Always visible on desktop, at bottom on mobile */}
          <div className="hidden sm:block absolute left-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handlePrevWithDebounce}
              className={`p-2 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-label="Previous barbers"
              disabled={isTransitioning}
            >
              <FaChevronLeft size={20} />
            </button>
          </div>
          
          <div className="hidden sm:block absolute right-0 top-1/2 -translate-y-1/2 z-10">
            <button
              onClick={handleNextWithDebounce}
              className={`p-2 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-label="Next barbers"
              disabled={isTransitioning}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
          
          {/* Barber Cards */}
          <div 
            className="overflow-hidden"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${sliderIndex * (100 / itemsPerPage)}%)` }}
            >
              {barbers.map((barber) => (
                <div
                  key={barber.id}
                  className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/3 p-2 sm:p-4"
                  style={{ flex: `0 0 ${100 / itemsPerPage}%` }}
                >
                  <div className="bg-white rounded-xl shadow-md overflow-hidden h-full transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]">
                    <div className="relative h-60 sm:h-80 w-full">
                      <Image
                        src={barber.image}
                        alt={barber.name}
                        fill
                        className="object-cover"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                    </div>
                    <div className="p-4 sm:p-6">
                      <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{barber.name}</h3>
                      <p className="text-indigo-600 font-semibold mb-2 sm:mb-4">{barber.role}</p>
                      <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{barber.bio}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex space-x-4">
                          <a href={barber.social.instagram} className="instagram-gradient p-2 rounded-full transition-transform hover:scale-110" 
                             target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={24} className="text-white" />
                          </a>
                        </div>
                        <a
                          href={SQUARE_APPOINTMENTS_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-black text-white px-4 sm:px-6 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm sm:text-base"
                        >
                          {barber.name === 'Barber Al' ? 'Book with Al' : `Book with ${barber.name.split(' ')[0]}`}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Mobile Navigation Controls */}
          <div className="flex sm:hidden justify-center gap-6 mt-6">
            <button
              onClick={handlePrevWithDebounce}
              className={`p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-label="Previous barbers"
              disabled={isTransitioning}
            >
              <FaChevronLeft size={20} />
            </button>
            <button
              onClick={handleNextWithDebounce}
              className={`p-3 rounded-full bg-black text-white shadow-lg hover:bg-gray-800 transition-colors ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
              aria-label="Next barbers"
              disabled={isTransitioning}
            >
              <FaChevronRight size={20} />
            </button>
          </div>
          
          {/* Pagination Indicators */}
          <div className="flex justify-center mt-6 sm:mt-8 gap-2">
            {Array.from({ length: totalPages }).map((_, index) => {
              const handlePageClick = () => {
                if (isTransitioning) return;
                
                setIsTransitioning(true);
                setSliderIndex(index * itemsPerPage);
                
                // Reset after transition duration
                setTimeout(() => {
                  setIsTransitioning(false);
                }, 500);
              };
              
              return (
                <button 
                  key={index}
                  onClick={handlePageClick}
                  className={`w-2 h-2 rounded-full transition-all duration-300 
                    ${index === currentPage ? 'bg-black w-6 sm:w-8' : 'bg-gray-300 hover:bg-gray-400'}
                    ${isTransitioning ? 'opacity-70 cursor-not-allowed' : ''}`}
                  aria-label={`Go to page ${index + 1}`}
                  disabled={isTransitioning}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
} 