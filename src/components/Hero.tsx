'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView } from 'framer-motion';
import { Playfair_Display, Poppins } from 'next/font/google';

// Fonts
const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
  variable: '--font-playfair',
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  display: 'swap',
  variable: '--font-poppins',
});

export default function Hero() {
  const headingRef = useRef(null);
  const buttonRef = useRef(null);

  const isHeadingInView = useInView(headingRef, { once: true });
  const isButtonInView = useInView(buttonRef, { once: true });

  const introHeading = 'Welcome to Homora Interiors';
  const headingLine1 =
    'At Homora Interiors, we believe your home should be more than just a place to live—';
  const headingLine2 = 'it should reflect who you are.';
  const subheading =
    'Based in Kochi, we’re passionate about transforming everyday spaces into modern, functional, and stylish sanctuaries you’ll love coming home to.';
  const buttonText = 'Start Your Design Journey';

  const container = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.035,
      },
    },
  };

  const letter = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        ease: 'easeOut',
        duration: 0.35,
      },
    },
  };

  return (
    <section
      className={`${playfair.variable} ${poppins.variable} h-screen flex items-center justify-center bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] px-4`}
    >
      <div className="text-center max-w-5xl text-white flex flex-col items-center">
        {/* Intro heading */}
        <h2 className="text-sm md:text-base font-medium uppercase tracking-wider mb-6 text-white">
          {introHeading}
        </h2>

        {/* Line 1 */}
        <motion.h1
          ref={headingRef}
          className="text-3xl md:text-5xl font-semibold leading-tight mb-2 flex justify-center flex-wrap text-center"
          variants={container}
          initial="hidden"
          animate={isHeadingInView ? 'visible' : 'hidden'}
        >
          {headingLine1.split('').map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Line 2 */}
        <motion.h1
          className="text-3xl md:text-5xl font-semibold leading-tight mb-6 flex justify-center flex-wrap text-center"
          variants={container}
          initial="hidden"
          animate={isHeadingInView ? 'visible' : 'hidden'}
        >
          {headingLine2.split('').map((char, index) => (
            <motion.span key={index} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.h1>

        {/* Subheading */}
        <p
          className="text-lg md:text-xl font-light mb-10 text-center"
          style={{ fontFamily: 'var(--font-body)' }}
        >
          {subheading}
        </p>

        {/* CTA Button */}
        <motion.div
          ref={buttonRef}
          variants={container}
          initial="hidden"
          animate={isButtonInView ? 'visible' : 'hidden'}
          className="inline-block bg-white text-black px-6 py-3 rounded-full text-sm font-medium border transition duration-300 hover:bg-[#00787a] hover:text-white hover:border-white"
        >
          {buttonText.split('').map((char, i) => (
            <motion.span key={i} variants={letter}>
              {char === ' ' ? '\u00A0' : char}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
