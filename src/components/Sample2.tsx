'use client';

import Image from 'next/image';
import Link from 'next/link';
import { FaPlay } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sample2() {
  const options = {
    triggerOnce: true,
    threshold: 0.2,
  };

  const [refLeft, inViewLeft] = useInView(options);
  const [refRight, inViewRight] = useInView(options);

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full py-10 px-4 md:px-16 lg:px-28 bg-white grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      
      {/* Left Content */}
      <motion.div
        ref={refLeft}
        variants={fadeUp}
        initial="hidden"
        animate={inViewLeft ? 'visible' : 'hidden'}
        className="space-y-6"
      >
        <p className="text-sm text-orange-500 uppercase font-semibold">Let’s Make it Happen</p>
        
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black leading-snug">
          BEST INTERIOR<br />
          DESIGN FOR SMART<br />
          <span className="text-orange-500">YOUR HOME</span>
        </h1>

        <p className="text-gray-600 text-base leading-relaxed max-w-md">
          Bring your dream home to life with one or no one design help & hand-picked products tailored to your style, space and budget
        </p>

        <div className="flex gap-6 items-center">
          <Link
            href="#"
            className="bg-black text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-gray-800 transition"
          >
            Explore Room
          </Link>

          <Link
            href="#"
            className="flex items-center gap-2 text-black font-medium"
          >
            <div className="w-10 h-10 rounded-full border border-black flex items-center justify-center">
              <FaPlay className="w-3 h-3 ml-[2px]" />
            </div>
            Watch Room
          </Link>
        </div>

        <p className="text-gray-400 text-xs mt-4">
          Trusted by World Famous Interior Company
        </p>
      </motion.div>

      {/* Right Image Grid */}
      <motion.div
        ref={refRight}
        variants={fadeUp}
        initial="hidden"
        animate={inViewRight ? 'visible' : 'hidden'}
        className="grid grid-cols-2 grid-rows-2 gap-4"
      >
        {[
          { src: '/img1 (5).jpeg', alt: 'Best Seller Chair', label: 'Best Seller\nShop Collections' },
          { src: '/img1 (6).jpeg', alt: 'Room Image 2' },
          { src: '/img1 (7).jpeg', alt: 'Room Image 3' },
          { src: '/img1 (8).jpeg', alt: 'Room Image 4' },
        ].map((img, idx) => (
          <div key={idx} className="relative w-full h-48 md:h-56 lg:h-64">
            <Image
              src={img.src}
              alt={img.alt}
              fill
              className="object-cover rounded-lg"
            />
            {img.label && (
              <div className="absolute bottom-2 left-2 text-white text-xs font-medium bg-black/60 px-2 py-1 rounded">
                Best Seller <br /> Shop Collections
              </div>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
}
