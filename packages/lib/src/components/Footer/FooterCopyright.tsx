import { Component, PropsOf, component$ } from '@builder.io/qwik'
import { LinkProps } from '@builder.io/qwik-city'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface CopyrightProps extends PropsOf<'div'> {
  by: string
  href?: string
  year?: number
  tag?: Component<LinkProps> | 'a'
}

export const FooterCopyright = component$<CopyrightProps>(({ by, tag: Tag = 'a', class: className, href, year, ...props }) => {
  const currentYear = new Date().getFullYear()
  return (
    <div class={twMerge('text-sm text-gray-500 dark:text-gray-400 sm:text-center', clsx(className))} {...props}>
      © {year ?? currentYear}
      {href ? (
        <Tag href={href} class="ml-1 hover:underline">
          {by}
        </Tag>
      ) : (
        <span class="ml-1">{by}</span>
      )}
    </div>
  )
})
