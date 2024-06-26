import { component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { navbarContext } from '~/components/Navbar/composables/use-navbar-context'
import { useSidebarOpen } from '~/components/Sidebar'
import { IconChartBars3FromLeftSolid, IconCloseSolid } from 'flowbite-qwik-icons'

type NavbarProps = PropsOf<'nav'> & {
  withSidebar?: boolean
  menuOpen?: boolean
  fluid?: boolean
  rounded?: boolean
  border?: boolean
  sticky?: boolean
  separator?: boolean
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
    class: classNames,
    ...props
  }) => {
    useContextProvider(navbarContext, useStore({ isOpen: menuOpen }))
    const { setIsOpen, isOpen } = useSidebarOpen()

    return (
      <>
        <nav
          class={twMerge(
            'bg-white px-2 py-4 h-[4.5rem] md:h-16 dark:border-gray-700 dark:bg-gray-800 md:px-4 flex items-center',
            border && 'border',
            rounded && 'rounded',
            sticky && 'fixed top-0 z-50 w-full',
            separator && 'border-b border-gray-200 dark:border-gray-600',
            clsx(classNames),
          )}
          {...props}
        >
          <div class={twMerge('mx-auto flex flex-wrap items-center w-full justify-between', !fluid && 'container')}>
            {withSidebar && (
              <div class="lg:hidden">
                <button
                  onClick$={() => {
                    setIsOpen(!isOpen.value)
                  }}
                  type="button"
                  class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                >
                  {isOpen.value ? <IconCloseSolid class="w-5 h-5" /> : <IconChartBars3FromLeftSolid class="w-5 h-5" />}
                  <span class="sr-only">Open sidebar</span>
                </button>
              </div>
            )}

            <Slot />
          </div>
        </nav>
        {sticky && <div class="h-[4.5rem] md:h-16" />}
      </>
    )
  },
)
