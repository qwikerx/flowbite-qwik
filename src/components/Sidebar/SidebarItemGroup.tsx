import { PropsOf, Slot, component$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type SidebarItemGroupProps = PropsOf<'ul'> & {
  border?: boolean
  title?: string
}

export const SidebarItemGroup = component$<SidebarItemGroupProps>(({ border, class: classNames, title }) => {
  return (
    <ul class={twMerge([border ? 'pt-4 mt-4 border-t border-gray-200 dark:border-gray-700' : '', clsx(classNames), 'space-y-2 w-full font-normal'])}>
      {Boolean(title) && <li class="text-sm p-2 text-gray-500 dark:text-gray-400 uppercase">{title}</li>}
      <Slot />
    </ul>
  )
})
