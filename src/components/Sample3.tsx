'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sample3() {
  const [refLeft, inViewLeft] = useInView({ triggerOnce: true, threshold: 0.2 });
  const [refRight, inViewRight] = useInView({ triggerOnce: true, threshold: 0.2 });

  const fadeUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="w-full grid grid-cols-1 md:grid-cols-2 min-h-screen items-center bg-white">
      
      {/* Left Text Section with animation */}
      <motion.div
        ref={refLeft}
        variants={fadeUp}
        initial="hidden"
        animate={inViewLeft ? 'visible' : 'hidden'}
        className="p-10 md:p-20"
      >
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight">
          Elegance In <br /> Interior Design.
        </h2>

        <p className="text-gray-600 mt-6 text-base leading-relaxed max-w-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, ratione neque molestias voluptatem doloremque aut animi vero sint quam odit sed? Nobis nostrum obcaecati aperiam, iste labore soluta praesentium? Ratione!
        </p>

        <Link
          href="#"
          className="inline-block mt-6 px-6 py-3 bg-red-600 text-white text-sm font-medium rounded hover:bg-red-700 transition"
        >
          Know More
        </Link>
      </motion.div>

      {/* Right Image Section with animation */}
      <motion.div
        ref={refRight}
        variants={fadeUp}
        initial="hidden"
        animate={inViewRight ? 'visible' : 'hidden'}
        className="relative w-full h-[400px] md:h-screen"
      >
        <Image
          src="/img1 (9).jpeg"
          alt="Bedroom Interior"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
