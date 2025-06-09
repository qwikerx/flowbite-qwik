import { PropsOf, component$, Slot, useComputed$ } from '@builder.io/qwik'
import clsx from 'clsx'
import { twMerge } from 'tailwind-merge'
import { useFlowbiteThemable } from '../FlowbiteThemable'

export type PaginationButtonProps = PropsOf<'button'> & {
  active?: boolean
}

export const PaginationButton = component$<PaginationButtonProps>(({ active, class: className, ...rest }) => {
  const { themeName } = useFlowbiteThemable()

  const activeClasses = useComputed$(() => {
    const base = 'h-10 dark:border-gray-700 dark:bg-gray-700 dark:text-white'

    if (themeName.value === 'blue') {
      return `${base} bg-blue-50 text-blue-600 hover:bg-blue-100 hover:text-blue-700`
    }

    if (themeName.value === 'green') {
      return `${base} bg-green-50 text-green-600 hover:bg-green-100 hover:text-green-700`
    }

    if (themeName.value === 'pink') {
      return `${base} bg-pink-50 text-pink-600 hover:bg-pink-100 hover:text-pink-700`
    }

    if (themeName.value === 'purple') {
      return `${base} bg-purple-50 text-purple-600 hover:bg-purple-100 hover:text-purple-700`
    }

    if (themeName.value === 'red') {
      return `${base} bg-red-50 text-red-600 hover:bg-red-100 hover:text-red-700`
    }

    return base
  })

  return (
    <button
      type="button"
      class={twMerge(
        'h-10 w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white',
        active && activeClasses.value,
        clsx(className),
      )}
      {...rest}
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
