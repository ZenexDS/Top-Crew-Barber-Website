'use client';

import Navbar from '@/components/Navbar';
import LocationPicker from '@/components/LocationPicker';
import { LocationProvider } from '@/utils/LocationContext';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LocationProvider>
      <Navbar />
      <LocationPicker />
      {children}
    </LocationProvider>
  );
} 