'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export default function Sample1() {
  const options = {
    triggerOnce: true,
    threshold: 0.2,
  };

  const [ref1, inView1] = useInView(options);
  const [ref2, inView2] = useInView(options);
  const [ref3, inView3] = useInView(options);
  const [ref4, inView4] = useInView(options);

  const fadeUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 grid-rows-2 w-full min-h-screen">
      {/* Top Left Image */}
      <motion.div
        ref={ref1}
        variants={fadeUp}
        initial="hidden"
        animate={inView1 ? 'visible' : 'hidden'}
        className="relative w-full h-96 md:h-auto"
      >
        <Image
          src="/img1 (3).jpeg"
          alt="Interior Room"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Top Right Text */}
      <motion.div
        ref={ref2}
        variants={fadeUp}
        initial="hidden"
        animate={inView2 ? 'visible' : 'hidden'}
        className="bg-[#595f61] text-white flex flex-col justify-center items-start p-10"
      >
        <h2 className="text-3xl md:text-4xl font-light leading-snug">
          Interior<br />spaces,<br />inspired<br />solutions.
        </h2>
        <Link
          href="/services"
          className="mt-4 text-sm underline underline-offset-4 hover:text-gray-300 transition"
        >
          SEE OUR PROCESS
        </Link>
      </motion.div>

      {/* Bottom Left Text (Now on the right visually) */}
      <motion.div
        ref={ref3}
        variants={fadeUp}
        initial="hidden"
        animate={inView3 ? 'visible' : 'hidden'}
        className="bg-[#eba937] text-black flex flex-col justify-center items-end p-10"
      >
        <h2 className="text-3xl md:text-4xl font-light leading-snug text-right">
          Shaping<br />your<br />space,<br />together.
        </h2>
        <Link
          href="/contact"
          className="mt-4 text-sm underline underline-offset-4 hover:text-gray-700 transition"
        >
          GET IN TOUCH WITH US
        </Link>
      </motion.div>

      {/* Bottom Right Image (Now on the left visually) */}
      <motion.div
        ref={ref4}
        variants={fadeUp}
        initial="hidden"
        animate={inView4 ? 'visible' : 'hidden'}
        className="relative w-full h-96 md:h-auto"
      >
        <Image
          src="/img1 (4).jpeg"
          alt="Interior Bar"
          fill
          className="object-cover"
        />
      </motion.div>
    </section>
  );
}
