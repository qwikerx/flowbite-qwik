import { twMerge } from 'tailwind-merge'
import { TabsVariant } from '~/components/tabs/tabs-types'
import { Signal, useComputed$ } from '@builder.io/qwik'

export type UseTabsClassesProps = {
  variant: Signal<TabsVariant>
}

export function useTabsClasses(props: UseTabsClassesProps): {
  divClasses: Signal<string>
  ulClasses: Signal<string>
} {
  const ulClasses = useComputed$(() => {
    const baseClasses = 'flex flex-wrap font-medium text-center text-gray-500 dark:text-gray-400 text-sm'

    return twMerge(
      baseClasses,
      props.variant?.value === 'underline' && '-mb-px',
      props.variant?.value === 'default' && 'border-b border-gray-200 dark:border-gray-700',
    )
  })

  const divClasses = useComputed$(() => {
    if (props.variant?.value === 'underline') {
      return 'border-b border-gray-200 dark:border-gray-700 font-medium text-center text-gray-500 dark:text-gray-400 text-sm'
    }

    return ''
  })

  return {
    divClasses,
    ulClasses,
  }
}
