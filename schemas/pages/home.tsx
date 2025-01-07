import {SchemaTypeDefinition} from 'sanity'

export const home: SchemaTypeDefinition = {
  name: 'home',
  title: 'Home',
  description: 'Content for the home page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
      default: true,
    },
  ],
  fields: [
    // SEO
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'keywords',
      title: 'Keywords',
      type: 'array',
      group: 'seo',
      of: [
        {
          type: 'string',
        },
      ],
    },
    // Content
    {
      name: 'header',
      title: 'Header',
      type: 'string',
      group: 'content',
    },
    {
      name: 'subheader',
      title: 'Subheader',
      type: 'string',
      group: 'content',
    },
    {
      name: 'buttons',
      title: 'Buttons',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'buttonComponent',
        },
      ],
    },
    {
      name: 'blogPosts',
      title: 'Blog Posts',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: [{type: 'blogPost'}],
        },
      ],
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: [{type: 'testimonial'}],
        },
      ],
    },
    {
      name: 'projects',
      title: 'Projects',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'reference',
          to: [{type: 'project'}],
        },
      ],
    },
  ],
}
