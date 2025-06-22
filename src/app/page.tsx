'use client';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import Team from '@/components/Team';
import Contact from '@/components/Contact';
import { useLocation } from '@/utils/LocationContext';

export default function Home() {
  const { isWharncliffe } = useLocation();

  return (
    <main>
      <Hero />
      <Services />
      {!isWharncliffe && <Team />}
      <Contact />
    </main>
  );
}
