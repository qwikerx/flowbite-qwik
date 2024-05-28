import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'

export function useDropdownClasses(size: Signal<DropdownSize>) {
  const dropdownModalClasses = useComputed$(() => {
    return twMerge(
      'w-full z-10 absolute left-0 divide-y divide-gray-100 rounded shadow focus:outline-none transition-opacity duration-100 border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
      size.value === 's' ? 'top-10' : '',
      size.value === 'm' ? 'top-11' : '',
      size.value === 'l' ? 'top-[3.25rem]' : '',
    )
  })

  const triggerInlineClasses = useComputed$(() => {
    return twMerge(
      'inline-flex gap-2 items-center',
      size.value === 's' ? 'text-sm px-3 py-1.5' : '',
      size.value === 'm' ? 'text-sm px-4 py-2' : '',
      size.value === 'l' ? 'text-base px-5 py-2.5' : '',
    )
  })

  const dropdownItemClasses = useComputed$(
    () =>
      'flex w-full cursor-pointer items-center justify-start px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 focus:bg-gray-100 focus:outline-none dark:text-gray-200 dark:hover:bg-gray-600 dark:hover:text-white dark:focus:bg-gray-600 dark:focus:text-white',
  )

  const dropdownDividerClasses = useComputed$(() => 'my-1 h-px bg-gray-100 dark:bg-gray-600')

  const dropdownHeaderContainerClasses = useComputed$(() => 'px-4 py-2 text-sm text-gray-700 dark:text-gray-200')

  const dropdownHeaderSeparatorClasses = useComputed$(() => 'my-1 h-px bg-gray-100 dark:bg-gray-600')

  return {
    dropdownModalClasses,
    dropdownHeaderContainerClasses,
    dropdownHeaderSeparatorClasses,
    dropdownItemClasses,
    triggerInlineClasses,
    dropdownDividerClasses,
  }
}
