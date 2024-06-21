import { Table as TableRoot } from './Table'
import { TableBody } from './TableBody'
import { TableCell } from './TableCell'
import { TableHead } from './TableHead'
import { TableHeadCell } from './TableHeadCell'
import { TableRow } from './TableRow'

export const Table = Object.assign(TableRoot, {
  Body: TableBody,
  Cell: TableCell,
  Head: TableHead,
  HeadCell: TableHeadCell,
  Row: TableRow,
})
