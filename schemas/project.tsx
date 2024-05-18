import {PackageIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const project = defineField({
  name: 'project',
  title: 'Project',
  description: 'A project showcase',
  icon: PackageIcon,
  type: 'document',
  preview: {
    select: {
      title: 'author',
      subtitle: 'position',
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
      name: 'techstack',
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
