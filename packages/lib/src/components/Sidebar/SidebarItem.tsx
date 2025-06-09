import { Component, PropsOf, component$, Slot } from '@builder.io/qwik'
import type { LinkProps } from '@builder.io/qwik-city'
import type { IconProps } from 'flowbite-qwik-icons'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useSidebarContext } from '~/components/Sidebar/composables/use-sidebar-context'

export type SidebarItemProps = PropsOf<'a'> &
  PropsOf<'button'> & {
    href?: string
    tag?: Component<LinkProps> | 'a' | 'button'
    icon?: Component<IconProps>
    isCollapse?: boolean
    isActive?: boolean
    onClick$?: () => void
  }

export const SidebarItem = component$<SidebarItemProps>((attrs) => {
  return (
    <li>
      <InnerSidebarItem {...attrs}>
        <Slot />
      </InnerSidebarItem>
    </li>
  )
})

export const InnerSidebarItem = component$<SidebarItemProps>(
  ({ tag: Tag = 'a', isActive = false, class: classNames, href, isCollapse, icon: Icon, onClick$, ...attrs }) => {
    const { theme } = useSidebarContext()

    const InternalTag = href ? Tag : 'button'

    return (
      <InternalTag
        href={href}
        {...attrs}
        class={twMerge(
          'group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          isCollapse && 'pl-11',
          clsx(theme.value?.item?.main),
          isActive && 'bg-gray-200 dark:bg-gray-600',
          isActive && clsx(theme.value?.item?.active),
          clsx(classNames),
        )}
        onClick$={onClick$}
      >
        {!!Icon && !isCollapse && (
          <Icon class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        )}
        <span class={['flex-1 text-left whitespace-nowrap', Icon ? 'ml-3' : '']}>
          <Slot />
        </span>

        <Slot name="suffix" />
      </InternalTag>
    )
  },
)
