import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type BannerProps = PropsOf<'div'> & {
  sticky?: 'top' | 'bottom'
}

export const Banner = component$<BannerProps>(({ sticky, class: className, ...props }) => {
  return (
    <div
      role="banner"
      tabIndex={-1}
      class={twMerge(sticky && 'fixed z-50 w-full', sticky === 'top' && 'top-0', sticky === 'bottom' && 'bottom-0', clsx(className))}
      {...props}
    >
      <Slot />
    </div>
  )
})
