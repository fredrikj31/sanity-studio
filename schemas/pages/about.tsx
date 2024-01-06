import {defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const aboutPage = defineField({
  name: 'aboutPage',
  title: 'About Page',
  description: 'This is the structure of the about page.',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'Content',
      type: 'contentComponent',
    }),
  ],
})
