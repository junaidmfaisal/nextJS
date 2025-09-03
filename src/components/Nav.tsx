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
    { href: '/home', label: 'Home' },
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

        {/* Upload Button (Desktop) - Uncomment if needed */}
        {/* <div className="hidden md:flex shrink-0 md:absolute md:right-6">
          <Link
            href="/admin"
            className="bg-white text-black px-6 py-2 rounded-full text-sm border border-transparent transition duration-300 hover:bg-[#00787a] hover:text-white hover:border-white"
          >
            Upload
          </Link>
        </div> */}

        {/* Hamburger Icon (Mobile) */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={clsx(
          'md:hidden transition-all duration-300 overflow-hidden bg-gray-200',
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        )}
      >
        <nav className="flex flex-col items-start px-4 py-4 space-y-3">
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium text-black transition"
            >
              {label}
            </Link>
          ))}
          {/* Upload Button (Mobile) - Uncomment if needed */}
          {/* <Link
            href="/admin"
            onClick={() => setIsOpen(false)}
            className="bg-white text-black px-6 py-2 rounded-full text-sm border border-black transition duration-300 hover:bg-[#00787a] hover:text-white hover:border-white"
          >
            Upload
          </Link> */}
        </nav>
      </div>
    </header>
  );
}