import { Component, PropsOf, component$ } from '@builder.io/qwik'
import type { IconProps } from 'flowbite-qwik-icons'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import type { LinkProps } from '@builder.io/qwik-city'

type FooterIconProps = PropsOf<'a'> &
  IconProps & {
    ariaLabel?: string
    href?: string
    tag?: Component<LinkProps> | 'a'
    icon: Component<IconProps>
  }

export const FooterIcon = component$<FooterIconProps>(({ ariaLabel, tag: Tag = 'a', class: className, href, icon: Icon, ...props }) => {
  return (
    <div>
      {href ? (
        <Tag aria-label={ariaLabel} href={href} class={twMerge('text-gray-500 dark:hover:text-white', clsx(className))} {...props}>
          <Icon class="h-5 w-5" />
        </Tag>
      ) : (
        <Icon class="h-5 w-5" {...props} />
      )}
    </div>
  )
})
