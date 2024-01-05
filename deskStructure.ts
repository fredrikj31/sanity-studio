import {UserIcon} from '@sanity/icons'
import {StructureBuilder} from 'sanity/desk'

export const myStructure = (S: StructureBuilder) =>
  S.list()
    .title('Base')
    .items([
      S.listItem()
        .title('About')
        .icon(UserIcon)
        .child(S.document().schemaType('about').documentId('about')),
      ...S.documentTypeListItems().filter(
        (listItem) => !['about'].includes(listItem.getId() || ''),
      ),
    ])
