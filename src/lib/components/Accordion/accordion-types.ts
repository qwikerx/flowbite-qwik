import { PropsOf, QRL } from '@builder.io/qwik'

export type AccordionProps = {
  alwaysOpen?: boolean
  openFirstItem?: boolean
  flush?: boolean
}

export type AccordionHeaderProps = {
  id?: string
  accordionId?: string
  onClick$?: QRL<(id: string) => void>
  isVisible?: boolean
  flush?: boolean
  isFirst?: boolean
  isLast?: boolean
} & PropsOf<'div'>
