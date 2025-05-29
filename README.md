# Top Crew Barbershop Website

A modern, responsive website for Top Crew Barbershop in London, Ontario, featuring online booking, service information, barber profiles, and location details.

## Features

- **Modern Design**: Clean, responsive interface that works on mobile, tablet, and desktop
- **Location Selection**: Modal for users to select between multiple barbershop locations
- **Online Booking**: Integration with Square Appointments for seamless booking
- **Barber Profiles**: Showcasing the team with professional information and Instagram links
- **Service Information**: Displaying available haircut and grooming services with pricing
- **Gallery**: Instagram feed integration showing recent work
- **Contact Information**: Address, phone, email and business hours
- **Google Maps Integration**: Easy location finding

## Technology Stack

- **Framework**: Next.js 15
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **Deployment**: Vercel

## Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser to see the site

## Deployment

The website is configured for deployment on Vercel. The build process includes:

- Code quality checks with ESLint
- Production optimization with Next.js
- Automatic asset optimization

## Customization

The site can be easily customized by modifying:
- **Constants**: Update locations, hours, and URLs in `src/utils/constants.ts`
- **Team Members**: Edit barber profiles in `src/components/Team.tsx`
- **Services**: Update service offerings in `src/components/Services.tsx`

## Project Structure

- `src/app/*` - Next.js app router pages
- `src/components/*` - Reusable UI components
- `src/utils/*` - Utility functions and constants
- `public/*` - Static assets like images
