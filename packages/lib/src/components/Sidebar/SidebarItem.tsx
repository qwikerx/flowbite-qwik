import { Component, PropsOf, component$, Slot, ClassList } from '@builder.io/qwik'
import { LinkProps } from '@builder.io/qwik-city'
import type { IconProps } from 'flowbite-qwik-icons'
import { useSidebarOpen } from './composables/use-open-sidebar'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type SidebarItemProps = PropsOf<'a'> &
  PropsOf<'button'> & {
    href?: string
    tag?: Component<LinkProps> | 'a' | 'button'
    icon?: Component<IconProps>
    isCollapse?: boolean
    onClick$?: () => void
    activeClass?: ClassList
  }

export const SidebarItem = component$<SidebarItemProps>(
  ({ tag: Tag = 'a', class: classNames, activeClass, href, isCollapse, icon: Icon, ...attrs }) => {
    return (
      <li>
        <InnerSidebarItem tag={Tag} class={classNames} activeClass={activeClass} href={href} isCollapse={isCollapse} icon={Icon} {...attrs}>
          <Slot />
        </InnerSidebarItem>
      </li>
    )
  },
)

export const InnerSidebarItem = component$<SidebarItemProps>(
  ({ tag: Tag = 'a', class: classNames, activeClass, href, isCollapse, icon: Icon, onClick$, ...attrs }) => {
    const InternalTag = href ? Tag : 'button'

    const { setIsOpen } = useSidebarOpen()

    return (
      <InternalTag
        href={href}
        {...attrs}
        class={twMerge(
          'group flex w-full items-center rounded-lg p-2 text-gray-900 hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700',
          isCollapse ? 'pl-11' : '',
          clsx(classNames),
        )}
        // @ts-expect-error fine
        activeClass={twMerge('bg-gray-200 dark:bg-gray-600', clsx(activeClass))}
        onClick$={() => {
          if (href) setIsOpen(false)
          onClick$?.()
        }}
      >
        {!!Icon && !isCollapse && (
          <Icon class="h-5 w-5 text-gray-500 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white" />
        )}
        <span class={['flex-1 whitespace-nowrap text-left', Icon ? 'ml-3' : '']}>
          <Slot />
        </span>

        <Slot name="suffix" />
      </InternalTag>
    )
  },
)
