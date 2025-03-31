import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type NavbarBurgerButtonProps = PropsOf<'button'>

export const NavbarBurgerButton = component$<NavbarBurgerButtonProps>(({ class: className, onClick$, ...attrs }) => {
  return (
    <button
      onClick$={onClick$}
      class={twMerge(
        'inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-hidden focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600',
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </button>
  )
})
