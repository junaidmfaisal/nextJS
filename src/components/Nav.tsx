'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import clsx from 'clsx';

export default function Nav() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const scrollThreshold = 100; 
      setIsScrolled(scrollY > 10);
      
      const progress = Math.min(scrollY / scrollThreshold, 1);
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getGradientStyle = () => {
    if (scrollProgress === 0) {
      return 'transparent';
    }
    
    return `linear-gradient(to right, 
      rgba(0, 78, 102, ${scrollProgress}), 
      rgba(0, 120, 122, ${scrollProgress}), 
      rgba(0, 168, 150, ${scrollProgress})
    )`;
  };

  return (
    <header
      className="fixed top-0 left-0 w-full z-50 transition-all duration-500"
      style={{
        background: getGradientStyle(),
        boxShadow: isScrolled ? '0 4px 12px rgba(0, 0, 0, 0.1)' : 'none'
      }}
    >
      <div className="max-w-8xl mx-auto px-2 sm:px-4 lg:px-6 h-16 flex items-center justify-between">
        {/* Logo with smooth scaling effect */}
        <Link href="/" className="flex items-center shrink-0 md:absolute md:left-6">
          <Image
            src="/logo1.png"
            alt="Homora Logo"
            width={150}
            height={50}
            className={clsx(
              "h-20 w-auto object-contain transition-all duration-500",
              isScrolled ? "opacity-100" : "opacity-95"
            )}
            priority
          />
        </Link>

        {/* Centered Nav Links with fade-in effect */}
        <nav className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center gap-8">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={clsx(
                "text-lg font-light transition-all duration-500",
                isScrolled 
                  ? "text-white hover:text-cyan-200" 
                  : "text-white hover:text-cyan-100"
              )}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* Hamburger Icon with transition */}
        <button
          className={clsx(
            "md:hidden focus:outline-none transition-all duration-500 p-1 rounded-md",
            isScrolled 
              ? "text-white hover:bg-white/10" 
              : "text-white hover:bg-black/10"
          )}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? (
            <X className="w-6 h-6 transition-transform duration-300" />
          ) : (
            <Menu className="w-6 h-6 transition-transform duration-300" />
          )}
        </button>
      </div>

      {/* Mobile Nav with enhanced animation */}
      <div
        className={clsx(
          'md:hidden fixed top-16 left-4 right-4 bg-white rounded-2xl shadow-2xl transform origin-top transition-all duration-500 ease-out z-50',
          isOpen 
            ? 'opacity-100 scale-y-100 translate-y-0' 
            : 'opacity-0 scale-y-0 -translate-y-4 pointer-events-none'
        )}
        style={{
          boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.15), 0 10px 10px -5px rgba(0, 0, 0, 0.08)'
        }}
      >
        <nav className="flex flex-col p-6 space-y-4">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-lg font-medium text-gray-800 py-3 px-4 rounded-xl hover:bg-cyan-50 transition-all duration-300 transform hover:translate-x-2 hover:text-cyan-700"
            >
              {label}
            </Link>
          ))}
        </nav>
      </div>

      {/* Enhanced Backdrop Overlay with gradient */}
      {isOpen && (
        <div 
          className="md:hidden fixed inset-0 bg-black/20 z-40 transition-opacity duration-500"
          onClick={() => setIsOpen(false)}
        />
      )}
    </header>
  );
}