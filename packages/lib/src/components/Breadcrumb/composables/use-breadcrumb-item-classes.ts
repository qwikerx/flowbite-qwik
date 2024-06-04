import { Signal, useComputed$ } from '@builder.io/qwik'
import clsx from 'clsx'

const breadcrumbItemDefaultClasses = 'ms-1 inline-flex items-center text-sm font-medium dark:text-gray-400'
const breadcrumbItemLinkClasses = 'text-gray-700 hover:text-gray-900 dark:hover:text-white'
const breadcrumbSpanClasses = 'text-gray-500'

export function useBreadcrumbItemClasses(href: Signal<string | undefined>) {
  const breadcrumbItemClasses = useComputed$<string>(() =>
    clsx(breadcrumbItemDefaultClasses, href.value ? breadcrumbItemLinkClasses : breadcrumbSpanClasses),
  )

  return {
    breadcrumbItemClasses,
  }
}
