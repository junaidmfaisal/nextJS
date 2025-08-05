import { createClient } from 'next-sanity'

export const sanityClient = createClient({
  projectId: '6t276s6x',
  dataset: 'production',
  apiVersion: '2023-01-01',
  useCdn: true,
})

