import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {presentationTool} from 'sanity/presentation'
import {schemaTypes} from './schemas'
import {codeInput} from '@sanity/code-input'
import {media} from 'sanity-plugin-media'
import {table} from '@sanity/table'
import {latexInput} from 'sanity-plugin-latex-input'
import {myStructure} from './deskStructure'

export default defineConfig({
  name: 'default',
  title: 'portfolio',

  projectId: process.env.SANITY_STUDIO_API_PROJECT_ID || '',
  dataset: process.env.SANITY_STUDIO_API_DATASET || '',

  plugins: [
    deskTool({structure: myStructure}),
    visionTool(),
    codeInput(),
    table(),
    latexInput(),
    media(),
    presentationTool({
      previewUrl: {
        origin: process.env.SANITY_STUDIO_PREVIEW_ORIGIN || '',
        preview: '/',
        previewMode: {
          enable: '/api/sanity/draft-mode/enable',
        },
      },
    }),
  ],

  schema: {
    types: schemaTypes,
  },
})
