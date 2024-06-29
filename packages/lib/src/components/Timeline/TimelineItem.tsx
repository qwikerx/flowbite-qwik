import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTimelineContext } from '~/components/Timeline/composables/use-timeline-context'

type TimelineItemProps = PropsOf<'li'>

export const TimelineItem = component$<TimelineItemProps>(({ class: className, ...attrs }) => {
  const { horizontal } = useTimelineContext()

  return (
    <li class={twMerge(horizontal.value ? 'relative mb-6 sm:mb-0' : 'mb-10 ml-6', clsx(className))} {...attrs}>
      <Slot />
    </li>
  )
})
