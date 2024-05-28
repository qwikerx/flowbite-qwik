import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionHeaderClasses } from './composables/use-accordion-header-class'
import { AccordionHeaderProps } from './accordion-types'
import { FlAngleDownOutline } from '@qwikest/icons/flowbite'

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

          <FlAngleDownOutline class={arrowClasses.value} />
        </button>
      </div>
    )
  },
)
