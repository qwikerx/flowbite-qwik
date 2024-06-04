import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionHeaderClasses } from './composables/use-accordion-header-class'
import { AccordionHeaderProps } from './accordion-types'
import { IconAngleDownOutline } from '../Icon'

export const AccordionHeader = component$<AccordionHeaderProps>(
  ({ id, openedPanels, flush = false, isLast = false, isFirst = false, onClick$, ...attrs }) => {
    const internalVisible = useComputed$(() => Boolean(id && openedPanels?.includes(id)) ?? false)
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

          <IconAngleDownOutline class={arrowClasses.value} />
        </button>
      </div>
    )
  },
)
