import {defineField} from 'sanity'

export const about = defineField({
  name: 'about',
  title: 'About Page',
  description: 'Content for the about page',
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
      name: 'Title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'Description',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'Content',
      type: 'contentComponent',
      group: 'content',
    }),
  ],
})
