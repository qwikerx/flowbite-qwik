import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { IconProps } from 'flowbite-qwik-icons'

type KbdProps = PropsOf<'span'> & {
  icon?: Component<IconProps>
}

export const Kbd = component$<KbdProps>(({ class: className, icon: Icon, ...attrs }) => {
  return (
    <span
      class={twMerge(
        'rounded-lg border border-gray-200 bg-gray-100 px-2 py-1.5 text-xs font-semibold text-gray-800 dark:border-gray-500 dark:bg-gray-600 dark:text-gray-100',
        clsx(className),
      )}
      {...attrs}
    >
      {Icon && <Icon class="inline-block" />}
      <Slot />
    </span>
  )
})
