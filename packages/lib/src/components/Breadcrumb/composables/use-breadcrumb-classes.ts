import { Signal, useComputed$ } from '@builder.io/qwik'
import clsx from 'clsx'

const breadcrumbDefaultClasses = 'inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse'
const breadcrumbWrapperVariantClasses: Record<'solid' | 'default', string> = {
  default: 'flex',
  solid: 'flex px-5 py-3 text-gray-700 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700',
}

export function useBreadcrumbClasses(solid: Signal<boolean>) {
  const breadcrumbClasses = useComputed$<string>(() => clsx(breadcrumbDefaultClasses))
  const breadcrumbWrapperClasses = useComputed$<string>(() => clsx(breadcrumbWrapperVariantClasses[solid.value ? 'solid' : 'default']))

  return {
    breadcrumbClasses,
    breadcrumbWrapperClasses,
  }
}
