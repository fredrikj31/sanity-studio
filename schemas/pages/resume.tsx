import {SchemaTypeDefinition} from 'sanity'

export const resume: SchemaTypeDefinition = {
  name: 'resume',
  title: 'Resume',
  description: 'Content for the resume page',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'content',
      title: 'Content',
    },
  ],
  fields: [
    // SEO
    {
      name: 'pageTitle',
      title: 'Page Title',
      type: 'string',
      group: 'seo',
    },
    {
      name: 'pageDescription',
      title: 'Page Description',
      type: 'string',
      group: 'seo',
    },
    // Content
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      group: 'content',
    },
    {
      name: 'subTitle',
      title: 'Subtitle',
      type: 'string',
      group: 'content',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      fields: [
        {
          type: 'string',
          name: 'alt',
          title: 'Alternative text',
          description: `Some of your visitors cannot see images, 
          be they blind, color-blind, low-sighted; 
          alternative text is of great help for those 
          people that can rely on it to have a good idea of 
          what's on your page.`,
        },
        {
          type: 'number',
          name: 'height',
          title: 'Height',
        },
        {
          type: 'number',
          name: 'width',
          title: 'Width',
        },
      ],
      group: 'content',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'link',
          fields: [
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'text', type: 'string', title: 'Text'},
            {name: 'icon', type: 'string', title: 'Icon'},
          ],
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'contentComponent',
      group: 'content',
    },
    {
      name: 'workExperiences',
      title: 'Work Experiences',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'workExperience',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'role', type: 'string', title: 'Role'},
            {name: 'fromDate', type: 'date'},
            {name: 'toDate', type: 'date'},
            {
              name: 'description',
              title: 'Description',
              type: 'contentComponent',
            },
          ],
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
          type: 'object',
          name: 'project',
          fields: [
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'type', type: 'string', title: 'Type'},
            {
              name: 'description',
              title: 'Description',
              type: 'contentComponent',
            },
          ],
        },
      ],
    },
    {
      name: 'educations',
      title: 'Educations',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'education',
          fields: [
            {name: 'type', type: 'string', title: 'Type'},
            {name: 'name', type: 'string', title: 'Name'},
            {name: 'link', type: 'string', title: 'Link'},
            {name: 'fromDate', type: 'date', title: 'From Date'},
            {name: 'toDate', type: 'date', title: 'To Date'},
          ],
        },
      ],
    },
    {
      name: 'languages',
      title: 'Languages',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'language',
          fields: [
            {name: 'language', type: 'string', title: 'Language'},
            {name: 'level', type: 'string', title: 'Level'},
          ],
        },
      ],
    },
    {
      name: 'interest',
      title: 'Interests',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'string',
          name: 'interest',
        },
      ],
    },
    {
      name: 'skills',
      title: 'Skills',
      type: 'array',
      group: 'content',
      of: [
        {
          type: 'object',
          name: 'skill',
          fields: [
            {
              name: 'group',
              type: 'string',
            },
            {
              name: 'skill',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}
