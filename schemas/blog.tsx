import {EditIcon} from '@sanity/icons'
import {defineField} from 'sanity'

export const blog = defineField({
  name: 'blog',
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
    {
      name: 'content',
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
        {
          type: 'image',
          fields: [
            {
              type: 'text',
              name: 'alt',
              title: 'Alternative text',
              description: `Some of your visitors cannot see images, 
            be they blind, color-blind, low-sighted; 
            alternative text is of great help for those 
            people that can rely on it to have a good idea of 
            what's on your page.`,
            },
          ],
        },
        {
          type: 'code',
        },
        {
          type: 'table',
        },
        {
          type: 'latex',
          icon: () => <span style={{fontWeight: 'bold'}}>∑</span>,
          title: 'Math block',
        },
      ],
    },
  ],
})
