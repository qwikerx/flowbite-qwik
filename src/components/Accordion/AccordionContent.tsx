import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionContentClasses } from './composables/use-accordion-content-class'

type AccordionContentProps = {
  id?: string
  accordionId?: string
  isVisible?: boolean
  flush?: boolean
  isLast?: boolean
}

export const AccordionContent = component$<AccordionContentProps>(({ flush, isLast, isVisible }) => {
  const internalVisible = useComputed$(() => isVisible ?? false)
  const internalFlush = useComputed$(() => flush ?? false)
  const internalIsLast = useComputed$(() => isLast ?? false)

  const { contentClasses } = useAccordionContentClasses(internalVisible, internalFlush, internalIsLast)

  return (
    <div class={contentClasses.value}>
      <Slot />
    </div>
  )
})
