import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type TableHeadProps = PropsOf<'thead'>

export const TableHead = component$<TableHeadProps>(({ class: className, ...attrs }) => {
  return (
    <thead class={twMerge('group/head text-xs uppercase text-gray-700 dark:text-gray-400', clsx(className))} {...attrs}>
      <tr>
        <Slot />
      </tr>
    </thead>
  )
})
