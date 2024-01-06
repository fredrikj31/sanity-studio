import {SplitHorizontalIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const rowComponent = defineType({
  name: 'rowComponent',
  icon: SplitHorizontalIcon,
  type: 'object',
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
