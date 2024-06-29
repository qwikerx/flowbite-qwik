import { Timeline as TimelineRoot } from './Timeline'
import { TimelineBody } from './TimelineBody'
import { TimelineContent } from './TimelineContent'
import { TimelineItem } from './TimelineItem'
import { TimelinePoint } from './TimelinePoint'
import { TimelineTime } from './TimelineTime'
import { TimelineTitle } from './TimelineTitle'

export const Timeline = Object.assign(TimelineRoot, {
  Body: TimelineBody,
  Content: TimelineContent,
  Item: TimelineItem,
  Point: TimelinePoint,
  Time: TimelineTime,
  Title: TimelineTitle,
})
