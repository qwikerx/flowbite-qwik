import { $, useComputed$, useStore } from '@builder.io/qwik'
import { AccordionProps } from '../accordion-types'
import { ComponentType } from '../Accordion'

export const ACCORDION_CONTEXT = 'FLOWBITE_ACCORDION_CONTEXT'

export function useAccordionState(options: AccordionProps, components: ComponentType[]) {
  const accordionState = useStore({
    openedPanels: options.openFirstItem && components[0]?.id ? [components[0].id] : [],
  })

  const toggle$ = $((itemId: string) => {
    const isAlreadyOpened = accordionState.openedPanels.includes(itemId)
    if (isAlreadyOpened) {
      accordionState.openedPanels = accordionState.openedPanels.filter((id) => id !== itemId)
    } else {
      if (options?.alwaysOpen) {
        accordionState.openedPanels.push(itemId)
      } else {
        accordionState.openedPanels = [itemId]
      }
    }
  })

  const openedPanels = useComputed$(() => accordionState.openedPanels)

  return {
    toggle$,
    openedPanels,
  }
}
