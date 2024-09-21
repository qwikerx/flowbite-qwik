import { createContextId, useComputed$, useContext } from '@builder.io/qwik'
import { TableTheme } from '~/components/Table/Table'

type TableContextProps = { striped: boolean; hoverable: boolean; theme: TableTheme | undefined }
export const TableContext = createContextId<TableContextProps>('FLOWBITE_QWIK_TABLE_CONTEXT')

export function useTableContext() {
  const tableContext = useContext(TableContext)

  const striped = useComputed$(() => tableContext.striped)
  const hoverable = useComputed$(() => tableContext.hoverable)
  const theme = useComputed$(() => tableContext.theme)

  return {
    striped,
    hoverable,
    theme,
  }
}
