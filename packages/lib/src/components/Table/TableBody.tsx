import { component$, PropsOf, Slot } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'

type TableBodyProps = PropsOf<'tbody'>

export const TableBody = component$<TableBodyProps>(({ class: className, ...attrs }) => {
  return (
    <tbody class={twMerge('group/body', clsx(className))} {...attrs}>
      <Slot />
    </tbody>
  )
})
