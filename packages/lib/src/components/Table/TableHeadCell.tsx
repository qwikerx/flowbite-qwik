import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTableContext } from '~/components/Table/composables/use-table-context'

type TableHeadCellProps = PropsOf<'th'>

export const TableHeadCell = component$<TableHeadCellProps>(({ class: className, ...attrs }) => {
  const { theme } = useTableContext()

  return (
    <th
      class={twMerge(
        'bg-gray-50 px-6 py-3 first:group-first/head:rounded-tl-lg last:group-first/head:rounded-tr-lg dark:bg-gray-700',
        clsx(theme.value?.headCell),
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </th>
  )
})
