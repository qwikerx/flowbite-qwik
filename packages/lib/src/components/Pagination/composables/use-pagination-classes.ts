import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'

export function usePaginationClasses(showIcon: Signal<boolean>) {
  const tableSpanClasses = useComputed$(() => 'font-semibold text-gray-900 dark:text-white')
  const navigationClasses = useComputed$(() =>
    twMerge(
      'border border-gray-300 bg-white px-3 py-2 h-10 min-w-10 justify-center gap-2 items-center leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white',
      showIcon.value && 'inline-flex',
    ),
  )

  const previousNavigationClasses = useComputed$(() => {
    return twMerge(navigationClasses.value, 'ml-0 rounded-l-lg ')
  })

  const nextNavigationClasses = useComputed$(() => {
    return twMerge(navigationClasses.value, 'rounded-r-lg')
  })

  const buttonClasses = useComputed$(
    () =>
      'w-12 border border-gray-300 bg-white py-2 leading-tight text-gray-500 enabled:hover:bg-gray-100 enabled:hover:text-gray-700 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:enabled:hover:bg-gray-700 dark:enabled:hover:text-white',
  )
  const activeButtonClasses = useComputed$(
    () => 'bg-cyan-50 text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white',
  )

  const iconClasses = useComputed$(() => 'h-2.5 w-2.5 rtl:rotate-180')

  return {
    tableSpanClasses,
    previousNavigationClasses,
    nextNavigationClasses,
    buttonClasses,
    activeButtonClasses,
    iconClasses,
  }
}
