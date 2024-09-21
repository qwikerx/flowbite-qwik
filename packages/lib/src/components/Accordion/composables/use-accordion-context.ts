import { createContextId, useComputed$, useContext } from '@builder.io/qwik'
import { AccordionTheme } from '~/components/Accordion'

type AccordionContextProps = { theme: AccordionTheme | undefined }
export const AccordionContext = createContextId<AccordionContextProps>('FLOWBITE_QWIK_ACCORDION_CONTEXT')

export function useAccordionContext() {
  const accordionContext = useContext(AccordionContext)

  const theme = useComputed$(() => accordionContext.theme)

  return {
    theme,
  }
}
