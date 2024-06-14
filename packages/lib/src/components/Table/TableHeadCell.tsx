import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type TableHeadCellProps = PropsOf<'th'>

export const TableHeadCell = component$<TableHeadCellProps>(({ class: className, ...attrs }) => {
  return (
    <th
      class={twMerge(
        'bg-gray-50 px-6 py-3 group-first/head:first:rounded-tl-lg group-first/head:last:rounded-tr-lg dark:bg-gray-700',
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </th>
  )
})
