'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { LOCATIONS } from './constants';

type Location = typeof LOCATIONS[0];

interface LocationContextType {
  currentLocation: Location;
  setCurrentLocation: (location: Location) => void;
  isWharncliffe: boolean;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export function LocationProvider({ children }: { children: ReactNode }) {
  const [currentLocation, setCurrentLocation] = useState<Location>(
    LOCATIONS.find(loc => loc.current) || LOCATIONS[0]
  );

  const isWharncliffe = currentLocation.id === 'wharncliffe';

  return (
    <LocationContext.Provider value={{ 
      currentLocation, 
      setCurrentLocation, 
      isWharncliffe 
    }}>
      {children}
    </LocationContext.Provider>
  );
}

export function useLocation() {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocation must be used within a LocationProvider');
  }
  return context;
} 