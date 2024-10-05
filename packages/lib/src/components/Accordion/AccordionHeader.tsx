import { component$, Slot, useComputed$ } from '@builder.io/qwik'
import { useAccordionHeaderClasses } from './composables/use-accordion-header-class'
import { AccordionHeaderProps } from './accordion-types'
import { IconAngleDownOutline } from 'flowbite-qwik-icons'
import { useAccordionContext } from '~/components/Accordion/composables/use-accordion-context'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

export const AccordionHeader = component$<AccordionHeaderProps>(
  ({ id, openedPanels, flush = false, isLast = false, isFirst = false, onClick$, ...attrs }) => {
    const { theme } = useAccordionContext()

    const internalVisible = useComputed$(() => Boolean(id && openedPanels?.includes(id)) ?? false)
    const internalFlush = useComputed$(() => flush)
    const internalIsFirst = useComputed$(() => isFirst)
    const internalIsLast = useComputed$(() => isLast)

    const { arrowClasses, headerClasses } = useAccordionHeaderClasses(internalVisible, internalFlush, internalIsFirst, internalIsLast)

    return (
      <div {...attrs}>
        <button type="button" class={twMerge(headerClasses.value, clsx(theme.value?.header?.button))} onClick$={() => id && onClick$?.(id)}>
          <span>
            <Slot />
          </span>

          <IconAngleDownOutline class={arrowClasses.value} />
        </button>
      </div>
    )
  },
)
