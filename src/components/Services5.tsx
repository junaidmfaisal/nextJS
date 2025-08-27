'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Service5() {
  return (
    <div className="w-full bg-white py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
        {/* Left - Make Overs */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h3 className="text-center text-xl font-medium text-black mb-4">
            Make Overs
          </h3>
          <div className="relative">
            <Image
              src="/img1 (10).jpeg" 
              alt="Makeover"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            <span className="absolute bottom-3 left-3 text-white text-sm font-semibold bg-black/70 px-2 py-1 rounded">
              After
            </span>
          </div>
        </motion.div>

        {/* Right - Homora Offers */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full"
        >
          <h3 className="text-center text-xl font-medium text-black mb-4">
            Homora Offers
          </h3>
          <div className="relative">
            <Image
              src="/img1 (10).jpeg" 
              alt="Offer"
              width={600}
              height={400}
              className="w-full h-auto rounded-lg shadow-lg"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-black/30 flex flex-col justify-end p-6">
              <h4 className="text-lg font-semibold text-white mb-2">
                TURNKEY 3 BHK HOME or FLAT INTERIOR (Premium Luxury plus Package)
              </h4>
              <p className="text-white text-sm mb-2">
                100 Sqft (Glossy Finish) Boxwork and 11 Hettich Arci Tech Accessories
              </p>
              <p className="text-white text-sm mb-4">
                Offer : <span className="font-bold text-lg">₹ 14.95 Lakhs</span>{' '}
                <span className="line-through">₹ 19.43 Lakhs</span>
              </p>
              <Link href={'/contact'}>
                <button className="bg-gradient-to-r from-[#004e66] via-[#00787a] to-[#00a896] hover:bg-red-700 text-white px-4 py-2 rounded-md text-sm font-semibold w-fit transition-colors">
                  Get the offer
                </button>
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}