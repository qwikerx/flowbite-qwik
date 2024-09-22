import { ClassList, PropsOf, QRL } from '@builder.io/qwik'

export type AccordionTheme = {
  header?: {
    button?: ClassList
  }
}

export type AccordionProps = {
  alwaysOpen?: boolean
  openFirstItem?: boolean
  flush?: boolean
  theme?: AccordionTheme
}

export type AccordionHeaderProps = {
  id?: string
  openedPanels?: string[]
  onClick$?: QRL<(id: string) => void>
  isVisible?: boolean
  flush?: boolean
  isFirst?: boolean
  isLast?: boolean
} & PropsOf<'div'>
