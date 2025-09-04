'use client';

import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  {
    question: 'Why do I need an Interior designer?',
    answer:
      'An interior designer helps transform your space to be functional, stylish, and tailored to your lifestyle while optimizing layout, lighting, and material use.',
  },
  {
    question: 'Why is Homora perfect for your home interior design?',
    answer:
      'Homora offers end-to-end solutions with expert designers, high-quality materials, transparent pricing, and timely project delivery.',
  },
  {
    question: 'What services are included under home interior design?',
    answer:
      'It typically includes space planning, furniture layout, modular kitchens, wardrobes, electricals, false ceilings, painting, and more.',
  },
  {
    question: 'How much does home interiors cost?',
    answer:
      'Costs vary based on home size, material choices, and customization, but packages can be tailored to your budget and needs.',
  },
  {
    question: 'What will be the timelines for my project completion?',
    answer:
      'Timelines depend on project size and complexity, but most home interiors are completed within 6–12 weeks.',
  },
  {
    question: 'What are the trending interior design styles?',
    answer:
      'Popular styles include Scandinavian, Minimalist, Industrial, Bohemian, Modern, and Japandi, each with distinct aesthetics.',
  },
];

// Animation for each letter
const letterAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.04,
      duration: 0.5,
    },
  }),
};

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const headingRef = useRef(null);
  const isInView = useInView(headingRef, { once: true });

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const heading = 'FAQs About Home Interior Design';

  return (
    <section className="max-w-4xl mx-auto py-8 sm:py-12 px-3 sm:px-4 md:px-6">
      {/* Scroll-Triggered Animated Heading */}
      <motion.h2
        ref={headingRef}
        className="text-xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-center flex justify-center flex-wrap leading-snug"
        initial="hidden"
        animate={isInView ? 'visible' : 'hidden'}
      >
        {heading.split('').map((char, i) => (
          <motion.span key={i} custom={i} variants={letterAnimation}>
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </motion.h2>

      {/* FAQ Section */}
      <div className="space-y-3 sm:space-y-4">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border rounded-lg overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full text-left px-4 sm:px-5 py-3 sm:py-4 flex justify-between items-center font-medium text-gray-800 hover:bg-gray-100 transition text-sm sm:text-base"
                onClick={() => toggleFAQ(index)}
              >
                <span className="flex-1">{index + 1}. {faq.question}</span>
                {isOpen ? <Minus size={18} /> : <Plus size={18} />}
              </button>
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden px-4 sm:px-5 text-xs sm:text-sm text-gray-600"
              >
                <div className="py-2">{faq.answer}</div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Faq;
