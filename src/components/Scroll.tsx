'use client';
import { useEffect, useState } from 'react';
import { ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Scroll() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          key="scroll-btn"
          onClick={scrollToTop}
          initial={{ opacity: 0, y: 20, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.9 }}
          transition={{ duration: 0.25, ease: 'easeInOut' }}
          className="fixed bottom-20 right-4 sm:bottom-24 sm:right-6 md:bottom-28 md:right-8 lg:bottom-28 lg:right-6 
                     z-50 rounded-full bg-transparent p-3 sm:p-4 
                     text-black shadow-sm hover:shadow-md 
                     transition-transform duration-300 hover:-translate-y-1 hover:scale-110"
        >
          <ChevronUp className="h-8 w-8 sm:h-8 sm:w-8" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
