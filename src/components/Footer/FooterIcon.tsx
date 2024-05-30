import { Component, PropsOf, component$ } from '@builder.io/qwik'
import { IconProps } from '@qwikest/icons/*'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

type FooterIconProps = PropsOf<'a'> &
  IconProps & {
    ariaLabel?: string
    href?: string
    icon: Component<IconProps>
  }

export const FooterIcon = component$<FooterIconProps>(({ ariaLabel, class: className, href, icon: Icon, ...props }) => {
  return (
    <div>
      {href ? (
        <a
          aria-label={ariaLabel}
          data-testid="flowbite-footer-icon"
          href={href}
          class={twMerge('text-gray-500 dark:hover:text-white', clsx(className))}
          {...props}
        >
          <Icon class="h-5 w-5" />
        </a>
      ) : (
        <Icon class="h-5 w-5" {...props} />
      )}
    </div>
  )
})
