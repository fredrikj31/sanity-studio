import {SplitVerticalIcon} from '@sanity/icons'
import {defineArrayMember, defineField, defineType} from 'sanity'

export const columnComponent = defineType({
  name: 'columnComponent',
  icon: SplitVerticalIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'items',
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
