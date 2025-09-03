'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

export default function Journey() {
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
    <section className="w-full px-4 py-16 md:py-24 bg-gray-50 text-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          {/* Content on the left */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8"
            >
              {/* Section title with decorative element */}
              <div className="relative">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900 tracking-tight">
                  {renderAnimatedText('Designing Your Dream Home')}
                </h2>
                <p className="mt-2 bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] bg-clip-text text-transparent font-medium">
                  From Vision to Reality
                </p>
              </div>
              
              {/* Description */}
              <p className="text-lg md:text-xl leading-relaxed text-gray-700">
                Whether you are looking to revamp your home, our expert team is here to guide you through every step of the design journey. Our designs combine practicality with quality essentials for your dream home needs.
              </p>
              
              {/* Key features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 pt-4">
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#00787a]"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Expert Guidance</h3>
                    <p className="text-gray-600 text-sm mt-1">Professional advice at every step</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#00787a]"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Practical Designs</h3>
                    <p className="text-gray-600 text-sm mt-1">Beautiful yet functional spaces</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#00787a]"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Quality Materials</h3>
                    <p className="text-gray-600 text-sm mt-1">Premium products that last</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="mt-1 flex-shrink-0 w-2 h-2 rounded-full bg-[#00787a]"></div>
                  <div>
                    <h3 className="font-semibold text-gray-800">End-to-End Service</h3>
                    <p className="text-gray-600 text-sm mt-1">From concept to completion</p>
                  </div>
                </div>
              </div>
              
              {/* Call to action */}
              <Link href={'/services'}>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] hover:from-[#003d52] hover:via-[#00635f] hover:to-[#008e7a] text-white font-medium py-3 px-6  transition-all duration-300 shadow-md mt-8"
                >
                  Start Your Journey
                </motion.button>
              </Link>
            </motion.div>
          </div>

          {/* Image on the right */}
          <div className="lg:w-1/2 w-full">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              viewport={{ once: true }}
              className="relative w-full h-64 md:h-80 lg:h-96  overflow-hidden shadow-lg"
            >
              {/* Replace with your actual image path */}
              <Image
                src="/home.png" 
                alt="Beautiful interior design"
                fill
                className="object-cover"
                priority
              />
              {/* Decorative overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              
              {/* Optional: Add a badge on the image */}
              {/* <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
                <span className="text-sm font-medium bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] bg-clip-text text-transparent">
                  Since 2010
                </span>
              </div> */}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}