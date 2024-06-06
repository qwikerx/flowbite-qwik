import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import { ToastAlign, ToastType } from '../toast-type'
import { useFlowbiteThemable } from '~/components/FlowbiteThemable'

type UseToastClassesProps = {
  type: Signal<ToastType>
  divide: Signal<boolean>
  alignment: Signal<ToastAlign>
}

const typeClassesMap: Record<ToastType, string> = {
  danger: 'text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200',
  empty: '',
  success: 'text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200',
  warning: 'text-orange-500 bg-orange-100 dark:bg-orange-700 dark:text-orange-200',
}

const wrapperAlignmentClasses: Record<ToastAlign, string> = {
  center: 'items-center',
  end: 'items-end',
  start: 'items-start',
}
const defaultWrapperClasses = 'flex w-full max-w-xs p-4 text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800'

const defaultContentClasses = 'text-sm font-normal'

export function useToastClasses(props: UseToastClassesProps) {
  const { backgroundClasses, textClasses } = useFlowbiteThemable()
  const typeClasses = useComputed$(() => typeClassesMap[props.type.value])

  const wrapperClasses = useComputed$(() => {
    const alignmentClass = wrapperAlignmentClasses[props.alignment.value]
    if (props.divide.value) {
      return twMerge(defaultWrapperClasses, 'dark:divide-gray-700 divide-x divide-gray-200', alignmentClass)
    }

    return twMerge(defaultWrapperClasses, alignmentClass)
  })

  const iconClasses = useComputed$(() => {
    return twMerge(
      'inline-flex flex-shrink-0 justify-center items-center w-8 h-8 rounded-lg',
      backgroundClasses.value,
      textClasses.value,
      typeClasses.value,
    )
  })

  const contentClasses = useComputed$(() => {
    if (props.type.value !== 'empty' && props.divide.value) {
      return twMerge(defaultContentClasses, 'pl-3')
    }

    return defaultContentClasses
  })

  return {
    typeClasses,
    wrapperClasses,
    contentClasses,
    iconClasses,
  }
}
