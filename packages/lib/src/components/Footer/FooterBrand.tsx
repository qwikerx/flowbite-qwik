import { Component, PropsOf, Slot, component$ } from '@builder.io/qwik'
import type { LinkProps } from '@builder.io/qwik-city'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type FooterBrandProps = PropsOf<'a'> &
  PropsOf<'img'> & {
    alt?: string
    href?: string
    name?: string
    src: string
    tag?: Component<LinkProps> | 'a'
  }

export const FooterBrand = component$<FooterBrandProps>(({ alt, tag: Tag = 'a', class: className, width, height, href, name, src, ...props }) => {
  return (
    <div>
      {href ? (
        <Tag href={href} class={twMerge('mb-4 flex items-center sm:mb-0', clsx(className))} {...props}>
          <img alt={alt} src={src} width={width} height={height} class="mr-3 h-auto max-h-8 max-w-64" />
          <span class="self-center text-2xl font-semibold whitespace-nowrap text-gray-800 dark:text-white">{name}</span>
          <Slot />
        </Tag>
      ) : (
        <img alt={alt} src={src} width={width} height={height} class={twMerge('mr-3 h-auto max-h-8 max-w-64', clsx(className))} {...props} />
      )}
    </div>
  )
})
