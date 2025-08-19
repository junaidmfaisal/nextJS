// app/components/Service6.tsx
"use client";

import React, { useState } from "react";
import Image from "next/image";

const Service6 = () => {
  const [playVideo, setPlayVideo] = useState(false);

  return (
    <section className="relative w-full flex items-center justify-center py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img1 (11).jpeg" 
          alt="Interior background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay for slight dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Center Video Box */}
      <div className="relative z-10 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] aspect-video rounded-lg overflow-hidden border-4 border-white shadow-2xl">
        {!playVideo ? (
          <div className="relative w-full h-full cursor-pointer group">
            {/* Cover Photo */}
            <Image
              src="/img1 (10).jpeg" 
              alt="Video Cover"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />

            {/* Dark overlay on hover */}
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition"></div>

            {/* Play Button */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              onClick={() => setPlayVideo(true)}
            >
              <div className="w-16 h-16 md:w-20 md:h-20 bg-white/90 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="black"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="black"
                  className="w-8 h-8 md:w-10 md:h-10 ml-1"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5.25 5.653c0-.856.917-1.398 1.666-.933l11.54 6.847a1.083 1.083 0 010 1.866l-11.54 6.847a1.083 1.083 0 01-1.666-.933V5.653z"
                  />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-full h-full"
            src="https://www.youtube.com/embed/8Lmp1Ncaa7Y?autoplay=1&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        )}
      </div>
    </section>
  );
};

export default Service6;
