import { FunctionComponent, PropsOf, component$, useSignal, Slot } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { getChild } from '~/utils/children-inspector'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarItem } from './SidebarItem'
import { SidebarCollapse } from './SidebarCollapse'
import { useSidebarOpen } from './composables/use-open-sidebar'
import { IconCloseOutline } from 'flowbite-qwik-icons'

type SidebarProps = PropsOf<'aside'> & {
  highlight?: boolean
  closeButton?: boolean
  withNavbar?: boolean
}

const InternalSidebar = component$<SidebarProps>(({ highlight = false, withNavbar = false, closeButton = false, class: classNames, ...attrs }) => {
  const { isOpen, setIsOpen } = useSidebarOpen()
  const sidebar = useSignal<HTMLElement>()

  return (
    <>
      {isOpen.value && (
        <div
          class="bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-30"
          onClick$={() => {
            setIsOpen(false)
          }}
        />
      )}
      <aside
        ref={sidebar}
        class={twMerge(
          'left-0 w-64 h-full fixed z-40 max-w-64 transition-transform bg-white dark:bg-gray-900 border-r border-gray-100 dark:border-gray-700 sm:translate-x-0',
          isOpen.value ? 'translate-x-0' : '-translate-x-full',
          withNavbar ? 'top-16 xl:top-14 pb-14' : 'top-0',
          clsx(classNames),
        )}
        aria-label="Sidebar"
        {...attrs}
      >
        {closeButton && (
          <button
            onClick$={() => {
              setIsOpen(false)
            }}
            type="button"
            class="block sm:hidden absolute top-0 right-0 p-3 text-gray-500 hover:text-gray-600 dark:text-gray-400 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
          >
            <span class="sr-only">Close sidebar</span>
            <IconCloseOutline />
          </button>
        )}
        <nav
          class={[
            'h-full px-3 py-4 overflow-y-auto',
            {
              'bg-white dark:bg-gray-900': !highlight,
              'bg-gray-50 dark:bg-gray-800': highlight,
            },
          ]}
        >
          <Slot />
        </nav>
      </aside>
    </>
  )
})

export const Sidebar: FunctionComponent<SidebarProps> = ({ children, ...attrs }) => {
  const sidebarItemGroups = []
  getChild(children, [
    {
      component: SidebarItemGroup,
      foundComponentCallback: (child, index) => {
        child.props.border = index > 0

        sidebarItemGroups.push(child)
      },
    },
    {
      component: SidebarItem,
      foundComponentCallback: () => {
        console.warn('SidebarItem must be wrapped in SidebarItemGroup')
      },
    },

    {
      component: SidebarCollapse,
      foundComponentCallback: () => {
        console.warn('SidebarCollapse must be wrapped in SidebarItemGroup')
      },
    },
  ])

  return <InternalSidebar {...attrs}>{children}</InternalSidebar>
}
