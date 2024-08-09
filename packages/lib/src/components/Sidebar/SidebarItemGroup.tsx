import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type SidebarItemGroupProps = PropsOf<'ul'> & {
  border?: boolean
  title?: string
}

export const SidebarItemGroup = component$<SidebarItemGroupProps>(({ border, class: classNames, title }) => {
  return (
    <ul class={twMerge(border ? 'mt-4 border-t border-gray-200 pt-4 dark:border-gray-700' : '', 'w-full space-y-2 font-normal', clsx(classNames))}>
      {Boolean(title) && <li class="p-2 text-sm uppercase text-gray-500 dark:text-gray-400">{title}</li>}
      <Slot />
    </ul>
  )
})
