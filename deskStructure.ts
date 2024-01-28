import {CommentIcon, EditIcon, UserIcon} from '@sanity/icons'
import {StructureBuilder} from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('About Page')
        .icon(UserIcon)
        .child(S.document().schemaType('about').documentId('about')),
      S.divider(),
      S.listItem().title('Blog Posts').icon(EditIcon).child(S.documentTypeList('blog')),
      S.listItem().title('Testimonials').icon(CommentIcon).child(S.documentTypeList('testimonial')),
    ])
