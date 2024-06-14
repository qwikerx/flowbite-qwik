import { Component, PropsOf, component$, Slot } from '@builder.io/qwik'
import { LinkProps } from '@builder.io/qwik-city'
import type { IconProps } from 'flowbite-qwik-icons'
import { useSidebarOpen } from './composables/use-open-sidebar'

type SidebarItemProps = PropsOf<'a'> &
  PropsOf<'button'> & {
    href?: string
    tag?: Component<LinkProps> | 'a' | 'button'
    icon?: Component<IconProps>
    isCollapse?: boolean
    onClick$?: () => void
  }

export const SidebarItem = component$<SidebarItemProps>(({ tag: Tag = 'a', class: classNames, href, isCollapse, icon: Icon, ...attrs }) => {
  return (
    <li>
      <InnerSidebarItem tag={Tag} class={classNames} href={href} isCollapse={isCollapse} icon={Icon} {...attrs}>
        <Slot />
      </InnerSidebarItem>
    </li>
  )
})

export const InnerSidebarItem = component$<SidebarItemProps>(
  ({ tag: Tag = 'a', class: classNames, href, isCollapse, icon: Icon, onClick$, ...attrs }) => {
    const InternalTag = href ? Tag : 'button'

    const { setIsOpen } = useSidebarOpen()

    return (
      <InternalTag
        href={href}
        {...attrs}
        class={[
          'flex w-full items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group',
          classNames,
          isCollapse ? 'pl-11' : '',
        ]}
        // @ts-expect-error
        activeClass="bg-gray-200 dark:bg-gray-600"
        onClick$={() => {
          if (href) setIsOpen(false)
          onClick$?.()
        }}
      >
        {!!Icon && !isCollapse && (
          <Icon class="w-5 h-5 text-gray-500 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white" />
        )}
        <span class={['flex-1 whitespace-nowrap text-left', Icon ? 'ml-3' : '']}>
          <Slot />
        </span>

        <Slot name="suffix" />
      </InternalTag>
    )
  },
)
