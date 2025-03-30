import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import { FlowbiteTheme, useFlowbiteThemable } from '~/components/FlowbiteThemable'

// LABEL
const defaultLabelClasses = 'block text-sm font-medium text-gray-900 dark:text-gray-300'

// CHECKBOX
const defaultCheckboxClasses = 'w-4 h-4 rounded-sm focus:ring-2'

const checkboxClassesByTheme: Record<FlowbiteTheme, string> = {
  blue: 'text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
  green:
    'text-green-600 bg-gray-100 border-gray-300 focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
  pink: 'text-pink-600 bg-gray-100 border-gray-300 focus:ring-pink-500 dark:focus:ring-pink-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
  purple:
    'text-purple-600 bg-gray-100 border-gray-300 focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
  red: 'text-red-600 bg-gray-100 border-gray-300 focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600',
}

export function useCheckboxClasses(color: Signal<FlowbiteTheme | undefined>) {
  const { themeName } = useFlowbiteThemable()
  const checkboxClasses = useComputed$(() => twMerge(defaultCheckboxClasses, checkboxClassesByTheme[color.value ?? themeName.value]))
  const labelClasses = useComputed$(() => defaultLabelClasses)

  return {
    checkboxClasses,
    labelClasses,
  }
}
