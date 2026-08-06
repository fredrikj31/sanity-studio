import {defineField, defineType} from 'sanity'
import {MermaidInput} from './MermaidInput'

const MermaidIcon = () => (
  <svg width="1em" height="1em" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect x="3" y="4" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <rect x="14" y="15" width="8" height="6" rx="1" stroke="currentColor" strokeWidth="1.2" />
    <path
      d="M7 10v3a2 2 0 0 0 2 2h3m0 0h3a2 2 0 0 0 2-2v-2"
      stroke="currentColor"
      strokeWidth="1.2"
      fill="none"
    />
  </svg>
)

export const mermaidDiagram = defineType({
  type: 'object',
  name: 'mermaidDiagram',
  title: 'Mermaid Diagram',
  icon: MermaidIcon,
  fields: [
    defineField({
      name: 'code',
      title: 'Mermaid Code',
      type: 'text',
      rows: 10,
      validation: (Rule) => Rule.required(),
    }),
  ],
  components: {
    input: MermaidInput,
  },
  preview: {
    select: {code: 'code'},
    prepare({code}: {code?: string}) {
      return {
        title: 'Mermaid Diagram',
        subtitle: code ? code.split('\n')[0].slice(0, 60) : 'No diagram code yet',
      }
    },
  },
})
