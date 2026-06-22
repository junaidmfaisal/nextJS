"use client";

import { sanityClient } from "@/lib/sanity.client";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";


type GalleryImage = {
  _id: string;
  title: string;

  coverImage: {
    asset: {
      url: string;
    };
  };

  images: {
    asset: {
      url: string;
    };
  }[];
};


export default function Gallery2() {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedAlbum, setSelectedAlbum] =
    useState<GalleryImage | null>(null);

  const [currentIndex, setCurrentIndex] =
    useState<number | null>(null);

  const [isMobile, setIsMobile] = useState(false);


  useEffect(() => {
    const fetchImages = async () => {

      const query = `
      *[_type == "gallery"]{
        _id,
        title,
        coverImage{
          asset->{url}
        },
        images[]{
          asset->{url}
        }
      }`;

      const data = await sanityClient.fetch(query);

      setImages(data);
    };


    fetchImages();


    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };


    checkIsMobile();

    window.addEventListener(
      "resize",
      checkIsMobile
    );


    return () =>
      window.removeEventListener(
        "resize",
        checkIsMobile
      );

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

    if (currentIndex !== null && selectedAlbum) {

      setCurrentIndex(
        (
          currentIndex - 1 +
          selectedAlbum.images.length
        )
        %
        selectedAlbum.images.length
      );

    }

  }, [currentIndex, selectedAlbum]);



  const goToNext = useCallback(() => {

    if (currentIndex !== null && selectedAlbum) {

      setCurrentIndex(
        (
          currentIndex + 1
        )
        %
        selectedAlbum.images.length
      );

    }

  }, [currentIndex, selectedAlbum]);




  // keyboard navigation

  useEffect(() => {


    const handleKeyDown = (e: KeyboardEvent) => {

      if (currentIndex === null) return;


      if (e.key === "Escape") {

        closeLightbox();

      }
      else if (e.key === "ArrowLeft") {

        goToPrevious();

      }
      else if (e.key === "ArrowRight") {

        goToNext();

      }

    };


    window.addEventListener(
      "keydown",
      handleKeyDown
    );


    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );


  }, [
    currentIndex,
    closeLightbox,
    goToPrevious,
    goToNext
  ]);





  // swipe gestures for mobile

  useEffect(() => {

    if (currentIndex === null || !isMobile)
      return;


    let touchStartX = 0;


    const handleTouchStart = (e: TouchEvent) => {

      touchStartX =
        e.changedTouches[0].screenX;

    };


    const handleTouchEnd = (e: TouchEvent) => {


      const touchEndX =
        e.changedTouches[0].screenX;


      const minSwipeDistance = 50;


      if (
        touchStartX - touchEndX >
        minSwipeDistance
      ) {

        goToNext();

      }
      else if (
        touchEndX - touchStartX >
        minSwipeDistance
      ) {

        goToPrevious();

      }

    };


    window.addEventListener(
      "touchstart",
      handleTouchStart
    );


    window.addEventListener(
      "touchend",
      handleTouchEnd
    );


    return () => {

      window.removeEventListener(
        "touchstart",
        handleTouchStart
      );


      window.removeEventListener(
        "touchend",
        handleTouchEnd
      );

    };


  }, [
    currentIndex,
    isMobile,
    goToNext,
    goToPrevious
  ]);





  return (

    <div className="px-4 pb-8">


      {/* CLIENT FOLDERS */}

      {!selectedAlbum && (

        <div className="
grid grid-cols-1 
sm:grid-cols-2 
md:grid-cols-3 
lg:grid-cols-4 
gap-6"
        >


          {images.map((img) => (

            <div
              key={img._id}
              onClick={() => setSelectedAlbum(img)}
              className="
overflow-hidden 
rounded-xl 
shadow-md 
cursor-pointer"
            >


              {img.coverImage?.asset?.url && (
    <Image
      src={img.coverImage.asset.url}
      alt={img.title || "Gallery"}
      width={800}
      height={600}
      className="
        w-full
        h-64
        object-cover
        transform
        hover:scale-105
        transition
        duration-300
      "
    />
  )}

                alt={img.title || "Gallery"}

                width={800}

                height={600}





              <h3 className="
text-center 
font-semibold 
py-3"
              >

                {img.title}

              </h3>


            </div>

          ))}


        </div>

      )}




      {/* INSIDE CLIENT */}

      {selectedAlbum && (

        <>

          <button

            onClick={() =>
              setSelectedAlbum(null)
            }

            className="
mb-6
font-medium"

          >

            ← Back to Albums

          </button>



          <div className="
grid grid-cols-1 
sm:grid-cols-2 
md:grid-cols-3 
lg:grid-cols-4 
gap-6"
          >


            {selectedAlbum.images.map((img, index) => (


              <div

                key={index}

                onClick={() =>
                  openLightbox(index)
                }

                className="
overflow-hidden 
rounded-xl 
shadow-md 
cursor-pointer"

              >


                <Image

                  src={img.asset.url}

                  alt="Gallery Image"

                  width={800}

                  height={600}

                  className="
w-full 
h-64 
object-cover 
transform 
hover:scale-105 
transition 
duration-300"

                />


              </div>


            ))}


          </div>


        </>

      )}





      {/* Lightbox */}


      {currentIndex !== null && selectedAlbum && (

        <div

          className="
fixed 
inset-0 
bg-black 
bg-opacity-95 
z-50 
flex 
items-center 
justify-center 
p-4"

          onClick={closeLightbox}

        >


          <div

            className="
relative 
w-full 
h-full 
flex 
items-center 
justify-center"

            onClick={(e) =>
              e.stopPropagation()
            }

          >



            <button

              onClick={closeLightbox}

              className="
absolute 
top-4 
right-4 
text-white 
p-2 
z-10"

            >

              <XMarkIcon className="w-8 h-8" />

            </button>




            {selectedAlbum.images.length > 1 && !isMobile && (

              <>

                <button

                  onClick={goToPrevious}

                  className="
absolute 
left-4 
text-white 
z-10"

                >

                  <ChevronLeftIcon className="w-8 h-8" />

                </button>



                <button

                  onClick={goToNext}

                  className="
absolute 
right-4 
text-white 
z-10"

                >

                  <ChevronRightIcon className="w-8 h-8" />

                </button>

              </>

            )}




            <div className="
relative 
max-w-5xl 
max-h-full 
w-full 
h-full 
flex 
items-center 
justify-center"
            >


              <Image

                src={
                  selectedAlbum.images[currentIndex]
                    .asset.url
                }

                alt="Gallery Image"

                fill

                className="object-contain"

                priority

              />

            </div>



            <div className="
absolute 
bottom-4 
text-white 
bg-black 
bg-opacity-50 
px-4 
py-2 
rounded-lg"
            >


              {currentIndex + 1} / {selectedAlbum.images.length}


            </div>



          </div>


        </div>

      )}



    </div>

  );

}