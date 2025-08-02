// lib/sanity.client.ts
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from './sanity.config'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})
