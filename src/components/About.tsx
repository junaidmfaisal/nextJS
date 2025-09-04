'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export default function About() {
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

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

  const renderAnimatedText = (text: string, trigger = true) => (
    <span className="inline-block">
      {text.split('').map((char, i) => (
        <motion.span
          key={i}
          custom={i}
          variants={letterAnimation}
          initial="hidden"
          animate={trigger ? 'visible' : 'hidden'}
          className="inline-block"
        >
          {char === ' ' ? '\u00A0' : char}
        </motion.span>
      ))}
    </span>
  );

  return (
    <section className="w-full px-4 py-20 text-gray-900 relative overflow-hidden">
      {/* Background image container */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/about.jpg')",
            filter: "blur(3px) brightness(0.95)"
          }}
        ></div>
        {/* Gradient overlay  */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 to-white/30"></div>
      </div>

      <div className="max-w-5xl mx-auto space-y-10 text-center relative z-10">
        {/* Section Header*/}
        <motion.h2
          ref={headingRef}
          className="text-2xl md:text-4xl font-bold tracking-tight"
        >
          {renderAnimatedText('About Homora Interiors', isInView)}
        </motion.h2>

        {/* Brand Intro */}
        <div className="text-lg md:text-xl leading-relaxed text-gray-700 text-left space-y-4">
          <p>
            Homora Interiors is a modern home decor and interiors brand in Kochi with a focus on stylish and functional living spaces.
          </p>
          <p>
            According to Homora Interiors, we curate high‑quality essentials—everything from smart storage and kitchenware to chic décor—to help transform a house into a personalized sanctuary.
          </p>
          <p>
            Our mission is to make your dream home life simpler, smarter, and more enjoyable through best design with high quality products and service. We emphasize customer satisfaction, reliable delivery, and responsive support with our team.
          </p>
          <p>
            Whether you are looking to revamp your home, our expertise team is here to guide you through every step of the design journey. Our designs are best design which is practical and quality essential for your dream&nbsp;home&nbsp;needs.
          </p>
        </div>

        {/* Final CTA Line - Fixed for mobile */}
        <div className="pt-10 w-[22.5rem] lg:w-full md:w-[45.2rem] ">
          <p className="text-lg font-medium break-words hyphens-auto text-left">
            {renderAnimatedText("At Homora Interiors, your dream home is our mission. Let's make it simpler, smarter, and beautifully you.")}
          </p>
        </div>
      </div>
    </section>
  );
}