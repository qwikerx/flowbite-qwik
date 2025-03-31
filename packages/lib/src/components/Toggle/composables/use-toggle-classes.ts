import { Signal, useComputed$ } from '@builder.io/qwik'
import { FlowbiteTheme, useFlowbiteThemable } from '~/components/FlowbiteThemable/composables/use-flowbite-themable'
import { InputSize } from '~/components/Input/input-types'

// Toggle Background
const defaultLabelClasses = 'w-fit h-fit relative inline-flex items-center cursor-pointer'
const defaultToggleBackgroundClasses =
  'bg-gray-200 peer-focus:outline-hidden peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:border-gray-600 peer-checked:bg-blue-600'
const defaultToggleBallClasses = 'ml-3 text-sm font-medium text-gray-900 dark:text-gray-300'

const toggleSizeClasses: Record<InputSize, string> = {
  lg: 'w-14 h-7 after:top-0.5 after:left-[4px] after:h-6 after:w-6',
  md: 'w-11 h-6 after:top-[2px] after:left-[2px] after:h-5 after:w-5',
  sm: 'w-9 h-5 after:top-[2px] after:left-[2px] after:h-4 after:w-4',
}

export type FlowbiteToggleColor = FlowbiteTheme | 'yellow' | 'default' | 'teal' | 'orange'

const toggleColorClasses: Partial<Record<FlowbiteToggleColor, string>> = {
  blue: 'peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600',
  green: 'peer-focus:ring-green-300 dark:peer-focus:ring-green-800 peer-checked:bg-green-600',
  red: 'peer-focus:ring-red-300 dark:peer-focus:ring-red-800 peer-checked:bg-red-600',
  pink: 'peer-focus:ring-pink-300 dark:peer-focus:ring-pink-800 peer-checked:bg-pink-600',
  purple: 'peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 peer-checked:bg-purple-600',
  yellow: 'peer-focus:ring-yellow-300 dark:peer-focus:ring-yellow-800 peer-checked:bg-yellow-400',
  teal: 'peer-focus:ring-teal-300 dark:peer-focus:ring-teal-800 peer-checked:bg-teal-600',
  orange: 'peer-focus:ring-orange-300 dark:peer-focus:ring-orange-800 peer-checked:bg-orange-500',
}

export function useToggleClasses(size: Signal<InputSize>, color: Signal<FlowbiteToggleColor>) {
  const { themeName } = useFlowbiteThemable()

  const internalColor = useComputed$<FlowbiteToggleColor>(() => (color.value === 'default' ? themeName.value : color.value))

  const labelClasses = useComputed$(() => defaultLabelClasses)
  const toggleClasses = useComputed$(() => defaultToggleBackgroundClasses)
  const toggleSize = useComputed$(() => toggleSizeClasses[size.value])
  const toggleColor = useComputed$(() => toggleColorClasses[internalColor.value])
  const toggleBallClasses = useComputed$(() => defaultToggleBallClasses)

  return {
    labelClasses,
    toggleSize,
    toggleClasses,
    toggleColor,
    toggleBallClasses,
  }
}
