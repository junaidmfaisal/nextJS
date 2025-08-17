'use client';

import { motion } from 'framer-motion';

export default function Journey() {
  const letterAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.03,
        duration: 0.4,
        ease: 'easeOut',
      },
    }),
  };

  const renderAnimatedText = (text: string) => (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );

  return (
    <section className="w-full px-4 py-16 sm:py-20 bg-gray-100 text-gray-900">
      <div className="max-w-5xl mx-auto text-center space-y-6 sm:space-y-8">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold leading-snug sm:leading-tight break-words">
          {renderAnimatedText('Designing Your Dream Home')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-700 px-2 sm:px-6">
          Whether you are looking to revamp your home, our expert team is here to guide you through every step of the design journey.
          Our designs are best design which is practical and quality essential for your dream home needs.
        </p>
      </div>
    </section>
  );
}
