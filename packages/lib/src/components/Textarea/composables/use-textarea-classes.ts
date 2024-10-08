import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

const textareaWrapperClasses = 'block w-full mb-4 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-700 dark:border-gray-600'
const textareaDefaultClasses =
  'block p-2.5 w-full text-sm text-gray-900 bg-gray-50 border border-gray-200 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
const textareaLabelClasses = 'block mb-2 text-sm font-medium text-gray-900 dark:text-white'
const textareaFooterClasses = 'block py-2 px-3 border-gray-200 dark:border-gray-600'

export function useTextareaClasses(hasFooter: Signal<boolean>) {
  const { focusClasses, focusInputClasses } = useFlowbiteThemable()

  const textareaClasses = useComputed$(() =>
    twMerge(
      textareaDefaultClasses,
      hasFooter.value ? 'rounded-t-lg bg-white border-0 dark:bg-gray-800' : 'rounded-lg border',
      focusClasses.value,
      focusInputClasses.value,
    ),
  )

  const labelClasses = useComputed$(() => textareaLabelClasses)
  const wrapperClasses = useComputed$(() => (hasFooter.value ? textareaWrapperClasses : ''))
  const footerClasses = useComputed$(() => textareaFooterClasses)

  return {
    textareaClasses,
    labelClasses,
    wrapperClasses,
    footerClasses,
  }
}
