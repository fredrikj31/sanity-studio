import {defineCliConfig} from 'sanity/cli'

export default defineCliConfig({
  deployment: {
    appId: process.env.SANITY_STUDIO_APP_ID,
  },
  api: {
    projectId: process.env.SANITY_STUDIO_API_PROJECT_ID,
    dataset: process.env.SANITY_STUDIO_API_DATASET,
  },
})
