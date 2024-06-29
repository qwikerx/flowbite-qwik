import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type TimelineBodyProps = PropsOf<'p'>

export const TimelineBody = component$<TimelineBodyProps>(({ class: className, ...attrs }) => {
  return (
    <div class={twMerge('mb-4 text-base font-normal text-gray-500 dark:text-gray-400', clsx(className))} {...attrs}>
      <Slot />
    </div>
  )
})
