// pages/gallery.tsx
import { client } from "@/sanity.client";
import Image from 'next/image'
import { useEffect, useState } from 'react'

type GalleryImage = {
  _id: string
  title: string
  image: {
    asset: {
      _ref: string
      url: string
    }
  }
}

export default function GalleryPage() {
  const [images, setImages] = useState<GalleryImage[]>([])

  useEffect(() => {
    const fetchImages = async () => {
      const query = `*[_type == "gallery"]{_id, title, image{asset->{url}}}`
      const data = await sanityClient.fetch(query)
      setImages(data)
    }

    fetchImages()
  }, [])

  return (
    <div className="p-6 grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((img) => (
        <div key={img._id} className="shadow-md">
          <Image
            src={img.image.asset.url}
            alt={img.title}
            width={300}
            height={200}
            className="object-cover w-full h-auto"
          />
          <p className="text-center mt-2">{img.title}</p>
        </div>
      ))}
    </div>
  )
}
