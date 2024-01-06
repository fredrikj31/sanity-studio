import {StringIcon} from '@sanity/icons'
import {defineField, defineType} from 'sanity'

export const richTextComponent = defineType({
  name: 'richTextComponent',
  title: 'Rich Text Component',
  icon: StringIcon,
  type: 'object',
  fields: [
    defineField({
      name: 'richText',
      title: 'Rich Text',
      type: 'array',
      of: [
        {
          type: 'block',
          name: 'richText',
          title: 'Rich Text',
          marks: {
            decorators: [
              {title: 'Strong', value: 'strong'},
              {title: 'Emphasis', value: 'em'},
              {title: 'Code', value: 'code'},
              {title: 'Underline', value: 'underline'},
              {title: 'Strike', value: 'strike-through'},
              {
                title: 'Highlight',
                value: 'highlight',
                icon: () => (
                  <div>
                    <mark>H</mark>
                  </div>
                ),
                component: ({children}) => <mark>{children}</mark>,
              },
            ],
          },
          options: {
            spellCheck: true,
          },
        },
      ],
    }),
  ],
})
