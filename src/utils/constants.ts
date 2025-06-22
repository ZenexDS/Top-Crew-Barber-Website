// Appointment URLs
export const SQUARE_APPOINTMENTS_URL = "https://book.squareup.com/appointments/g68gr1za4x62w8/location/L4RSHR66WVCB8/services";

// Location Information
export const LOCATIONS = [
  {
    id: 'commissioners',
    name: 'Top Crew Barbershop',
    shortName: 'Commissioners Rd',
    address: '312 Commissioners Rd W',
    city: 'London, ON N6J 1Y3',
    phone: '(519) 601-8001',
    image: '/Topcrew header Image (no edits).png',
    acceptsBookings: true,
    bookingUrl: SQUARE_APPOINTMENTS_URL,
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.304747936326!2d-81.28699072346596!3d42.97177839681292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2124be9f313%3A0x93a1f8fdd7d1fa92!2s312%20Commissioners%20Rd%20W%2C%20London%2C%20ON%20N6J%201Y3%2C%20Canada!5e0!3m2!1sen!2sus!4v1715894825466!5m2!1sen!2sus',
    current: true
  },
  {
    id: 'wharncliffe',
    name: 'Top Crew Barbershop',
    shortName: 'Wharncliffe Rd',
    address: '2295 Wharncliffe Rd S',
    city: 'London, ON N6P 1S7',
    phone: '(519) 203-1000',
    image: '/2295-Warncliff-location-popup-image.png',
    acceptsBookings: false,
    callUrl: 'tel:5192031000',
    mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2919.304747936326!2d-81.28699072346596!3d42.97177839681292!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ef2124be9f313%3A0x93a1f8fdd7d1fa92!2s2295%20Wharncliffe%20Rd%20S%2C%20London%2C%20ON%20N6P%201S7%2C%20Canada!5e0!3m2!1sen!2sus!4v1715894825466!5m2!1sen!2sus',
    current: false
  }
];

// Hours of Operation
export const HOURS_OF_OPERATION = {
  weekdays: '9:00 AM - 7:00 PM',
  saturday: '9:00 AM - 6:00 PM',
  sunday: '10:00 AM - 4:00 PM'
}; 