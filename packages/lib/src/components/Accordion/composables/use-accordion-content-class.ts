import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'

const baseContentClasses = 'p-5 border border-gray-200 dark:border-gray-700 dark:bg-gray-900'

export function useAccordionContentClasses(isVisible: Signal<boolean>, flush: Signal<boolean>, isLastPanel: Signal<boolean>) {
  const contentClasses = useComputed$(() => {
    return twMerge(
      baseContentClasses,
      !isVisible.value && 'hidden',
      (!isLastPanel.value || flush.value) && 'border-b-0',
      isLastPanel.value && 'border-t-0',
      flush.value && 'border-x-0',
    )
  })
  return {
    contentClasses,
  }
}
