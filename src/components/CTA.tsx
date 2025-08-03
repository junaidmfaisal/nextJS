'use client';

import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

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
    <section className="w-full px-4 py-20 bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] text-white">
      <div className="max-w-4xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          {renderAnimatedText('Ready to Transform Your Home?')}
        </h2>
        <p className="text-lg md:text-xl">
          Let’s make your living space beautifully you — modern, functional, and uniquely personal. Connect with us and bring your vision to life.
        </p>
        <div>
          <Button className="text-white bg-white/10 hover:bg-white/40 border border-white/30 rounded-full">
            Get in Touch
          </Button>
        </div>
      </div>
    </section>
  );
}
