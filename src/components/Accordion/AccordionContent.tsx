import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionContentClasses } from './composables/use-accordion-content-class'

type AccordionContentProps = {
  accordionId?: string
  isVisible?: boolean
  flush?: boolean
  isLast?: boolean
}

export const AccordionContent = component$<AccordionContentProps>(({ flush = false, isLast = false, isVisible = false }) => {
  const internalVisible = useComputed$(() => isVisible)
  const internalFlush = useComputed$(() => flush)
  const internalIsLast = useComputed$(() => isLast)

  const { contentClasses } = useAccordionContentClasses(internalVisible, internalFlush, internalIsLast)

  return (
    <div class={contentClasses.value}>
      <Slot />
    </div>
  )
})
