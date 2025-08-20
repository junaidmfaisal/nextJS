'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const steps = [
  { id: 1, title: 'Get a Quote', img: '/step1.png' },
  { id: 2, title: 'Design & approval', img: '/step2.png' },
  { id: 3, title: 'Own factory production', img: '/step3.png' },
  { id: 4, title: 'Delivery & execution', img: '/step4.png' },
  { id: 5, title: 'Project Handover', img: '/step5.png' },
];

export default function Timeline() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-light text-center text-black mb-20">
          45 Working Days Promised Hand Over*
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-row items-center justify-center">
          {steps.map((step, index) => {
            const isActive = active === step.id;

            return (
              <div key={step.id} className="flex items-center">
                {/* Step */}
                <div
                  className="flex flex-col items-center cursor-pointer"
                  onClick={() => setActive(step.id)}
                >
                  <motion.div
                    whileHover={{ rotate: 10 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-20 h-20 flex items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive
                        ? 'text-red-500'
                        : 'text-gray-400 hover:text-red-500'
                    }`}
                  >
                    <Image
                      src={step.img}
                      alt={step.title}
                      width={60}
                      height={60}
                      className={`transition duration-300 ${
                        isActive
                          ? 'grayscale-0'
                          : 'grayscale hover:grayscale-0'
                      }`}
                    />
                  </motion.div>
                  <p
                    className={`mt-3 text-sm font-medium ${
                      isActive ? 'text-red-500' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>

                {/* Connector */}
                {index < steps.length - 1 && (
                  <div className="hidden md:flex items-center mx-2">
                    {/* Left line */}
                    <div className="w-12 h-[1px] bg-gray-400"></div>

                    {/* Arrow */}
                    <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-500 mx-1"></div>

                    {/* Right line */}
                    <div className="w-12 h-[1px] bg-gray-400"></div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-6 text-center text-xs text-gray-500 italic">
          *Conditions Apply
        </p>
      </div>
    </section>
  );
}
