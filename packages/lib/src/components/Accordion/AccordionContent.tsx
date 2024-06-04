import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionContentClasses } from './composables/use-accordion-content-class'

type AccordionContentProps = {
  id?: string
  isVisible?: boolean
  flush?: boolean
  isLast?: boolean
  openedPanels?: string[]
}

export const AccordionContent = component$<AccordionContentProps>(({ flush = false, isLast = false, openedPanels, id }) => {
  const internalVisible = useComputed$(() => Boolean(id && openedPanels?.includes(id)) ?? false)
  const internalFlush = useComputed$(() => flush)
  const internalIsLast = useComputed$(() => isLast)

  const { contentClasses } = useAccordionContentClasses(internalVisible, internalFlush, internalIsLast)

  return (
    <div class={contentClasses.value}>
      <Slot />
    </div>
  )
})
