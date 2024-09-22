import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTableContext } from '~/components/Table/composables/use-table-context'

type TableHeadProps = PropsOf<'thead'>

export const TableHead = component$<TableHeadProps>(({ class: className, ...attrs }) => {
  const { theme } = useTableContext()

  return (
    <thead class={twMerge('group/head text-xs uppercase text-gray-700 dark:text-gray-400', clsx(theme.value?.head), clsx(className))} {...attrs}>
      <tr>
        <Slot />
      </tr>
    </thead>
  )
})
