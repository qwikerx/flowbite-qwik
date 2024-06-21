import { Accordion as AccordionRoot } from '~/components/Accordion/Accordion'
import { AccordionContent } from '~/components/Accordion/AccordionContent'
import { AccordionHeader } from '~/components/Accordion/AccordionHeader'
import { AccordionPanel } from '~/components/Accordion/AccordionPanel'

export * from './accordion-types'

export const Accordion = Object.assign(AccordionRoot, {
  Content: AccordionContent,
  Header: AccordionHeader,
  Panel: AccordionPanel,
})
