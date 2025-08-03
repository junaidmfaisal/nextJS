'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Demo1() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 min-h-screen">
      {/* Top Left Image */}
      <div className="relative h-80 md:h-auto">
        <Image
          src="/img1 (1).jpeg" // Replace with your image path
          alt="Interior 1"
          fill
          className="object-cover"
        />
      </div>

      {/* Top Right Text Block */}
      <div className="bg-[#666D71] text-white flex items-center justify-center px-8 py-16 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-light leading-snug">
            Interior<br />spaces,<br />inspired<br />solutions.
          </h2>
          <Link
            href="#"
            className="block mt-4 underline text-sm hover:text-gray-300 transition"
          >
            SEE OUR PROCESS
          </Link>
        </div>
      </div>

      {/* Bottom Left Text Block */}
      <div className="bg-[#EDA837] text-black flex items-center justify-center px-8 py-16 text-center">
        <div>
          <h2 className="text-3xl md:text-4xl font-light leading-snug">
            Shaping<br />your<br />space,<br />together.
          </h2>
          <Link
            href="#"
            className="block mt-4 underline text-sm hover:text-neutral-800 transition"
          >
            GET IN TOUCH WITH US
          </Link>
        </div>
      </div>

      {/* Bottom Right Image */}
      <div className="relative h-80 md:h-auto">
        <Image
          src="/img1 (2).jpeg" // Replace with your image path
          alt="Interior 2"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
}
