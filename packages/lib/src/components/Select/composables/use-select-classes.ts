import { twMerge } from 'tailwind-merge'
import { Signal, useComputed$ } from '@builder.io/qwik'
import { InputSize, ValidationStatus, validationStatusMap } from '~/index'

// LABEL
const baseLabelClasses = 'block mb-2 text-sm font-medium'

// INPUT
const defaultSelectClasses =
  'w-full text-gray-900 bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500'
const disabledSelectClasses = 'cursor-not-allowed bg-gray-100'
const underlineSelectClasses =
  'bg-transparent dark:bg-transparent border-0 border-b-2 border-gray-200 appearance-none dark:border-gray-700 focus:outline-none focus:ring-0 focus:border-gray-200 peer'
const selectSizeClasses: Record<InputSize, string> = {
  lg: 'p-4',
  md: 'p-2.5 text-sm',
  sm: 'p-2 text-sm',
}

const successInputClasses =
  'bg-green-50 border-green-500 dark:border-green-500 text-green-900 dark:text-green-400 placeholder-green-700 dark:placeholder-green-500 focus:ring-green-500 focus:border-green-500'
const errorInputClasses =
  'bg-red-50 border-red-500 text-red-900 placeholder-red-700 focus:ring-red-500 focus:border-red-500 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500'

export type UseSelectClassesProps = {
  sizing: Signal<InputSize>
  disabled: Signal<boolean>
  underline: Signal<boolean>
  validationStatus: Signal<ValidationStatus | undefined>
}

export function useSelectClasses(props: UseSelectClassesProps): {
  selectClasses: Signal<string>
  labelClasses: Signal<string>
  validationWrapperClasses: Signal<string>
} {
  const selectClasses = useComputed$(() => {
    const vs = props.validationStatus.value

    const classByStatus = vs === validationStatusMap.Success ? successInputClasses : vs === validationStatusMap.Error ? errorInputClasses : ''

    const underlineByStatus =
      vs === validationStatusMap.Success ? 'focus:border-green-500' : vs === validationStatusMap.Error ? 'focus:border-red-500' : ''

    return twMerge(
      defaultSelectClasses,
      classByStatus,
      selectSizeClasses[props.sizing.value],
      props.disabled.value && disabledSelectClasses,
      props.underline.value ? underlineSelectClasses : 'border border-gray-300 rounded-lg',
      props.underline.value && underlineByStatus,
    )
  })

  const labelClasses = useComputed$(() => {
    const vs = props.validationStatus.value
    const classByStatus =
      vs === validationStatusMap.Success
        ? 'text-green-700 dark:text-green-500'
        : vs === validationStatusMap.Error
          ? 'text-red-700 dark:text-red-500'
          : 'text-gray-900 dark:text-white'

    return twMerge(baseLabelClasses, classByStatus)
  })

  const validationWrapperClasses = useComputed$(() =>
    twMerge(
      'mt-2 text-sm',
      props.validationStatus.value === validationStatusMap.Success ? 'text-green-600 dark:text-green-500' : '',
      props.validationStatus.value === validationStatusMap.Error ? 'text-red-600 dark:text-red-500' : '',
    ),
  )

  return {
    selectClasses,
    labelClasses,
    validationWrapperClasses,
  }
}
