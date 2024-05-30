import { PropsOf, component$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export interface CopyrightProps extends PropsOf<'div'> {
  by: string
  href?: string
  year?: number
}

export const FooterCopyright = component$<CopyrightProps>(({ by, class: className, href, year, ...props }) => {
  const currentYear = new Date().getFullYear()
  return (
    <div class={twMerge('text-sm text-gray-500 dark:text-gray-400 sm:text-center', clsx(className))} {...props}>
      © {year ?? currentYear}
      {href ? (
        <a href={href} class="ml-1 hover:underline">
          {by}
        </a>
      ) : (
        <span data-testid="flowbite-footer-copyright-span" class="ml-1">
          {by}
        </span>
      )}
    </div>
  )
})
