// app/components/Service6.tsx
"use client";

import React from "react";
import Image from "next/image";

const Service6 = () => {
  return (
    <section className="relative w-full flex items-center justify-center py-10">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/img1 (8).jpeg" 
          alt="Interior background"
          fill
          className="object-cover brightness-75"
          priority
        />
      </div>

      {/* Overlay for slight dark effect */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Centered YouTube Video */}
      <div className="relative z-10 w-[95%] md:w-[80%] lg:w-[70%] xl:w-[60%] aspect-video rounded-lg overflow-hidden border-4 border-white shadow-2xl">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/8Lmp1Ncaa7Y?si=QD3p8YeL_6q2js2p"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};

export default Service6;
