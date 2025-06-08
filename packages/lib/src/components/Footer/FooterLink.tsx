import { Component, PropsOf, Slot, component$ } from '@builder.io/qwik'
import type { LinkProps } from '@builder.io/qwik-city'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type FooterLinkProps = PropsOf<'a'> & {
  tag?: Component<LinkProps>
  href: string
}

export const FooterLink = component$<FooterLinkProps>(({ tag: Tag = 'a', class: className, href, ...props }) => {
  return (
    <li class={twMerge('me-4 last:mr-0 md:mr-6', clsx(className))}>
      <Tag href={href} class="hover:underline" {...props}>
        <Slot />
      </Tag>
    </li>
  )
})
