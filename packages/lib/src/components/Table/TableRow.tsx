import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTableContext } from '~/components/Table/composables/use-table-context'

type TableRowProps = PropsOf<'tr'>

export const TableRow = component$<TableRowProps>(({ class: className, ...attrs }) => {
  const { hoverable, striped, theme } = useTableContext()

  return (
    <tr
      class={twMerge(
        'group/row',
        striped.value && 'odd:bg-white even:bg-gray-50 odd:dark:bg-gray-800 even:dark:bg-gray-700',
        hoverable.value && 'hover:bg-gray-50 dark:hover:bg-gray-600',
        clsx(theme.value?.row),
        clsx(className),
      )}
      {...attrs}
    >
      <Slot />
    </tr>
  )
})
