import { FunctionComponent, PropsOf, component$, useSignal, Slot, ClassList, useContextProvider, useStore, Signal } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { getChild } from '~/utils/children-inspector'
import { SidebarItemGroup } from './SidebarItemGroup'
import { SidebarItem } from './SidebarItem'
import { SidebarCollapse } from './SidebarCollapse'
import { sidebarContext, useSidebarContext } from './composables/use-sidebar-context'

export type SidebarTheme = {
  aside?: ClassList
  nav?: ClassList
  collapse?: {
    main?: ClassList
    itemGroup?: ClassList
    icon?: ClassList
  }
  item?: {
    main?: ClassList
    active?: ClassList
  }
}

type SidebarProps = PropsOf<'aside'> & {
  highlight?: boolean
  collapsed?: Signal<boolean>
  theme?: SidebarTheme
}

const InternalSidebar = component$<SidebarProps>(({ theme, ...attrs }) => {
  useContextProvider(sidebarContext, useStore({ theme }))

  return (
    <InternalSidebarDeep {...attrs}>
      <Slot />
    </InternalSidebarDeep>
  )
})

const InternalSidebarDeep = component$<SidebarProps>(({ highlight = false, collapsed = useSignal(false), class: classNames, ...attrs }) => {
  const { theme } = useSidebarContext()

  const sidebar = useSignal<HTMLElement>()

  return (
    <>
      {collapsed.value && (
        <div
          class="fixed inset-0 z-30 bg-gray-900/50 dark:bg-gray-900/80"
          onClick$={() => {
            collapsed.value = false
          }}
        />
      )}
      <aside
        ref={sidebar}
        class={twMerge(
          'fixed left-0 top-0 z-40 h-screen w-full max-w-64 border-r border-gray-200 bg-white transition-transform sm:translate-x-0 dark:border-gray-700 dark:bg-gray-800',
          collapsed.value ? 'translate-x-0' : '-translate-x-full',
          clsx(classNames),
          clsx(theme.value?.aside),
        )}
        aria-label="Sidebar"
        {...attrs}
      >
        <Slot name="closeButton" />
        <nav
          class={twMerge(
            'h-full overflow-y-auto px-3 py-4',
            highlight ? 'bg-gray-50 dark:bg-gray-800' : 'bg-white dark:bg-gray-900',
            clsx(theme.value?.nav),
          )}
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
