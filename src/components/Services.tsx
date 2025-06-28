import { FaScissors, FaUserPen, FaSprayCanSparkles, FaChildren, FaPhone } from 'react-icons/fa6';
import { useLocation } from '@/utils/LocationContext';
import WalkInBanner from './WalkInBanner';

const Services = () => {
  const { currentLocation, isWharncliffe } = useLocation();

  // Different service configurations for each location
  const services = isWharncliffe ? [
  {
      title: 'Haircut',
      price: '$30',
      description: 'Precision cut tailored to your style, includes hot towel and styling',
      icon: FaScissors,
    },
    {
      title: 'Beard Trim & Shape',
      price: '$20',
      description: 'Expert beard grooming with precise trimming and shaping',
      icon: FaUserPen,
    },
    {
      title: 'Hair & Beard',
      price: '$40',
      description: 'Complete grooming package with haircut and beard service',
      icon: FaSprayCanSparkles,
    },
    {
      title: "Kids' Cut",
      price: '$25',
      description: 'Gentle and patient service for our younger gentlemen',
      icon: FaChildren,
    },
  ] : [
    {
      title: 'Haircut',
    price: '$30',
    description: 'Precision cut tailored to your style, includes hot towel and styling',
    icon: FaScissors,
      duration: '30 min',
  },
  {
    title: 'Beard Trim & Shape',
    price: '$20',
    description: 'Expert beard grooming with precise trimming and shaping',
    icon: FaUserPen,
    duration: '30 min',
  },
  {
      title: 'Hair & Beard',
    price: '$40',
    description: 'Complete grooming package with haircut and beard service',
    icon: FaSprayCanSparkles,
    duration: '1 hour',
  },
  {
    title: "Kids' Cut",
    price: '$25',
    description: 'Gentle and patient service for our younger gentlemen',
    icon: FaChildren,
    duration: '30 min',
  },
];

  return (
    <section id="services" className="py-16 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Walk-in Banner positioned above the services header */}
        {isWharncliffe && (
          <div className="mb-8">
            <WalkInBanner />
          </div>
        )}
        
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Our Services</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            Professional grooming services tailored to enhance your unique style
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 sm:p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="text-black mb-3 sm:mb-4">
                <service.icon size={28} className="sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-1 sm:mb-2">
                {service.title}
              </h3>
              <p className="text-xl sm:text-2xl font-bold text-black mb-1 sm:mb-2">{service.price}</p>
              <p className="text-sm sm:text-base text-gray-600 mb-3 sm:mb-4">{service.description}</p>
              {!isWharncliffe && 'duration' in service && (
              <p className="text-xs sm:text-sm text-gray-900">Duration: {service.duration}</p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-16 text-center">
          {isWharncliffe ? (
            // Wharncliffe location - Call us CTA
          <a
              href={currentLocation.callUrl}
              className="inline-flex items-center bg-black text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
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
            className="inline-block bg-black text-white px-6 sm:px-8 py-3 rounded-md text-base sm:text-lg font-semibold hover:bg-gray-800 transition-colors duration-300 w-full sm:w-auto"
          >
            Book Your Service
          </a>
          )}
        </div>
      </div>
    </section>
  );
};

export default Services; 