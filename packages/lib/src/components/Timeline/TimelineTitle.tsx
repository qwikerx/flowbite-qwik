import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { HeadingTag } from '~/components/Heading'

type TimelineTitleProps = PropsOf<'h1'> & {
  tag?: HeadingTag
}

export const TimelineTitle = component$<TimelineTitleProps>(({ class: className, tag: Tag = 'h3', ...attrs }) => {
  return (
    <Tag class={twMerge('text-lg font-semibold text-gray-900 dark:text-white', clsx(className))} {...attrs}>
      <Slot />
    </Tag>
  )
})
