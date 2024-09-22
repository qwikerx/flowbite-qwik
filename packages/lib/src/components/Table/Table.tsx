import { ClassList, component$, PropsOf, Slot, useContextProvider, useStore } from '@builder.io/qwik'
import { twMerge } from 'tailwind-merge'
import clsx from 'clsx'
import { TableContext } from '~/components/Table/composables/use-table-context'

export type TableTheme = {
  root?: ClassList
  body?: ClassList
  cell?: ClassList
  head?: ClassList
  headCell?: ClassList
  row?: ClassList
}

export type TableProps = PropsOf<'table'> & {
  striped?: boolean
  hoverable?: boolean
  theme?: TableTheme
}

export const Table = component$<TableProps>(({ class: className, striped = false, hoverable = false, theme, ...attrs }) => {
  useContextProvider(TableContext, useStore({ striped, hoverable, theme }))

  return (
    <div class="relative">
      <div class={twMerge('absolute left-0 top-0 -z-10 h-full w-full rounded-lg bg-white drop-shadow-md dark:bg-black', clsx(className))}></div>
      <table class={twMerge('w-full text-left text-sm text-gray-500 dark:text-gray-400', clsx(theme?.root), clsx(className))} {...attrs}>
        <Slot />
      </table>
    </div>
  )
})
