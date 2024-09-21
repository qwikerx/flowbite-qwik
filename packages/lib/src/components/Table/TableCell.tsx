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
        'px-6 py-4 group-first/body:group-first/row:first:rounded-tl-lg group-first/body:group-first/row:last:rounded-tr-lg group-last/body:group-last/row:first:rounded-bl-lg group-last/body:group-last/row:last:rounded-br-lg',
        clsx(theme.value?.cell),
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </td>
  )
})
