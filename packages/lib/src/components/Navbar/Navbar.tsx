import { ClassList, component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { navbarContext } from '~/components/Navbar/composables/use-navbar-context'

export type NavbarTheme = {
  nav?: {
    main?: ClassList
    wrapper?: ClassList
  }
  link?: {
    main?: ClassList
    active?: ClassList
    inactive?: ClassList
    disabled?: ClassList
  }
  toggle?: ClassList
}

type NavbarProps = PropsOf<'nav'> & {
  menuOpen?: boolean
  fluid?: boolean
  rounded?: boolean
  border?: boolean
  sticky?: boolean
  separator?: boolean
  fullWidth?: boolean
  theme?: NavbarTheme
}

export const Navbar = component$<NavbarProps>(
  ({
    border = false,
    fluid = false,
    sticky = false,
    separator = false,
    menuOpen = false,
    rounded = false,
    fullWidth = false,
    class: classNames,
    theme,
    ...props
  }) => {
    useContextProvider(navbarContext, useStore({ isOpen: menuOpen, theme }))

    return (
      <>
        <nav
          class={twMerge(
            'h-16 border-gray-200 bg-white md:h-16 dark:bg-gray-900',
            border && 'border',
            rounded && 'rounded-sm',
            sticky && 'fixed top-0 z-50 w-full',
            separator && 'border-b border-gray-200 dark:border-gray-600',
            clsx(theme?.nav?.main),
            clsx(classNames),
          )}
          {...props}
        >
          <div
            class={twMerge(
              'mx-auto flex flex-wrap items-center justify-between px-4 py-3',
              !fluid && 'container',
              !fullWidth && 'max-w-(--breakpoint-xl)',
              clsx(theme?.nav?.wrapper),
            )}
          >
            <Slot name="action" />
            <Slot />
          </div>
        </nav>
        {sticky && <div class="h-16" />}
      </>
    )
  },
)
