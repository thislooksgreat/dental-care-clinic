"use client";

import React from 'react';
import dynamic from 'next/dynamic';
import { FaPhone, FaEnvelope, FaClock } from 'react-icons/fa';

interface LocationSectionProps {
  id: string;
  address: string;
}

interface MapProps {
  address: string;
}

// Dynamically import the Map component to avoid SSR issues with Leaflet
const DynamicMap = dynamic<MapProps>(() => import('./Map'), {
  ssr: false,
  loading: () => (
    <div className="h-[400px] bg-gray-100 flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  ),
});

const LocationSection: React.FC<LocationSectionProps> = ({ id, address }) => {
  return (
    <section id={id} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-4">Visit Our Clinic</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We&apos;re conveniently located in central Bucharest. Find us at the address below.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div className="rounded-lg overflow-hidden shadow-lg h-[400px]">
            <DynamicMap address={address} />
          </div>
          
          <div className="bg-green-50 p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-bold text-green-800 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaPhone className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Phone</h4>
                  <p className="text-gray-700">0720.123.123</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaEnvelope className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Email</h4>
                  <p className="text-gray-700">contact@dentalcare.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-green-800" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Address</h4>
                  <p className="text-gray-700">{address}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-green-100 p-3 rounded-full mr-4">
                  <FaClock className="text-green-800" />
                </div>
                <div>
                  <h4 className="font-semibold text-green-900">Working Hours</h4>
                  <p className="text-gray-700">Monday - Friday: 9:00 - 18:00</p>
                  <p className="text-gray-700">Saturday: 9:00 - 14:00</p>
                  <p className="text-gray-700">Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;
