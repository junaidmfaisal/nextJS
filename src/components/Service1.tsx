'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Service1() {
  return (
    <section className="relative w-full h-[35rem] flex items-center justify-center overflow-hidden -top-16">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img1 (6).jpeg" 
          alt="Interior Decorators"
          fill
          className="object-cover"
          priority
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-4 sm:px-8"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-white/70 text-sm sm:text-base mb-2">A Passion</p>
        <h1 className="text-white text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
          in uniqueness
        </h1>
        <p className="text-white text-lg sm:text-xl md:text-2xl mb-6">
          Creative Home Interior Decorators
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-white text-black px-6 py-3  font-semibold shadow-lg"
        >
          BOOK NOW
        </motion.button>
      </motion.div>
    </section>
  );
}
