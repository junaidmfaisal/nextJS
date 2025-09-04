// pages/gallery.tsx
import { sanityClient } from "@/lib/sanity.client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon, XMarkIcon } from "@heroicons/react/24/outline";

type GalleryImage = {
  _id: string;
  title: string;
  image: {
    asset: {
      url: string;
    };
  };
};

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [currentIndex, setCurrentIndex] = useState<number | null>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "gallery"]{_id, title, image{asset->{url}}}`;
      const data = await sanityClient.fetch(query);
      setImages(data);
    };

    fetchImages();

    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    return () => window.removeEventListener('resize', checkIsMobile);
  }, []);

  const openLightbox = useCallback((index: number) => {
    setCurrentIndex(index);
    document.body.style.overflow = "hidden";
  }, []);

  const closeLightbox = useCallback(() => {
    setCurrentIndex(null);
    document.body.style.overflow = "auto";
  }, []);

  const goToPrevious = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex - 1 + images.length) % images.length);
    }
  }, [currentIndex, images.length]);

  const goToNext = useCallback(() => {
    if (currentIndex !== null) {
      setCurrentIndex((currentIndex + 1) % images.length);
    }
  }, [currentIndex, images.length]);

  // Handle keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (currentIndex === null) return;
      
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowLeft") {
        goToPrevious();
      } else if (e.key === "ArrowRight") {
        goToNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentIndex, closeLightbox, goToPrevious, goToNext]);

  // Handle swipe gestures for mobile
  useEffect(() => {
    if (currentIndex === null || !isMobile) return;

    let touchStartX = 0;
    let touchEndX = 0;

    const handleTouchStart = (e: TouchEvent) => {
      touchStartX = e.changedTouches[0].screenX;
    };

    const handleTouchEnd = (e: TouchEvent) => {
      touchEndX = e.changedTouches[0].screenX;
      handleSwipe();
    };

    const handleSwipe = () => {
      const minSwipeDistance = 50; // Minimum swipe distance to trigger navigation
      
      if (touchStartX - touchEndX > minSwipeDistance) {
        // Swipe left - go to next
        goToNext();
      } else if (touchEndX - touchStartX > minSwipeDistance) {
        // Swipe right - go to previous
        goToPrevious();
      }
    };

    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchend', handleTouchEnd);

    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [currentIndex, isMobile, goToNext, goToPrevious]);

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img, index) => (
          <div
            key={img._id}
            className="overflow-hidden rounded-xl shadow-md cursor-pointer"
            onClick={() => openLightbox(index)}
          >
            <Image
              src={img.image.asset.url}
              alt={img.title || "Gallery Image"}
              width={800}
              height={600}
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {currentIndex !== null && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <div 
            className="relative w-full h-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all z-10"
              aria-label="Close lightbox"
            >
              <XMarkIcon className="w-8 h-8" />
            </button>

            {/* Desktop Navigation Arrows */}
            {images.length > 1 && !isMobile && (
              <>
                <button
                  onClick={goToPrevious}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all z-10"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
                <button
                  onClick={goToNext}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white p-2 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all z-10"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
              </>
            )}

            {/* Image Display */}
            <div className="relative max-w-5xl max-h-full w-full h-full flex items-center justify-center">
              <Image
                src={images[currentIndex].image.asset.url}
                alt={images[currentIndex].title || "Gallery Image"}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Mobile Navigation - Bottom Arrows */}
            {images.length > 1 && isMobile && (
              <div className="absolute bottom-4 left-0 right-0 flex justify-center items-center space-x-8 z-10">
                <button
                  onClick={goToPrevious}
                  className="text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="w-8 h-8" />
                </button>
                <button
                  onClick={goToNext}
                  className="text-white p-3 rounded-full bg-black bg-opacity-50 hover:bg-opacity-75 transition-all"
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="w-8 h-8" />
                </button>
              </div>
            )}
            
            {/* Image Counter */}
            {images.length > 1 && (
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white bg-black bg-opacity-50 px-4 py-2 rounded-lg z-10">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}