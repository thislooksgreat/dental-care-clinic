import React from 'react';
import Link from 'next/link';
import { FaFacebook, FaInstagram, FaTwitter, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-blue-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dental Care</h3>
            <p className="mb-4 text-blue-100">
              Professional dental care for your entire family. 
              We're committed to providing quality dental services in a comfortable environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" aria-label="Facebook" className="text-blue-200 hover:text-white transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" aria-label="Instagram" className="text-blue-200 hover:text-white transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" aria-label="Twitter" className="text-blue-200 hover:text-white transition-colors">
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/#services" className="text-blue-200 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#testimonials" className="text-blue-200 hover:text-white transition-colors">
                  Testimonials
                </Link>
              </li>
              <li>
                <Link href="/#location" className="text-blue-200 hover:text-white transition-colors">
                  Location
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-blue-200 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaPhone className="mr-2 text-blue-300" />
                <span>0720.123.123</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-blue-300" />
                <span>contact@dentalcare.com</span>
              </li>
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-blue-300" />
                <span>Strada Maria Rosetti 26A, București 020487</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-blue-800 pt-6 text-center text-blue-200">
          <p>&copy; {currentYear} Dental Care. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
