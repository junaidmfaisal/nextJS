"use client";

import Image from "next/image";
import Link from "next/link";

export default function Gallery1() {
    return (
        <section className="relative w-full h-[60vh] md:h-[35rem] flex items-center justify-start bg-black text-white -top-16">
            {/* Background Image */}
            <Image
                src="/gallery.jpg"
                alt="Contact Background"
                fill
                className="object-cover object-center opacity-80"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50"></div>

            {/* Content */}
            <div className="relative z-10 px-6 md:px-16 lg:px-24 max-w-4xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">Gallery</h1>
                <p className="text-base md:text-lg max-w-xl mb-6">
                    Explore our curated gallery of luxury interiors, showcasing elegant designs, bespoke furniture, and timeless aesthetics that bring every space to life.
                </p>
                <div className="h-[2px] w-28 bg-white mb-6"></div>

                {/* Breadcrumb */}
                <div className="flex items-center gap-2 text-sm md:text-base">
                    <Link href="/" className="hover:underline">
                        Home Main
                    </Link>
                    <span className="text-lg">→</span>
                    <span className="text-white/80">Projects</span>
                </div>
            </div>
        </section>
    );
}
