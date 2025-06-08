import { Component, component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import type { LinkProps } from '@builder.io/qwik-city'

type NavbarBrandProps = PropsOf<'a'> & {
  tag?: Component<LinkProps> | string
}

export const NavbarBrand = component$<NavbarBrandProps>(({ tag: Component = 'a', class: classNames, ...props }) => {
  return (
    <Component class={twMerge('flex items-center space-x-3 rtl:space-x-reverse', clsx(classNames))} {...props}>
      <Slot />
    </Component>
  )
})
