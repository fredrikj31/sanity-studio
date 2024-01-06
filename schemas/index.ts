import {blog} from './blog'
import {testimonial} from './testimonial'
import {aboutPage} from './pages/about'
import {columnComponent} from './components/column'
import {rowComponent} from './components/row'
import {richTextComponent} from './components/richText'
import {imageComponent} from './components/image'
import {codeComponent} from './components/code'
import {tableComponent} from './components/table'
import {latexComponent} from './components/latex'

export const schemaTypes = [
  blog,
  testimonial,
  aboutPage,
  // Components
  columnComponent,
  rowComponent,
  richTextComponent,
  imageComponent,
  codeComponent,
  tableComponent,
  latexComponent,
]
