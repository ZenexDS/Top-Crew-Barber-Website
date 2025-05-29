'use client';
import SquareBooking from '@/components/SquareBooking';

export default function BookingPage() {
  return (
    <main className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Book Your Appointment</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Select your preferred service, date, and time for your appointment at TopCrew Barbershop
          </p>
        </div>

        {/* Square Booking Widget */}
        <div className="bg-white rounded-lg shadow-md p-6 md:p-8 mb-12">
          <SquareBooking />
        </div>

        {/* Additional Info */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Visit Us At</h2>
          <p className="text-lg text-gray-600">312 Commissioners Rd W</p>
          <p className="text-lg text-gray-600 mb-4">London, ON N6J 1Y3</p>
          
          <h3 className="text-xl font-semibold text-gray-900 mt-8 mb-2">Hours of Operation</h3>
          <p className="text-md text-gray-600">Monday - Friday: 9:00 AM - 7:00 PM</p>
          <p className="text-md text-gray-600">Saturday: 9:00 AM - 6:00 PM</p>
          <p className="text-md text-gray-600">Sunday: 10:00 AM - 4:00 PM</p>
        </div>
      </div>
    </main>
  );
} 