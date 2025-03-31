import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { IconProps } from 'flowbite-qwik-icons'
import { LinkProps } from '@builder.io/qwik-city'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

type ListGroupItemProps = PropsOf<'a'> &
  PropsOf<'button'> & {
    active?: boolean
    disabled?: boolean
    href?: string
    tag?: Component<LinkProps> | string
    icon?: Component<IconProps>
    onClick$?: () => void
  }

export const ListGroupItem = component$<ListGroupItemProps>(
  ({ active = false, disabled = false, tag = 'a', href, icon: Icon, class: className, onClick$, ...attrs }) => {
    const { backgroundClasses, hoverClasses, focusClasses } = useFlowbiteThemable()

    const LinkComponent = tag !== 'a' ? tag : 'a'
    const Component = href ? LinkComponent : 'button'

    return (
      <li class={twMerge('first:*:rounded-t-lg last:*:rounded-b-lg last:*:border-b-0', clsx(className))}>
        <Component
          href={href}
          onClick$={onClick$}
          type={href ? undefined : 'button'}
          // @ts-expect-error a does not include disabled attr
          disabled={disabled}
          class={twMerge(
            active
              ? `${backgroundClasses.value} text-white dark:bg-gray-800`
              : `${hoverClasses.value} ${focusClasses.value} hover:bg-gray-100 focus:outline-hidden focus:ring-2 dark:border-gray-600 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:text-white dark:focus:ring-gray-500`,
            disabled
              ? 'cursor-not-allowed bg-gray-100 dark:bg-gray-600 text-gray-400 dark:text-gray-400 hover:bg-gray-100 focus:text-gray-400 dark:hover:text-gray-400'
              : '',
            'flex w-full items-center border-b border-gray-200 px-4 py-2 dark:border-gray-600',
          )}
          {...attrs}
        >
          {Icon && <Icon aria-hidden class="mr-2 h-4 w-4 fill-current" />}
          <Slot />
        </Component>
      </li>
    )
  },
)
