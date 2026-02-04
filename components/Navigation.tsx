"use client";

import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Approach', href: '#approach' },
    { name: 'Office', href: '#office' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-sage-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-xl sm:text-2xl font-serif font-semibold text-sage-800">
              Dr. Maya Reynolds
            </h1>
          </div>

          <div className="hidden md:flex md:items-center md:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sage-700 hover:text-sage-900 transition-colors duration-200 font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-sage-600 text-white px-6 py-2.5 rounded-full hover:bg-sage-700 transition-all duration-200 font-medium"
            >
              Book a Session
            </a>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-sage-700 hover:text-sage-900 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-sage-100">
          <div className="px-4 pt-4 pb-6 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-sage-700 hover:text-sage-900 transition-colors font-medium"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="block text-center bg-sage-600 text-white px-6 py-3 rounded-full hover:bg-sage-700 transition-all duration-200 font-medium mt-4"
            >
              Book a Session
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
