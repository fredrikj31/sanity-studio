import {defineField} from 'sanity'

export const resume = defineField({
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
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'content',
      title: 'Content',
      type: 'contentComponent',
      group: 'content',
    }),
  ],
})
