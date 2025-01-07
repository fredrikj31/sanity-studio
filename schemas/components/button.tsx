import {FieldDefinition} from 'sanity'

export const buttonComponent: FieldDefinition = {
  name: 'buttonComponent',
  type: 'document',
  preview: {
    select: {
      title: 'text',
    },
  },
  fields: [
    {
      name: 'type',
      title: 'Type',
      type: 'string',
      initialValue: {
        title: 'Primary',
      },
      options: {
        list: [
          {title: 'Primary', value: 'primary'},
          {title: 'Secondary', value: 'secondary'},
        ],
      },
    },
    {
      name: 'text',
      title: 'Text',
      type: 'string',
    },
    {
      name: 'link',
      title: 'Link',
      type: 'url',
    },
    {
      name: 'isExternal',
      title: 'Is External',
      description: 'Is the link linking to an external link?',
      type: 'boolean',
    },
  ],
}
