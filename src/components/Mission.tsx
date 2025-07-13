'use client';

import { motion } from 'framer-motion';

export default function Mission() {
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
    <section className="w-full px-4 py-20 bg-white text-gray-900">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold">
          {renderAnimatedText('Our Mission')}
        </h2>
        <p className="text-lg md:text-xl leading-relaxed">
          Our mission is to make your dream home life simpler, smarter, and more enjoyable through best design with high quality products and service. We emphasize customer satisfaction, reliable delivery, and responsive support with our team.
        </p>
      </div>
    </section>
  );
}
