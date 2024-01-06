import {defineArrayMember, defineField} from 'sanity'
import {UserIcon} from '@sanity/icons'

export const aboutPage = defineField({
  name: 'aboutPage',
  title: 'About Page',
  description: 'This is the structure of the about page.',
  type: 'document',
  icon: UserIcon,
  fields: [
    defineField({
      name: 'content',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'columnComponent',
        }),
        defineArrayMember({
          type: 'rowComponent',
        }),
        defineArrayMember({
          type: 'richTextComponent',
        }),
        defineArrayMember({
          type: 'imageComponent',
        }),
        defineArrayMember({
          type: 'codeComponent',
        }),
        defineArrayMember({
          type: 'tableComponent',
        }),
        defineArrayMember({
          type: 'latexComponent',
        }),
      ],
    }),
  ],
})
