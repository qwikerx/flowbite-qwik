import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type FooterLinkGroupProps = PropsOf<'ul'> & {
  col?: boolean
}

export const FooterLinkGroup = component$<FooterLinkGroupProps>(({ class: className, col = false, ...props }) => {
  return (
    <ul class={twMerge('flex flex-wrap text-sm text-gray-500 dark:text-white', col && 'flex-col space-y-4', clsx(className))} {...props}>
      <Slot />
    </ul>
  )
})
