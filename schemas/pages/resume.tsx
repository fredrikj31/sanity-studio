import {SchemaTypeDefinition} from 'sanity'

export const resume: SchemaTypeDefinition = {
  name: 'resume',
  title: 'Resume',
  description: 'Content for the resume page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'content',
      title: 'Content',
      type: 'contentComponent',
      group: 'content',
    },
  ],
}
