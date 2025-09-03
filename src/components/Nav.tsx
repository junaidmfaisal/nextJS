'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={clsx(
        'fixed top-0 left-0 w-full z-50 transition-all duration-300',
        isScrolled ? 'shadow-md' : '',
        'bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896]'
      )}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center shrink-0 md:absolute md:left-6">
          <Image
            src="/logo1.png"
            alt="Homora Logo"
            width={150}
            height={50}
            className="h-20 w-auto object-contain"
            priority
          />
        </Link>

        {/* Centered Nav Links */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-lg font-light text-white hover:text-black transition"
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav with Professional Animation */}
      <div
        className={clsx(
          'md:hidden fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl transform origin-top transition-all duration-500 ease-out z-50',
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
        )}
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
        }}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-100 transition-all duration-300 transform hover:translate-x-2"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Subtle Backdrop Overlay - Only behind the menu */}
      {isOpen && (
        <div 
          className="md:hidden fixed top-16 left-0 right-0 h-64 bg-gradient-to-b from-black/10 to-transparent z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}