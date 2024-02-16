import {EditIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const blogPost = defineField({
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
      name: 'released',
      type: 'date',
      validation(rule) {
        return rule.required()
      },
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
    defineField({
      name: 'content',
      type: 'contentComponent',
    }),
  ],
})
