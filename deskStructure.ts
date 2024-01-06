import {UserIcon} from '@sanity/icons'
import {StructureBuilder} from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('About')
        .icon(UserIcon)
        .child(S.document().schemaType('aboutPage').documentId('aboutPage')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['aboutPage'].includes(listItem.getId() || ''),
      ),
    ])
