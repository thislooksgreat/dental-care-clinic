import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

interface TopBarProps {
  phone: string;
  address: string;
}

const TopBar: React.FC<TopBarProps> = ({ phone, address }) => {
  return (
    <div className="bg-blue-900 text-white py-2 px-4 md:px-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
        <div className="flex items-center space-x-4 mb-2 md:mb-0">
          <div className="flex items-center">
            <FaPhone className="mr-2" />
            <span>{phone}</span>
          </div>
          <div className="flex items-center">
            <FaMapMarkerAlt className="mr-2" />
            <span>{address}</span>
          </div>
        </div>
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-300 transition-colors">
            <FaFacebook />
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-blue-300 transition-colors">
            <FaInstagram />
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-blue-300 transition-colors">
            <FaTwitter />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
