'use client';
import { useEffect } from 'react';

export default function SquareBooking() {
  useEffect(() => {
    // Only load the script if it's not already loaded
    if (!document.getElementById('square-appointments-script')) {
      const script = document.createElement('script');
      script.id = 'square-appointments-script';
      script.src = 'https://app.squareup.com/appointments/buyer/widget/g68gr1za4x62w8/L4RSHR66WVCB8.js';
      document.body.appendChild(script);
    }
    
    return () => {
      // Clean up on unmount
      const script = document.getElementById('square-appointments-script');
      if (script) {
        script.remove();
      }
    };
  }, []);

  return (
    <div className="square-appointments-container">
      {/* This div will be populated by the Square Appointments widget */}
    </div>
  );
} 