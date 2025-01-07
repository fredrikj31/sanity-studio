import {about} from './pages/about'
import {blogPost} from './documents/blogPost'
import {testimonial} from './documents/testimonial'
import {contentComponent} from './components/content'
import {blogSeries} from './documents/blogSeries'
import {resume} from './pages/resume'
import {project} from './documents/project'
import {home} from './pages/home'
import {buttonComponent} from './components/button'

export const schemaTypes = [
  // Pages
  home,
  about,
  resume,
  // Documents
  blogSeries,
  blogPost,
  testimonial,
  project,
  // Components
  contentComponent,
  buttonComponent,
]
