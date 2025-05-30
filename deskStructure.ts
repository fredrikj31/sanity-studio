import {
  CaseIcon,
  CommentIcon,
  DocumentsIcon,
  EditIcon,
  UserIcon,
  PackageIcon,
  HomeIcon,
} from '@sanity/icons'
import {StructureBuilder} from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Home')
        .icon(HomeIcon)
        .child(S.document().schemaType('home').documentId('home')),
      S.listItem()
        .title('About')
        .icon(UserIcon)
        .child(S.document().schemaType('about').documentId('about')),
      S.listItem()
        .title('Resume')
        .icon(CaseIcon)
        .child(S.document().schemaType('resume').documentId('resume')),
      S.divider(),
      S.listItem().title('Testimonials').icon(CommentIcon).child(S.documentTypeList('testimonial')),
      S.listItem().title('Projects').icon(PackageIcon).child(S.documentTypeList('project')),
      S.divider(),
      S.listItem().title('Blog Series').icon(DocumentsIcon).child(S.documentTypeList('blogSeries')),
      S.listItem().title('Blog Posts').icon(EditIcon).child(S.documentTypeList('blogPost')),
    ])
