'use client';

import Navbar from '@/components/Navbar';
import LocationPicker from '@/components/LocationPicker';

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <LocationPicker />
      {children}
    </>
  );
} 