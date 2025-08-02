export const galleryQuery = `
  *[_type == "gallery"] | order(_createdAt desc) {
    _id,
    title,
    "imageUrl": image.asset->url,
    alt
  }
`
