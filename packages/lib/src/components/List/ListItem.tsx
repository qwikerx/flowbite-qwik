import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconProps } from 'flowbite-qwik-icons'

type ListItemProps = PropsOf<'li'> & {
  icon?: Component<IconProps>
}

export const ListItem = component$<ListItemProps>(({ class: className, icon: Icon, ...attrs }) => {
  return (
    <li class={twMerge(Icon ? 'flex items-center' : '', clsx(className))} {...attrs}>
      {Icon && <Icon class="me-2 h-3.5 w-3.5 shrink-0" />}
      <Slot />
    </li>
  )
})
