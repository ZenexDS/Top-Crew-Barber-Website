import Link from 'next/link';
import { Metadata, Viewport } from 'next';

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1.0,
  maximumScale: 1.0,
  userScalable: false,
};

export const metadata: Metadata = {
  title: 'Page Not Found | TopCrew Barbershop',
  description: 'Sorry, the page you are looking for does not exist.',
};

export default function NotFound() {
  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h1 className="text-4xl sm:text-5xl font-bold text-black mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-4">Page Not Found</h2>
        <p className="text-gray-600 mb-8">
          Sorry, the page you are looking for doesn&apos;t exist or has been moved.
        </p>
        <Link 
          href="/"
          className="inline-block bg-black text-white px-6 py-3 rounded-md font-semibold hover:bg-gray-800 transition-colors duration-300"
        >
          Return to Home
        </Link>
      </div>
    </main>
  );
} 