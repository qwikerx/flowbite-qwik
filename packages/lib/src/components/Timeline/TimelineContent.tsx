import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTimelineContext } from '~/components/Timeline/composables/use-timeline-context'

type TimelineContentProps = PropsOf<'div'>

export const TimelineContent = component$<TimelineContentProps>(({ class: className, ...attrs }) => {
  const { horizontal } = useTimelineContext()

  return (
    <div class={twMerge(horizontal.value && 'mt-3 sm:pr-8', clsx(className))} {...attrs}>
      <Slot />
    </div>
  )
})
