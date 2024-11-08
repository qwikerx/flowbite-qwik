import { twMerge } from 'tailwind-merge'
import { type InputSize, type ValidationStatus, validationStatusMap } from '../input-types'
import { Signal, useComputed$ } from '@builder.io/qwik'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultInputClasses =
  'bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white'
const disabledInputClasses = 'cursor-not-allowed bg-gray-100'
const inputSizeClasses: Record<InputSize, string> = {
  lg: 'p-4 text-base',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-xs',
}

const successInputClasses =
  'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorInputClasses =
  'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

export function useInputClasses(size: Signal<InputSize>, disabled: Signal<boolean>, validationStatus: Signal<ValidationStatus | undefined>) {
  const { focusClasses, focusInputClasses } = useFlowbiteThemable()

  const inputClasses = useComputed$(() => {
    const vs = validationStatus.value

    const classByStatus = vs === validationStatusMap.Success ? successInputClasses : vs === validationStatusMap.Error ? errorInputClasses : ''

    return twMerge(
      defaultInputClasses,
      classByStatus,
      inputSizeClasses[size.value],
      disabled.value ? disabledInputClasses : '',
      focusClasses.value,
      focusInputClasses.value,
    )
  })

  const labelClasses = useComputed$(() => {
    const vs = validationStatus.value
    const classByStatus =
      vs === validationStatusMap.Success
        ? 'text-green-700 dark:text-green-500'
        : vs === validationStatusMap.Error
          ? 'text-red-700 dark:text-red-500'
          : 'text-gray-900 dark:text-white'

    return twMerge(baseLabelClasses, classByStatus)
  })

  return {
    inputClasses,
    labelClasses,
  }
}
