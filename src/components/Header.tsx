"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-30">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Text-based logo */}
        <div className="text-green-800 font-bold">
          <Link href="/" className="flex items-center">
            <span className="text-3xl mr-1">D</span>
            <span className="text-xl">Dental Care</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-8">
          <Link href="/#services" className="text-gray-700 hover:text-green-600 transition-colors">
            Services
          </Link>
          <Link href="/#testimonials" className="text-gray-700 hover:text-green-600 transition-colors">
            Testimonials
          </Link>
          <Link href="/#location" className="text-gray-700 hover:text-green-600 transition-colors">
            Location
          </Link>
          <Link href="/#contact" className="text-gray-700 hover:text-green-600 transition-colors">
            Contact
          </Link>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link 
              href="/#services" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Services
            </Link>
            <Link 
              href="/#testimonials" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Testimonials
            </Link>
            <Link 
              href="/#location" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Location
            </Link>
            <Link 
              href="/#contact" 
              className="text-gray-700 hover:text-green-600 transition-colors"
              onClick={toggleMenu}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
