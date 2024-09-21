import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { useTableContext } from '~/components/Table/composables/use-table-context'

type TableBodyProps = PropsOf<'tbody'>

export const TableBody = component$<TableBodyProps>(({ class: className, ...attrs }) => {
  const { theme } = useTableContext()

  return (
    <tbody class={twMerge('group/body', clsx(theme.value?.body), clsx(className))} {...attrs}>
      <Slot />
    </tbody>
  )
})
