import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type TimelineTimeProps = PropsOf<'time'>

export const TimelineTime = component$<TimelineTimeProps>(({ class: className, ...attrs }) => {
  return (
    <time class={twMerge('mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500', clsx(className))} {...attrs}>
      <Slot />
    </time>
  )
})
