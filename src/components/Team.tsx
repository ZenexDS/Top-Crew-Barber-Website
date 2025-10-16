'use client';

import Image from 'next/image';
import { FaInstagram } from 'react-icons/fa6';
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
    name: 'KJ',
    role: 'Barber',
    image: '/KJ.jpeg',
    bio: 'KJ delivers exceptional cuts with precision and style, specializing in creating the perfect look for each client.',
    social: {
      instagram: '#', // Placeholder, as no Instagram link was provided for KJ
    }
  },
  {
    id: 4,
    name: 'Gramos',
    role: 'Barber',
    image: '/Gramos.jpeg',
    bio: 'Gramos brings fresh energy and contemporary styles to our team, specializing in modern cuts and fades.',
    social: {
      instagram: 'https://www.instagram.com/mozzi_cuts/',
    }
  },
  {
    id: 5,
    name: 'Arnit',
    role: 'Barber',
    image: '/Arnit.jpeg',
    bio: 'Arnit brings enthusiasm and skill to every haircut, creating styles that enhance your natural features.',
    social: {
      instagram: 'https://www.instagram.com/arnitthebarber/',
    }
  },
  {
    id: 6,
    name: 'Ahmad',
    role: 'Barber',
    image: '/Ahmad.jpeg',
    bio: 'Ahmad combines technical skill with a keen eye for detail, ensuring each client gets a personalized experience.',
    social: {
      instagram: 'https://www.instagram.com/br._ahmad/',
    }
  },
  {
    id: 7,
    name: 'Noor',
    role: 'Barber',
    image: '/noor_photo_2.jpg',
    bio: 'Noor brings fresh perspective and dedication to every cut, ensuring clients leave with confidence and style.',
    social: {
      instagram: 'https://www.instagram.com/nashyyfadez/',
    }
  },
  {
    id: 8,
    name: 'Andi',
    role: 'Barber',
    image: '/Andy_photo_3.jpg',
    bio: 'Andi combines creativity with precision, delivering exceptional cuts that reflect each client\'s unique style.',
    social: {
      instagram: 'https://www.instagram.com/andiblendzz/',
    }
  }
];

export default function Team() {
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

        {/* Grid Layout - All barbers visible */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {barbers.map((barber) => (
            <div
              key={barber.id}
              className="bg-white rounded-xl shadow-md overflow-hidden transition-transform duration-300 hover:shadow-lg hover:scale-[1.02]"
            >
              <div className="relative h-60 sm:h-72 lg:h-80 w-full">
                <Image
                  src={barber.image}
                  alt={barber.name}
                  fill
                  className={`object-cover ${barber.name === 'Andi' ? 'brightness-90 contrast-90 saturate-110' : ''}`}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-1 sm:mb-2">{barber.name}</h3>
                <p className="text-indigo-600 font-semibold mb-2 sm:mb-4">{barber.role}</p>
                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">{barber.bio}</p>
                
                <div className="flex items-center justify-between">
                  <div className="flex space-x-4">
                    {barber.social.instagram !== '#' && (
                      <a href={barber.social.instagram} className="instagram-gradient p-2 rounded-full transition-transform hover:scale-110" 
                        target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={24} className="text-white" />
                      </a>
                    )}
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
          ))}
        </div>
      </div>
    </section>
  );
} 