import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconProps } from 'flowbite-qwik-icons'
import { useTimelineContext } from '~/components/Timeline/composables/use-timeline-context'

type TimelinePointProps = PropsOf<'div'> & {
  icon?: Component<IconProps>
}

export const TimelinePoint = component$<TimelinePointProps>(({ class: className, icon: Icon, ...attrs }) => {
  const { horizontal } = useTimelineContext()

  return (
    <div class={twMerge(horizontal.value && 'flex items-center', clsx(className))} {...attrs}>
      <Slot />
      {Icon ? (
        <span class="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-cyan-200 ring-8 ring-white dark:bg-cyan-900 dark:ring-gray-900">
          <Icon aria-hidden class="h-3 w-3 text-cyan-600 dark:text-cyan-300" />
        </span>
      ) : (
        <div
          class={twMerge(
            horizontal.value
              ? 'absolute -left-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700'
              : 'absolute -left-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-gray-200 dark:border-gray-900 dark:bg-gray-700',
          )}
        />
      )}
      {horizontal.value && <div class="hidden h-0.5 w-full bg-gray-200 sm:flex dark:bg-gray-700" />}
    </div>
  )
})
