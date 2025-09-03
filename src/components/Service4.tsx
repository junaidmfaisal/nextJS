'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const steps = [
  { 
    id: 1, 
    title: 'Get a Quote', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M21 3H3c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H3V5h18v14zM5 10h9v2H5v-2zm0 3h9v2H5v-2z"/>
      </svg>
    )
  },
  { 
    id: 2, 
    title: 'Design & Approval', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM20.71 7.04c.39-.39.39-1.02 0-1.41l-2.34-2.34a.9959.9959 0 0 0-1.41 0l-1.83 1.83 3.75 3.75 1.83-1.83z"/>
      </svg>
    )
  },
  { 
    id: 3, 
    title: 'Factory Production', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M22 22H2V10l7-3v2l5-2v3h3l1-8h3l1 8v12zM12 9.95l-5 2V10l-3 1.32V20h16v-8h-8V9.95zM11 18h2v-4h-2v4zm-4 0h2v-4H7v4zm10-4h-2v4h2v-4z"/>
      </svg>
    )
  },
  { 
    id: 4, 
    title: 'Delivery & Execution', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M20 8h-3V4H3c-1.1 0-2 .9-2 2v11h2c0 1.66 1.34 3 3 3s3-1.34 3-3h6c0 1.66 1.34 3 3 3s3-1.34 3-3h2v-5l-3-4zM6 18.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm13.5-9l1.96 2.5H17V9.5h2.5zm-1.5 9c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/>
      </svg>
    )
  },
  { 
    id: 5, 
    title: 'Project Handover', 
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
        <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41L9 16.17z"/>
      </svg>
    )
  },
];

export default function Timeline() {
  const [active, setActive] = useState(1);

  return (
    <section className="w-full py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-gray-800 mb-8 md:mb-12 lg:mb-16">
          45 Working Days Promised Hand Over*
        </h2>

        {/* Steps */}
        <div className="flex flex-col md:flex-col lg:flex-row items-center justify-center">
          {steps.map((step, index) => {
            const isActive = active === step.id;

            return (
              <div key={step.id} className="flex md:flex-col lg:flex-row items-center w-full md:w-auto">
                {/* Step */}
                <div
                  className="flex flex-col md:flex-col lg:flex-col items-center cursor-pointer group py-4 md:py-2 lg:py-0"
                  onClick={() => setActive(step.id)}
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className={`w-16 h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 flex items-center justify-center rounded-full transition-all duration-300 ${
                      isActive
                        ? 'bg-blue-50 text-blue-600 border-2 border-blue-500'
                        : 'text-gray-400 group-hover:text-blue-500'
                    }`}
                  >
                    <div className={`w-8 h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 transition duration-300 ${isActive ? 'text-blue-600' : 'text-gray-500 group-hover:text-blue-500'}`}>
                      {step.icon}
                    </div>
                  </motion.div>
                  <p
                    className={`mt-2 md:mt-2 lg:mt-4 text-sm font-medium text-center ${
                      isActive ? 'text-blue-600' : 'text-gray-600'
                    }`}
                  >
                    {step.title}
                  </p>
                </div>

                {/* Connector for mobile (vertical) */}
                {index < steps.length - 1 && (
                  <>
                    <div className="md:hidden flex flex-col items-center mx-4">
                      <div className="w-0.5 h-8 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-400 my-1"></div>
                      <div className="w-0.5 h-8 bg-gray-300"></div>
                    </div>
                    
                    {/* Connector for tablet (vertical) */}
                    <div className="hidden md:flex lg:hidden flex-col items-center mx-4 my-2">
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                      <div className="w-0 h-0 border-l-[6px] border-r-[6px] border-t-[10px] border-l-transparent border-r-transparent border-t-gray-400 my-1"></div>
                      <div className="w-0.5 h-6 bg-gray-300"></div>
                    </div>
                    
                    {/* Connector for desktop (horizontal) */}
                    <div className="hidden lg:flex items-center mx-2">
                      <div className="w-12 h-0.5 bg-gray-300"></div>
                      <div className="w-0 h-0 border-t-[6px] border-b-[6px] border-l-[10px] border-t-transparent border-b-transparent border-l-gray-400 mx-1"></div>
                      <div className="w-12 h-0.5 bg-gray-300"></div>
                    </div>
                  </>
                )}
              </div>
            );
          })}
        </div>

        {/* Footnote */}
        <p className="mt-8 text-center text-xs text-gray-500 italic">
          *Conditions Apply
        </p>
      </div>
    </section>
  );
}