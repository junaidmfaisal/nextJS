'use client';

import { CheckCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhyChoose() {
  const points = [
    {
      title: 'Modern, Stylish Designs',
      description: 'Trendy, timeless, and tailored to your taste',
    },
    {
      title: 'High-Quality Essentials',
      description: 'Durable, functional products built to last',
    },
    {
      title: 'End-to-End Guidance',
      description: 'Our expert design team is with you every step of the way',
    },
    {
      title: 'Smooth, Reliable Delivery',
      description: 'On time, every time',
    },
    {
      title: 'Customer-First Service',
      description: 'Quick support, friendly help, and real solutions',
    },
  ];

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

  const listItemAnimation = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.3 + i * 0.2,
        duration: 0.5,
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
    <section className="w-full px-4 py-20 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto space-y-10 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          {renderAnimatedText('Why Choose Homora?')}
        </h2>
        <ul className="grid gap-6 sm:grid-cols-2 text-left max-w-4xl mx-auto">
          {points.map((item, index) => (
            <motion.li
              key={index}
              className="flex items-start gap-3"
              custom={index}
              variants={listItemAnimation}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <CheckCircle className="text-green-600 mt-1" />
              <div>
                <p className="font-semibold text-lg">{item.title}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
