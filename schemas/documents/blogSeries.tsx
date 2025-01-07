import {DocumentsIcon} from '@sanity/icons'
import {SchemaTypeDefinition} from 'sanity'

export const blogSeries: SchemaTypeDefinition = {
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
      name: 'slug',
      type: 'slug',
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
          to: [{type: 'blogPost'}],
        },
      ],
    },
  ],
}
