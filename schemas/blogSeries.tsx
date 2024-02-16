import {DocumentsIcon} from '@sanity/icons'
import {defineField} from 'sanity'
import {blogPost} from './blogPost'

export const blogSeries = defineField({
  name: 'blogSeries',
  description: 'A page for a blog series',
  icon: DocumentsIcon,
  type: 'document',
  preview: {
    select: {
      title: 'title',
      subtitle: 'description',
    },
  },
  fields: [
    {
      name: 'title',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'description',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'posts',
      title: 'Posts',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: blogPost,
        },
      ],
    },
  ],
})
