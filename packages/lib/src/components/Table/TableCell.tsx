import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTableContext } from '~/components/Table/composables/use-table-context'

type TableCellProps = PropsOf<'td'>

export const TableCell = component$<TableCellProps>(({ class: className, ...attrs }) => {
  const { theme } = useTableContext()

  return (
    <td
      class={twMerge(
        'px-6 py-4 first:group-first/row:group-first/body:rounded-tl-lg last:group-first/row:group-first/body:rounded-tr-lg first:group-last/row:group-last/body:rounded-bl-lg last:group-last/row:group-last/body:rounded-br-lg',
        clsx(theme.value?.cell),
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </td>
  )
})
