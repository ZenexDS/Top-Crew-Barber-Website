'use client';

import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock, FaCalendarCheck } from 'react-icons/fa';
import { useLocation } from '@/utils/LocationContext';

const businessHours = [
  { day: 'Monday', hours: '10:00 AM - 7:00 PM' },
  { day: 'Tuesday', hours: '9:30 AM - 7:00 PM' },
  { day: 'Wednesday', hours: '9:30 AM - 7:00 PM' },
  { day: 'Thursday', hours: '9:30 AM - 7:00 PM' },
  { day: 'Friday', hours: '9:30 AM - 7:00 PM' },
  { day: 'Saturday', hours: '9:30 AM - 5:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

const Contact = () => {
  const { currentLocation, isWharncliffe } = useLocation();

  return (
    <section id="contact" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">Contact Us</h2>
          <p className="text-base sm:text-xl text-gray-600 max-w-2xl mx-auto">
            {isWharncliffe 
              ? 'Visit us at our Wharncliffe location for walk-in service.'
              : 'Visit us at our location or book your appointment online today.'
            }
          </p>
        </div>

        <div className="flex flex-col items-center">
          {/* Main Contact Card */}
          <div className="bg-white p-5 sm:p-8 rounded-lg shadow-lg w-full max-w-4xl mb-8 sm:mb-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Information */}
              <div className="space-y-5 sm:space-y-6">
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 border-b pb-2 mb-4 sm:mb-6">Find Us</h3>
                
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaMapMarkerAlt className="text-black text-lg sm:text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Location</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      {currentLocation.address}<br />
                      {currentLocation.city}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaPhone className="text-black text-lg sm:text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Phone</h4>
                    <p className="text-gray-600 text-sm sm:text-base">
                      <a href={`tel:${currentLocation.phone.replace(/[^0-9]/g, '')}`} className="hover:underline">
                        {currentLocation.phone}
                      </a>
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-3 sm:space-x-4">
                  <FaEnvelope className="text-black text-lg sm:text-xl mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-gray-900 text-sm sm:text-base">Email</h4>
                    <p className="text-gray-600 text-sm sm:text-base">topcrewlondon@gmail.com</p>
                  </div>
                </div>
                
                <div className="mt-6 sm:mt-8">
                  {isWharncliffe ? (
                    // Wharncliffe location - Call us CTA
                    <a
                      href={currentLocation.callUrl}
                      className="inline-flex items-center bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
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
                      className="inline-flex items-center bg-black text-white px-5 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-gray-800 transition-colors duration-300 text-sm sm:text-base w-full sm:w-auto justify-center sm:justify-start"
                    >
                      <FaCalendarCheck className="mr-2" />
                      Book An Appointment
                    </a>
                  )}
                </div>
              </div>
              
              {/* Business Hours */}
              <div>
                <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 border-b pb-2 mb-4 sm:mb-6">
                  <span className="flex items-center">
                    <FaClock className="mr-2" />
                    Business Hours
                  </span>
                </h3>
                <div className="space-y-2 sm:space-y-3">
                  {businessHours.map((schedule) => (
                    <div key={schedule.day} className="flex justify-between items-center py-1 border-b border-gray-100">
                      <span className="font-medium text-gray-700 text-sm sm:text-base">{schedule.day}</span>
                      <span className="text-gray-600 font-semibold text-sm sm:text-base">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Map Embed */}
          <div className="w-full max-w-4xl rounded-lg overflow-hidden shadow-lg h-64 sm:h-96">
            <iframe 
              src={currentLocation.mapUrl}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title={`TopCrew Barbershop - ${currentLocation.shortName} Location`}
              aria-label={`Google Maps showing TopCrew Barbershop ${currentLocation.shortName} location`}
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 