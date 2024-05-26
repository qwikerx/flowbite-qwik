import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionHeaderClasses } from './composables/use-accordion-header-class'
import { AccordionHeaderProps } from './accordion-types'

export const AccordionHeader = component$<AccordionHeaderProps>(
  ({ id, isVisible = false, flush = false, isLast = false, isFirst = false, onClick$, ...attrs }) => {
    const internalVisible = useComputed$(() => isVisible)
    const internalFlush = useComputed$(() => flush)
    const internalIsFirst = useComputed$(() => isFirst)
    const internalIsLast = useComputed$(() => isLast)

    const { arrowClasses, headerClasses } = useAccordionHeaderClasses(internalVisible, internalFlush, internalIsFirst, internalIsLast)

    return (
      <div class={attrs.class}>
        <button type="button" class={headerClasses.value} onClick$={() => id && onClick$?.(id)}>
          <span class="w-full">
            <Slot />
          </span>
          <svg class={arrowClasses.value} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
            />
          </svg>
        </button>
      </div>
    )
  },
)
