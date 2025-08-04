// lib/sanity.client.ts
import { createClient } from 'next-sanity'
import { apiVersion, dataset, projectId, useCdn } from '../studio-homora/sanity.config'

export const sanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})
