import {defineArrayMember, defineType} from 'sanity'

export const contentComponent = defineType({
  name: 'contentComponent',
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
})
