'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { CheckCircle } from 'lucide-react';
import Link from 'next/link';

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
    <section className="w-full px-4 pt-8 md:py-10 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto">
        {/* Centered Section title with decorative element */}
        <div className="relative mb-8 text-center">
          <div className="absolute left-1/2 -translate-x-1/2 top-10 w-[5rem] h-0.5 bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896]"></div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 tracking-tight">
            {renderAnimatedText('Our Mission')}
          </h2>
          <p className="mt-2 bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] bg-clip-text text-transparent font-medium">
            Excellence in every detail
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Logo on the left */}
          <div className="lg:w-1/2 w-full order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative w-full h-64 md:h-80 lg:h-96 flex items-center justify-center"
            >
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-[30rem] lg:h-96 lg:mr-28">
                <Image
                  src="/name.png"
                  alt="Company Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </motion.div>
          </div>

          {/* Enhanced Content on the right */}
          <div className="lg:w-1/2 w-full order-1 lg:order-2">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="text-center lg:text-left"
            >
              {/* Mission statement with hover animation */}
              <motion.div 
                className="bg-gray-50 p-6 rounded-lg border-l-4 border-gradient-to-b from-[#004e66] via-[#00787a] to-[#00a896] mb-5"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
                  transition: { duration: 0.3 }
                }}
              >
                <p className="text-lg md:text-xl leading-relaxed text-gray-700 italic">
                  &quot;To transform your dream home into reality through exceptional design, premium quality products, and unparalleled service—making everyday living simpler, smarter, and more enjoyable.&quot;
                </p>
              </motion.div>
              
              {/* Core values - Added responsive alignment */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-800 mb-4 text-center lg:text-left">Our Core Values</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#00787a]" />
                    </div>
                    <div className="text-left"> {/* Added text-left for mobile */}
                      <h4 className="font-medium text-gray-800">Quality Craftsmanship</h4>
                      <p className="text-gray-600 text-sm mt-1">Meticulous attention to detail in every project we undertake</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#00787a]" />
                    </div>
                    <div className="text-left"> {/* Added text-left for mobile */}
                      <h4 className="font-medium text-gray-800">Customer Satisfaction</h4>
                      <p className="text-gray-600 text-sm mt-1">Your happiness is our ultimate measure of success</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#00787a]" />
                    </div>
                    <div className="text-left"> {/* Added text-left for mobile */}
                      <h4 className="font-medium text-gray-800">Timely Delivery</h4>
                      <p className="text-gray-600 text-sm mt-1">We respect your time with reliable project completion</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="mt-1 flex-shrink-0">
                      <CheckCircle className="w-5 h-5 text-[#00787a]" />
                    </div>
                    <div className="text-left"> {/* Added text-left for mobile */}
                      <h4 className="font-medium text-gray-800">Innovative Solutions</h4>
                      <p className="text-gray-600 text-sm mt-1">Smart designs that enhance your living experience</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
             <Link href={'/services'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] hover:from-[#003d52] hover:via-[#00635f] hover:to-[#008e7a] text-white font-medium py-3 px-6 transition-all duration-300 shadow-md"
                >
                  Discover Our Approach
                </motion.button>
             </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}