# Family Dental Clinic Website

A professional landing page for a family dentist practice built with Next.js and Tailwind CSS. The website features a blue and white color scheme, showcases services with pricing, and includes functionality for appointment booking.

## Features

- Responsive design optimized for all devices
- Professional blue and white color scheme
- Text-based logo
- Appointment booking form
- Services section with pricing
- Testimonials from satisfied patients
- Interactive map showing clinic location
- Sticky call-to-action bar for easy appointment scheduling

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org)
- **Styling**: [Tailwind CSS](https://tailwindcss.com)
- **Form Handling**: [Resend](https://resend.io) (implementation ready)
- **Map**: [React Leaflet](https://react-leaflet.js.org)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone <repository-url>
   cd dentist
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This project is configured for easy deployment on [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Connect the repository to Vercel
3. Vercel will automatically deploy your site

## Environment Variables

To enable the contact form functionality with Resend, you'll need to add the following environment variable:

```
RESEND_API_KEY=your_resend_api_key
```

## Project Structure

- `src/app` - Next.js app router pages
- `src/components` - Reusable UI components
- `public/images` - Static images including testimonial photos
