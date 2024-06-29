import { component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { TimelineContext } from '~/components/Timeline/composables/use-timeline-context'

type TimelineProps = PropsOf<'ol'> & {
  horizontal?: boolean
}

export const Timeline = component$<TimelineProps>(({ class: className, horizontal = false, ...attrs }) => {
  useContextProvider(TimelineContext, useStore({ horizontal }))

  return (
    <ol class={twMerge(horizontal ? 'sm:flex' : 'relative border-l border-gray-200 dark:border-gray-700', clsx(className))} {...attrs}>
      <Slot />
    </ol>
  )
})
