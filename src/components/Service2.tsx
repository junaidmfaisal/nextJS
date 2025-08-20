'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Service2() {
  return (
    <section className="w-full px-4 sm:px-8 md:px-16 py-10 sm:py-16">
      {/* Breadcrumb */}
      <div className="text-sm sm:text-base text-gray-600 mb-6">
        <Link href="/" className="hover:text-red-500 transition">
          Home
        </Link>{' '}
        <span className="mx-2">›</span>
        <span className="text-gray-800 font-medium">Services</span>
      </div>

      {/* Heading with Scroll Animation */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl font-semibold text-red-600 text-center mb-6"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        Homora Interiors Services
      </motion.h2>

      {/* Description */}
      <motion.p
        className="text-gray-700 max-w-4xl mx-auto text-center text-sm sm:text-base md:text-lg leading-relaxed"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        We put immense effort in bringing our clients the best services possible. In order to
        deliver customized interior design services across Kochi and South India, we practice
        strict standards in processing and execution. Our design services include the standard
        Modular Furniture, Gypsum Ceiling, Wallpaper, Curtains, and Blinds etc. and also services
        for offices and shops as well.
      </motion.p>
    </section>
  );
}
