import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'homora',

  projectId: '6t276s6x',
  dataset: 'production',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

export const useCdn = false;
export const apiVersion = "2023-01-01";    // Or your preferred date
export const dataset = "production";     // Usually "production"
export const projectId = "6t276s6x"; // Replace with actual
