import {CommentIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const testimonial = defineField({
  name: 'testimonial',
  title: 'Testimonial',
  description: 'A testimonial from another person',
  icon: CommentIcon,
  type: 'document',
  preview: {
    select: {
      title: 'author',
      subtitle: 'position',
    },
  },
  fields: [
    {
      name: 'author',
      type: 'string',
      description: 'Who said the following about you?',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'position',
      description: 'What title does the person have in the company?',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'company',
      description: 'Which company does the person work for?',
      type: 'string',
      validation(rule) {
        return rule.required()
      },
    },
    {
      name: 'testimonial',
      type: 'string',
      description: 'What has they said about you?',
      validation(rule) {
        return rule.required()
      },
    },
  ],
})
