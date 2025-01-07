import {about} from './pages/about'
import {blogPost} from './blogPost'
import {testimonial} from './testimonial'
import {contentComponent} from './components/content'
import {blogSeries} from './blogSeries'
import {resume} from './pages/resume'
import {project} from './project'
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
