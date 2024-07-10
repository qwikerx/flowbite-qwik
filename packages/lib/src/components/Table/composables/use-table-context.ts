import { createContextId, useComputed$, useContext } from '@builder.io/qwik'

type TableContextProps = { striped: boolean; hoverable: boolean }
export const TableContext = createContextId<TableContextProps>('FLOWBITE_QWIK_TABLE_CONTEXT')

export function useTableContext() {
  const tableContext = useContext(TableContext)

  const striped = useComputed$(() => tableContext.striped)
  const hoverable = useComputed$(() => tableContext.hoverable)

  return {
    striped,
    hoverable,
  }
}
