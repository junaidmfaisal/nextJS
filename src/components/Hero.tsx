'use client';

import { useInView } from 'react-intersection-observer';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import Image from 'next/image';

export default function Hero() {
  const heading = 'Welcome to Homora Interiors';
  const subHeading =
    'At Homora Interiors, we believe your home should be more than just a place to live—it should reflect who you are.';
  const secondaryText =
    "Based in Kochi, we're passionate about transforming everyday spaces into modern, functional, and stylish sanctuaries you'll love coming home to.";

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
      className="relative min-h-screen w-full overflow-hidden -top-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/home.jpg"
          alt="Modern interior design"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-start justify-center px-4 pt-12 sm:pt-16 ">
        <div className="max-w-3xl w-full text-center">
          <Image
            src="/logo1.png"
            alt="Homora Logo"
            width={250}
            height={100}
            className="h-[19rem] w-[20rem] object-contain mx-auto "
            priority
          />
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
            <Button className="text-base md:text-lg px-6 py-3 rounded-full bg-white text-[#004e66] hover:bg-gray-100 transition-all duration-300 group shadow-lg hover:shadow-xl">
              <span className="transition-transform duration-300 group-hover:-translate-y-1 inline-block">
                Get Started
              </span>
              <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1 inline-block">
                →
              </span>
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
