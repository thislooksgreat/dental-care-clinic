import React from 'react';
import Image from 'next/image';
import AppointmentForm from './AppointmentForm';

const HeroSection: React.FC = () => {
  return (
    <section className="relative bg-green-50 py-16 md:py-24" id="contact">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <h1 className="text-4xl md:text-5xl font-bold text-green-900 mb-4">
            Professional Dental Care for Your Family
          </h1>
          <p className="text-gray-700 mb-8 text-lg">
            We provide comprehensive dental services with a gentle touch. 
            Your smile is our priority!
          </p>
          
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold text-green-800 mb-4">
              Schedule Your Appointment
            </h2>
            <AppointmentForm />
          </div>
        </div>
        
        <div className="order-1 md:order-2 flex justify-center">
          <div className="relative h-[300px] md:h-[500px] w-full max-w-md overflow-hidden rounded-lg shadow-xl">
            <Image
              src="/images/jonathan-borba-v_2FRXEba94-unsplash.jpg"
              alt="Dental professional with patient"
              fill
              style={{ objectFit: 'cover' }}
              priority
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
