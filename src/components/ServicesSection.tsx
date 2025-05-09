import React from 'react';
import Image from 'next/image';

interface ServicesSectionProps {
  id: string;
}

const services = [
  {
    id: 1,
    title: 'General Dentistry',
    description: 'Comprehensive dental check-ups, cleanings, and preventive care to maintain your oral health.',
    price: '250 RON',
    image: '/images/benyamin-bohlouli-e7MJLM5VGjY-unsplash.jpg'
  },
  {
    id: 2,
    title: 'Cosmetic Dentistry',
    description: 'Enhance your smile with teeth whitening, veneers, and other cosmetic procedures.',
    price: 'from 500 RON',
    image: '/images/candid-WFsNCIn8OF4-unsplash.jpg'
  },
  {
    id: 3,
    title: 'Orthodontics',
    description: 'Straighten your teeth with braces or clear aligners for a beautiful, aligned smile.',
    price: 'from 2500 RON',
    image: '/images/caroline-lm-QA9fRIi6sFw-unsplash.jpg'
  },
  {
    id: 4,
    title: 'Dental Implants',
    description: 'Replace missing teeth with durable, natural-looking dental implants.',
    price: 'from 3500 RON',
    image: '/images/jonathan-borba-W9YEY6G8LVM-unsplash.jpg'
  }
];

const ServicesSection: React.FC<ServicesSectionProps> = ({ id }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer a comprehensive range of dental services to meet all your family&apos;s dental needs.
            Our experienced team uses the latest technology to provide the highest quality care.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
          {services.map((service) => (
            <div key={service.id} className="bg-green-50 rounded-lg overflow-hidden shadow-lg flex flex-col h-full">
              <div className="relative h-48 w-full">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  style={{ objectFit: 'cover' }}
                  className="transition-transform hover:scale-105 duration-300"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-green-800 mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <div className="flex justify-between items-center mt-auto">
                  <span className="text-green-900 font-semibold">Starting at:</span>
                  <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full font-bold">
                    {service.price}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-4">
            Need a specific dental service not listed here? Contact us for a consultation.
          </p>
          <a 
            href="#contact" 
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
          >
            Book an Appointment
          </a>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
