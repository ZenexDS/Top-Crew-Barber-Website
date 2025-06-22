'use client';
import { FaInfoCircle } from 'react-icons/fa';

const WalkInBanner = () => {
  return (
    <div className="bg-blue-600 text-white py-3 px-4 text-center border-b border-blue-700 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <FaInfoCircle className="mr-2 flex-shrink-0" />
        <span className="text-sm sm:text-base font-medium">
          Walk-ins only at this location - No appointments needed
        </span>
      </div>
    </div>
  );
};

export default WalkInBanner; 