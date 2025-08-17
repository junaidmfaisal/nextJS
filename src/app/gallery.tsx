// pages/gallery.tsx
import { sanityClient } from "@/lib/sanity.client";
import Image from "next/image";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "gallery"]{_id, title, image{asset->{url}}}`;
      const data = await sanityClient.fetch(query);
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((img) => (
          <div
            key={img._id}
            className="overflow-hidden rounded-xl shadow-md"
          >
            <Image
              src={img.image.asset.url}
              alt={img.title || "Gallery Image"}
              width={800}     // required by next/image
              height={600}    // approximate, can adjust
              className="w-full h-64 object-cover transform hover:scale-105 transition duration-300"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
