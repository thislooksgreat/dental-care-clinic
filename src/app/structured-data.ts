export const dentalClinicSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Family Dental Clinic",
  "image": "https://dentalcare-example.com/images/jonathan-borba-v_2FRXEba94-unsplash.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Strada Maria Rosetti 26A",
    "addressLocality": "București",
    "postalCode": "020487",
    "addressCountry": "RO"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 44.4396,
    "longitude": 26.1063
  },
  "url": "https://dentalcare-example.com",
  "telephone": "0720123123",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      "opens": "09:00",
      "closes": "18:00"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": "Saturday",
      "opens": "09:00",
      "closes": "14:00"
    }
  ],
  "priceRange": "$$",
  "servesCuisine": "Dental Services"
};
