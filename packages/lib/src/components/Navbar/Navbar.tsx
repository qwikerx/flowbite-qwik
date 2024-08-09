import { component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { navbarContext } from '~/components/Navbar/composables/use-navbar-context'
import { useSidebarOpen } from '~/components/Sidebar'
import { IconChartBars3FromLeftSolid, IconCloseSolid } from 'flowbite-qwik-icons'
import { NavbarBurgerButton } from '~/components/Navbar/NavbarBurgerButton'

type NavbarProps = PropsOf<'nav'> & {
  withSidebar?: boolean
  menuOpen?: boolean
  fluid?: boolean
  rounded?: boolean
  border?: boolean
  sticky?: boolean
  separator?: boolean
  fullWidth?: boolean
}

export const Navbar = component$<NavbarProps>(
  ({
    withSidebar = false,
    border = false,
    fluid = false,
    sticky = false,
    separator = false,
    menuOpen = false,
    rounded = false,
    fullWidth = false,
    class: classNames,
    ...props
  }) => {
    useContextProvider(navbarContext, useStore({ isOpen: menuOpen }))
    const { setIsOpen, isOpen } = useSidebarOpen()

    return (
      <>
        <nav
          class={twMerge(
            'h-16 border-gray-200 bg-white md:h-16 dark:bg-gray-900',
            border && 'border',
            rounded && 'rounded',
            sticky && 'fixed top-0 z-50 w-full',
            separator && 'border-b border-gray-200 dark:border-gray-600',
            clsx(classNames),
          )}
          {...props}
        >
          <div
            class={twMerge(
              'mx-auto flex flex-wrap items-center justify-between px-4 py-3',
              !fluid && 'container',
              fullWidth ? '' : 'max-w-screen-xl',
            )}
          >
            {withSidebar && (
              <NavbarBurgerButton
                class="sm:hidden"
                onClick$={() => {
                  setIsOpen(!isOpen.value)
                }}
              >
                {isOpen.value ? <IconCloseSolid class="h-5 w-5" /> : <IconChartBars3FromLeftSolid class="h-5 w-5" />}
                <span class="sr-only">Open sidebar</span>
              </NavbarBurgerButton>
            )}

            <Slot />
          </div>
        </nav>
        {sticky && <div class="h-16" />}
      </>
    )
  },
)
