import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type FooterTitleProps = PropsOf<'h2'> & {
  as?: 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
}

export const FooterTitle = component$<FooterTitleProps>(({ as: Tag = 'h2', class: className, ...props }) => {
  return (
    <Tag class={twMerge('mb-6 text-sm font-semibold uppercase text-gray-500 dark:text-white', clsx(className))} {...props}>
      <Slot />
    </Tag>
  )
})
