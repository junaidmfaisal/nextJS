'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

export default function Hero() {
  const heading = 'Welcome to Homora Interiors';
  const subHeading =
    'At Homora Interiors, we believe your home should be more than just a place to live—it should reflect who you are.';
  const secondaryText =
    'Based in Kochi, we’re passionate about transforming everyday spaces into modern, functional, and stylish sanctuaries you’ll love coming home to.';

  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.3 });

  const wordAnimation = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.5,
        ease: 'easeOut',
      },
    }),
  };

  const fadeInUp = (delay: number = 0.3) => ({
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay,
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  });

  return (
    <section
      ref={ref}
      className="relative h-screen w-full bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] overflow-hidden"
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/20 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center px-4">
        <div className="max-w-3xl w-full text-center">
          {/* Animated heading */}
          <h1 className="text-4xl md:text-6xl font-semibold text-white mb-6 leading-tight tracking-tight flex flex-wrap justify-center">
            {heading.split(' ').map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={wordAnimation}
                initial="hidden"
                animate={inView ? 'visible' : 'hidden'}
                className="inline-block mr-2"
              >
                {word}
              </motion.span>
            ))}
          </h1>

          {/* Subheading */}
          <motion.p
            variants={fadeInUp(heading.split(' ').length * 0.08 + 0.3)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-white text-lg md:text-xl font-medium mb-4 leading-relaxed"
          >
            {subHeading}
          </motion.p>

          {/* Secondary text */}
          <motion.p
            variants={fadeInUp(heading.split(' ').length * 0.08 + 0.6)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
            className="text-white text-base md:text-lg mb-8 leading-loose"
          >
            {secondaryText}
          </motion.p>

          {/* CTA Button */}
          <motion.div
            variants={fadeInUp(heading.split(' ').length * 0.08 + 0.9)}
            initial="hidden"
            animate={inView ? 'visible' : 'hidden'}
          >
            <Button className="text-base md:text-lg px-6 py-3 rounded-full bg-white text-black hover:bg-gray-200 transition group">
              <span className="transition-transform duration-300 group-hover:-translate-y-1">
                Get Started
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
