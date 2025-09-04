'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function CTASection() {
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
    <section className="w-full px-4 py-16 sm:py-20 bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-xl sm:text-3xl md:text-4xl font-bold leading-tight break-words">
          {renderAnimatedText('Ready to Transform Your Home?')}
        </h2>
        <p className="text-base sm:text-lg md:text-xl px-2 sm:px-6">
          Let’s make your living space beautifully you — modern, functional, and uniquely personal. Connect with us and bring your vision to life.
        </p>
        <div>
          <Link href={'/contact'}>
            <Button className="text-white bg-white/10 hover:bg-white/40 border border-white/30 rounded-full px-6 py-2 sm:px-8 sm:py-3 text-sm sm:text-base">
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
