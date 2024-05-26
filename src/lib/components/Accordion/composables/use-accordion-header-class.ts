import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'

const baseHeaderClasses = 'flex items-center p-5 w-full font-medium text-left border border-gray-200 dark:border-gray-700'
const nonFlushHeaderClasses = 'hover:bg-gray-100 dark:hover:bg-gray-800 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800'
const baseArrowClasses = 'w-6 h-6 shrink-0'

export function useAccordionHeaderClasses(
  isVisible: Signal<boolean>,
  flush: Signal<boolean>,
  isFirstPanel: Signal<boolean>,
  isLastPanel: Signal<boolean>,
) {
  const headerClasses = useComputed$(() => {
    return twMerge(
      baseHeaderClasses,
      isVisible.value ? 'text-gray-900 dark:text-white' : 'text-gray-500 dark:text-gray-400',
      isVisible.value && !flush.value && 'bg-gray-100 dark:bg-gray-800',
      isFirstPanel.value && !flush.value && 'rounded-t-xl',
      isFirstPanel.value && flush.value && 'border-t-0',
      flush.value ? 'border-x-0' : nonFlushHeaderClasses,
      !isLastPanel.value && 'border-b-0',
    )
  })

  const arrowClasses = useComputed$(() => {
    return twMerge(baseArrowClasses, isVisible.value && 'rotate-180')
  })

  return {
    headerClasses,
    arrowClasses,
  }
}
