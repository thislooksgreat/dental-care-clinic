import React from 'react';
import { FaPhone } from 'react-icons/fa';

interface StickyCallBarProps {
  phone: string;
}

const StickyCallBar: React.FC<StickyCallBarProps> = ({ phone }) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-blue-600 text-white py-3 px-4 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <FaPhone className="mr-2 animate-pulse" />
          <span className="font-medium">Call to make an appointment</span>
        </div>
        <a 
          href={`tel:${phone.replace(/\./g, '')}`}
          className="bg-white text-blue-600 hover:bg-blue-100 transition-colors font-bold py-2 px-4 rounded-md flex items-center"
        >
          <FaPhone className="mr-2" />
          {phone}
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
