import { Signal, useComputed$ } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import { DropdownSize } from '~/components/Dropdown/dropdown-types'

export function useDropdownClasses(size: Signal<DropdownSize>, inline: Signal<boolean>) {
  const dropdownModalClasses = useComputed$(() => {
    return twMerge(
      'divide-y w-full min-w-max divide-gray-100 rounded shadow focus:outline-none border border-gray-200 bg-white text-gray-900 dark:border-none dark:bg-gray-700 dark:text-white',
      size.value === 's' ? (inline.value ? 'top-7' : 'top-10') : '',
      size.value === 'm' ? (inline.value ? 'top-8' : 'top-11') : '',
      size.value === 'l' ? (inline.value ? 'top-9' : 'top-[3.25rem]') : '',
    )
  })

  const triggerInlineClasses = useComputed$(() => {
    return twMerge(
      'inline-flex gap-2 items-center',
      size.value === 's' ? 'text-sm' : '',
      size.value === 'm' ? 'text-sm' : '',
      size.value === 'l' ? 'text-base' : '',
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
