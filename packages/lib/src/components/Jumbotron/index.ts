import { Jumbotron as JumbotronRoot } from './Jumbotron'
import { JumbotronSubText } from './JumbotronSubText'
import { JumbotronHeading } from './JumbotronHeading'

export const Jumbotron = Object.assign(JumbotronRoot, {
  SubText: JumbotronSubText,
  Heading: JumbotronHeading,
})
