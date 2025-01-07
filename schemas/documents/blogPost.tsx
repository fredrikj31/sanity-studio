import {EditIcon} from '@sanity/icons'
import {SchemaTypeDefinition} from 'sanity'

export const blogPost: SchemaTypeDefinition = {
  name: 'blogPost',
  title: 'Blog Post',
  description: 'A page for a blog post',
  icon: EditIcon,
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
      name: 'published',
      type: 'date',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'modified',
      type: 'date',
    },
    {
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
    },
    {
      name: 'content',
      type: 'contentComponent',
    },
  ],
}
