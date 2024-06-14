import { component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { navbarContext } from '~/components/Navbar/composables/use-navbar-context'

type NavbarProps = PropsOf<'nav'> & {
  menuOpen?: boolean
  fluid?: boolean
  rounded?: boolean
  border?: boolean
  sticky?: boolean
  separator?: boolean
}

export const Navbar = component$<NavbarProps>(
  ({ border = false, fluid = false, sticky = false, separator = false, menuOpen = false, rounded = false, class: classNames, ...props }) => {
    useContextProvider(navbarContext, useStore({ isOpen: menuOpen }))

    return (
      <nav
        class={twMerge(
          'bg-white px-2 py-2.5 dark:border-gray-700 dark:bg-gray-800 sm:px-4',
          border && 'border',
          rounded && 'rounded',
          sticky && 'fixed z-50 w-full',
          separator && 'border-b border-gray-200 dark:border-gray-600',
          clsx(classNames),
        )}
        {...props}
      >
        <div class={twMerge('mx-auto flex flex-wrap items-center justify-between', !fluid && 'container')}>
          <Slot />
        </div>
      </nav>
    )
  },
)
