import { PropsOf, component$, Slot } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'

export type PaginationButtonProps = PropsOf<'button'> & {
  active?: boolean
}

export const PaginationButton = component$<PaginationButtonProps>(({ active, class: className, ...props }) => {
  return (
    <button
      type="button"
      class={twMerge(
        active && 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 h-10 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
        clsx(className),
        'h-10',
      )}
      {...props}
    >
      <Slot />
    </button>
  )
})

export const PaginationNavigation = component$<PaginationButtonProps>(({ disabled, class: className, ...props }) => {
  return (
    <button type="button" class={twMerge(disabled && 'cursor-not-allowed opacity-50', clsx(className))} disabled={disabled} {...props}>
      <Slot />
    </button>
  )
})
